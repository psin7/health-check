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
