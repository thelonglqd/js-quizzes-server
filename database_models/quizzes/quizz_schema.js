const mongoose = require('mongoose');

const quizzSchema = mongoose.Schema({
  language: String,
  framework: String,
  difficulty: String,
  question: String,
  correct_answer: String,
  incorrect_answer: [String]
});

export default quizzSchema;