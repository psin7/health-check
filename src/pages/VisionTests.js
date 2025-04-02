import React, { useState } from 'react';
import TestEngine from '../components/TestEngine';
import { colorBlindnessTest, astigmatismTest, visualAcuityTest } from '../data/tests';
import { motion } from 'framer-motion';

const VisionTests = () => {
  const [activeTest, setActiveTest] = useState(null);
  
  const startTest = (testId) => {
    let test;
    switch(testId) {
      case 'color-blindness':
        test = colorBlindnessTest;
        break;
      case 'astigmatism':
        test = astigmatismTest;
        break;
      case 'visual-acuity':
        test = visualAcuityTest;
        break;
      default:
        return; // Test not implemented yet
    }
    setActiveTest(test);
  };

  const closeTest = () => {
    setActiveTest(null);
  };
  const tests = [
    {
      id: 'color-blindness',
      title: 'Color Blindness Test (Ishihara)',
      description: 'Assess your ability to distinguish between different colors using the Ishihara plates.',
      image: 'https://images.unsplash.com/photo-1580130601254-05fa235abeab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      details: [
        'Identifies red-green color deficiencies',
        'Takes approximately 5 minutes to complete',
        'No special equipment needed beyond a screen with accurate color display'
      ]
    },
    {
      id: 'astigmatism',
      title: 'Astigmatism Test',
      description: 'Check for signs of astigmatism by examining how you perceive lines and patterns.',
      image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      details: [
        'Helps identify irregularities in cornea shape',
        'Simple grid-based visual test',
        'Takes less than 2 minutes to complete'
      ]
    },
    {
      id: 'visual-acuity',
      title: 'Visual Acuity Test',
      description: 'A simplified version of the eye chart test to assess your distance vision.',
      image: 'https://images.unsplash.com/photo-1584036553516-bf83210aa16c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      details: [
        'Similar to the Snellen chart used by optometrists',
        'Measures how well you can see at various distances',
        'Requires sitting at a specific distance from your screen'
      ]
    }
  ];

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
        <h1 className="text-4xl font-bold mb-4 heading-animation">Vision & Sensory Tests</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          These tests can help identify potential vision and hearing issues. They are not a substitute for 
          professional examination but can indicate when you might need to consult a specialist.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8 max-w-4xl mx-auto"
      >
        {tests.map((test) => (
          <motion.div
            key={test.id}
            variants={itemVariants}
            className="card overflow-hidden flex flex-col md:flex-row"
          >
            <div className="md:w-1/3">
              <img 
                src={test.image} 
                alt={test.title} 
                className="h-48 md:h-full w-full object-cover"
              />
            </div>
            <div className="md:w-2/3 p-6">
              <h2 className="text-2xl font-semibold mb-2">{test.title}</h2>
              <p className="text-gray-600 mb-4">{test.description}</p>
              <ul className="space-y-1 mb-4">
                {test.details.map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
                onClick={() => (test.id === 'color-blindness' || test.id === 'astigmatism' || test.id === 'visual-acuity') ? startTest(test.id) : null}
              >
                {(test.id === 'color-blindness' || test.id === 'astigmatism' || test.id === 'visual-acuity') ? 'Start Test' : 'Coming Soon'}
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-12 bg-primary-50 p-6 rounded-xl max-w-4xl mx-auto"
      >
        <h3 className="text-xl font-semibold mb-2">When to See a Doctor</h3>
        <p className="text-gray-700">
          If you experience any of the following symptoms, please consult an eye care or hearing professional:
        </p>
        <ul className="mt-2 space-y-1">
          <li className="flex items-start">
            <span className="text-red-500 mr-2">•</span>
            <span>Sudden changes in vision or hearing</span>
          </li>
          <li className="flex items-start">
            <span className="text-red-500 mr-2">•</span>
            <span>Eye pain or discomfort</span>
          </li>
          <li className="flex items-start">
            <span className="text-red-500 mr-2">•</span>
            <span>Persistent headaches when using your eyes</span>
          </li>
          <li className="flex items-start">
            <span className="text-red-500 mr-2">•</span>
            <span>Ringing in the ears or dizziness</span>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default VisionTests;
