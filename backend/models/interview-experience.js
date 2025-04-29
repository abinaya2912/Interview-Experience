const mongoose = require('mongoose');

const roundSchema = new mongoose.Schema({
  roundNumber: { type: Number, required: true },
  roundType: { type: String, required: true }, // e.g., "Technical", "HR"
  description: { type: String, required: true }
});

const interviewExperienceSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  companyName: { type: String, required: true },
  jobRole: { type: String, required: true },
  experienceLevel: { type: String, enum: ['Fresher', 'Intern', 'Experienced'], required: true },
  difficulty: { type: String, enum: ['Easy', 'Medium', 'Hard'], required: true },
  outcome: { type: String, enum: ['Selected', 'Rejected', 'Waiting'], required: true },
  interviewDate: { type: Date },
  tips: { type: String },
  status: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' },
  rounds: [roundSchema],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('InterviewExperience', interviewExperienceSchema);
