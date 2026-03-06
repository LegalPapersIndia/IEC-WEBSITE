import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const app = express();

/* ---------------- Middleware ---------------- */

app.use(cors({
  origin: "*",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* ---------------- Health Check ---------------- */

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "IEC Backend Running 🚀"
  });
});

/* ---------------- IEC Form Submit ---------------- */

app.post("/api/submit-iec", async (req, res) => {

  try {

    console.log("📥 Form Data Received:");
    console.log(req.body);

    const payload = req.body;

    const encodedPayload = new URLSearchParams(payload).toString();

    console.log("📤 Sending Payload to CRM:");
    console.log(encodedPayload);

const crmResponse = await fetch(process.env.CRM_URL, {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent": "Mozilla/5.0"
  },
  body: encodedPayload,
  timeout: 120000
});

    const data = await crmResponse.text();

    console.log("📩 CRM Response:");
    console.log(data);

    res.status(200).json({
      success: true,
      message: "Lead sent to CRM successfully",
      crmResponse: data
    });

  } catch (error) {

    console.error("❌ CRM Error:");
    console.error(error);

    res.status(500).json({
      success: false,
      message: "CRM submission failed",
      error: error.message
    });

  }

});

/* ---------------- Server Start ---------------- */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});