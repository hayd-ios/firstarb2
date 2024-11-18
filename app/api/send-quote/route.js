import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const data = await req.json();

    // Create transporter using your email settings
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      secure: false,
      auth: {
        user: "haydenamc19216@gmail.com",
        pass: "jbkrcxlfyvkpccse"
      },
    });

    // Format the email content
    const emailContent = `
      New Quote Request

      Service: ${data.service}

      Details:
      - Number of Trees: ${data.details.treeCount}
      - Tree Height: ${data.details.treeHeight}
      - Access: ${data.details.access}
      - Urgency: ${data.details.urgency}

      Location:
      - Address: ${data.location.address}
      - Postcode: ${data.location.postcode}
      - Property Type: ${data.location.propertyType}

      Contact Information:
      - Name: ${data.contact.name}
      - Email: ${data.contact.email}
      - Phone: ${data.contact.phone}
      - Preferred Contact: ${data.contact.preferredContact}
      
      Additional Notes:
      ${data.contact.notes}
    `;

    // Send email
    await transporter.sendMail({
      from: "Tree Works Quote Request <haydenamc19216@gmail.com>",
      to: "trees@firstarb.co.uk",
      subject: 'New Tree Work Quote Request',
      text: emailContent,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return Response.json({ error: 'Failed to send email' }, { status: 500 });
  }
}