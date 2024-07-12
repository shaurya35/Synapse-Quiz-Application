const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const questionSchema = new Schema({
  level: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  options: {
    type: [String],
    required: true,
  },
}, { timestamps: true });

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
