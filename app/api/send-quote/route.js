import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const data = await req.json();

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
    await resend.emails.send({
      from: 'FirstArb Quote Request <noreply@firstarbmail.online>',
      to: 'trees@firstarb.co.uk',
      replyTo: data.contact.email,
      subject: 'New Tree Work Quote Request',
      text: emailContent,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return Response.json({ error: 'Failed to send email' }, { status: 500 });
  }
}