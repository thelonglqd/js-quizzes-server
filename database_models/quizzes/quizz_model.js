const mongoose = require('mongoose');
const schema = require('./quizz_schema');

export default mongoose.model('Quizzes', schema);