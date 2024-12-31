const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const crypto = require("crypto");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

// Store tokens temporarily (use a database in production)
const verificationTokens = {};

const transporter = nodemailer.createTransport({
  service: "Gmail", // Use your email service
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS, // Your email password
  },
});

// Endpoint to send verification email
app.post("/send-verification", async (req, res) => {
  const { name, email, message } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  const verificationToken = crypto.randomBytes(16).toString("hex"); // Generate unique token
  verificationTokens[email] = { token: verificationToken, message, name }; // Store token and message

  const verificationLink = `http://localhost:5000/verify-email?email=${email}&token=${verificationToken}`;

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Email Verification",
      html: `
        <h1>Email Verification</h1>
        <p>Hi ${name},</p>
        <p>Thank you for your message. Please verify your email by clicking the link below:</p>
        <a href="${verificationLink}">Verify Email</a>
        <p>Your message: ${message}</p>
      `,
    });

    res.json({ success: true, message: "Verification email sent!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

// Endpoint to verify email and notify the developer
app.get("/verify-email", async (req, res) => {
  const { email, token } = req.query;

  // Check if the token exists and is valid
  if (verificationTokens[email] && verificationTokens[email].token === token) {
    const { name, message } = verificationTokens[email];

    if (!name || !message) {
      return res.status(400).send("Missing user information or message.");
    }

    delete verificationTokens[email]; // Remove token after verification

    // Send verification success email to the user
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Verification Successful",
        html: `
          <h1>Verification Successful</h1>
          <p>Hi,</p>
          <p>Your email verification was successful. Thank you for confirming your email address!</p>
        `,
      });

      // Send email to the developer with the user's message
      await transporter.sendMail({
        from: email,
        to: process.env.DEV_EMAIL, // Developer's email from environment variables
        subject: "ProjectHub - New User Verified",
        html: `
          <h1 style="text-align:center">ProjectHub</h1>
          <h3>New User Verified</h3>
          <p><strong>User Email:</strong> ${email}</p>
          <p>The user has successfully verified their email. Their message is as follows:</p>
          <blockquote>message: ${message || "No message provided"}</blockquote>
        `,
      });

      res.send("Email verified successfully!");
    } catch (err) {
      console.error(
        "Error sending confirmation email or developer notification:",
        err
      );
      res
        .status(500)
        .send("Error sending confirmation email or developer notification.");
    }
  } else {
    console.log("Invalid or expired token:", { email, token });
    res.status(400).send("Invalid or expired verification link.");
  }
});

app.listen(process.env.PORT, () =>
  console.log(`Server is running on port ${process.env.PORT}`)
);
