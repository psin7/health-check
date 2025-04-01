import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  const categories = [
    {
      title: 'Vision Tests',
      description: 'Tests for color blindness, astigmatism, and visual acuity.',
      icon: '👁️',
      path: '/vision-tests',
      color: 'from-blue-400 to-blue-600',
    },
    {
      title: 'Hearing Tests',
      description: 'Assessments for hearing ability, speech discrimination, and tinnitus.',
      icon: '👂',
      path: '/hearing-tests',
      color: 'from-teal-400 to-teal-600',
    },
    {
      title: 'Neurological & Cognitive Tests',
      description: 'Assessments for ADHD, dyslexia, autism spectrum, and cognitive function.',
      icon: '🧠',
      path: '/neurological-tests',
      color: 'from-purple-400 to-purple-600',
    },
    {
      title: 'Mental Health Tests',
      description: 'Screenings for depression, anxiety, bipolar disorder, PTSD, and OCD.',
      icon: '🧘',
      path: '/mental-health-tests',
      color: 'from-green-400 to-green-600',
    },
    {
      title: 'Other Health Tests',
      description: 'Tests for sleep apnea, diabetes risk, heart disease risk, and thyroid issues.',
      icon: '❤️',
      path: '/other-health-tests',
      color: 'from-red-400 to-red-600',
    },
    {
      title: 'IQ Test',
      description: 'Assess your cognitive abilities and problem-solving skills.',
      icon: '🧩',
      path: '/iq-test',
      color: 'from-yellow-400 to-yellow-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 heading-animation">
          Online Health Self-Assessment
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover preliminary insights about your health with our comprehensive
          self-assessment tools before consulting a healthcare professional.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {categories.map((category, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="card hover:shadow-xl"
          >
            <Link to={category.path} className="block h-full">
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center text-white text-2xl mb-4`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
              <p className="text-gray-600">{category.description}</p>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-16 bg-primary-50 p-8 rounded-xl max-w-4xl mx-auto"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Important Disclaimer</h2>
        <p className="text-gray-700">
          The tests provided on this website are for informational purposes only and are not intended to replace 
          professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other 
          qualified health provider with any questions you may have regarding a medical condition.
        </p>
      </motion.div>
    </div>
  );
};

export default Home;
