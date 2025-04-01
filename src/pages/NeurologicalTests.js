import React from 'react';
import { motion } from 'framer-motion';

const NeurologicalTests = () => {
  const tests = [
    {
      id: 'adhd',
      title: 'ADHD Screening Test',
      description: 'Based on the Adult ADHD Self-Report Scale (ASRS) to identify potential attention deficit hyperactivity disorder symptoms.',
      image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      details: [
        'Evaluates attention, hyperactivity, and impulsivity',
        'Takes approximately 5-7 minutes to complete',
        'Developed in conjunction with the World Health Organization'
      ]
    },
    {
      id: 'dyslexia',
      title: 'Dyslexia Screening',
      description: 'A preliminary assessment to identify potential signs of dyslexia and reading difficulties.',
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      details: [
        'Assesses reading comprehension and word recognition',
        'Identifies potential phonological processing issues',
        'Takes approximately 10 minutes to complete'
      ]
    },
    {
      id: 'autism',
      title: 'Autism Spectrum Quotient (AQ) Test',
      description: 'A screening tool designed to identify traits associated with autism spectrum conditions in adults.',
      image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      details: [
        'Evaluates social skills, attention switching, communication, and imagination',
        'Takes approximately 10 minutes to complete',
        'Developed by researchers at Cambridge University'
      ]
    },
    {
      id: 'cognitive',
      title: 'Memory & Cognitive Function Test',
      description: 'A series of exercises to assess short-term memory, pattern recognition, and cognitive processing speed.',
      image: 'https://images.unsplash.com/photo-1565711561500-49678a10a63f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      details: [
        'Includes visual memory, number sequencing, and pattern recognition tasks',
        'Takes approximately 15 minutes to complete',
        'Provides separate scores for different cognitive domains'
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
        <h1 className="text-4xl font-bold mb-4 heading-animation">Neurological & Cognitive Tests</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          These assessments can help identify potential neurological and cognitive conditions. 
          They are designed as preliminary screening tools and not as diagnostic instruments.
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
                    <span className="text-secondary-500 mr-2">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                Start Test
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-12 bg-secondary-50 p-6 rounded-xl max-w-4xl mx-auto"
      >
        <h3 className="text-xl font-semibold mb-2">Important Information</h3>
        <p className="text-gray-700">
          These tests are not diagnostic tools and should not replace professional evaluation. If you have concerns about 
          your neurological or cognitive health, please consult with a healthcare professional such as a neurologist, 
          psychiatrist, or psychologist.
        </p>
      </motion.div>
    </div>
  );
};

export default NeurologicalTests;
