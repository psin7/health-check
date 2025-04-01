import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TestEngine from '../components/TestEngine';
import { iqTest } from '../data/testData';

const IQTest = () => {
  const [activeTest, setActiveTest] = useState(null);
  
  const startTest = () => {
    setActiveTest(iqTest);
  };

  const closeTest = () => {
    setActiveTest(null);
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
    <div className="relative">
      {activeTest && (
        <TestEngine test={activeTest} onClose={closeTest} />
      )}

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4 heading-animation">IQ Test</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          This simplified IQ test assesses different aspects of cognitive ability including pattern recognition,
          verbal reasoning, spatial visualization, and logical thinking.
        </p>
      </motion.div>

      {!activeTest && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto"
        >
          <div className="card">
            <h2 className="text-2xl font-semibold mb-4">About This Test</h2>
            <p className="text-gray-600 mb-6">
              This test consists of 5 questions that cover different aspects of cognitive ability. The questions 
              are designed to assess your problem-solving skills, pattern recognition, and logical reasoning.
            </p>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Test Format</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>5 multiple-choice questions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>No time limit, but try to answer at a steady pace</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Questions increase in difficulty</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>You'll receive a score and interpretation at the end</span>
                </li>
              </ul>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Tips</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Read each question carefully</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Trust your first instinct</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Don't spend too much time on any single question</span>
                </li>
              </ul>
            </div>
            
            <div className="text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary px-8 py-3 text-lg"
                onClick={startTest}
              >
                Start Test
              </motion.button>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-8 bg-yellow-50 p-6 rounded-xl"
          >
            <h3 className="text-xl font-semibold mb-2">Disclaimer</h3>
            <p className="text-gray-700">
              This is a simplified IQ test for educational purposes only. It is not a clinically validated assessment and 
              should not be used for diagnostic purposes. For a comprehensive IQ assessment, please consult with a 
              qualified psychologist or educational specialist.
            </p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default IQTest;
