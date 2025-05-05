const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const User = require("./models/User");

const app = express();
app.use(cors());
app.use(express.json());

// 🔗 Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/userdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// 📝 Signup route
app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({ name, email, password: hashedPassword });
    res.json({ message: "Signup successful" });
  } catch (err) {
    res.status(500).json({ message: "Error in signup" });
  }
});

// 🔐 Login route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.json({ message: "Invalid credentials" });

    res.json({ message: "Login successful" });
  } catch (err) {
    res.status(500).json({ message: "Error in login" });
  }
});

// 🚀 Start server
app.listen(5000, () => {
  console.log("Server started on http://localhost:5000");
});



// ✅ Experience Model
const Experience = mongoose.model("Experience", {
  name: String,
  company: String,
  role: String,
  experience: String,
  date: { type: Date, default: Date.now }
});

// 📤 Add Experience Route
app.post("/add-experience", async (req, res) => {
  try {
    const { name, company, role, experience } = req.body;
    const newExperience = new Experience({ name, company, role, experience });
    await newExperience.save();
    res.json({ message: "Experience added successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error adding experience" });
  }
});

// 📥 View All Experiences Route
app.get("/view-experiences", async (req, res) => {
  try {
    const experiences = await Experience.find().sort({ date: -1 });
    res.json(experiences);
  } catch (err) {
    res.status(500).json({ message: "Error fetching experiences" });
  }
});
