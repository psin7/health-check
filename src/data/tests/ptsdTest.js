// PTSD Checklist (PCL-5)
export const ptsdTest = {
  id: 'ptsd',
  title: 'PTSD Checklist (PCL-5)',
  category: 'Mental Health',
  description: 'The PTSD Checklist for DSM-5 (PCL-5) is a 20-item self-report measure that assesses the presence and severity of PTSD symptoms.',
  instructions: 'Below is a list of problems that people sometimes have in response to a very stressful experience. Please read each problem carefully and then select one of the options to indicate how much you have been bothered by that problem in the past month.',
  imageUrl: '/images/mental-health/ptsd_test.svg',
  
  questions: [
    {
      id: 1,
      text: 'Repeated, disturbing, and unwanted memories of the stressful experience?',
      subText: 'This question assesses intrusive memories, a core symptom of PTSD.'
    },
    {
      id: 2,
      text: 'Repeated, disturbing dreams of the stressful experience?',
      subText: 'This question evaluates trauma-related nightmares.'
    },
    {
      id: 3,
      text: 'Suddenly feeling or acting as if the stressful experience were actually happening again (as if you were actually back there reliving it)?',
      subText: 'This question assesses flashbacks and dissociative reactions.'
    },
    {
      id: 4,
      text: 'Feeling very upset when something reminded you of the stressful experience?',
      subText: 'This question evaluates psychological distress at exposure to trauma cues.'
    },
    {
      id: 5,
      text: 'Having strong physical reactions when something reminded you of the stressful experience (for example, heart pounding, trouble breathing, sweating)?',
      subText: 'This question assesses physiological reactions to trauma reminders.'
    },
    {
      id: 6,
      text: 'Avoiding memories, thoughts, or feelings related to the stressful experience?',
      subText: 'This question evaluates avoidance of internal reminders of trauma.'
    },
    {
      id: 7,
      text: 'Avoiding external reminders of the stressful experience (for example, people, places, conversations, activities, objects, or situations)?',
      subText: 'This question assesses avoidance of external trauma reminders.'
    },
    {
      id: 8,
      text: 'Trouble remembering important parts of the stressful experience?',
      subText: 'This question evaluates trauma-related amnesia.'
    },
    {
      id: 9,
      text: 'Having strong negative beliefs about yourself, other people, or the world (for example, having thoughts such as: I am bad, there is something seriously wrong with me, no one can be trusted, the world is completely dangerous)?',
      subText: 'This question assesses negative alterations in cognitions.'
    },
    {
      id: 10,
      text: 'Blaming yourself or someone else for the stressful experience or what happened after it?',
      subText: 'This question evaluates distorted blame of self or others.'
    },
    {
      id: 11,
      text: 'Having strong negative feelings such as fear, horror, anger, guilt, or shame?',
      subText: 'This question assesses persistent negative emotional states.'
    },
    {
      id: 12,
      text: 'Loss of interest in activities that you used to enjoy?',
      subText: 'This question evaluates diminished interest in significant activities.'
    },
    {
      id: 13,
      text: 'Feeling distant or cut off from other people?',
      subText: 'This question assesses feelings of detachment or estrangement.'
    },
    {
      id: 14,
      text: 'Trouble experiencing positive feelings (for example, being unable to feel happiness or have loving feelings for people close to you)?',
      subText: 'This question evaluates restricted range of affect.'
    },
    {
      id: 15,
      text: 'Irritable behavior, angry outbursts, or acting aggressively?',
      subText: 'This question assesses irritable behavior and angry outbursts.'
    },
    {
      id: 16,
      text: 'Taking too many risks or doing things that could cause you harm?',
      subText: 'This question evaluates reckless or self-destructive behavior.'
    },
    {
      id: 17,
      text: 'Being "superalert" or watchful or on guard?',
      subText: 'This question assesses hypervigilance.'
    },
    {
      id: 18,
      text: 'Feeling jumpy or easily startled?',
      subText: 'This question evaluates exaggerated startle response.'
    },
    {
      id: 19,
      text: 'Having difficulty concentrating?',
      subText: 'This question assesses problems with concentration.'
    },
    {
      id: 20,
      text: 'Trouble falling or staying asleep?',
      subText: 'This question evaluates sleep disturbance.'
    }
  ],
  
  // PCL-5 uses a 5-point Likert scale
  answerOptions: [
    { text: 'Not at all', score: 0 },
    { text: 'A little bit', score: 1 },
    { text: 'Moderately', score: 2 },
    { text: 'Quite a bit', score: 3 },
    { text: 'Extremely', score: 4 }
  ],
  
  resultCategories: [
    {
      minScore: 0,
      maxScore: 31,
      title: 'Minimal PTSD Symptoms',
      icon: '😌',
      color: 'bg-green-100 text-green-800',
      alertLevel: 'bg-green-50 text-green-800',
      description: 'Your responses suggest minimal symptoms of post-traumatic stress. This indicates that you may not be experiencing significant distress related to traumatic events at this time.',
      recommendations: [
        'Continue practicing self-care and stress management techniques',
        'Maintain social connections and support systems',
        'Consider preventative mental health care if you have experienced trauma',
        'Monitor your symptoms and seek help if they increase'
      ],
      disclaimer: 'This is not a diagnostic tool. If you have concerns about your mental health, please consult a healthcare professional.'
    },
    {
      minScore: 32,
      maxScore: 49,
      title: 'Moderate PTSD Symptoms',
      icon: '😐',
      color: 'bg-yellow-100 text-yellow-800',
      alertLevel: 'bg-yellow-50 text-yellow-800',
      description: 'Your responses suggest moderate symptoms of post-traumatic stress. While not necessarily indicating a diagnosis of PTSD, these symptoms may be causing distress or impairment in your daily life.',
      recommendations: [
        'Consider speaking with a mental health professional about your symptoms',
        'Practice trauma-informed self-care strategies',
        'Engage in regular relaxation techniques such as deep breathing or meditation',
        'Maintain a consistent sleep schedule and healthy lifestyle habits',
        'Connect with supportive friends, family, or support groups'
      ],
      disclaimer: 'This screening suggests you may benefit from professional support. Please consider reaching out to a healthcare provider to discuss your symptoms.'
    },
    {
      minScore: 50,
      maxScore: 80,
      title: 'Significant PTSD Symptoms',
      icon: '😟',
      color: 'bg-red-100 text-red-800',
      alertLevel: 'bg-red-50 text-red-800',
      description: 'Your responses suggest significant symptoms of post-traumatic stress. A score in this range indicates that you may be experiencing substantial distress that could benefit from professional intervention.',
      recommendations: [
        'Consult with a mental health professional specializing in trauma as soon as possible',
        'Consider evidence-based treatments for PTSD such as Cognitive Processing Therapy (CPT) or Eye Movement Desensitization and Reprocessing (EMDR)',
        'Establish a safety plan if you experience severe distress or suicidal thoughts',
        'Practice grounding techniques when experiencing flashbacks or intense emotions',
        'Prioritize self-care and avoid using substances to cope with symptoms'
      ],
      disclaimer: 'This screening suggests significant symptoms that warrant professional evaluation. Please reach out to a healthcare provider to discuss your symptoms and treatment options.'
    }
  ],
  
  furtherResources: [
    {
      title: 'National Center for PTSD',
      url: 'https://www.ptsd.va.gov/'
    },
    {
      title: 'PTSD Foundation of America',
      url: 'https://ptsdusa.org/'
    },
    {
      title: 'International Society for Traumatic Stress Studies',
      url: 'https://istss.org/'
    },
    {
      title: 'National Alliance on Mental Illness (NAMI)',
      url: 'https://www.nami.org/Learn-More/Mental-Health-Conditions/Posttraumatic-Stress-Disorder'
    }
  ],
  
  // Additional information about the test
  testInfo: {
    developedBy: 'National Center for PTSD',
    yearDeveloped: 2013,
    timeToComplete: '5-10 minutes',
    scoringMethod: 'Sum of all item scores (range: 0-80)',
    clinicalCutoff: 'A total score of 33 or higher suggests probable PTSD',
    dsm5Clusters: [
      'Criterion B: Intrusion symptoms (items 1-5)',
      'Criterion C: Avoidance symptoms (items 6-7)',
      'Criterion D: Negative alterations in cognitions and mood (items 8-14)',
      'Criterion E: Alterations in arousal and reactivity (items 15-20)'
    ]
  }
};
