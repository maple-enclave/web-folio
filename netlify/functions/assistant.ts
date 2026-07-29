import type { Handler } from '@netlify/functions';
import { GoogleGenAI } from '@google/genai';

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { question, userType } = JSON.parse(event.body || '{}');
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return {
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
          answer: `Pratik Deshmukh is a Senior Technical Lead & Architect with 14+ years of experience specializing in zero-defect Data Migrations, ETL Pipelines, and Agentic AI workflows.`
        })
      };
    }

    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        {
          role: 'user',
          parts: [{ text: `You are Pratik Deshmukh's official AI Webfolio Assistant. Answering for a ${userType || 'Visitor'}: ${question}` }]
        }
      ]
    });

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        answer: response.text || `Pratik Deshmukh brings 14+ years of enterprise data leadership.`
      })
    };
  } catch (err) {
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        answer: `Pratik Deshmukh is a Senior Technical Lead with 14+ years in ETL, Insurance Domain migrations, and Agentic AI workflows.`
      })
    };
  }
};
