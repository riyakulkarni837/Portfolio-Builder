const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
    resume: { type: Object, required: true },
    token: { type: String, required: true }, // Ensure this matches the token field in User schema
  });

// createing model
const resumedb = new mongoose.model("resume", resumeSchema);

module.exports = resumedb;


