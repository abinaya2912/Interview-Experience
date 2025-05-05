const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema({
  name: String,
  companyName: String,
  role: String,
  interviewDate: String,
  difficultyLevel: String,
  totalCount: Number,
  clearedCount: Number,
  descriptions: [String],
  status: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Experience", experienceSchema);
