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
