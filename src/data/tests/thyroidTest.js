// Thyroid Symptom Assessment Test
// Based on clinical symptoms of hypothyroidism and hyperthyroidism from medical literature
export const thyroidTest = {
  id: 'thyroid',
  title: 'Thyroid Symptom Assessment',
  category: 'Physical Health',
  description: 'This assessment evaluates symptoms that may be associated with thyroid dysfunction, including both hypothyroidism (underactive thyroid) and hyperthyroidism (overactive thyroid).',
  instructions: 'Please rate how frequently you have experienced each of the following symptoms in the past 3 months. This is not a diagnostic tool but can help identify patterns that may warrant further medical evaluation.',
  imageUrl: '/images/physical-health/thyroid_test.svg',
  
  questions: [
    {
      id: 1,
      text: 'Fatigue or feeling unusually tired',
      subText: 'Feeling exhausted despite adequate sleep or tiring more easily than usual.',
      category: 'General',
      hypothyroidScore: 2,
      hyperthyroidScore: 1
    },
    {
      id: 2,
      text: 'Unexplained weight changes',
      subText: 'Weight gain despite no change in diet/exercise (hypothyroid) or weight loss despite normal/increased appetite (hyperthyroid).',
      category: 'General',
      hypothyroidScore: 2,
      hyperthyroidScore: 2
    },
    {
      id: 3,
      text: 'Sensitivity to cold or heat',
      subText: 'Feeling colder than others in the same environment (hypothyroid) or feeling unusually warm/heat intolerant (hyperthyroid).',
      category: 'General',
      hypothyroidScore: 2,
      hyperthyroidScore: 2
    },
    {
      id: 4,
      text: 'Changes in heart rate',
      subText: 'Slower heart rate (hypothyroid) or rapid/irregular heartbeat, palpitations (hyperthyroid).',
      category: 'Cardiovascular',
      hypothyroidScore: 1,
      hyperthyroidScore: 3
    },
    {
      id: 5,
      text: 'Digestive changes',
      subText: 'Constipation (hypothyroid) or increased bowel movements/diarrhea (hyperthyroid).',
      category: 'Digestive',
      hypothyroidScore: 1,
      hyperthyroidScore: 1
    },
    {
      id: 6,
      text: 'Skin, hair, and nail changes',
      subText: 'Dry skin, brittle nails, hair loss (hypothyroid) or thin, fragile skin, fine hair (hyperthyroid).',
      category: 'Dermatological',
      hypothyroidScore: 2,
      hyperthyroidScore: 1
    },
    {
      id: 7,
      text: 'Muscle or joint issues',
      subText: 'Muscle aches, joint pain, weakness, or stiffness (hypothyroid) or muscle weakness, tremors (hyperthyroid).',
      category: 'Musculoskeletal',
      hypothyroidScore: 2,
      hyperthyroidScore: 2
    },
    {
      id: 8,
      text: 'Mental health changes',
      subText: 'Depression, slowed thinking (hypothyroid) or anxiety, irritability, difficulty concentrating (hyperthyroid).',
      category: 'Neuropsychiatric',
      hypothyroidScore: 2,
      hyperthyroidScore: 2
    },
    {
      id: 9,
      text: 'Sleep disturbances',
      subText: 'Increased need for sleep, difficulty waking (hypothyroid) or insomnia, restlessness (hyperthyroid).',
      category: 'Neuropsychiatric',
      hypothyroidScore: 1,
      hyperthyroidScore: 2
    },
    {
      id: 10,
      text: 'Changes in menstrual cycle (for women)',
      subText: 'Heavier, more frequent periods (hypothyroid) or lighter, less frequent periods (hyperthyroid).',
      category: 'Reproductive',
      hypothyroidScore: 1,
      hyperthyroidScore: 1
    },
    {
      id: 11,
      text: 'Swelling in the neck or throat discomfort',
      subText: 'Visible enlargement of the thyroid gland (goiter) or feeling of fullness in the throat.',
      category: 'Physical Signs',
      hypothyroidScore: 2,
      hyperthyroidScore: 2
    },
    {
      id: 12,
      text: 'Changes in voice',
      subText: 'Hoarseness or deeper voice (hypothyroid).',
      category: 'Physical Signs',
      hypothyroidScore: 1,
      hyperthyroidScore: 0
    },
    {
      id: 13,
      text: 'Eye changes',
      subText: 'Puffy eyes (hypothyroid) or bulging eyes, eye irritation, vision changes (hyperthyroid).',
      category: 'Ophthalmological',
      hypothyroidScore: 1,
      hyperthyroidScore: 3
    },
    {
      id: 14,
      text: 'Increased sweating or changes in heat tolerance',
      subText: 'Decreased sweating (hypothyroid) or increased sweating, heat intolerance (hyperthyroid).',
      category: 'Autonomic',
      hypothyroidScore: 1,
      hyperthyroidScore: 3
    },
    {
      id: 15,
      text: 'Family history of thyroid disorders',
      subText: 'Having a first-degree relative (parent, sibling, child) with a thyroid condition increases your risk.',
      category: 'Risk Factors',
      hypothyroidScore: 2,
      hyperthyroidScore: 2
    }
  ],
  
  // Custom answer options for frequency of symptoms
  customAnswerOptions: {
    1: [
      { text: 'Never or rarely', score: 0 },
      { text: 'Sometimes', score: 1 },
      { text: 'Often', score: 2 },
      { text: 'Very frequently', score: 3 }
    ],
    2: [
      { text: 'Never or rarely', score: 0 },
      { text: 'Sometimes', score: 1 },
      { text: 'Often', score: 2 },
      { text: 'Very frequently', score: 3 }
    ],
    3: [
      { text: 'Never or rarely', score: 0 },
      { text: 'Sometimes', score: 1 },
      { text: 'Often', score: 2 },
      { text: 'Very frequently', score: 3 }
    ],
    4: [
      { text: 'Never or rarely', score: 0 },
      { text: 'Sometimes', score: 1 },
      { text: 'Often', score: 2 },
      { text: 'Very frequently', score: 3 }
    ],
    5: [
      { text: 'Never or rarely', score: 0 },
      { text: 'Sometimes', score: 1 },
      { text: 'Often', score: 2 },
      { text: 'Very frequently', score: 3 }
    ],
    6: [
      { text: 'Never or rarely', score: 0 },
      { text: 'Sometimes', score: 1 },
      { text: 'Often', score: 2 },
      { text: 'Very frequently', score: 3 }
    ],
    7: [
      { text: 'Never or rarely', score: 0 },
      { text: 'Sometimes', score: 1 },
      { text: 'Often', score: 2 },
      { text: 'Very frequently', score: 3 }
    ],
    8: [
      { text: 'Never or rarely', score: 0 },
      { text: 'Sometimes', score: 1 },
      { text: 'Often', score: 2 },
      { text: 'Very frequently', score: 3 }
    ],
    9: [
      { text: 'Never or rarely', score: 0 },
      { text: 'Sometimes', score: 1 },
      { text: 'Often', score: 2 },
      { text: 'Very frequently', score: 3 }
    ],
    10: [
      { text: 'Never or rarely', score: 0 },
      { text: 'Sometimes', score: 1 },
      { text: 'Often', score: 2 },
      { text: 'Very frequently', score: 3 },
      { text: 'Not applicable', score: 0 }
    ],
    11: [
      { text: 'Never or rarely', score: 0 },
      { text: 'Sometimes', score: 1 },
      { text: 'Often', score: 2 },
      { text: 'Very frequently', score: 3 }
    ],
    12: [
      { text: 'Never or rarely', score: 0 },
      { text: 'Sometimes', score: 1 },
      { text: 'Often', score: 2 },
      { text: 'Very frequently', score: 3 }
    ],
    13: [
      { text: 'Never or rarely', score: 0 },
      { text: 'Sometimes', score: 1 },
      { text: 'Often', score: 2 },
      { text: 'Very frequently', score: 3 }
    ],
    14: [
      { text: 'Never or rarely', score: 0 },
      { text: 'Sometimes', score: 1 },
      { text: 'Often', score: 2 },
      { text: 'Very frequently', score: 3 }
    ],
    15: [
      { text: 'No known family history', score: 0 },
      { text: 'Distant relative (grandparent, aunt, uncle)', score: 1 },
      { text: 'First-degree relative (parent, sibling, child)', score: 2 }
    ]
  },
  
  // Process the results to determine hypothyroid vs hyperthyroid patterns
  processResults: function(answers) {
    let hypothyroidScore = 0;
    let hyperthyroidScore = 0;
    
    // Calculate weighted scores for each type
    this.questions.forEach((question, index) => {
      const answerScore = answers[index] || 0;
      hypothyroidScore += (answerScore * question.hypothyroidScore);
      hyperthyroidScore += (answerScore * question.hyperthyroidScore);
    });
    
    // Determine the dominant pattern
    if (hypothyroidScore > hyperthyroidScore + 5) {
      return {
        type: 'hypothyroid',
        score: hypothyroidScore
      };
    } else if (hyperthyroidScore > hypothyroidScore + 5) {
      return {
        type: 'hyperthyroid',
        score: hyperthyroidScore
      };
    } else {
      // Mixed or minimal symptoms
      return {
        type: 'mixed',
        score: Math.max(hypothyroidScore, hyperthyroidScore)
      };
    }
  },
  
  resultCategories: [
    {
      minScore: 0,
      maxScore: 10,
      title: 'Minimal Thyroid Symptoms',
      icon: '✓',
      color: 'bg-green-100 text-green-800',
      alertLevel: 'bg-green-50 text-green-800',
      description: 'Your responses suggest minimal symptoms associated with thyroid dysfunction. Most people experience some of these symptoms occasionally due to other factors like stress, lack of sleep, or other health conditions.',
      recommendations: [
        'Continue with regular health check-ups',
        'Maintain a balanced diet rich in iodine, selenium, and zinc, which are important for thyroid health',
        'Consider discussing thyroid function with your healthcare provider during your next routine visit if you have concerns',
        'Monitor for any changes in symptoms over time'
      ],
      disclaimer: 'This is not a diagnostic tool. If you have concerns about your health, please consult a healthcare professional.'
    },
    {
      minScore: 11,
      maxScore: 20,
      title: 'Mild Thyroid Symptoms',
      icon: '⚠️',
      color: 'bg-blue-100 text-blue-800',
      alertLevel: 'bg-blue-50 text-blue-800',
      description: 'Your responses suggest some symptoms that could be associated with thyroid dysfunction, though they may also be caused by other conditions.',
      recommendations: [
        'Consider discussing these symptoms with your healthcare provider',
        'Your doctor may recommend blood tests to check thyroid function (TSH, T3, T4)',
        'Keep a symptom journal to track frequency and severity of symptoms',
        'Ensure adequate intake of nutrients important for thyroid health (iodine, selenium, zinc)',
        'Be aware of factors that can affect thyroid function, such as certain medications and stress'
      ],
      disclaimer: 'This screening suggests mild symptoms that may warrant attention. Consider discussing these results with a healthcare provider during your next visit.'
    },
    {
      minScore: 21,
      maxScore: 30,
      title: 'Moderate Thyroid Symptoms (Hypothyroid Pattern)',
      icon: '🔍',
      color: 'bg-yellow-100 text-yellow-800',
      alertLevel: 'bg-yellow-50 text-yellow-800',
      description: 'Your responses suggest a pattern of symptoms commonly associated with an underactive thyroid (hypothyroidism). Common symptoms include fatigue, weight gain, cold intolerance, and dry skin.',
      recommendations: [
        'Schedule an appointment with your healthcare provider to discuss these symptoms',
        'Ask about thyroid function testing, particularly TSH, Free T4, and possibly thyroid antibodies',
        'Discuss whether factors like stress, diet, or medications could be contributing to your symptoms',
        'Consider lifestyle modifications that may help manage symptoms, such as regular exercise and stress reduction techniques',
        'Learn about hypothyroidism and its management options'
      ],
      disclaimer: 'This screening suggests a pattern of symptoms that may be associated with hypothyroidism. Please discuss these results with a healthcare provider.'
    },
    {
      minScore: 21,
      maxScore: 30,
      title: 'Moderate Thyroid Symptoms (Hyperthyroid Pattern)',
      icon: '🔍',
      color: 'bg-orange-100 text-orange-800',
      alertLevel: 'bg-orange-50 text-orange-800',
      description: 'Your responses suggest a pattern of symptoms commonly associated with an overactive thyroid (hyperthyroidism). Common symptoms include anxiety, weight loss despite normal appetite, heat intolerance, and rapid heartbeat.',
      recommendations: [
        'Schedule an appointment with your healthcare provider to discuss these symptoms',
        'Ask about thyroid function testing, particularly TSH, Free T4, Free T3, and possibly thyroid antibodies',
        'Discuss whether factors like stress, diet, or medications could be contributing to your symptoms',
        'Consider lifestyle modifications that may help manage symptoms, such as stress reduction techniques',
        'Learn about hyperthyroidism and its management options'
      ],
      disclaimer: 'This screening suggests a pattern of symptoms that may be associated with hyperthyroidism. Please discuss these results with a healthcare provider.'
    },
    {
      minScore: 31,
      maxScore: 45,
      title: 'Significant Thyroid Symptoms (Hypothyroid Pattern)',
      icon: '🏥',
      color: 'bg-red-100 text-red-800',
      alertLevel: 'bg-red-50 text-red-800',
      description: 'Your responses suggest significant symptoms commonly associated with an underactive thyroid (hypothyroidism). These symptoms appear to be affecting your daily life and wellbeing.',
      recommendations: [
        'Schedule an appointment with your healthcare provider as soon as possible',
        'Request comprehensive thyroid function testing',
        'Consider asking for a referral to an endocrinologist who specializes in thyroid disorders',
        'Bring a list of your symptoms, their duration, and severity to your appointment',
        'Learn about hypothyroidism and its treatment options, which typically include thyroid hormone replacement therapy',
        'Discuss how to manage symptoms while awaiting diagnosis and treatment'
      ],
      disclaimer: 'This screening suggests significant symptoms that may be associated with hypothyroidism and warrant prompt medical attention. Please discuss these results with a healthcare provider soon.'
    },
    {
      minScore: 31,
      maxScore: 45,
      title: 'Significant Thyroid Symptoms (Hyperthyroid Pattern)',
      icon: '🏥',
      color: 'bg-red-100 text-red-800',
      alertLevel: 'bg-red-50 text-red-800',
      description: 'Your responses suggest significant symptoms commonly associated with an overactive thyroid (hyperthyroidism). These symptoms appear to be affecting your daily life and wellbeing.',
      recommendations: [
        'Schedule an appointment with your healthcare provider as soon as possible',
        'Request comprehensive thyroid function testing',
        'Consider asking for a referral to an endocrinologist who specializes in thyroid disorders',
        'Bring a list of your symptoms, their duration, and severity to your appointment',
        'Learn about hyperthyroidism and its treatment options, which may include medications, radioactive iodine therapy, or surgery',
        'Discuss how to manage symptoms while awaiting diagnosis and treatment'
      ],
      disclaimer: 'This screening suggests significant symptoms that may be associated with hyperthyroidism and warrant prompt medical attention. Please discuss these results with a healthcare provider soon.'
    }
  ],
  
  furtherResources: [
    {
      title: 'American Thyroid Association',
      url: 'https://www.thyroid.org/'
    },
    {
      title: 'National Institute of Diabetes and Digestive and Kidney Diseases - Thyroid Information',
      url: 'https://www.niddk.nih.gov/health-information/endocrine-diseases/thyroid-disease'
    },
    {
      title: 'Endocrine Society',
      url: 'https://www.endocrine.org/patient-engagement/endocrine-library/thyroid-disorders'
    },
    {
      title: 'ThyroidAwareness.com',
      url: 'https://www.thyroidawareness.com/'
    }
  ],
  
  // Additional information about the test
  testInfo: {
    developedBy: 'Based on clinical symptoms of thyroid dysfunction from medical literature',
    yearDeveloped: '2025',
    timeToComplete: '5-7 minutes',
    scoringMethod: 'Weighted scoring system that differentiates between hypothyroid and hyperthyroid patterns',
    clinicalInterpretation: [
      '0-10: Minimal Thyroid Symptoms',
      '11-20: Mild Thyroid Symptoms',
      '21-30: Moderate Thyroid Symptoms (Hypo or Hyper pattern)',
      '31-45: Significant Thyroid Symptoms (Hypo or Hyper pattern)'
    ],
    validation: 'Based on established clinical symptoms of thyroid dysfunction. This is a screening tool and not a diagnostic instrument.',
    limitations: 'This assessment cannot diagnose thyroid disorders. Many symptoms of thyroid dysfunction overlap with other conditions. Laboratory testing is required for diagnosis.'
  }
};
