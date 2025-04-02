// Test data for various health assessments

// Depression Test (PHQ-9)
export const depressionTest = {
  id: 'depression',
  title: 'Depression Screening (PHQ-9)',
  category: 'Mental Health',
  description: 'The Patient Health Questionnaire (PHQ-9) is a widely used screening tool for depression.',
  instructions: 'Over the last 2 weeks, how often have you been bothered by any of the following problems?',
  questions: [
    {
      id: 1,
      text: 'Little interest or pleasure in doing things',
    },
    {
      id: 2,
      text: 'Feeling down, depressed, or hopeless',
    },
    {
      id: 3,
      text: 'Trouble falling or staying asleep, or sleeping too much',
    },
    {
      id: 4,
      text: 'Feeling tired or having little energy',
    },
    {
      id: 5,
      text: 'Poor appetite or overeating',
    },
    {
      id: 6,
      text: 'Feeling bad about yourself — or that you are a failure or have let yourself or your family down',
    },
    {
      id: 7,
      text: 'Trouble concentrating on things, such as reading the newspaper or watching television',
    },
    {
      id: 8,
      text: 'Moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual',
    },
    {
      id: 9,
      text: 'Thoughts that you would be better off dead or of hurting yourself in some way',
    }
  ],
  answerOptions: [
    { text: 'Not at all', score: 0 },
    { text: 'Several days', score: 1 },
    { text: 'More than half the days', score: 2 },
    { text: 'Nearly every day', score: 3 }
  ],
  resultCategories: [
    {
      minScore: 0,
      maxScore: 4,
      title: 'Minimal or No Depression',
      icon: '😊',
      color: 'bg-green-100 text-green-800',
      description: 'Your responses suggest minimal or no signs of depression. It appears that you are generally handling life\'s challenges well at this time.',
      recommendations: [
        'Continue your current healthy habits',
        'Maintain social connections',
        'Practice regular self-care',
        'Stay physically active'
      ],
      disclaimer: 'This is not a diagnostic tool. If you have concerns about your mental health, please consult a healthcare professional.',
      alertLevel: 'bg-green-50 text-green-800'
    },
    {
      minScore: 5,
      maxScore: 9,
      title: 'Mild Depression',
      icon: '🙂',
      color: 'bg-blue-100 text-blue-800',
      description: 'Your responses suggest mild depression symptoms. While these symptoms may be causing some distress, they may not significantly interfere with your daily functioning.',
      recommendations: [
        'Consider talking to a trusted friend or family member about how you feel',
        'Engage in regular physical activity',
        'Practice stress-reduction techniques like meditation or deep breathing',
        'Maintain a regular sleep schedule'
      ],
      disclaimer: 'This is not a diagnostic tool. If symptoms persist for more than two weeks, consider consulting a healthcare professional.',
      alertLevel: 'bg-blue-50 text-blue-800'
    },
    {
      minScore: 10,
      maxScore: 14,
      title: 'Moderate Depression',
      icon: '😐',
      color: 'bg-yellow-100 text-yellow-800',
      description: 'Your responses suggest moderate depression symptoms. These symptoms may be causing noticeable difficulties in your daily life and functioning.',
      recommendations: [
        'Consider scheduling an appointment with a mental health professional',
        'Talk to your primary care physician about your symptoms',
        'Continue or start regular physical activity',
        'Reach out to supportive friends or family'
      ],
      disclaimer: 'This screening suggests you may benefit from professional support. Please consider reaching out to a healthcare provider to discuss your symptoms.',
      alertLevel: 'bg-yellow-50 text-yellow-800'
    },
    {
      minScore: 15,
      maxScore: 19,
      title: 'Moderately Severe Depression',
      icon: '😔',
      color: 'bg-orange-100 text-orange-800',
      description: 'Your responses suggest moderately severe depression symptoms. These symptoms are likely causing significant difficulties in your daily functioning and well-being.',
      recommendations: [
        'Schedule an appointment with a mental health professional soon',
        'Consider both therapy and medication options',
        'Establish a support system of trusted individuals',
        'Focus on basic self-care like regular meals and sleep'
      ],
      disclaimer: 'This screening suggests you would likely benefit from professional support. Please reach out to a healthcare provider to discuss your symptoms.',
      alertLevel: 'bg-orange-50 text-orange-800'
    },
    {
      minScore: 20,
      maxScore: 27,
      title: 'Severe Depression',
      icon: '😢',
      color: 'bg-red-100 text-red-800',
      description: 'Your responses suggest severe depression symptoms. These symptoms are likely causing serious difficulties in multiple areas of your life.',
      recommendations: [
        'Seek professional help as soon as possible',
        'Contact a crisis helpline if you have thoughts of harming yourself',
        'Don\'t face this alone - involve trusted family or friends',
        'Consider a comprehensive treatment plan with a mental health professional'
      ],
      disclaimer: 'If you are having thoughts of harming yourself, please call the National Suicide Prevention Lifeline at 1-800-273-8255 or text HOME to 741741 to reach the Crisis Text Line. Emergency help is available 24/7.',
      alertLevel: 'bg-red-50 text-red-800'
    }
  ]
};

