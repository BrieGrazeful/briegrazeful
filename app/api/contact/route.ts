import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const {
    name,
    email,
    phone,
    eventDate,
    startTime,
    startPeriod,
    endTime,
    endPeriod,
    location,
    eventSetting,
    eventType,
    guestCount,
    budget,
    services,
    message,
  } = await req.json();

  try {
    const result = await resend.emails.send({
      from: "admin@briegrazefulnj.com",
      to: "Events@briegrazefulnj.com",
      subject: `New ${eventType || "Event"} Inquiry`,
      html: `
        <div style="
          font-family: Arial, sans-serif;
          padding: 20px;
          color: #444;
        ">
          <h1 style="
            font-size: 28px;
            margin-bottom: 30px;
            color: #222;
          ">
            New Event Inquiry
          </h1>

          <div style="margin-bottom: 20px;">
            <strong>Client Name:</strong>
            <p>${name}</p>
          </div>

          <div style="margin-bottom: 20px;">
            <strong>Email:</strong>
            <p>${email}</p>
          </div>

          <div style="margin-bottom: 20px;">
            <strong>Phone:</strong>
            <p>${phone}</p>
          </div>

          <div style="margin-bottom: 20px;">
            <strong>Event Type:</strong>
            <p>${eventType || "Not specified"}</p>
          </div>

          <div style="margin-bottom: 20px;">
            <strong>Event Date:</strong>
            <p>${eventDate}</p>
          </div>

          <div style="margin-bottom: 20px;">
            <strong>Event Time:</strong>
            <p>
              ${startTime || "N/A"} ${startPeriod || ""} - ${endTime || "N/A"} ${endPeriod || ""}
            </p>
          </div>

          <div style="margin-bottom: 20px;">
            <strong>Event Location:</strong>
            <p>${location}</p>
          </div>

          <div style="margin-bottom: 20px;">
            <strong>Indoor or Outdoor:</strong>
            <p>${eventSetting || "Not specified"}</p>
          </div>

          <div style="margin-bottom: 20px;">
            <strong>Estimated Guest Count:</strong>
            <p>${guestCount}</p>
          </div>

          <div style="margin-bottom: 20px;">
            <strong>Estimated Budget:</strong>
            <p>${budget || "Not provided"}</p>
          </div>

          <div style="margin-bottom: 20px;">
            <strong>Requested Services:</strong>

            <ul>
              ${(services || [])
                .map((service: string) => `<li>${service}</li>`)
                .join("")}
            </ul>
          </div>

          <div style="margin-bottom: 20px;">
            <strong>Additional Details:</strong>
            <p>${message || "None provided"}</p>
          </div>
        </div>
      `,
    });
    await resend.emails.send({
  from: "Events@briegrazefulnj.com",
  to: email,
  subject: "We Received Your Inquiry ✨",
  html: `
    <div style="
      font-family: Arial, sans-serif;
      padding: 20px;
      color: #444;
      line-height: 1.6;
    ">
      <h1 style="
        color: #222;
        margin-bottom: 20px;
      ">
        Thank You for Your Inquiry
      </h1>

      <p>
        Hi ${name},
      </p>

      <p>
        Thank you for reaching out to Brie Grazeful.
        We’ve received your event inquiry and we will
        review your submission.
      </p>

      <p>
      Please allow 2-3 business days for a response

      <p>
        A member of our team will contact you regarding:
      </p>

      <ul>
        <li>Availability</li>
        <li>Pricing</li>
        <li>Event details</li>
      </ul>

      <p>
        We’re excited to be part of your special event.
      </p>

      <p style="margin-top: 40px;">
        — Brie Grazeful
      </p>
    </div>
  `,
});

    console.log("EMAIL RESULT:", result);

    return Response.json({ success: true });
  } catch (error) {
    console.error("EMAIL ERROR:", error);

    return Response.json({ success: false });
  }
}