// Sleep Apnea Risk Assessment (STOP-BANG)
export const sleepApneaTest = {
  id: 'sleepApnea',
  title: 'Sleep Apnea Risk Assessment (STOP-BANG)',
  category: 'Physical Health',
  description: 'The STOP-BANG questionnaire is a validated screening tool used to assess your risk of obstructive sleep apnea (OSA), a common sleep disorder characterized by repeated breathing interruptions during sleep.',
  instructions: 'Please answer the following questions to help determine your risk for sleep apnea. Answer "Yes" if the statement applies to you and "No" if it does not.',
  imageUrl: '/images/physical-health/sleep_apnea_test.svg',
  
  questions: [
    // STOP Questions
    {
      id: 1,
      text: 'Do you SNORE loudly (loud enough to be heard through closed doors or your bed-partner elbows you for snoring at night)?',
      subText: 'Loud snoring is a common symptom of sleep apnea.',
      category: 'STOP'
    },
    {
      id: 2,
      text: 'Do you often feel TIRED, fatigued, or sleepy during the daytime (such as falling asleep during driving or talking to someone)?',
      subText: 'Excessive daytime sleepiness can be a result of poor sleep quality due to sleep apnea.',
      category: 'STOP'
    },
    {
      id: 3,
      text: 'Has anyone OBSERVED you stop breathing or choking/gasping during your sleep?',
      subText: 'Breathing pauses during sleep are a hallmark sign of sleep apnea.',
      category: 'STOP'
    },
    {
      id: 4,
      text: 'Do you have or are you being treated for high blood PRESSURE?',
      subText: 'High blood pressure is associated with sleep apnea.',
      category: 'STOP'
    },
    
    // BANG Questions
    {
      id: 5,
      text: 'Is your BMI more than 35 kg/m²?',
      subText: 'BMI > 35 kg/m² is considered clinically severe obesity and increases risk for sleep apnea.',
      category: 'BANG'
    },
    {
      id: 6,
      text: 'Are you over 50 years old?',
      subText: 'The risk of sleep apnea increases with age.',
      category: 'BANG'
    },
    {
      id: 7,
      text: 'Is your neck circumference greater than 40 cm (15.7 inches)?',
      subText: 'A larger neck circumference is associated with increased risk of sleep apnea.',
      category: 'BANG'
    },
    {
      id: 8,
      text: 'Is your gender male?',
      subText: 'Men have a higher risk of developing sleep apnea than women.',
      category: 'BANG'
    }
  ],
  
  // STOP-BANG uses Yes/No answers
  answerOptions: [
    { text: 'No', score: 0 },
    { text: 'Yes', score: 1 }
  ],
  
  resultCategories: [
    {
      minScore: 0,
      maxScore: 2,
      title: 'Low Risk for Sleep Apnea',
      icon: '😴',
      color: 'bg-green-100 text-green-800',
      alertLevel: 'bg-green-50 text-green-800',
      description: 'Your responses suggest a low risk for obstructive sleep apnea. You have few risk factors associated with this sleep disorder.',
      recommendations: [
        'Continue practicing good sleep hygiene',
        'Maintain a healthy weight and lifestyle',
        'If you develop symptoms like loud snoring, daytime sleepiness, or observed breathing pauses during sleep, consider reassessing your risk'
      ],
      disclaimer: 'This is not a diagnostic tool. If you have concerns about your sleep quality, please consult a healthcare professional.'
    },
    {
      minScore: 3,
      maxScore: 4,
      title: 'Intermediate Risk for Sleep Apnea',
      icon: '🥱',
      color: 'bg-yellow-100 text-yellow-800',
      alertLevel: 'bg-yellow-50 text-yellow-800',
      description: 'Your responses suggest an intermediate risk for obstructive sleep apnea. You have several risk factors associated with this sleep disorder.',
      recommendations: [
        'Consider discussing your sleep quality with a healthcare provider',
        'Work on modifiable risk factors such as weight management if applicable',
        'Improve sleep hygiene practices',
        'Avoid alcohol and sedatives before bedtime as they can worsen sleep apnea',
        'Consider sleeping on your side rather than your back'
      ],
      disclaimer: 'This screening suggests you may benefit from discussing your sleep with a healthcare provider. This is not a diagnostic assessment.'
    },
    {
      minScore: 5,
      maxScore: 8,
      title: 'High Risk for Sleep Apnea',
      icon: '⚠️',
      color: 'bg-red-100 text-red-800',
      alertLevel: 'bg-red-50 text-red-800',
      description: 'Your responses suggest a high risk for obstructive sleep apnea. You have multiple significant risk factors associated with this sleep disorder.',
      recommendations: [
        'Consult with a healthcare provider about your sleep concerns as soon as possible',
        'Consider a referral to a sleep specialist or sleep center for proper evaluation',
        'You may need a sleep study (polysomnography) to diagnose sleep apnea',
        'Learn about treatment options such as CPAP therapy, oral appliances, and lifestyle modifications',
        'Address modifiable risk factors such as weight, alcohol consumption, and smoking'
      ],
      disclaimer: 'This screening suggests a high likelihood of sleep apnea that warrants professional evaluation. Please reach out to a healthcare provider to discuss your symptoms and treatment options.'
    }
  ],
  
  furtherResources: [
    {
      title: 'American Sleep Apnea Association',
      url: 'https://www.sleepapnea.org/'
    },
    {
      title: 'National Sleep Foundation - Sleep Apnea',
      url: 'https://www.sleepfoundation.org/sleep-apnea'
    },
    {
      title: 'American Academy of Sleep Medicine',
      url: 'https://aasm.org/'
    },
    {
      title: 'Sleep Education - Sleep Apnea',
      url: 'http://sleepeducation.org/essentials-in-sleep/sleep-apnea'
    }
  ],
  
  // Additional information about the test
  testInfo: {
    developedBy: 'Dr. Frances Chung and colleagues at the University of Toronto',
    yearDeveloped: 2008,
    timeToComplete: '2-3 minutes',
    scoringMethod: 'Sum of all "Yes" answers (range: 0-8)',
    clinicalInterpretation: [
      '0-2: Low Risk for OSA',
      '3-4: Intermediate Risk for OSA',
      '5-8: High Risk for OSA'
    ],
    validation: 'The STOP-BANG questionnaire has been validated in multiple clinical studies and is widely used as a screening tool for sleep apnea in various clinical settings.',
    limitations: 'This is a screening tool only and cannot diagnose sleep apnea. A formal sleep study (polysomnography) is required for diagnosis.'
  }
};
