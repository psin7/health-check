import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TestEngine from '../components/TestEngine';
import { memoryTest } from '../data/tests/memoryTest';

const MemoryCognitiveTest = () => {
  const [activeTest, setActiveTest] = useState(null);

  const startTest = () => {
    setActiveTest(memoryTest);
  };

  const closeTest = () => {
    setActiveTest(null);
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4 heading-animation">Memory & Cognitive Function Test</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          This comprehensive assessment evaluates various aspects of memory and cognitive processing, 
          including working memory, visual-spatial memory, pattern recognition, and information processing speed.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto"
      >
        <motion.div
          variants={itemVariants}
          className="card overflow-hidden mb-8"
        >
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">About This Test</h2>
            <p className="text-gray-600 mb-6">
              The Memory & Cognitive Function Test is designed to assess multiple aspects of cognitive ability, 
              providing insights into your brain's processing capabilities. This test evaluates:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-primary-50 p-4 rounded-lg">
                <h3 className="font-semibold text-primary-700 mb-2">Working Memory</h3>
                <p className="text-gray-700">Your ability to temporarily hold and manipulate information</p>
              </div>
              
              <div className="bg-primary-50 p-4 rounded-lg">
                <h3 className="font-semibold text-primary-700 mb-2">Visual-Spatial Memory</h3>
                <p className="text-gray-700">How well you recall visual patterns and spatial relationships</p>
              </div>
              
              <div className="bg-primary-50 p-4 rounded-lg">
                <h3 className="font-semibold text-primary-700 mb-2">Pattern Recognition</h3>
                <p className="text-gray-700">Your ability to identify logical sequences and patterns</p>
              </div>
              
              <div className="bg-primary-50 p-4 rounded-lg">
                <h3 className="font-semibold text-primary-700 mb-2">Processing Speed</h3>
                <p className="text-gray-700">How quickly you can process and respond to information</p>
              </div>
              
              <div className="bg-primary-50 p-4 rounded-lg">
                <h3 className="font-semibold text-primary-700 mb-2">Verbal Memory</h3>
                <p className="text-gray-700">Your ability to recall words, phrases, and verbal information</p>
              </div>
              
              <div className="bg-primary-50 p-4 rounded-lg">
                <h3 className="font-semibold text-primary-700 mb-2">Executive Function</h3>
                <p className="text-gray-700">Complex thinking skills like planning, problem-solving, and reasoning</p>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h3 className="font-semibold text-blue-700 mb-2">Test Details</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>20 questions across multiple cognitive domains</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Takes approximately 15-20 minutes to complete</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Includes number sequences, visual patterns, and problem-solving tasks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Provides detailed assessment of cognitive strengths and areas for improvement</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg mb-6">
              <h3 className="font-semibold text-yellow-700 mb-2">Preparation Tips</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Take the test in a quiet environment free from distractions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Ensure you're well-rested and alert</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Have paper and pencil ready for notes if needed</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Read instructions carefully before starting each section</span>
                </li>
              </ul>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary w-full"
              onClick={startTest}
            >
              Start Memory & Cognitive Test
            </motion.button>
          </div>
        </motion.div>
        
        <motion.div
          variants={itemVariants}
          className="bg-secondary-50 p-6 rounded-xl mb-8"
        >
          <h3 className="text-xl font-semibold mb-2">Why Test Cognitive Function?</h3>
          <p className="text-gray-700 mb-4">
            Regular assessment of cognitive function can help identify potential issues early and track changes over time.
            Cognitive health is a key component of overall wellbeing and can be improved with targeted exercises and lifestyle changes.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <h4 className="font-medium text-secondary-700 mb-1">Early Detection</h4>
              <p className="text-sm text-gray-600">Identify potential cognitive issues before they become significant</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <h4 className="font-medium text-secondary-700 mb-1">Track Progress</h4>
              <p className="text-sm text-gray-600">Monitor changes in cognitive function over time</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <h4 className="font-medium text-secondary-700 mb-1">Targeted Improvement</h4>
              <p className="text-sm text-gray-600">Focus on specific cognitive domains that need strengthening</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-12 bg-red-50 p-6 rounded-xl max-w-4xl mx-auto"
      >
        <h3 className="text-xl font-semibold mb-2 text-red-700">Important Information</h3>
        <p className="text-gray-700">
          This test is designed for informational and educational purposes only. It is not a diagnostic tool and should not 
          replace professional medical evaluation. If you have concerns about your cognitive function or memory, please 
          consult with a healthcare professional such as a neurologist, psychiatrist, or psychologist.
        </p>
      </motion.div>

      {activeTest && (
        <TestEngine test={activeTest} onClose={closeTest} />
      )}
    </div>
  );
};

export default MemoryCognitiveTest;
