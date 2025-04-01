import React, { useState } from 'react';
import TestEngine from '../components/TestEngine';
import { hearingTest } from '../data/testData';
import { motion } from 'framer-motion';

const HearingTests = () => {
  const [activeTest, setActiveTest] = useState(null);
  
  const startTest = (testId) => {
    let test;
    switch(testId) {
      case 'hearing':
        test = hearingTest;
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
      id: 'hearing',
      title: 'Hearing Ability Assessment',
      description: 'Evaluate your hearing abilities across different frequencies and listening situations.',
      image: 'https://images.unsplash.com/photo-1516981879613-9f5da904015f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      details: [
        'Assesses hearing across low, mid, and high frequencies',
        'Evaluates speech discrimination and directional hearing',
        'Takes approximately 5 minutes to complete',
        'No special equipment needed, but headphones recommended'
      ]
    },
    {
      id: 'tinnitus-assessment',
      title: 'Tinnitus Assessment',
      description: 'Evaluate the presence and impact of tinnitus (ringing, buzzing, or other sounds in the ears).',
      image: 'https://images.unsplash.com/photo-1590077428593-a33a58b3a2c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      details: [
        'Helps identify tinnitus symptoms and severity',
        'Assesses impact on daily life and activities',
        'Takes less than 3 minutes to complete',
        'No special equipment needed'
      ]
    },
    {
      id: 'speech-in-noise',
      title: 'Speech-in-Noise Test',
      description: 'Assess your ability to understand speech in noisy environments, a common challenge for those with hearing difficulties.',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      details: [
        'Simulates real-world listening environments',
        'Identifies specific challenges with background noise',
        'Takes approximately 4 minutes to complete',
        'Headphones strongly recommended'
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {activeTest ? (
        <TestEngine test={activeTest} onClose={closeTest} />
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-8 text-center">Hearing Health Tests</h1>
          <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
            These tests can help you assess different aspects of your hearing health. They are designed for screening purposes and are not a substitute for professional medical evaluation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tests.map(test => (
              <motion.div 
                key={test.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={test.image} 
                    alt={test.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2">{test.title}</h2>
                  <p className="text-gray-600 mb-4">{test.description}</p>
                  <div className="mb-6">
                    <h3 className="font-semibold mb-2">Test Details:</h3>
                    <ul className="list-disc pl-5 text-sm text-gray-600">
                      {test.details.map((detail, index) => (
                        <li key={index} className="mb-1">{detail}</li>
                      ))}
                    </ul>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary"
                    onClick={() => (test.id === 'hearing') ? startTest(test.id) : null}
                  >
                    {(test.id === 'hearing') ? 'Start Test' : 'Coming Soon'}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default HearingTests;
