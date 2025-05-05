// models/Experience.js
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
});

module.exports = mongoose.model("Experience", experienceSchema);