// Anxiety Test (GAD-7)
export const anxietyTest = {
  id: 'anxiety',
  title: 'Anxiety Assessment (GAD-7)',
  category: 'Mental Health',
  description: 'The Generalized Anxiety Disorder assessment (GAD-7) screens for signs of anxiety disorders.',
  instructions: 'Over the last 2 weeks, how often have you been bothered by the following problems?',
  questions: [
    {
      id: 1,
      text: 'Feeling nervous, anxious, or on edge',
    },
    {
      id: 2,
      text: 'Not being able to stop or control worrying',
    },
    {
      id: 3,
      text: 'Worrying too much about different things',
    },
    {
      id: 4,
      text: 'Trouble relaxing',
    },
    {
      id: 5,
      text: 'Being so restless that it\'s hard to sit still',
    },
    {
      id: 6,
      text: 'Becoming easily annoyed or irritable',
    },
    {
      id: 7,
      text: 'Feeling afraid, as if something awful might happen',
    }
  ],
  answerOptions: [
    { text: 'Not at all', score: 0 },
    { text: 'Several days', score: 1 },
    { text: 'More than half the days', score: 2 },
    { text: 'Nearly every day', score: 3 }
  ],
  resultCategories: [
    {
      minScore: 0,
      maxScore: 4,
      title: 'Minimal Anxiety',
      icon: '😊',
      color: 'bg-green-100 text-green-800',
      description: 'Your responses suggest minimal or no signs of anxiety. It appears that you are generally handling stress well at this time.',
      recommendations: [
        'Continue your current healthy habits',
        'Maintain regular stress management practices',
        'Stay physically active',
        'Prioritize good sleep hygiene'
      ],
      disclaimer: 'This is not a diagnostic tool. If you have concerns about your mental health, please consult a healthcare professional.',
      alertLevel: 'bg-green-50 text-green-800'
    },
    {
      minScore: 5,
      maxScore: 9,
      title: 'Mild Anxiety',
      icon: '🙂',
      color: 'bg-blue-100 text-blue-800',
      description: 'Your responses suggest mild anxiety symptoms. While these symptoms may be causing some distress, they may not significantly interfere with your daily functioning.',
      recommendations: [
        'Practice regular relaxation techniques like deep breathing or meditation',
        'Engage in regular physical activity',
        'Consider keeping a worry journal to track anxious thoughts',
        'Maintain a regular sleep schedule'
      ],
      disclaimer: 'This is not a diagnostic tool. If symptoms persist for more than two weeks, consider consulting a healthcare professional.',
      alertLevel: 'bg-blue-50 text-blue-800'
    },
    {
      minScore: 10,
      maxScore: 14,
      title: 'Moderate Anxiety',
      icon: '😐',
      color: 'bg-yellow-100 text-yellow-800',
      description: 'Your responses suggest moderate anxiety symptoms. These symptoms may be causing noticeable difficulties in your daily life and functioning.',
      recommendations: [
        'Consider scheduling an appointment with a mental health professional',
        'Talk to your primary care physician about your symptoms',
        'Practice daily relaxation techniques',
        'Limit caffeine and alcohol which can worsen anxiety'
      ],
      disclaimer: 'This screening suggests you may benefit from professional support. Please consider reaching out to a healthcare provider to discuss your symptoms.',
      alertLevel: 'bg-yellow-50 text-yellow-800'
    },
    {
      minScore: 15,
      maxScore: 21,
      title: 'Severe Anxiety',
      icon: '😰',
      color: 'bg-red-100 text-red-800',
      description: 'Your responses suggest severe anxiety symptoms. These symptoms are likely causing serious difficulties in multiple areas of your life.',
      recommendations: [
        'Seek professional help as soon as possible',
        'Consider both therapy and medication options with a healthcare provider',
        'Practice grounding techniques for immediate anxiety relief',
        'Establish a support system of trusted individuals'
      ],
      disclaimer: 'This screening suggests you would benefit from professional support. Please reach out to a healthcare provider to discuss your symptoms as soon as possible.',
      alertLevel: 'bg-red-50 text-red-800'
    }
  ]
};

// Color Blindness Test
export const colorBlindnessTest = {
  id: 'color-blindness',
  title: 'Color Blindness Test (Ishihara)',
  category: 'Vision',
  description: 'A simplified version of the Ishihara test to screen for red-green color vision deficiencies.',
  instructions: 'This test includes 10 Ishihara plates to assess your color vision. For each image, try to identify the number shown in the colored dots. Take your time and view each image in good lighting. If you wear glasses or contact lenses, keep them on during the test. If you cannot see a number or see a different number, select the appropriate option. This test is designed to detect common forms of color vision deficiency, particularly red-green color blindness.',
  questions: [
    {
      id: 1,
      text: 'What number do you see in this image?',
      imageUrl: '/images/ishihara/plate2.svg',
      correctAnswer: '74'
    },
    {
      id: 2,
      text: 'What number do you see in this image?',
      imageUrl: '/images/ishihara/plate1.svg',
      correctAnswer: '12'
    },
    {
      id: 3,
      text: 'What number do you see in this image?',
      imageUrl: '/images/ishihara/plate3.svg',
      correctAnswer: '6'
    },
    {
      id: 4,
      text: 'What number do you see in this image?',
      imageUrl: '/images/ishihara/plate4.svg',
      correctAnswer: '29'
    },
    {
      id: 5,
      text: 'What number do you see in this image?',
      imageUrl: '/images/ishihara/plate5.svg',
      correctAnswer: '42'
    },
    {
      id: 6,
      text: 'What number do you see in this image?',
      imageUrl: '/images/ishihara/plate6.svg',
      correctAnswer: '8'
    },
    {
      id: 7,
      text: 'What number do you see in this image?',
      imageUrl: '/images/ishihara/plate7.svg',
      correctAnswer: '15'
    },
    {
      id: 8,
      text: 'What number do you see in this image?',
      imageUrl: '/images/ishihara/plate8.svg',
      correctAnswer: '97'
    },
    {
      id: 9,
      text: 'What number do you see in this image?',
      imageUrl: '/images/ishihara/plate9.svg',
      correctAnswer: '45'
    },
    {
      id: 10,
      text: 'What number do you see in this image?',
      imageUrl: '/images/ishihara/plate10.svg',
      correctAnswer: '38'
    }
  ],
  answerOptions: [
    { text: 'I see the number correctly', score: 1 },
    { text: 'I see a different number', score: 0 },
    { text: 'I don\'t see any number', score: 0 }
  ],
  resultCategories: [
    {
      minScore: 0,
      maxScore: 3,
      title: 'Severe Color Vision Deficiency',
      icon: '👁️',
      color: 'bg-red-100 text-red-800',
      description: 'Your responses suggest a significant color vision deficiency. This could indicate red-green color blindness (the most common type) or another form of color vision impairment. You correctly identified very few of the numbers in the Ishihara plates.',
      recommendations: [
        'Schedule an appointment with an optometrist or ophthalmologist for a comprehensive assessment',
        'A professional color vision test can determine the specific type and severity of your color vision deficiency',
        'Consider using apps and tools designed to help those with color vision deficiencies',
        'Be aware that certain professions may have color vision requirements'
      ],
      disclaimer: 'This is a simplified screening test and not a substitute for a professional examination. Please consult with an eye care professional for a proper diagnosis.',
      alertLevel: 'bg-red-50 text-red-800'
    },
    {
      minScore: 4,
      maxScore: 6,
      title: 'Moderate Color Vision Deficiency',
      icon: '👁️',
      color: 'bg-yellow-100 text-yellow-800',
      description: 'Your responses indicate a moderate color vision deficiency. You may have difficulty distinguishing certain colors, particularly in the red-green spectrum. You were able to identify some of the numbers in the Ishihara plates, but missed others that people with normal color vision would typically see.',
      recommendations: [
        'Consider consulting with an eye care professional for further evaluation',
        'A comprehensive color vision test can provide more definitive results',
        'There are apps and tools designed to help those with color vision deficiencies',
        'This is usually not a serious medical condition but is important to know about'
      ],
      disclaimer: 'This is a simplified screening test and not a substitute for a professional examination. Please consult with an eye care professional for a proper diagnosis.',
      alertLevel: 'bg-yellow-50 text-yellow-800'
    },
    {
      minScore: 7,
      maxScore: 8,
      title: 'Mild Color Vision Deficiency',
      icon: '👁️',
      color: 'bg-blue-100 text-blue-800',
      description: 'Your results suggest a mild color vision deficiency. You were able to identify most of the numbers in the Ishihara plates, but had difficulty with a few. This might indicate a mild form of color vision deficiency or could be due to other factors such as lighting conditions or screen settings.',
      recommendations: [
        'Consider a follow-up with an eye care professional if you experience difficulties with color discrimination in daily life',
        'A comprehensive color vision test can provide more definitive results',
        'Be aware of situations where color discrimination might be important',
        'This is usually not a serious medical condition'
      ],
      disclaimer: 'This is a simplified screening test and not a substitute for a professional examination. Please consult with an eye care professional for a proper diagnosis.',
      alertLevel: 'bg-blue-50 text-blue-800'
    },
    {
      minScore: 9,
      maxScore: 10,
      title: 'Normal Color Vision',
      icon: '👁️',
      color: 'bg-green-100 text-green-800',
      description: 'Your responses suggest normal color vision. You were able to correctly identify almost all or all of the numbers in the Ishihara plates, which indicates that you can distinguish between different colors effectively.',
      recommendations: [
        'Continue with regular eye exams as recommended by eye care professionals',
        'Maintain good eye health with proper lighting when reading',
        'Protect your eyes from excessive UV exposure',
        'If you notice any changes in your vision, consult with an eye care professional'
      ],
      disclaimer: 'This is a simplified screening test and not a substitute for a professional examination. Please consult with an eye care professional for regular eye health check-ups.',
      alertLevel: 'bg-green-50 text-green-800'
    }
  ]
};

