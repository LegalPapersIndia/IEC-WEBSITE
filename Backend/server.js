import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "IEC Backend Running 🚀"
  });
});

app.post("/api/submit-iec", async (req, res) => {

  try {

    console.log("📥 Form Data Received:", req.body);

    const encodedPayload = new URLSearchParams(req.body).toString();

    console.log("📤 Sending to CRM:", encodedPayload);

    const crmResponse = await fetch(process.env.CRM_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": "Mozilla/5.0"
      },
      body: encodedPayload
    });

    const data = await crmResponse.text();

    console.log("📩 CRM Response:", data);

    res.json({
      success: true,
      crmResponse: data
    });

  } catch (error) {

    console.error("❌ Error:", error);

    res.status(500).json({
      success: false,
      error: error.message
    });

  }

});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});