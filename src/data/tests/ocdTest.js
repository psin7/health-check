// OCD Assessment (Y-BOCS)
export const ocdTest = {
  id: 'ocd',
  title: 'OCD Assessment (Y-BOCS)',
  category: 'Mental Health',
  description: 'A simplified version of the Yale-Brown Obsessive Compulsive Scale (Y-BOCS), the gold standard assessment tool for measuring the severity of Obsessive-Compulsive Disorder (OCD).',
  instructions: 'For each question, please select the option that best describes your experience over the past week. This assessment evaluates both obsessions (unwanted thoughts, images, or urges) and compulsions (repetitive behaviors or mental acts).',
  imageUrl: '/images/mental-health/ocd_test.svg',
  
  questions: [
    // Obsession Questions (1-5)
    {
      id: 1,
      text: 'How much time do you spend on obsessive thoughts?',
      subText: 'Obsessions are unwanted thoughts, images, or urges that repeatedly enter your mind.',
      category: 'Obsessions'
    },
    {
      id: 2,
      text: 'How much do your obsessive thoughts interfere with your social, work, or other important activities?',
      subText: 'Consider whether there is anything you don\'t do because of obsessions.',
      category: 'Obsessions'
    },
    {
      id: 3,
      text: 'How much distress do your obsessive thoughts cause you?',
      subText: 'Rate the anxiety or distress that seems to be triggered by obsessive thoughts.',
      category: 'Obsessions'
    },
    {
      id: 4,
      text: 'How much effort do you make to resist the obsessive thoughts?',
      subText: 'How often do you try to disregard or turn your attention away from these thoughts?',
      category: 'Obsessions'
    },
    {
      id: 5,
      text: 'How much control do you have over your obsessive thoughts?',
      subText: 'How successful are you in stopping or diverting obsessive thinking?',
      category: 'Obsessions'
    },
    
    // Compulsion Questions (6-10)
    {
      id: 6,
      text: 'How much time do you spend performing compulsive behaviors?',
      subText: 'Compulsions are repetitive behaviors (like handwashing, checking, ordering) or mental acts (like counting, praying, repeating words) that you feel driven to perform.',
      category: 'Compulsions'
    },
    {
      id: 7,
      text: 'How much do your compulsive behaviors interfere with your social, work, or other important activities?',
      subText: 'Is there anything you don\'t do because of compulsions?',
      category: 'Compulsions'
    },
    {
      id: 8,
      text: 'How anxious would you become if you were prevented from performing your compulsive behaviors?',
      subText: 'Rate anxiety that would be triggered by preventing compulsions.',
      category: 'Compulsions'
    },
    {
      id: 9,
      text: 'How much effort do you make to resist the compulsive behaviors?',
      subText: 'How often do you try to stop yourself from performing compulsions?',
      category: 'Compulsions'
    },
    {
      id: 10,
      text: 'How much control do you have over your compulsive behaviors?',
      subText: 'How successful are you in stopping yourself from performing compulsions?',
      category: 'Compulsions'
    },
    
    // Additional OCD-related questions (11-15)
    {
      id: 11,
      text: 'Do you recognize that your obsessions or compulsions are excessive or unreasonable?',
      subText: 'This question assesses insight into your symptoms.',
      category: 'Insight'
    },
    {
      id: 12,
      text: 'How much do you avoid certain situations, places, objects, or activities because of your obsessions or compulsions?',
      subText: 'This question evaluates avoidance behaviors related to OCD.',
      category: 'Avoidance'
    },
    {
      id: 13,
      text: 'How indecisive are you when making everyday decisions?',
      subText: 'This question assesses decision-making difficulties often associated with OCD.',
      category: 'Indecisiveness'
    },
    {
      id: 14,
      text: 'Do you feel an exaggerated sense of responsibility for harm or its prevention?',
      subText: 'This question evaluates inflated responsibility, a common feature in OCD.',
      category: 'Responsibility'
    },
    {
      id: 15,
      text: 'How slow or incomplete are you in completing routine activities because of checking or other OCD behaviors?',
      subText: 'This question assesses slowness in task completion due to OCD symptoms.',
      category: 'Slowness'
    }
  ],
  
  // Y-BOCS uses a 5-point scale for each item
  answerOptions: [
    { text: 'None/Not at all', score: 0 },
    { text: 'Mild', score: 1 },
    { text: 'Moderate', score: 2 },
    { text: 'Severe', score: 3 },
    { text: 'Extreme', score: 4 }
  ],
  
  resultCategories: [
    {
      minScore: 0,
      maxScore: 7,
      title: 'Subclinical OCD Symptoms',
      icon: '😌',
      color: 'bg-green-100 text-green-800',
      alertLevel: 'bg-green-50 text-green-800',
      description: 'Your responses suggest minimal to no symptoms of Obsessive-Compulsive Disorder. This indicates that you are likely not experiencing significant obsessions or compulsions at this time.',
      recommendations: [
        'Continue practicing general mental health self-care',
        'Maintain healthy stress management techniques',
        'If you notice obsessive thoughts or compulsive behaviors developing, consider learning about early intervention strategies'
      ],
      disclaimer: 'This is not a diagnostic tool. If you have concerns about your mental health, please consult a healthcare professional.'
    },
    {
      minScore: 8,
      maxScore: 15,
      title: 'Mild OCD Symptoms',
      icon: '🙂',
      color: 'bg-blue-100 text-blue-800',
      alertLevel: 'bg-blue-50 text-blue-800',
      description: 'Your responses suggest mild symptoms of Obsessive-Compulsive Disorder. While these symptoms may cause some distress, they likely do not significantly interfere with your daily functioning.',
      recommendations: [
        'Consider learning about OCD and its management',
        'Practice mindfulness and stress reduction techniques',
        'If symptoms persist or worsen, consider consulting with a mental health professional',
        'Explore self-help resources for managing mild OCD symptoms'
      ],
      disclaimer: 'This is not a diagnostic tool. If symptoms persist for more than a few weeks, consider consulting a healthcare professional.'
    },
    {
      minScore: 16,
      maxScore: 23,
      title: 'Moderate OCD Symptoms',
      icon: '😐',
      color: 'bg-yellow-100 text-yellow-800',
      alertLevel: 'bg-yellow-50 text-yellow-800',
      description: 'Your responses suggest moderate symptoms of Obsessive-Compulsive Disorder. These symptoms may be causing noticeable distress and some interference in your daily life.',
      recommendations: [
        'Consider scheduling an assessment with a mental health professional who specializes in OCD',
        'Learn about Cognitive-Behavioral Therapy (CBT) and Exposure and Response Prevention (ERP), the gold standard treatments for OCD',
        'Practice regular stress management and self-care',
        'Join a support group for individuals with OCD',
        'Educate yourself about OCD through reputable resources'
      ],
      disclaimer: 'This screening suggests you may benefit from professional support. Please consider reaching out to a healthcare provider to discuss your symptoms.'
    },
    {
      minScore: 24,
      maxScore: 31,
      title: 'Severe OCD Symptoms',
      icon: '😟',
      color: 'bg-orange-100 text-orange-800',
      alertLevel: 'bg-orange-50 text-orange-800',
      description: 'Your responses suggest severe symptoms of Obsessive-Compulsive Disorder. These symptoms are likely causing significant distress and interference in multiple areas of your life.',
      recommendations: [
        'Consult with a mental health professional who specializes in OCD as soon as possible',
        'Discuss evidence-based treatments such as Exposure and Response Prevention (ERP) therapy',
        'Consider whether medication might be helpful (in consultation with a psychiatrist)',
        'Establish a support system of family, friends, or support groups',
        'Prioritize self-care and stress management'
      ],
      disclaimer: 'This screening suggests significant symptoms that warrant professional evaluation. Please reach out to a healthcare provider to discuss your symptoms and treatment options.'
    },
    {
      minScore: 32,
      maxScore: 60,
      title: 'Extreme OCD Symptoms',
      icon: '😥',
      color: 'bg-red-100 text-red-800',
      alertLevel: 'bg-red-50 text-red-800',
      description: 'Your responses suggest extreme symptoms of Obsessive-Compulsive Disorder. These symptoms are likely causing severe distress and significant impairment in multiple areas of your life.',
      recommendations: [
        'Seek professional help immediately from a mental health provider who specializes in OCD',
        'Consider intensive treatment options such as intensive outpatient programs or residential treatment',
        'Discuss both psychotherapy (particularly ERP) and medication options with your provider',
        'Ensure you have adequate support from family, friends, or support groups',
        'Remember that even severe OCD can be treated effectively with proper intervention'
      ],
      disclaimer: 'This screening suggests severe symptoms that require immediate professional attention. Please reach out to a healthcare provider as soon as possible to discuss treatment options.'
    }
  ],
  
  furtherResources: [
    {
      title: 'International OCD Foundation',
      url: 'https://iocdf.org/'
    },
    {
      title: 'OCD-UK',
      url: 'https://www.ocduk.org/'
    },
    {
      title: 'Anxiety and Depression Association of America - OCD',
      url: 'https://adaa.org/understanding-anxiety/obsessive-compulsive-disorder-ocd'
    },
    {
      title: 'National Institute of Mental Health - OCD',
      url: 'https://www.nimh.nih.gov/health/topics/obsessive-compulsive-disorder-ocd'
    }
  ],
  
  // Additional information about the test
  testInfo: {
    developedBy: 'Wayne K. Goodman, MD, and colleagues',
    yearDeveloped: 1989,
    timeToComplete: '10-15 minutes',
    scoringMethod: 'Sum of all item scores (range: 0-60)',
    clinicalInterpretation: [
      '0-7: Subclinical',
      '8-15: Mild OCD',
      '16-23: Moderate OCD',
      '24-31: Severe OCD',
      '32-60: Extreme OCD'
    ],
    mainComponents: [
      'Obsessions Severity (questions 1-5)',
      'Compulsions Severity (questions 6-10)',
      'Additional OCD Features (questions 11-15)'
    ]
  }
};
