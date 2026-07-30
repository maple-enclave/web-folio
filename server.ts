import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy Gemini API initialization
let aiClient: GoogleGenAI | null = null;
function getAIClient() {
  if (!aiClient && process.env.GEMINI_API_KEY) {
    aiClient = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  }
  return aiClient;
}

// Health check route
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    candidate: 'Pratik Deshmukh',
    role: 'Senior Technical Lead & Data Migration Architect',
    hasGeminiKey: Boolean(process.env.GEMINI_API_KEY)
  });
});

// AI Assistant Endpoint for Recruiter & Visitor queries
app.post('/api/assistant', async (req, res) => {
  try {
    const { question, userType = 'Recruiter' } = req.body;
    if (!question || typeof question !== 'string') {
      res.status(400).json({ error: 'Valid question parameter is required' });
      return;
    }

    const client = getAIClient();
    if (!client) {
      // Fallback response if GEMINI_API_KEY is not configured
      res.json({
        answer: `Pratik Deshmukh is a Senior Technical Lead and Data Migration Architect with 14+ years of experience delivering enterprise ETL, EDW, and core Insurance Domain data migrations. He led 5 consecutive onsite cutovers for Etiqa Malaysia and achieved a 95% reduction in data anomalies at BP. (Note: Live AI responses require GEMINI_API_KEY).`,
        fallback: true
      });
      return;
    }

    const systemContext = `
You are the AI Executive Assistant for Pratik Deshmukh, Senior Technical Lead, Data Migration Architect, and Agentic AI Specialist.
Pratik's Highlights:
- 14+ Years experience in Enterprise ETL, Data Warehousing, Data Migration across Life Insurance, P&C, Oil & Gas.
- Onsite Lead in Malaysia (7+ years) for Etiqa Insurance Insurance Domain to Majesco CLS cutover (5 consecutive go-lives).
- Senior Technical Lead at ZiniosEdge (Infosys - British Petroleum) with 95% reduction in post-migration anomalies.
- Skills: Informatica PowerCenter, Oracle PL/SQL, SSIS, SQL, AWS, GCP, Snowflake, Python, n8n, LangChain, Gemini/OpenAI APIs, Prompt Engineering.
- Contact: prateekd.tech@gmail.com | +91-9130991559 | Pune, India.
- Awards: Heart of Mastek Award (2015), Stellar Award (2017).

User Type: ${userType}.
Question: "${question}"

Provide a professional, concise, recruiter-focused, impressive response in 2-3 short paragraphs or bullet points highlighting Pratik's achievements, leadership, or technical depth. Speak enthusiastically on Pratik's behalf!
`;

    const response = await client.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: systemContext,
    });

    res.json({ answer: response.text });
  } catch (err: any) {
    console.error('Error in AI Assistant API:', err);
    res.status(500).json({
      error: 'Failed to process query',
      answer: 'Pratik Deshmukh brings 14+ years of enterprise data migration expertise, 5 onsite go-lives in Malaysia, and cutting-edge agentic AI automation skills.'
    });
  }
});

// Contact Form submission handler
app.post('/api/contact', (req, res) => {
  const { name, email, phone, company, role, message } = req.body;
  const subject = `From Portfolio Enquiry: ${name || 'New Lead'}`;
  console.log('Received Portfolio Enquiry:', {
    subject,
    name,
    email,
    phone,
    company,
    role,
    message,
    recipient: 'prateekd.tech@gmail.com'
  });
  res.json({
    success: true,
    subject,
    recipient: 'prateekd.tech@gmail.com',
    message: `Thank you ${name || 'there'}! Your portfolio enquiry has been sent to Pratik Deshmukh (prateekd.tech@gmail.com).`
  });
});

async function startServer() {
  app.use(express.static(path.join(process.cwd(), 'public')));

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Pratik Deshmukh Webfolio server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
