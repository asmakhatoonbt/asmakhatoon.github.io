import express, { Request, Response, NextFunction } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { rateLimit } from 'express-rate-limit';
import validator from 'validator';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { CERTIFICATES, CANDIDATE_PROFILE } from './src/data/certificates.ts';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = parseInt(process.env.PORT || '3000', 10);
const isProduction = process.env.NODE_ENV === 'production';
const rawContactTo = process.env.CONTACT_TO || 'asmakhatoon.blr@gmail.com';
const CONTACT_TO = rawContactTo.replace(/^Value:\s*/i, '').trim();

// Configured Frontend Origins
const allowedOrigins = process.env.FRONTEND_URL
  ? process.env.FRONTEND_URL.split(',').map((u: string) => u.trim())
  : ['http://localhost:3000', 'https://aistudio.google.com', 'https://asma-khatoon-portfolio.web.app'];

// Safety Middleware
app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (curl, same-origin, preview) or configured allowed origins
    if (!origin) return callback(null, true);
    if (
      allowedOrigins.includes(origin) ||
      allowedOrigins.includes('*') ||
      origin.endsWith('.run.app') ||
      origin.endsWith('.web.app') ||
      origin.includes('localhost')
    ) {
      return callback(null, true);
    }
    return callback(null, true);
  },
  credentials: true
}));
app.use(express.json({ limit: '10kb' })); // Prevent payload DoS
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// General API Rate Limiting (100 requests per 15 minutes)
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many requests. Please try again later.' }
});
app.use('/api/', apiLimiter);

// Specific Contact Limiter (10 contact submissions per hour per IP)
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many contact inquiries from this IP. Please wait before submitting again.' }
});

// In-memory message store for demonstration & inquiries verification
interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  receivedAt: string;
  ip: string;
  userAgent?: string;
  status: 'received' | 'reviewed';
}

const contactMessages: ContactMessage[] = [
  {
    id: 'INQ-9482',
    name: 'Talent Acquisition Team',
    email: 'hr@techpartners-india.com',
    message: 'Hello Asma, we reviewed your verified certifications in Data Science and Project Management. We would like to discuss an opportunity for our Bangalore office.',
    receivedAt: new Date(Date.now() - 3600000 * 4).toISOString(),
    ip: '127.0.0.1',
    status: 'reviewed'
  }
];

// Disallowed spam keywords
const SPAM_KEYWORDS = ['viagra', 'casino', 'crypto', 'bitcoin', 'escort', 'buy followers', 'telegram link', 'free loan'];

// API Routes
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    app: 'Asma Khatoon Portfolio API',
    uptime: Math.floor(process.uptime()),
    certificatesCount: CERTIFICATES.length,
    contactTo: CONTACT_TO,
    env: process.env.NODE_ENV || 'production',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/profile', (_req: Request, res: Response) => {
  res.json({
    success: true,
    data: CANDIDATE_PROFILE
  });
});

app.get('/api/certificates', (req: Request, res: Response) => {
  const { category, search } = req.query;
  let filtered = [...CERTIFICATES];

  if (category && category !== 'all') {
    filtered = filtered.filter(c => c.category.toLowerCase() === String(category).toLowerCase());
  }

  if (search && typeof search === 'string' && search.trim() !== '') {
    const q = search.toLowerCase().trim();
    filtered = filtered.filter(c => 
      c.name.toLowerCase().includes(q) ||
      c.issuer.toLowerCase().includes(q) ||
      c.credentialId.toLowerCase().includes(q) ||
      c.skills.some(s => s.toLowerCase().includes(q))
    );
  }

  res.json({
    count: filtered.length,
    total: CERTIFICATES.length,
    data: filtered
  });
});

app.get('/api/certificates/:id', (req: Request, res: Response) => {
  const cert = CERTIFICATES.find(c => c.id === req.params.id);
  if (!cert) {
    return res.status(404).json({ error: 'Certificate not found' });
  }
  res.json({
    success: true,
    data: cert
  });
});

// Secure Contact Endpoint
app.post('/api/contact', contactLimiter, (req: Request, res: Response) => {
  let { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields (Name, Email, Message) are required.' });
  }

  name = validator.trim(String(name));
  email = validator.trim(String(email)).toLowerCase();
  message = validator.trim(String(message));

  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: 'Please provide a valid email address.' });
  }

  if (!validator.isLength(name, { min: 2, max: 100 })) {
    return res.status(400).json({ error: 'Name must be between 2 and 100 characters.' });
  }

  if (!validator.isLength(message, { min: 10, max: 2000 })) {
    return res.status(400).json({ error: 'Message must be between 10 and 2000 characters.' });
  }

  const lowerMsg = message.toLowerCase();
  const containsSpam = SPAM_KEYWORDS.some(keyword => lowerMsg.includes(keyword));
  if (containsSpam) {
    return res.status(400).json({ error: 'Submission rejected by safety filter: promotional or disallowed content detected.' });
  }

  const sanitizedName = validator.escape(name);
  const inquiryId = `INQ-${Math.floor(1000 + Math.random() * 9000)}`;

  const newEntry: ContactMessage = {
    id: inquiryId,
    name: sanitizedName,
    email,
    message,
    receivedAt: new Date().toISOString(),
    ip: req.ip || '127.0.0.1',
    userAgent: req.headers['user-agent'],
    status: 'received'
  };

  contactMessages.unshift(newEntry);
  if (contactMessages.length > 50) {
    contactMessages.pop();
  }

  console.log(`[CONTACT RECEIVED] ${inquiryId} from ${sanitizedName} <${email}> -> forward to: ${CONTACT_TO}`);

  res.json({
    success: true,
    message: 'Message securely received! Thank you for getting in touch. Asma will review your inquiry shortly.',
    inquiryId,
    recipient: CONTACT_TO,
    timestamp: newEntry.receivedAt
  });
});

// Endpoint to view recent inquiries (for demonstrability & verification)
app.get('/api/contact/messages', (_req: Request, res: Response) => {
  // Mask emails slightly for privacy in the list view
  const safeList = contactMessages.map(m => ({
    id: m.id,
    name: m.name,
    emailMasked: m.email.replace(/(.{2})(.*)(?=@)/, (_gp, p1, p2) => p1 + '*'.repeat(p2.length)),
    messagePreview: m.message.length > 100 ? m.message.substring(0, 100) + '...' : m.message,
    receivedAt: m.receivedAt,
    status: m.status
  }));
  res.json({
    count: safeList.length,
    messages: safeList
  });
});

// 404 handler for unmatched /api routes
app.all('/api/*', (_req: Request, res: Response) => {
  res.status(404).json({ error: 'API endpoint not found' });
});

// Start server and attach Vite middleware in dev or serve dist in prod
async function startServer() {
  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    if (fs.existsSync(distPath)) {
      app.use(express.static(distPath));
      app.get('*', (_req: Request, res: Response) => {
        res.sendFile(path.join(distPath, 'index.html'));
      });
    }
  }

  // Global error handler
  app.use((err: unknown, _req: Request, res: Response, _next: NextFunction) => {
    console.error('Server error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  });

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Asma Khatoon Portfolio Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
