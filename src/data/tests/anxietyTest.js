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
      title: 'Moderate Anxiety',
      icon: '😐',
      color: 'bg-yellow-100 text-yellow-800',
      description: 'Your responses suggest moderate anxiety symptoms. These symptoms may be causing noticeable difficulties in your daily life and functioning.',
      recommendations: [
        'Consider scheduling an appointment with a mental health professional',
        'Talk to your primary care physician about your symptoms',
        'Continue or start regular physical activity',
        'Practice relaxation techniques regularly'
      ],
      disclaimer: 'This screening suggests you may benefit from professional support. Please consider reaching out to a healthcare provider to discuss your symptoms.',
      alertLevel: 'bg-yellow-50 text-yellow-800'
    },
    {
      minScore: 15,
      maxScore: 21,
      title: 'Severe Anxiety',
      icon: '😧',
      color: 'bg-red-100 text-red-800',
      description: 'Your responses suggest severe anxiety symptoms. These symptoms are likely causing significant difficulties in your daily functioning and well-being.',
      recommendations: [
        'Schedule an appointment with a mental health professional soon',
        'Consider both therapy and medication options',
        'Establish a support system of trusted individuals',
        'Learn and practice anxiety management techniques'
      ],
      disclaimer: 'This screening suggests you would likely benefit from professional support. Please reach out to a healthcare provider to discuss your symptoms.',
      alertLevel: 'bg-red-50 text-red-800'
    }
  ]
};
