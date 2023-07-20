import React, { useState } from 'react';

const Quiz = () => {
  const questions = [
    {
      question: 'What is the result of the following expression? 2 + 2 * 3',
      options: ['8', '10', '6', '12'],
      correctOptionIndex: 2,
    },
    {
      question: 'Which keyword is used to declare a variable in JavaScript?',
      options: ['var', 'let', 'const', 'int'],
      correctOptionIndex: 0,
    },
    // ... (The rest of the questions array)
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);

  const handleOptionSelect = (optionIndex) => {
    setSelectedOption(optionIndex);
  };

  const handleNextQuestion = () => {
    if (selectedOption !== null) {
      if (selectedOption === questions[currentQuestion].correctOptionIndex) {
        setScore((prevScore) => prevScore + 1);
      }
      setSelectedOption(null);
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    } else {
      alert('Please select an option before proceeding.');
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-xl bg-gray-200 p-8 rounded-md shadow-md">
        {currentQuestion === questions.length ? (
          // Show the final score when all questions are answered
          <>
            <h1 className="text-3xl font-bold mb-4">Quiz Completed!</h1>
            <p className="text-lg mb-4">Your Score: {score} / {questions.length}</p>
            <button
              onClick={handleRestartQuiz}
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Restart Quiz
            </button>
          </>
        ) : (
          // Show the quiz questions and options
          <>
            <h1 className="text-3xl font-bold mb-4">{questions[currentQuestion].question}</h1>
            <div className="grid gap-2">
              {questions[currentQuestion].options.map((option, index) => (
                <div
                  key={index}
                  className={`p-4 border border-gray-400 rounded-md cursor-pointer ${
                    selectedOption === index ? 'bg-blue-500 text-white' : 'bg-white'
                  } hover:bg-blue-500 hover:text-white`}
                  onClick={() => handleOptionSelect(index)}
                >
                  {option}
                </div>
              ))}
            </div>
            <button
              onClick={handleNextQuestion}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md disabled:opacity-50"
              disabled={selectedOption === null}
            >
              Next Question
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;