import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const data = await req.json();

    const emailContent = `
      FirstArb Contact Form Enquiry

      Contact Information:
      - Name: ${data.name}
      - Email: ${data.email}
      - Phone: ${data.phone}
      
      Service Required: ${data.service}

      Sent on: ${new Date().toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' })}
      
      Message:
      ${data.message}
    `;

    await resend.emails.send({
      from: 'FirstArb Contact Form <noreply@firstarbmail.online>',
      to: 'trees@firstarb.co.uk',
      replyTo: data.email,
      subject: 'FirstArb Contact Form Enquiry',
      text: emailContent,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return Response.json({ error: 'Failed to send email' }, { status: 500 });
  }
}