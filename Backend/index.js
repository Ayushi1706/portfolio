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
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
  res.send("Portfolio backend running");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
