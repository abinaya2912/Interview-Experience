const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const User = require("./models/user");
const Experience = require("./models/Experience");

const app = express();
app.use(cors());
app.use(express.json());

// DB Connection
mongoose.connect("mongodb://127.0.0.1:27017/userdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Signup Route
app.post("/api/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.json({ success: false, message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ name, email, password: hashedPassword });

    res.json({ success: true, message: "Signup successful" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error in signup" });
  }
});

// Login Route
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.json({ success: false, message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.json({ success: false, message: "Invalid credentials" });

    res.json({ success: true, message: "Login successful" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error in login" });
  }
});

// Add Experience Route
app.post("/api/add-experience", async (req, res) => {
  try {
    const newExperience = new Experience(req.body);
    await newExperience.save();
    res.json({ success: true, message: "Experience added successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error adding experience" });
  }
});

// Get All Experiences
app.get("/api/get-experiences", async (req, res) => {
  try {
    const experiences = await Experience.find().sort({ date: -1 });
    res.json(experiences);
  } catch (err) {
    res.status(500).json({ message: "Error fetching experiences" });
  }
});

// Server Listener
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
