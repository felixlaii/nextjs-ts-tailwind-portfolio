import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

require("dotenv").config();

async function contact(req: NextApiRequest, res: NextApiResponse) {
  try {
    console.log("Received request body:", req.body);

    const { email, firstLastName, phone, message } = req.body;

    // Validate the input fields (add more validation as needed)
    if (!email || !firstLastName || !message) {
      console.log("Missing required fields");
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Create a nodemailer transporter
    let transporter = nodemailer.createTransport({
      service: "hotmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Set up email options
    let mailOptions = {
      from: process.env.EMAIL,
      to: process.env.RECIPIENT_EMAIL,
      subject: "New Contact Form Submission",
      text: `
        Name: ${firstLastName}
        Email: ${email}
        Phone: ${phone || "Not provided"}
        Message: ${message}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    console.log("Email sent successfully");
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export default contact;
