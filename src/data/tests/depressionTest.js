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
