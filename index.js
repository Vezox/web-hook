require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post("/telegram", (req, res) => { 
  console.log(req.body);
  res.send("ok");
});

const PORT = process.env.PORT;
app.listen(PORT, console.log(`Server run on port ${PORT}`));
