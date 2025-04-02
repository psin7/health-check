import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TestEngine from '../components/TestEngine';
import { sleepApneaTest, diabetesTest, thyroidTest, heartDiseaseTest } from '../data/tests';

const OtherHealthTests = () => {
  const [activeTest, setActiveTest] = useState(null);

  const startTest = (testId) => {
    let test;
    switch(testId) {
      case 'sleep-apnea':
        test = sleepApneaTest;
        break;
      case 'diabetes':
        test = diabetesTest;
        break;
      case 'thyroid':
        test = thyroidTest;
        break;
      case 'heart-disease':
        test = heartDiseaseTest;
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
      id: 'sleep-apnea',
      title: 'Sleep Apnea Risk Assessment (STOP-BANG)',
      description: 'A screening tool to identify risk factors for obstructive sleep apnea.',
      image: sleepApneaTest.imageUrl,
      details: [
        'Evaluates snoring, tiredness, observed apnea, and blood pressure',
        'Takes approximately 2-3 minutes to complete',
        'Used by sleep specialists worldwide'
      ]
    },
    {
      id: 'diabetes',
      title: 'Diabetes Risk Test',
      description: 'Based on the American Diabetes Association risk assessment to identify your risk of developing type 2 diabetes.',
      image: diabetesTest.imageUrl,
      details: [
        'Considers factors like age, weight, family history, and activity level',
        'Takes approximately 2 minutes to complete',
        'Provides personalized risk assessment'
      ]
    },
    {
      id: 'heart-disease',
      title: 'Heart Disease Risk Calculator',
      description: 'Evaluates your risk of developing cardiovascular disease based on lifestyle and medical history.',
      image: heartDiseaseTest.imageUrl,
      details: [
        'Considers factors like cholesterol, blood pressure, and family history',
        'Takes approximately 5 minutes to complete',
        'Based on established cardiovascular risk algorithms'
      ]
    },
    {
      id: 'thyroid',
      title: 'Thyroid Symptom Assessment',
      description: 'A symptom-based self-assessment to identify potential thyroid dysfunction.',
      image: thyroidTest.imageUrl,
      details: [
        'Evaluates common symptoms of hypothyroidism and hyperthyroidism',
        'Takes approximately 3-4 minutes to complete',
        'Helps determine if further testing may be needed'
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
        <h1 className="text-4xl font-bold mb-4 heading-animation">Other Health Tests</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          These assessments can help identify risk factors for various health conditions. 
          They are designed as educational tools to promote awareness of potential health issues.
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
                src={process.env.PUBLIC_URL + test.image} 
                alt={test.title} 
                className="h-48 md:h-full w-full object-cover"
                onError={(e) => {
                  console.error(`Error loading image: ${test.image}`);
                  e.target.src = `${process.env.PUBLIC_URL}/images/placeholder.svg`;
                }}
              />
            </div>
            <div className="md:w-2/3 p-6">
              <h2 className="text-2xl font-semibold mb-2">{test.title}</h2>
              <p className="text-gray-600 mb-4">{test.description}</p>
              <ul className="space-y-1 mb-4">
                {test.details.map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
                onClick={() => startTest(test.id)}
              >
                {(test.id === 'sleep-apnea' || test.id === 'diabetes' || test.id === 'thyroid' || test.id === 'heart-disease') ? 'Start Test' : 'Coming Soon'}
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-12 bg-green-50 p-6 rounded-xl max-w-4xl mx-auto"
      >
        <h3 className="text-xl font-semibold mb-2">Preventive Health Tips</h3>
        <p className="text-gray-700 mb-4">
          Regardless of your test results, these general health recommendations can help reduce your risk of many common health conditions:
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <li className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            <span>Maintain a balanced diet rich in fruits, vegetables, and whole grains</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            <span>Engage in regular physical activity (aim for 150 minutes per week)</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            <span>Get 7-9 hours of quality sleep each night</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            <span>Manage stress through mindfulness, meditation, or other techniques</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            <span>Avoid tobacco and limit alcohol consumption</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            <span>Schedule regular check-ups with your healthcare provider</span>
          </li>
        </ul>
      </motion.div>

      {activeTest && (
        <TestEngine test={activeTest} onClose={closeTest} />
      )}
    </div>
  );
};

export default OtherHealthTests;
