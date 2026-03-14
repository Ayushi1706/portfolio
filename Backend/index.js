const express = require("express");
const cors = require("cors");
require("dotenv").config();

const contactRoutes = require("./routers/contactRoutes");

const app = express();

const corsOptions = {
  origin: [
    "http://localhost:3000",
    "https://ayushisingh.vercel.app"
  ],
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
  credentials: true
};

app.use(cors(corsOptions));
app.options("*", cors());   // 🔥 handles preflight requests

app.use(express.json());

app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
  res.send("Portfolio backend running");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