// Astigmatism Test
export const astigmatismTest = {
  id: 'astigmatism',
  title: 'Astigmatism Screening Test',
  category: 'Vision',
  description: 'A screening test to detect potential astigmatism by evaluating how you perceive lines and patterns.',
  instructions: 'Look at each image and answer the questions about what you see. For accurate results, if you wear glasses or contact lenses, keep them on during the test. View the images in good lighting and from a comfortable distance.',
  questions: [
    {
      id: 1,
      text: 'In this starburst pattern, do some lines appear darker, blurrier, or more distinct than others?',
      imageUrl: '/images/astigmatism/starburst1.svg',
      subText: 'Focus on the red dot in the center while observing the lines.'
    },
    {
      id: 2,
      text: 'In this radial pattern, do the lines appear equally sharp in all directions?',
      imageUrl: '/images/astigmatism/starburst2.svg',
      subText: 'Keep focusing on the red dot in the center.'
    },
    {
      id: 3,
      text: 'Do you see any distortion, blurring, or stretching in these lines?',
      imageUrl: '/images/astigmatism/starburst3.svg',
      subText: 'Notice if some lines appear clearer than others.'
    },
    {
      id: 4,
      text: 'In this grid pattern, do all the lines appear equally clear and straight?',
      imageUrl: '/images/astigmatism/starburst4.svg',
      subText: 'Pay attention to whether horizontal or vertical lines appear clearer.'
    },
    {
      id: 5,
      text: 'When looking at this pattern, do you experience any eye strain or discomfort?',
      imageUrl: '/images/astigmatism/starburst5.svg',
      subText: 'Focus on the red dot for about 5 seconds before answering.'
    }
  ],
  answerOptions: [
    { text: 'Yes, significantly', score: 2 },
    { text: 'Yes, slightly', score: 1 },
    { text: 'No, everything appears uniform', score: 0 }
  ],
  resultCategories: [
    {
      minScore: 7,
      maxScore: 10,
      title: 'High Likelihood of Astigmatism',
      icon: '👁️',
      color: 'bg-red-100 text-red-800',
      description: 'Your responses suggest a high likelihood of astigmatism. You reported significant differences in how you perceive lines in different orientations, which is a common indicator of astigmatism.',
      recommendations: [
        'Schedule an appointment with an optometrist or ophthalmologist for a comprehensive eye exam',
        'Mention your specific symptoms and the results of this screening test',
        'If diagnosed, corrective lenses (glasses or contacts) can typically address astigmatism',
        'Untreated astigmatism can lead to eye strain, headaches, and fatigue'
      ],
      disclaimer: 'This is a simplified screening test and not a substitute for a professional examination. Please consult with an eye care professional for a proper diagnosis.',
      alertLevel: 'bg-red-50 text-red-800'
    },
    {
      minScore: 4,
      maxScore: 6,
      title: 'Moderate Likelihood of Astigmatism',
      icon: '👁️',
      color: 'bg-yellow-100 text-yellow-800',
      description: 'Your responses suggest a moderate likelihood of astigmatism. You noticed some differences in how lines appear in different orientations, which may indicate mild to moderate astigmatism.',
      recommendations: [
        'Consider scheduling an eye exam with an optometrist or ophthalmologist',
        'Be prepared to describe what you observed during this screening test',
        'Even mild astigmatism can be corrected with proper prescription lenses',
        'Regular eye exams are important for maintaining optimal vision'
      ],
      disclaimer: 'This is a simplified screening test and not a substitute for a professional examination. Please consult with an eye care professional for a proper diagnosis.',
      alertLevel: 'bg-yellow-50 text-yellow-800'
    },
    {
      minScore: 0,
      maxScore: 3,
      title: 'Low Likelihood of Astigmatism',
      icon: '👁️',
      color: 'bg-green-100 text-green-800',
      description: 'Your responses suggest a low likelihood of significant astigmatism. You reported minimal differences in how you perceive lines in different orientations.',
      recommendations: [
        'Continue with regular eye exams as recommended by eye care professionals',
        'If you experience eye strain, headaches, or blurred vision in the future, consult with an eye care professional',
        'Maintain good eye health with proper lighting when reading or using digital devices',
        'Protect your eyes from excessive UV exposure'
      ],
      disclaimer: 'This is a simplified screening test and not a substitute for a professional examination. Please consult with an eye care professional for regular eye health check-ups.',
      alertLevel: 'bg-green-50 text-green-800'
    }
  ]
};

// Professional Standard IQ Test
export const iqTest = {
  id: 'iq-test',
  title: 'Professional-Grade IQ Assessment',
  category: 'Cognitive',
  description: 'A comprehensive assessment of cognitive abilities based on professional IQ test standards including verbal comprehension, perceptual reasoning, working memory, processing speed, and fluid intelligence.',
  instructions: 'This test assesses multiple cognitive domains similar to professional IQ tests. Select the best answer for each question. Try to answer at a steady pace without rushing for the most accurate results. The test will take approximately 20-30 minutes to complete.',
  questions: [
    // Verbal Comprehension Domain
    {
      id: 1,
      text: 'What is the relationship between "democracy" and "government"?',
      options: [
        'Democracy is a type of government',
        'Government is a type of democracy',
        'They are unrelated concepts',
        'They are identical concepts'
      ],
      correctAnswer: 'Democracy is a type of government',
      domain: 'Verbal Comprehension'
    },
    {
      id: 2,
      text: 'What do the words "frugal" and "economical" have in common?',
      options: [
        'They are opposites',
        'They both relate to saving money',
        'They both relate to time management',
        'They have no relationship'
      ],
      correctAnswer: 'They both relate to saving money',
      domain: 'Verbal Comprehension'
    },
    {
      id: 3,
      text: 'Complete the analogy: Book is to Reading as Fork is to:',
      options: [
        'Kitchen',
        'Eating',
        'Cooking',
        'Utensil'
      ],
      correctAnswer: 'Eating',
      domain: 'Verbal Comprehension'
    },
    {
      id: 4,
      text: 'Which of these words is most different from the others?',
      options: [
        'Hesitant',
        'Reluctant',
        'Decisive',
        'Tentative'
      ],
      correctAnswer: 'Decisive',
      domain: 'Verbal Comprehension'
    },
    {
      id: 5,
      text: 'What does the proverb "Don\'t count your chickens before they hatch" mean?',
      options: [
        'Be careful when counting farm animals',
        'Don\'t rely on something before it\'s certain',
        'Farming requires patience and careful planning',
        'Always count everything twice to be sure'
      ],
      correctAnswer: 'Don\'t rely on something before it\'s certain',
      domain: 'Verbal Comprehension'
    },
    
    // Perceptual Reasoning Domain
    {
      id: 6,
      text: 'Which figure completes the pattern?',
      imageUrl: '/images/iq-test/pattern1.svg',
      options: [
        'A',
        'B',
        'C',
        'D'
      ],
      correctAnswer: 'C',
      domain: 'Perceptual Reasoning'
    },
    {
      id: 7,
      text: 'What number should come next in this sequence?',
      imageUrl: '/images/iq-test/pattern2.svg',
      options: [
        'A',
        'B',
        'C',
        'D'
      ],
      correctAnswer: 'C',  // 13 (Fibonacci sequence)
      domain: 'Perceptual Reasoning'
    },
    {
      id: 8,
      text: 'Which figure belongs in the empty cell to complete the pattern?',
      imageUrl: '/images/iq-test/pattern3.svg',
      options: [
        'A',
        'B',
        'C',
        'D'
      ],
      correctAnswer: 'C',  // Green triangle
      domain: 'Perceptual Reasoning'
    },
    {
      id: 9,
      text: 'Which shape should come next in this logical sequence?',
      imageUrl: '/images/iq-test/pattern4.svg',
      options: [
        'A',
        'B',
        'C',
        'D'
      ],
      correctAnswer: 'C',  // Empty square
      domain: 'Perceptual Reasoning'
    },
    {
      id: 10,
      text: 'If a square has an area of 16 square inches, what is the length of its diagonal?',
      options: [
        '4 inches',
        '5.66 inches',
        '8 inches',
        '4.25 inches'
      ],
      correctAnswer: '5.66 inches',  // √32 = 4√2 ≈ 5.66
      domain: 'Perceptual Reasoning'
    },
    
    // Working Memory Domain
    {
      id: 11,
      text: 'Read this sequence once, then select which number would be in the 7th position if you continued the pattern: 2, 5, 8, 11, 14, 17, ...',
      options: [
        '19',
        '20',
        '21',
        '23'
      ],
      correctAnswer: '20',  // +3 pattern
      domain: 'Working Memory'
    },
    {
      id: 12,
      text: 'Rearrange these letters to form a word, then select the category it belongs to: AETRW',
      options: [
        'Animal',
        'Food',
        'Nature',
        'Household item'
      ],
      correctAnswer: 'Nature',  // WATER
      domain: 'Working Memory'
    },
    {
      id: 13,
      text: 'If you count backward from 100 by 7, which of these numbers would you say?',
      options: [
        '97',
        '93',
        '86',
        '79'
      ],
      correctAnswer: '79',  // 100, 93, 86, 79
      domain: 'Working Memory'
    },
    {
      id: 14,
      text: 'Remember this sequence: 7-2-8-3-9-5-1. What is the sum of the 2nd and 6th numbers?',
      options: [
        '6',
        '7',
        '10',
        '11'
      ],
      correctAnswer: '7',  // 2 + 5 = 7
      domain: 'Working Memory'
    },
    
    // Processing Speed Domain
    {
      id: 15,
      text: 'Which symbol appears most frequently in this sequence? @#$%@#@&%@#$@',
      options: [
        '@',
        '#',
        '$',
        '%'
      ],
      correctAnswer: '@',  // 5 times
      domain: 'Processing Speed'
    },
    {
      id: 16,
      text: 'If today is Tuesday, what day will it be 100 days from now?',
      options: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday'
      ],
      correctAnswer: 'Tuesday',  // 100 ÷ 7 = 14 remainder 2, so 2 days later = same day
      domain: 'Processing Speed'
    },
    {
      id: 17,
      text: 'Find the next number in the sequence: 1, 4, 9, 16, 25, 36, ...',
      options: [
        '42',
        '49',
        '54',
        '64'
      ],
      correctAnswer: '49',  // 7² = 49 (sequence of squares)
      domain: 'Processing Speed'
    },
    
    // Fluid Intelligence
    {
      id: 18,
      text: 'All roses have thorns. Some flowers are roses. Therefore:',
      options: [
        'All flowers have thorns',
        'Some flowers have thorns',
        'No flowers have thorns',
        'Cannot be determined'
      ],
      correctAnswer: 'Some flowers have thorns',
      domain: 'Fluid Intelligence'
    },
    {
      id: 19,
      text: 'Which word does not belong in this group?',
      options: [
        'Apple',
        'Banana',
        'Carrot',
        'Grape'
      ],
      correctAnswer: 'Carrot',  // Not a fruit
      domain: 'Fluid Intelligence'
    },
    {
      id: 20,
      text: 'If it takes 5 machines 5 minutes to make 5 widgets, how long would it take 100 machines to make 100 widgets?',
      options: [
        '5 minutes',
        '20 minutes',
        '100 minutes',
        '500 minutes'
      ],
      correctAnswer: '5 minutes',
      domain: 'Fluid Intelligence'
    }
  ],
  answerOptions: [
    { text: 'A', score: 1 },
    { text: 'B', score: 1 },
    { text: 'C', score: 1 },
    { text: 'D', score: 1 }
  ],
  resultCategories: [
    {
      minScore: 0,
      maxScore: 10,
      iqRange: '70-84',
      title: 'Below Average IQ Range (70-84)',
      icon: '🧠',
      color: 'bg-blue-100 text-blue-800',
      description: 'Your performance suggests cognitive abilities in the below average range. This corresponds to approximately 14% of the population. Remember that IQ is just one measure of ability and doesn\'t reflect your full potential or capabilities in many important areas of life.',
      recommendations: [
        'Consider specialized learning strategies that leverage your personal strengths',
        'Regular reading and vocabulary building can help improve verbal comprehension',
        'Practice puzzles, spatial tasks and pattern recognition for perceptual reasoning',
        'Memory games and concentration exercises can help enhance working memory capacity',
        'Ensure adequate sleep, nutrition, and physical exercise, which all support cognitive function',
        'A professional assessment would provide more detailed insights into your cognitive profile'
      ],
      disclaimer: 'This online assessment is not equivalent to a professionally administered IQ test. Many factors can affect test performance including stress, fatigue, testing environment, and familiarity with test formats. This test should not be used for diagnostic purposes or making important life decisions.',
      alertLevel: 'bg-blue-50 text-blue-800'
    },
    {
      minScore: 11,
      maxScore: 14,
      iqRange: '85-99',
      title: 'Low Average IQ Range (85-99)',
      icon: '🧠',
      color: 'bg-green-100 text-green-800',
      description: 'Your performance suggests cognitive abilities in the low average range. This corresponds to approximately 34% of the population. While slightly below the statistical mean, this range indicates functional cognitive abilities for most everyday tasks and many professional roles.',
      recommendations: [
        'Continue engaging in diverse mentally stimulating activities',
        'Challenge yourself with new learning experiences to build cognitive reserve',
        'Consider activities that target different cognitive domains (verbal, spatial, memory, etc.)',
        'Skill-based learning (e.g., musical instruments, languages, technical skills) can enhance cognitive functioning',
        'Maintain a healthy lifestyle with regular exercise and good nutrition',
        'Remember that cognitive abilities can be improved with consistent practice and challenge'
      ],
      disclaimer: 'This online assessment is not equivalent to a professionally administered IQ test. Many factors can affect test performance including stress, fatigue, testing environment, and familiarity with test formats. This test should not be used for diagnostic purposes or making important life decisions.',
      alertLevel: 'bg-green-50 text-green-800'
    },
    {
      minScore: 15,
      maxScore: 17,
      iqRange: '100-114',
      title: 'Average IQ Range (100-114)',
      icon: '🧠',
      color: 'bg-teal-100 text-teal-800',
      description: 'Your performance suggests cognitive abilities in the average to high average range. This corresponds to approximately 34% of the population. This range indicates solid cognitive abilities that are well-suited for most academic and professional pursuits.',
      recommendations: [
        'Leverage your cognitive abilities by exploring intellectually stimulating activities',
        'Challenge yourself with increasingly complex problems to build on your strengths',
        'Consider activities that further develop your cognitive strengths while addressing any relative weaknesses',
        'Interdisciplinary learning can help you make creative connections between different knowledge domains',
        'Consider teaching others as a way to solidify and deepen your own understanding',
        'Explore new fields that interest you - your cognitive profile suggests you can succeed in many areas'
      ],
      disclaimer: 'This online assessment is not equivalent to a professionally administered IQ test. Many factors can affect test performance including stress, fatigue, testing environment, and familiarity with test formats. This test should not be used for diagnostic purposes or making important life decisions.',
      alertLevel: 'bg-teal-50 text-teal-800'
    },
    {
      minScore: 18,
      maxScore: 20,
      iqRange: '115-130+',
      title: 'Superior IQ Range (115-130+)',
      icon: '🧠',
      color: 'bg-indigo-100 text-indigo-800',
      description: 'Your performance suggests cognitive abilities in the superior to very superior range. This corresponds to approximately 14% or less of the population. This range indicates exceptional cognitive abilities that can excel in demanding intellectual pursuits.',
      recommendations: [
        'Seek out intellectually stimulating environments and complex challenges',
        'Consider joining groups like Mensa or other high-IQ societies',
        'Explore advanced academic or professional fields that match your cognitive strengths',
        'Consider how your cognitive abilities can be applied to solve meaningful problems',
        'Develop metacognitive skills to optimize your learning and problem-solving',
        'Remember that emotional intelligence and practical skills are also important for overall success'
      ],
      disclaimer: 'This online assessment is not equivalent to a professionally administered IQ test. Many factors can affect test performance including stress, fatigue, testing environment, and familiarity with test formats. This test should not be used for diagnostic purposes or making important life decisions.',
      alertLevel: 'bg-indigo-50 text-indigo-800'
    }
  ]
};

// Visual Acuity Test
export const visualAcuityTest = {
  id: 'visual-acuity',
  title: 'Visual Acuity Test',
  category: 'Vision',
  description: 'A simplified version of the eye chart test to assess your distance vision.',
  instructions: 'For accurate results, position yourself approximately 3 feet (1 meter) from your screen. If you wear glasses or contact lenses for distance vision, keep them on. Try to read the letters on each chart and select the option that best matches what you see.',
  questions: [
    {
      id: 1,
      text: 'What letter(s) do you see in this chart?',
      imageUrl: '/images/visual-acuity/chart1.svg',
      subText: 'This is equivalent to 20/200 vision (large letter)',
      correctAnswer: 'E'
    },
    {
      id: 2,
      text: 'What letters do you see in this chart?',
      imageUrl: '/images/visual-acuity/chart2.svg',
      subText: 'This is equivalent to 20/100 vision',
      correctAnswer: 'FP'
    },
    {
      id: 3,
      text: 'What letters do you see in this chart?',
      imageUrl: '/images/visual-acuity/chart3.svg',
      subText: 'This is equivalent to 20/70 vision',
      correctAnswer: 'TOZ'
    },
    {
      id: 4,
      text: 'What letters do you see in this chart?',
      imageUrl: '/images/visual-acuity/chart4.svg',
      subText: 'This is equivalent to 20/50 vision',
      correctAnswer: 'LPED'
    },
    {
      id: 5,
      text: 'What letters do you see in this chart?',
      imageUrl: '/images/visual-acuity/chart5.svg',
      subText: 'This is equivalent to 20/40 vision',
      correctAnswer: 'PECFD'
    },
    {
      id: 6,
      text: 'What letters do you see in this chart?',
      imageUrl: '/images/visual-acuity/chart6.svg',
      subText: 'This is equivalent to 20/30 vision',
      correctAnswer: 'EDFCZP'
    },
    {
      id: 7,
      text: 'What letters do you see in this chart?',
      imageUrl: '/images/visual-acuity/chart7.svg',
      subText: 'This is equivalent to 20/25 vision',
      correctAnswer: 'FELOPZD'
    },
    {
      id: 8,
      text: 'What letters do you see in this chart?',
      imageUrl: '/images/visual-acuity/chart8.svg',
      subText: 'This is equivalent to 20/20 vision (normal)',
      correctAnswer: 'DEFPOTEC'
    },
    {
      id: 9,
      text: 'What letters do you see in this chart?',
      imageUrl: '/images/visual-acuity/chart9.svg',
      subText: 'This is equivalent to 20/15 vision (better than normal)',
      correctAnswer: 'FDPLTCEO'
    },
    {
      id: 10,
      text: 'What letters do you see in this chart?',
      imageUrl: '/images/visual-acuity/chart10.svg',
      subText: 'This is equivalent to 20/10 vision (excellent)',
      correctAnswer: 'ZEFOLCPTD'
    }
  ],
  answerOptions: [
    { text: 'I can see all letters clearly', score: 1 },
    { text: 'I can see some letters but not all', score: 0.5 },
    { text: 'I cannot see the letters clearly', score: 0 }
  ],
  resultCategories: [
    {
      minScore: 9,
      maxScore: 10,
      title: 'Excellent Vision',
      icon: '👁️',
      color: 'bg-green-100 text-green-800',
      description: 'Your responses suggest excellent visual acuity. You were able to correctly identify letters even at the smallest sizes, which indicates vision that may be better than 20/20.',
      recommendations: [
        'Continue with regular eye exams as recommended by eye care professionals',
        'Protect your eyes from excessive UV exposure with appropriate sunglasses',
        'Take regular breaks when using digital devices to prevent eye strain',
        'Maintain a healthy diet rich in vitamins A, C, and E which support eye health'
      ],
      disclaimer: 'This is a simplified screening test and not a substitute for a professional examination. Please consult with an eye care professional for regular eye health check-ups.',
      alertLevel: 'bg-green-50 text-green-800'
    },
    {
      minScore: 7,
      maxScore: 8.5,
      title: 'Good Vision',
      icon: '👁️',
      color: 'bg-green-100 text-green-800',
      description: 'Your responses suggest good visual acuity. You were able to identify most letters, including some smaller ones, which indicates vision around 20/20 to 20/25.',
      recommendations: [
        'Continue with regular eye exams as recommended by eye care professionals',
        'Consider using proper lighting when reading or doing detailed work',
        'Take regular breaks when using digital devices to prevent eye strain',
        'Protect your eyes from excessive UV exposure with appropriate sunglasses'
      ],
      disclaimer: 'This is a simplified screening test and not a substitute for a professional examination. Please consult with an eye care professional for regular eye health check-ups.',
      alertLevel: 'bg-green-50 text-green-800'
    },
    {
      minScore: 4,
      maxScore: 6.5,
      title: 'Moderate Vision',
      icon: '👁️',
      color: 'bg-yellow-100 text-yellow-800',
      description: 'Your responses suggest moderate visual acuity. You were able to identify larger letters but had difficulty with smaller ones, which may indicate vision around 20/30 to 20/50.',
      recommendations: [
        'Consider scheduling an eye exam with an optometrist or ophthalmologist',
        'You may benefit from corrective lenses (glasses or contacts) if you don\'t already use them',
        'If you already use corrective lenses, your prescription may need updating',
        'Proper lighting is important when reading or doing detailed work'
      ],
      disclaimer: 'This is a simplified screening test and not a substitute for a professional examination. Please consult with an eye care professional for a proper diagnosis.',
      alertLevel: 'bg-yellow-50 text-yellow-800'
    },
    {
      minScore: 0,
      maxScore: 3.5,
      title: 'Below Average Vision',
      icon: '👁️',
      color: 'bg-red-100 text-red-800',
      description: 'Your responses suggest below average visual acuity. You had difficulty identifying many of the letters, which may indicate vision of 20/70 or worse.',
      recommendations: [
        'Schedule an appointment with an optometrist or ophthalmologist for a comprehensive eye exam',
        'Corrective lenses (glasses or contacts) may significantly improve your vision',
        'If you already use corrective lenses, your prescription may need updating',
        'Mention your specific difficulties with this screening test to your eye care professional'
      ],
      disclaimer: 'This is a simplified screening test and not a substitute for a professional examination. Please consult with an eye care professional for a proper diagnosis.',
      alertLevel: 'bg-red-50 text-red-800'
    }
  ]
};

// Hearing Test
export const hearingTest = {
  id: 'hearing',
  title: 'Hearing Test',
  category: 'Hearing',
  description: 'A self-assessment to evaluate your hearing abilities across different frequencies and situations.',
  instructions: 'This test evaluates your hearing abilities in various situations. For each question, select the option that best describes your experience. For the most accurate results, take this test in a quiet environment.',
  questions: [
    {
      id: 1,
      text: 'How well can you hear low-frequency sounds like thunder, bass drums, or a tuba?',
      imageUrl: '/images/hearing/low_frequency.svg',
      subText: 'Low frequency sounds (125-250 Hz) include thunder, bass drums, and tuba'
    },
    {
      id: 2,
      text: 'How well can you hear mid-frequency sounds like normal conversation or a telephone ringing?',
      imageUrl: '/images/hearing/mid_frequency.svg',
      subText: 'Mid frequency sounds (500-2000 Hz) include human speech, piano, and telephone'
    },
    {
      id: 3,
      text: 'How well can you hear high-frequency sounds like birds chirping, whistles, or cymbals?',
      imageUrl: '/images/hearing/high_frequency.svg',
      subText: 'High frequency sounds (4000-8000 Hz) include birds chirping, whistles, and cymbals'
    },
    {
      id: 4,
      text: 'How well can you follow a conversation in a noisy environment (like a restaurant or party)?',
      imageUrl: '/images/hearing/background_noise.svg',
      subText: 'This tests your ability to filter out background noise and focus on speech'
    },
    {
      id: 5,
      text: 'How well can you determine which direction a sound is coming from?',
      imageUrl: '/images/hearing/directional_hearing.svg',
      subText: 'Directional hearing helps locate sound sources in your environment'
    },
    {
      id: 6,
      text: 'How well can you hear and understand conversations over the phone?',
      imageUrl: '/images/hearing/phone_conversation.svg',
      subText: 'Phone conversations lack visual cues and may be challenging for some'
    },
    {
      id: 7,
      text: 'How well can you hear whispered speech or very quiet sounds?',
      imageUrl: '/images/hearing/whisper_test.svg',
      subText: 'Whispered speech is typically around 30 decibels, much quieter than normal speech'
    },
    {
      id: 8,
      text: 'Do you experience ringing, buzzing, or other sounds in your ears when no external sound is present?',
      imageUrl: '/images/hearing/tinnitus.svg',
      subText: 'This condition is called tinnitus and can be associated with hearing loss'
    },
    {
      id: 9,
      text: 'Do you find sudden loud sounds particularly uncomfortable or painful?',
      imageUrl: '/images/hearing/sudden_loud_sounds.svg',
      subText: 'Heightened sensitivity to loud sounds may indicate hyperacusis'
    },
    {
      id: 10,
      text: 'How clearly can you hear sounds without distortion or muffling?',
      imageUrl: '/images/hearing/sound_clarity.svg',
      subText: 'Sound clarity refers to the quality and crispness of perceived sounds'
    },
    {
      id: 11,
      text: 'How well can you distinguish between similar-sounding words (like "bear" vs "pear")?',
      imageUrl: '/images/hearing/speech_discrimination.svg',
      subText: 'Speech discrimination is the ability to differentiate between similar speech sounds'
    }
  ],
  answerOptions: [
    { text: 'Very well / No difficulty', score: 2 },
    { text: 'Moderately well / Some difficulty', score: 1 },
    { text: 'Poorly / Significant difficulty', score: 0 }
  ],
  resultCategories: [
    {
      minScore: 18,
      maxScore: 22,
      title: 'Excellent Hearing',
      icon: '👂',
      color: 'bg-green-100 text-green-800',
      description: 'Your responses suggest excellent hearing abilities across all frequencies and situations. You appear to have no significant difficulty with hearing in various environments.',
      recommendations: [
        'Continue to protect your hearing by avoiding prolonged exposure to loud noises',
        'Use appropriate hearing protection in noisy environments (concerts, construction sites, etc.)',
        'Consider having a baseline hearing test with an audiologist for future reference',
        'Be aware that hearing naturally changes with age, so periodic reassessment is beneficial'
      ],
      disclaimer: 'This is a simplified screening test and not a substitute for a professional hearing evaluation. For any concerns about your hearing, please consult with an audiologist or ENT specialist.',
      alertLevel: 'bg-green-50 text-green-800'
    },
    {
      minScore: 12,
      maxScore: 17,
      title: 'Good Hearing',
      icon: '👂',
      color: 'bg-green-100 text-green-800',
      description: 'Your responses suggest generally good hearing abilities with some minor difficulties in specific situations or frequency ranges.',
      recommendations: [
        'Be mindful of situations where you experience difficulty and consider positioning yourself to optimize hearing',
        'Protect your hearing by limiting exposure to loud noises and using hearing protection when necessary',
        'Consider a professional hearing evaluation to identify any specific areas of hearing loss',
        'In challenging listening environments, reduce background noise when possible'
      ],
      disclaimer: 'This is a simplified screening test and not a substitute for a professional hearing evaluation. For any concerns about your hearing, please consult with an audiologist or ENT specialist.',
      alertLevel: 'bg-green-50 text-green-800'
    },
    {
      minScore: 6,
      maxScore: 11,
      title: 'Moderate Hearing Difficulties',
      icon: '👂',
      color: 'bg-yellow-100 text-yellow-800',
      description: 'Your responses suggest moderate difficulties with hearing in several situations or frequency ranges. This may be impacting your daily communication.',
      recommendations: [
        'Schedule a comprehensive hearing evaluation with an audiologist',
        'When conversing with others, position yourself to see their face to help with understanding',
        'Reduce background noise when having important conversations',
        'Consider using assistive listening devices for specific situations like watching TV or phone calls',
        'Inform friends and family about your hearing difficulties so they can communicate more effectively with you'
      ],
      disclaimer: 'This is a simplified screening test and not a substitute for a professional hearing evaluation. Please consult with an audiologist or ENT specialist for proper diagnosis and treatment options.',
      alertLevel: 'bg-yellow-50 text-yellow-800'
    },
    {
      minScore: 0,
      maxScore: 5,
      title: 'Significant Hearing Difficulties',
      icon: '👂',
      color: 'bg-red-100 text-red-800',
      description: 'Your responses suggest significant difficulties with hearing across multiple situations and frequency ranges. This is likely impacting your daily communication and quality of life.',
      recommendations: [
        'Schedule a comprehensive hearing evaluation with an audiologist as soon as possible',
        'Discuss hearing aid options and other assistive technologies with hearing healthcare professionals',
        'Learn communication strategies to help manage hearing difficulties',
        'Consider speech reading (lip reading) classes if appropriate',
        'Join support groups for people with hearing loss for additional resources and emotional support'
      ],
      disclaimer: 'This is a simplified screening test and not a substitute for a professional hearing evaluation. Please consult with an audiologist or ENT specialist for proper diagnosis and treatment options.',
      alertLevel: 'bg-red-50 text-red-800'
    }
  ]
};

// ADHD Test (based on ASRS-v1.1)
export const adhdTest = {
  id: 'adhd',
  title: 'ADHD Screening Test',
  category: 'Neurological',
  description: 'Based on the Adult ADHD Self-Report Scale (ASRS-v1.1) developed in conjunction with the World Health Organization.',
  instructions: 'Over the past 6 months, how often have you experienced the following?',
  questions: [
    {
      id: 1,
      text: 'How often do you have trouble wrapping up the final details of a project, once the challenging parts have been done?',
      imageUrl: '/images/neurological/adhd_test.svg',
      subText: 'This question assesses task completion and follow-through.'
    },
    {
      id: 2,
      text: 'How often do you have difficulty getting things in order when you have to do a task that requires organization?',
      subText: 'This question evaluates organizational skills.'
    },
    {
      id: 3,
      text: 'How often do you have problems remembering appointments or obligations?',
      subText: 'This question assesses memory and responsibility management.'
    },
    {
      id: 4,
      text: 'When you have a task that requires a lot of thought, how often do you avoid or delay getting started?',
      subText: 'This question evaluates procrastination and task initiation.'
    },
    {
      id: 5,
      text: 'How often do you fidget or squirm with your hands or feet when you have to sit down for a long time?',
      subText: 'This question assesses hyperactivity symptoms.'
    },
    {
      id: 6,
      text: 'How often do you feel overly active and compelled to do things, like you were driven by a motor?',
      subText: 'This question evaluates feelings of restlessness.'
    },
    {
      id: 7,
      text: 'How often do you make careless mistakes when you have to work on a boring or difficult project?',
      subText: 'This question assesses attention to detail.'
    },
    {
      id: 8,
      text: 'How often do you have difficulty keeping your attention when you are doing boring or repetitive work?',
      subText: 'This question evaluates sustained attention.'
    },
    {
      id: 9,
      text: 'How often do you have difficulty concentrating on what people say to you, even when they are speaking to you directly?',
      subText: 'This question assesses listening skills and attention during conversation.'
    },
    {
      id: 10,
      text: 'How often do you misplace or have difficulty finding things at home or at work?',
      subText: 'This question evaluates organization of personal items.'
    },
    {
      id: 11,
      text: 'How often are you distracted by activity or noise around you?',
      subText: 'This question assesses distractibility.'
    },
    {
      id: 12,
      text: 'How often do you leave your seat in meetings or other situations in which you are expected to remain seated?',
      subText: 'This question evaluates hyperactivity in structured settings.'
    },
    {
      id: 13,
      text: 'How often do you feel restless or fidgety?',
      subText: 'This question assesses subjective feelings of restlessness.'
    },
    {
      id: 14,
      text: 'How often do you have difficulty unwinding and relaxing when you have time to yourself?',
      subText: 'This question evaluates ability to relax.'
    },
    {
      id: 15,
      text: 'How often do you find yourself talking too much when you are in social situations?',
      subText: 'This question assesses excessive talking.'
    },
    {
      id: 16,
      text: 'When you are in a conversation, how often do you find yourself finishing the sentences of the people you are talking to, before they can finish them themselves?',
      subText: 'This question evaluates impulsivity in conversation.'
    },
    {
      id: 17,
      text: 'How often do you have difficulty waiting your turn in situations when turn taking is required?',
      subText: 'This question assesses patience and impulse control.'
    },
    {
      id: 18,
      text: 'How often do you interrupt others when they are busy?',
      subText: 'This question evaluates social awareness and impulse control.'
    }
  ],
  answerOptions: [
    { text: 'Never', score: 0 },
    { text: 'Rarely', score: 1 },
    { text: 'Sometimes', score: 2 },
    { text: 'Often', score: 3 },
    { text: 'Very Often', score: 4 }
  ],
  resultCategories: [
    {
      minScore: 0,
      maxScore: 24,
      title: 'Low Likelihood of ADHD',
      icon: '✓',
      color: 'bg-green-100 text-green-800',
      description: 'Your responses suggest a low likelihood of ADHD. Your attention, focus, and activity levels appear to be within the typical range.',
      recommendations: [
        'Continue to practice good organizational skills and time management',
        'Maintain a healthy lifestyle with regular exercise and adequate sleep',
        'If you still have concerns, consider discussing them with a healthcare provider'
      ],
      disclaimer: 'This screening tool is not a diagnostic instrument. A person with a low score may still experience ADHD symptoms.',
      alertLevel: 'bg-green-50 text-green-800'
    },
    {
      minScore: 25,
      maxScore: 44,
      title: 'Possible ADHD',
      icon: '!',
      color: 'bg-yellow-100 text-yellow-800',
      description: 'Your responses suggest some symptoms consistent with ADHD. These symptoms may be causing some difficulties in your daily life.',
      recommendations: [
        'Consider discussing these results with a healthcare provider',
        'Keep a journal of situations where you notice attention or hyperactivity issues',
        'Try implementing structure and routines to help manage symptoms',
        'Practice mindfulness techniques to improve focus and attention'
      ],
      disclaimer: 'This screening tool provides only a preliminary assessment. A comprehensive evaluation by a healthcare professional is necessary for diagnosis.',
      alertLevel: 'bg-yellow-50 text-yellow-800'
    },
    {
      minScore: 45,
      maxScore: 72,
      title: 'High Likelihood of ADHD',
      icon: '!!',
      color: 'bg-red-100 text-red-800',
      description: 'Your responses suggest a high likelihood of ADHD. The symptoms you reported are consistent with significant attention and/or hyperactivity-impulsivity issues that may be impacting multiple areas of your life.',
      recommendations: [
        'Consult with a healthcare provider specializing in ADHD for a comprehensive evaluation',
        'Learn more about ADHD through reputable resources',
        'Consider joining a support group for individuals with ADHD',
        'Explore evidence-based treatments such as medication, cognitive-behavioral therapy, and coaching'
      ],
      disclaimer: 'This screening tool is not a substitute for clinical evaluation. A high score indicates the need for a professional assessment to determine if ADHD is present and to rule out other conditions.',
      alertLevel: 'bg-red-50 text-red-800'
    }
  ]
};

// Dyslexia Screening Test
export const dyslexiaTest = {
  id: 'dyslexia',
  title: 'Dyslexia Screening Test',
  category: 'Neurological',
  description: 'A comprehensive screening tool to assess risk factors and symptoms associated with dyslexia.',
  instructions: 'Answer each question based on your experiences or observations. Choose the option that best applies to you or the person you are assessing.',
  questions: [
    {
      id: 1,
      text: 'Difficulty with reading fluently or reading well below the expected level for age',
    },
    {
      id: 2,
      text: 'Problems with spelling, including inconsistent spelling of the same word',
    },
    {
      id: 3,
      text: 'Difficulty sounding out unfamiliar words (phonetic decoding)',
    },
    {
      id: 4,
      text: 'Slow reading and writing that requires extra time and effort',
    },
    {
      id: 5,
      text: 'Avoiding activities that involve reading or writing',
    },
    {
      id: 6,
      text: 'Mispronouncing words or names, or trouble retrieving the right word when speaking',
    },
    {
      id: 7,
      text: 'Difficulty remembering sequences or following multi-step instructions',
    },
    {
      id: 8,
      text: 'Confusing or reversing similar-looking letters or numbers (like b/d, p/q, 6/9)',
    },
    {
      id: 9,
      text: 'Struggling with rhyming words or identifying sounds in words',
    },
    {
      id: 10,
      text: 'Trouble learning a foreign language or solving math word problems',
    },
    {
      id: 11,
      text: 'Family history of reading or learning difficulties',
    },
    {
      id: 12,
      text: 'Strong skills in areas not dependent on reading (like problem-solving, creativity, or spatial awareness)',
    }
  ],
  answerOptions: [
    { text: 'Not at all', score: 0 },
    { text: 'Sometimes', score: 1 },
    { text: 'Frequently', score: 2 }
  ],
  resultCategories: [
    {
      minScore: 0,
      maxScore: 7,
      title: 'Low Likelihood of Dyslexia',
      icon: '📚',
      color: 'bg-green-100 text-green-800',
      description: 'Your responses suggest a low likelihood of dyslexia. You seem to have few or no significant difficulties with reading, spelling, or language processing.',
      recommendations: [
        'Continue to engage with reading and writing regularly',
        'If you have any specific concerns about certain reading or language tasks, consider discussing them with an educator',
        'Monitor for any changes in reading or writing abilities',
        'Maintain good reading habits like reading in a well-lit environment and taking breaks when needed'
      ],
      disclaimer: 'This is a screening tool only and does not provide a diagnosis. If you have specific concerns, please consult with an educational psychologist or learning specialist.',
      alertLevel: 'bg-green-50 text-green-800'
    },
    {
      minScore: 8,
      maxScore: 15,
      title: 'Moderate Likelihood of Dyslexia',
      icon: '📖',
      color: 'bg-yellow-100 text-yellow-800',
      description: 'Your responses suggest a moderate likelihood of dyslexia. You may be experiencing some challenges with reading, spelling, or language processing that could be associated with dyslexia.',
      recommendations: [
        'Consider scheduling an assessment with an educational psychologist or learning specialist',
        'Discuss your reading challenges with teachers, employers, or support services',
        'Explore reading strategies such as using larger text, different fonts, or text-to-speech tools',
        'Allow yourself extra time for reading and writing tasks'
      ],
      disclaimer: 'This screening suggests you may benefit from a professional evaluation. This tool does not provide a diagnosis of dyslexia.',
      alertLevel: 'bg-yellow-50 text-yellow-800'
    },
    {
      minScore: 16,
      maxScore: 24,
      title: 'High Likelihood of Dyslexia',
      icon: '🔍',
      color: 'bg-red-100 text-red-800',
      description: 'Your responses suggest a high likelihood of dyslexia. You appear to be experiencing significant difficulties with reading, spelling, and language processing that are commonly associated with dyslexia.',
      recommendations: [
        'Seek a comprehensive evaluation from an educational psychologist or specialist in learning disabilities',
        'Look into accommodations available at school, university, or workplace (like extra time, assistive technology)',
        'Explore evidence-based interventions such as structured literacy programs',
        'Connect with dyslexia support organizations for resources and community'
      ],
      disclaimer: 'This screening indicates a strong possibility of dyslexia, but a formal diagnosis requires professional assessment. Many people with dyslexia are highly intelligent and creative, with dyslexia affecting only specific aspects of learning.',
      alertLevel: 'bg-red-50 text-red-800'
    }
  ]
};

// Export all tests
export const allTests = {
  depression: depressionTest,
  anxiety: anxietyTest,
  colorBlindness: colorBlindnessTest,
  astigmatism: astigmatismTest,
  visualAcuity: visualAcuityTest,
  hearing: hearingTest,
  iq: iqTest,
  adhd: adhdTest,
  dyslexia: dyslexiaTest
};
