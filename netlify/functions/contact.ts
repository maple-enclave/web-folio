import type { Handler } from '@netlify/functions';

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const data = JSON.parse(event.body || '{}');
    const { name, email, phone, company, role, message } = data;
    const subject = `From Portfolio Enquiry: ${name || 'New Lead'}`;

    console.log('Received Netlify Contact Enquiry:', {
      subject,
      name,
      email,
      phone,
      company,
      role,
      message,
      recipient: 'prateekd.tech@gmail.com'
    });

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        success: true,
        subject,
        recipient: 'prateekd.tech@gmail.com',
        message: `Thank you ${name || 'there'}! Your portfolio enquiry has been sent to Pratik Deshmukh (prateekd.tech@gmail.com).`
      })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to process request' })
    };
  }
};
