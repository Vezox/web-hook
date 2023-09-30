require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/telegram", (req, res) => {
  const arr = Object.keys(req.body)[0].split(",");
  const webhook = arr[0];
  const stt = arr[1];
  const name = arr[2];
  const remaining = arr[3];
  if (!webhook) return res.status(400).json({ message: "Webhook is required" });
  axios.post(webhook, {
    text: `Tiền của ${name} còn lại ${remaining} cá`,
    sheet: arr,
  });
});

const PORT = process.env.PORT;
app.listen(PORT, console.log(`Server run on port ${PORT}`));
