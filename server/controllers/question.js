import QuestionModel from '../models/Questions.js';

// Get
export const htmlQuestions = async (req, res) => {
  try {
    const { type } = req.params;
    const questions = await QuestionModel.find({ questionType: type });
    res.status(200).json(questions);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};


