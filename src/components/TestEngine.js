import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TestEngine = ({ test, onClose }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [testCompleted, setTestCompleted] = useState(false);
  const [result, setResult] = useState(null);
  const [randomizedOptions, setRandomizedOptions] = useState([]);
  
  // Function to shuffle array (Fisher-Yates algorithm)
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };
  
  // Randomize options when question changes
  useEffect(() => {
    if (test.id === 'color-blindness') {
      // Create options for color blindness test
      const correctAnswer = test.questions[currentQuestion].correctAnswer;
      const options = [
        { text: `I see the number ${correctAnswer}`, score: 1 },
        { text: 'I see a different number', score: 0 },
        { text: 'I don\'t see any number', score: 0 }
      ];
      setRandomizedOptions(shuffleArray(options));
    } else if (test.id === 'iq-test' || test.id === 'memory-test') {
      // For IQ test and memory test, use the options provided in the question
      if (test.questions[currentQuestion].options) {
        const options = test.questions[currentQuestion].options.map((optionText, index) => {
          // Check if this option is the correct answer
          const isCorrect = optionText === test.questions[currentQuestion].correctAnswer;
          return {
            text: optionText,
            score: isCorrect ? 1 : 0
          };
        });
        setRandomizedOptions(shuffleArray(options));
      }
    } else if (test.customAnswerOptions && test.customAnswerOptions[test.questions[currentQuestion].id]) {
      // For tests with custom answer options per question (like diabetes test)
      setRandomizedOptions(test.customAnswerOptions[test.questions[currentQuestion].id]);
    }
  }, [currentQuestion, test.id, test.questions]);

  const handleAnswer = (score) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);
    
    if (currentQuestion < test.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate result
      const totalScore = newAnswers.reduce((sum, score) => sum + score, 0);
      
      // Find the appropriate result category
      let resultCategory;
      
      // Special handling for thyroid test which has different result categories based on pattern
      if (test.id === 'thyroid' && test.processResults) {
        const processedResult = test.processResults(newAnswers);
        
        // Find the appropriate category based on score and type
        resultCategory = test.resultCategories.find(category => {
          // Check if the category title includes the processed result type
          const matchesType = category.title.toLowerCase().includes(processedResult.type);
          // Check if the score is within range
          const inRange = processedResult.score >= category.minScore && processedResult.score <= category.maxScore;
          
          // For the general categories (Minimal or Mild), don't check type
          if (category.title.includes('Minimal') || category.title.includes('Mild')) {
            return inRange;
          }
          
          // For Moderate and Significant categories, check both type and range
          return matchesType && inRange;
        });
      } 
      // Special handling for heart disease test which uses a custom risk calculator
      else if (test.id === 'heart-disease' && test.calculateRisk) {
        const riskResult = test.calculateRisk(newAnswers);
        
        // Find the appropriate category based on score
        resultCategory = test.resultCategories.find(category => 
          riskResult.score >= category.minScore && riskResult.score <= category.maxScore
        );
        
        // Add the risk percentage to the result for display
        if (resultCategory) {
          resultCategory = {
            ...resultCategory,
            riskPercentage: riskResult.riskPercentage
          };
        }
      } else {
        // Standard result category finding for other tests
        resultCategory = test.resultCategories.find(
          category => totalScore >= category.minScore && totalScore <= category.maxScore
        );
      }
      
      // Calculate max possible score based on test type
      let maxPossibleScore;
      if (test.customAnswerOptions) {
        // For tests with custom answer options, calculate the max possible score
        maxPossibleScore = test.questions.reduce((total, question) => {
          const options = test.customAnswerOptions[question.id] || [];
          const maxScore = options.length > 0 ? Math.max(...options.map(option => option.score)) : 0;
          return total + maxScore;
        }, 0);
      } else if (test.answerOptions) {
        // For tests with standard answer options
        maxPossibleScore = test.questions.length * Math.max(...test.answerOptions.map(option => option.score));
      } else {
        // Default to total questions if no other scoring method is available
        maxPossibleScore = test.questions.length;
      }
      
      setResult({
        score: totalScore,
        category: resultCategory,
        maxPossibleScore: maxPossibleScore
      });
      
      setTestCompleted(true);
    }
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setTestCompleted(false);
    setResult(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">{test.title}</h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {!testCompleted ? (
            <>
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-500">
                    Question {currentQuestion + 1} of {test.questions.length}
                  </span>
                  <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
                    {test.category}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-primary-500 h-2.5 rounded-full" 
                    style={{ width: `${((currentQuestion + 1) / test.questions.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              <h3 className="text-xl mb-4">{test.questions[currentQuestion].text}</h3>
              
              {test.questions[currentQuestion].subText && (
                <p className="text-gray-600 mb-4 italic">{test.questions[currentQuestion].subText}</p>
              )}
              
              {test.questions[currentQuestion].imageUrl && (
                <div className="mb-6 flex flex-col items-center">
                  <div className="relative mb-2">
                    <img 
                      src={test.questions[currentQuestion].imageUrl} 
                      alt="Ishihara plate" 
                      className="max-w-full rounded-lg border border-gray-200 shadow-lg"
                      style={{ maxHeight: '350px', maxWidth: '350px' }}
                    />
                    <div className="absolute -bottom-2 right-0 bg-gray-800 text-white text-xs px-2 py-1 rounded-md">
                      Plate {currentQuestion + 1} of {test.questions.length}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2 max-w-md text-center">
                    {test.id === 'color-blindness' ? 'For accurate results, view in good lighting and maintain a comfortable viewing distance.' : ''}
                  </p>
                </div>
              )}
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-4"
              >
                {/* For tests with custom answer options per question (like diabetes) */}
                {test.customAnswerOptions ? (
                  <>
                    {randomizedOptions.map((option, index) => (
                      <motion.button
                        key={index}
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full text-left p-4 border border-gray-200 rounded-lg hover:bg-primary-50 transition-colors"
                        onClick={() => handleAnswer(option.score)}
                      >
                        {option.text}
                      </motion.button>
                    ))}
                  </>
                ) : test.id === 'color-blindness' || test.id === 'iq-test' || test.id === 'memory-test' ? (
                  <>
                    {randomizedOptions.map((option, index) => (
                      <motion.button
                        key={index}
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full text-left p-4 border border-gray-200 rounded-lg hover:bg-primary-50 transition-colors"
                        onClick={() => handleAnswer(option.score)}
                      >
                        {(test.id === 'iq-test' || test.id === 'memory-test') ? 
                          (test.answerOptions[index] ? `${test.answerOptions[index].text}. ${option.text}` : option.text) : 
                          option.text
                        }
                      </motion.button>
                    ))}
                  </>
                ) : (
                  test.answerOptions.map((option, index) => (
                    <motion.button
                      key={index}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full text-left p-4 border border-gray-200 rounded-lg hover:bg-primary-50 transition-colors"
                      onClick={() => handleAnswer(option.score)}
                    >
                      {option.text}
                    </motion.button>
                  ))
                )}
              </motion.div>
            </>
          ) : (
            <div className="text-center">
              <div className="mb-6">
                <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full ${
                  result.category.color
                } mb-4`}>
                  <span className="text-3xl">{result.category.icon}</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{result.category.title}</h3>
                <p className="text-gray-600 mb-4">
                  {test.id === 'heart-disease' && result.category.riskPercentage ? (
                    <>Your 10-year risk: <span className="font-semibold">{result.category.riskPercentage}</span></>
                  ) : (
                    <>Your score: {result.score} out of {result.maxPossibleScore}</>
                  )}
                </p>
              </div>
              
              <div className="mb-8 text-left">
                <h4 className="text-lg font-semibold mb-2">What this means:</h4>
                <p className="text-gray-700 mb-4">{result.category.description}</p>
                
                {result.category.recommendations && (
                  <>
                    <h4 className="text-lg font-semibold mb-2">Recommendations:</h4>
                    <ul className="list-disc pl-5 space-y-1 mb-6">
                      {result.category.recommendations.map((rec, index) => (
                        <li key={index} className="text-gray-700">{rec}</li>
                      ))}
                    </ul>
                  </>
                )}
                
                <div className={`p-4 rounded-lg ${result.category.alertLevel} mb-6`}>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm">{result.category.disclaimer}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary"
                  onClick={resetTest}
                >
                  Take Test Again
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                  onClick={onClose}
                >
                  Close
                </motion.button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default TestEngine;
