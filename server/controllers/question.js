import QuestionModel from '../models/Questions.js';

// Get
export const getQuestions = async (req, res) => {
  try {
    const { type } = req.params;
    const questions = await QuestionModel.find({ questionType: type });
    res.status(200).json(questions);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const addQuestions = async (req, res) => {
  try {
    const { question, option1, option2, option3, option4, correctOption, questionType } =
      req.body;

    const newQuestion = new QuestionModel({
      question,
      questionType,
      options: [option1, option2, option3, option4],
      correctOptionIndex: parseInt(correctOption, 10) -1 , // Convert to a number
    });
    const savedQuestion = await newQuestion.save();
    res.status(201).json(savedQuestion);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};