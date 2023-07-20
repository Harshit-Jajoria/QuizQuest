import mongoose from 'mongoose';
const QuestionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  questionType: {
    type: String,
    required: true,
  },

  options: {
    type: [String],
    required: true,
  },
  correctOptionIndex: {
    type: Number,
    required: true,
  },
});

const QuestionModel = mongoose.model('QuizQuestion', QuestionSchema);

export default QuestionModel;