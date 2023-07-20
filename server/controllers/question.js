import QuestionModel from '../models/question.js';

// READ
export const htmlQuestions = async (req, res) => {
  try {
    console.log('html called');
    // Query the database to find all questions with the questionType of 'html'
    const questions = await QuestionModel.find({ questionType: 'html' });
    console.log(questions);
    res.status(200).json(questions);
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: err.message });
  }
};

export const cssQuestions = async (req, res) => {
    try {
      // Query the database to find all questions with the questionType of 'html'
      const questions = await QuestionModel.find({ questionType: 'css' });
  
      res.status(200).json(questions);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };
  export const javascriptQuestions = async (req, res) => {
    try {
      // Query the database to find all questions with the questionType of 'html'
      const questions = await QuestionModel.find({ questionType: 'javascript' });
  
      res.status(200).json(questions);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };

  export const reactQuestions = async (req, res) => {
    try {
      // Query the database to find all questions with the questionType of 'html'
      const questions = await QuestionModel.find({ questionType: 'react' });
  
      res.status(200).json(questions);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };
  export const nextQuestions = async (req, res) => {
    try {
      // Query the database to find all questions with the questionType of 'html'
      const questions = await QuestionModel.find({ questionType: 'nextjs' });
  
      res.status(200).json(questions);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };
  export const nodeQuestions = async (req, res) => {
    try {
      // Query the database to find all questions with the questionType of 'html'
      const questions = await QuestionModel.find({ questionType: 'nodejs' });
  
      res.status(200).json(questions);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };