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
      description: 'Your responses suggest a moderate likelihood of astigmatism. You noticed some differences in how you perceive lines, which may indicate mild to moderate astigmatism or could be related to other visual factors.',
      recommendations: [
        'Consider scheduling an eye examination with an optometrist or ophthalmologist',
        'Mention the specific visual symptoms you\'re experiencing',
        'If you work with screens, ensure proper ergonomics and lighting',
        'Take regular breaks when doing detailed visual tasks'
      ],
      disclaimer: 'This screening provides an initial assessment only. A comprehensive eye examination is necessary for an accurate diagnosis and appropriate recommendations.',
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
        'Continue with regular eye check-ups as recommended by eye care professionals',
        'Maintain good eye health with proper lighting when reading',
        'Take regular breaks during extended screen time',
        'If you notice changes in your vision, consult with an eye care professional'
      ],
      disclaimer: 'This is a simplified screening test and not a substitute for a professional examination. Please consult with an eye care professional for regular eye health check-ups.',
      alertLevel: 'bg-green-50 text-green-800'
    }
  ]
};
