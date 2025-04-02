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
