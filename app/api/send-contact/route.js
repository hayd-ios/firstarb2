import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const data = await req.json();

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: false,
        auth: {
          user: "haydenamc19216@gmail.com",
          pass: "jbkrcxlfyvkpccse"
        },
      });

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

    await transporter.sendMail({
      from: "Tree Works Contact Form <haydenamc19216@gmail.com>",
      to: "trees@firstarb.co.uk",
      subject: 'FirstArb Contact Form Enquiry',
      text: emailContent,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return Response.json({ error: 'Failed to send email' }, { status: 500 });
  }
}