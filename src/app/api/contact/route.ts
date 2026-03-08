import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Email configuration - uses environment variables or defaults
const getEmailConfig = () => {
  // For production, use proper SMTP configuration
  return {
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER || "",
      pass: process.env.SMTP_PASS || "",
    },
  };
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, service, message } = body;

    // Validate required fields
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Map service value to label
    const serviceLabels: Record<string, string> = {
      audit: "Accessibility Audit",
      wcag: "WCAG Compliance",
      remediation: "Remediation Services",
      training: "Training & Workshops",
      vpat: "VPAT Documentation",
      testing: "Assistive Technology Testing",
      other: "Other",
    };

    const serviceLabel = serviceLabels[service] || service;

    // Create email content
    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #1E40AF; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
          .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #1E40AF; }
          .value { margin-top: 5px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0;">New Contact Form Submission</h1>
            <p style="margin: 5px 0 0 0;">A11yTek Website</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${name}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value"><a href="mailto:${email}">${email}</a></div>
            </div>
            <div class="field">
              <div class="label">Company:</div>
              <div class="value">${company || "Not provided"}</div>
            </div>
            <div class="field">
              <div class="label">Service Interest:</div>
              <div class="value">${serviceLabel}</div>
            </div>
            <div class="field">
              <div class="label">Message:</div>
              <div class="value" style="white-space: pre-wrap;">${message}</div>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    const emailText = `
New Contact Form Submission - A11yTek

Name: ${name}
Email: ${email}
Company: ${company || "Not provided"}
Service Interest: ${serviceLabel}

Message:
${message}
    `.trim();

    // Check if SMTP credentials are configured
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpUser || !smtpPass) {
      // For demo purposes without SMTP configured, log the email
      console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
      console.log("📧 EMAIL WOULD BE SENT TO: a11ytek.accessibility@gmail.com");
      console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
      console.log(emailText);
      console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
      
      // Return success for demo purposes
      return NextResponse.json({
        success: true,
        message: "Form submitted successfully. Email would be sent to a11ytek.accessibility@gmail.com",
        demo: true,
        data: { name, email, company, service: serviceLabel, message }
      });
    }

    // Create transporter with configured settings
    const transporter = nodemailer.createTransport(getEmailConfig());

    // Send email
    const info = await transporter.sendMail({
      from: `"A11yTek Website" <${smtpUser}>`,
      to: "a11ytek.accessibility@gmail.com",
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      text: emailText,
      html: emailHtml,
    });

    console.log("Email sent successfully:", info.messageId);

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
      messageId: info.messageId,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
