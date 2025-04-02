// Bipolar Disorder Screening (MDQ)
export const bipolarTest = {
  id: 'bipolar',
  title: 'Bipolar Disorder Screening (MDQ)',
  category: 'Mental Health',
  description: 'The Mood Disorder Questionnaire (MDQ) is a screening instrument for bipolar disorder developed by a team of psychiatrists, researchers and consumer advocates.',
  instructions: 'Has there ever been a period of time when you were not your usual self and...',
  
  questions: [
    {
      id: 1,
      text: 'You felt so good or hyper that other people thought you were not your normal self or you were so hyper that you got into trouble?',
      subText: 'This question identifies elevated mood states that are noticeable to others.'
    },
    {
      id: 2,
      text: 'You were so irritable that you shouted at people or started fights or arguments?',
      subText: 'This question assesses irritability, a common symptom of hypomania/mania.'
    },
    {
      id: 3,
      text: 'You felt much more self-confident than usual?',
      subText: 'This question evaluates increased self-esteem or grandiosity.'
    },
    {
      id: 4,
      text: "You got much less sleep than usual and found you didn't really miss it?",
      subText: 'This question assesses decreased need for sleep without feeling tired.'
    },
    {
      id: 5,
      text: 'You were much more talkative or spoke faster than usual?',
      subText: 'This question identifies pressured speech, a classic symptom of hypomania/mania.'
    },
    {
      id: 6,
      text: "Thoughts raced through your head or you couldn't slow your mind down?",
      subText: 'This question evaluates flight of ideas or racing thoughts.'
    },
    {
      id: 7,
      text: 'You were so easily distracted by things around you that you had trouble concentrating or staying on track?',
      subText: 'This question assesses distractibility during manic/hypomanic episodes.'
    },
    {
      id: 8,
      text: 'You had much more energy than usual?',
      subText: 'This question identifies increased energy or activity levels.'
    },
    {
      id: 9,
      text: 'You were much more active or did many more things than usual?',
      subText: 'This question evaluates goal-directed activity increases.'
    },
    {
      id: 10,
      text: 'You were much more social or outgoing than usual; for example, you telephoned friends in the middle of the night?',
      subText: 'This question assesses increased sociability or excessive involvement with others.'
    },
    {
      id: 11,
      text: 'You were much more interested in sex than usual?',
      subText: 'This question identifies increased libido, common in manic/hypomanic states.'
    },
    {
      id: 12,
      text: 'You did things that were unusual for you or that other people might have thought were excessive, foolish, or risky?',
      subText: 'This question evaluates poor judgment and risky behaviors.'
    },
    {
      id: 13,
      text: 'Spending money got you or your family into trouble?',
      subText: 'This question assesses excessive spending, a common manifestation of impaired judgment.'
    }
  ],
  
  // First part of the assessment uses yes/no answers
  answerOptions: [
    { text: 'Yes', score: 1 },
    { text: 'No', score: 0 }
  ],
  
  // Standard scoring system compatible with TestEngine
  resultCategories: [
    {
      minScore: 0,
      maxScore: 6,
      title: 'Negative Screening for Bipolar Disorder',
      icon: '😌',
      color: 'bg-green-100 text-green-800',
      alertLevel: 'bg-green-50 text-green-800',
      description: 'Your responses do not suggest a high likelihood of bipolar disorder based on the MDQ screening tool. Remember that this is just a screening tool and not a diagnostic assessment.',
      recommendations: [
        'Continue monitoring your mental health and seek help if you experience concerning symptoms',
        'Maintain healthy lifestyle habits including regular sleep, exercise, and stress management',
        'If you have ongoing concerns about your mood, consult with a healthcare provider'
      ],
      disclaimer: 'This is not a diagnostic tool. If you have concerns about your mental health, please consult a healthcare professional.'
    },
    {
      minScore: 7,
      maxScore: 13,
      title: 'Possible Bipolar Traits',
      icon: '🔄',
      color: 'bg-yellow-100 text-yellow-800',
      alertLevel: 'bg-yellow-50 text-yellow-800',
      description: 'You reported several symptoms that may be associated with bipolar spectrum disorders. The MDQ screening considers 7 or more "yes" responses to be significant. A full clinical assessment would consider additional factors such as whether these symptoms occurred during the same time period and how much they affected your life.',
      recommendations: [
        'Consider discussing these symptoms with a healthcare provider',
        'Monitor your mood, energy levels, and sleep patterns for changes',
        'Practice stress management and healthy lifestyle habits',
        'Learn more about mood disorders to better understand your symptoms',
        'Remember that only a qualified mental health professional can diagnose bipolar disorder'
      ],
      disclaimer: 'This screening suggests you may benefit from professional support. Please consider reaching out to a healthcare provider to discuss your symptoms.'
    }
  ],
  
  furtherResources: [
    {
      title: 'International Bipolar Foundation',
      url: 'https://ibpf.org/'
    },
    {
      title: 'Depression and Bipolar Support Alliance',
      url: 'https://www.dbsalliance.org/'
    },
    {
      title: 'National Institute of Mental Health - Bipolar Disorder',
      url: 'https://www.nimh.nih.gov/health/topics/bipolar-disorder'
    },
    {
      title: 'Mental Health America - Bipolar',
      url: 'https://www.mhanational.org/conditions/bipolar-disorder'
    }
  ]
};
