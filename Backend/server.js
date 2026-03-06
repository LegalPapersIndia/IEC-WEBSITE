import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Health Check
app.get("/", (req, res) => {
  res.send("IEC Backend Running 🚀");
});

// Submit IEC Form
app.post("/api/submit-iec", async (req, res) => {

  try {

    const payload = req.body;

    const crmResponse = await fetch(process.env.CRM_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams(payload).toString()
    });

    const data = await crmResponse.text();

    console.log("CRM Response:", data);

    res.status(200).send({
      success: true,
      message: "Lead sent to CRM",
      crmResponse: data
    });

  } catch (error) {

    console.error("CRM Error:", error);

    res.status(500).send({
      success: false,
      message: "CRM submission failed"
    });

  }

});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});