import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TestEngine from '../components/TestEngine';
import { depressionTest, anxietyTest } from '../data/testData';

const MentalHealthTests = () => {
  const [activeTest, setActiveTest] = useState(null);
  
  const startTest = (testId) => {
    let test;
    switch(testId) {
      case 'depression':
        test = depressionTest;
        break;
      case 'anxiety':
        test = anxietyTest;
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
      id: 'depression',
      title: 'Depression Screening (PHQ-9)',
      description: 'The Patient Health Questionnaire (PHQ-9) is a widely used screening tool for depression.',
      image: 'https://images.unsplash.com/photo-1494368308039-ed3393a402a4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      details: [
        'Evaluates symptoms of depression over the past two weeks',
        'Takes approximately 3-5 minutes to complete',
        'Used by healthcare professionals worldwide'
      ]
    },
    {
      id: 'anxiety',
      title: 'Anxiety Assessment (GAD-7)',
      description: 'The Generalized Anxiety Disorder assessment (GAD-7) screens for signs of anxiety disorders.',
      image: 'https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      details: [
        'Measures frequency of anxiety symptoms',
        'Takes approximately 3 minutes to complete',
        'Developed by Pfizer and validated in primary care settings'
      ]
    },
    {
      id: 'bipolar',
      title: 'Bipolar Disorder Screening (MDQ)',
      description: 'The Mood Disorder Questionnaire (MDQ) helps identify symptoms associated with bipolar disorder.',
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      details: [
        'Screens for manic or hypomanic episodes',
        'Takes approximately 5 minutes to complete',
        'Focuses on lifetime experiences rather than current symptoms'
      ]
    },
    {
      id: 'ptsd',
      title: 'PTSD Checklist (PCL-5)',
      description: 'A self-report measure that assesses the 20 DSM-5 symptoms of Post-Traumatic Stress Disorder.',
      image: 'https://images.unsplash.com/photo-1508847154043-be5407fcaa5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      details: [
        'Evaluates symptoms related to traumatic experiences',
        'Takes approximately 5-7 minutes to complete',
        'Used for screening and monitoring symptom change during treatment'
      ]
    },
    {
      id: 'ocd',
      title: 'OCD Assessment (Y-BOCS)',
      description: 'A simplified version of the Yale-Brown Obsessive Compulsive Scale to screen for OCD symptoms.',
      image: 'https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      details: [
        'Assesses obsessions and compulsions separately',
        'Takes approximately 10 minutes to complete',
        'Considered the gold standard for OCD assessment'
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
    <div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4 heading-animation">Mental Health Tests</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          These self-assessment tools can help you understand your mental health better. 
          Remember that these are screening tools, not diagnostic instruments.
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
                    <span className="text-accent-500 mr-2">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
                onClick={() => startTest(test.id)}
              >
                {(test.id === 'depression' || test.id === 'anxiety') ? 'Start Test' : 'Coming Soon'}
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-12 bg-red-50 p-6 rounded-xl max-w-4xl mx-auto"
      >
        <h3 className="text-xl font-semibold mb-2 text-red-600">Crisis Resources</h3>
        <p className="text-gray-700 mb-4">
          If you're experiencing a mental health crisis or having thoughts of suicide, please reach out for help immediately:
        </p>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-red-500 mr-2">•</span>
            <span><strong>National Suicide Prevention Lifeline:</strong> 1-800-273-8255</span>
          </li>
          <li className="flex items-start">
            <span className="text-red-500 mr-2">•</span>
            <span><strong>Crisis Text Line:</strong> Text HOME to 741741</span>
          </li>
          <li className="flex items-start">
            <span className="text-red-500 mr-2">•</span>
            <span><strong>Emergency Services:</strong> Call 911 or go to your nearest emergency room</span>
          </li>
        </ul>
      </motion.div>
      
      {activeTest && (
        <TestEngine test={activeTest} onClose={closeTest} />
      )}
    </div>
  );
};

export default MentalHealthTests;
