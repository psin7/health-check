// Diabetes Risk Test
// Based on the American Diabetes Association Type 2 Diabetes Risk Test and the Finnish Diabetes Risk Score (FINDRISC)
export const diabetesTest = {
  id: 'diabetes',
  title: 'Diabetes Risk Assessment',
  category: 'Physical Health',
  description: 'This assessment evaluates your risk of developing type 2 diabetes based on established risk factors. It combines elements from validated screening tools like the ADA Risk Test and FINDRISC.',
  instructions: 'Please answer the following questions to help determine your risk for developing type 2 diabetes. Select the option that best applies to you.',
  imageUrl: '/images/physical-health/diabetes_test.svg',
  
  questions: [
    {
      id: 1,
      text: 'What is your age?',
      subText: 'The risk of type 2 diabetes increases with age, particularly after 45 years.',
      category: 'Demographics'
    },
    {
      id: 2,
      text: 'What is your gender?',
      subText: 'Some diabetes risk factors affect men and women differently.',
      category: 'Demographics'
    },
    {
      id: 3,
      text: 'Do you have a parent, brother, or sister with diabetes?',
      subText: 'Having a first-degree relative with diabetes increases your risk.',
      category: 'Family History'
    },
    {
      id: 4,
      text: 'Have you ever been diagnosed with high blood pressure?',
      subText: 'Hypertension is associated with increased diabetes risk.',
      category: 'Medical History'
    },
    {
      id: 5,
      text: 'Are you physically active?',
      subText: 'Physical activity helps your body use insulin more efficiently.',
      category: 'Lifestyle'
    },
    {
      id: 6,
      text: 'What is your body mass index (BMI) range?',
      subText: 'BMI is calculated using your height and weight and is a measure of body fat.',
      category: 'Physical Measurements',
      helpText: 'BMI = weight(kg) / height²(m). A BMI of 25-29.9 is considered overweight, and 30 or above is considered obese.'
    },
    {
      id: 7,
      text: 'What is your waist circumference?',
      subText: 'Waist circumference is a measure of abdominal obesity, which is a risk factor for type 2 diabetes.',
      category: 'Physical Measurements',
      helpText: 'Measure your waist just above your hipbones, usually at the level of your navel.'
    },
    {
      id: 8,
      text: 'Have you ever been found to have high blood glucose (sugar)?',
      subText: 'This includes during a health examination, illness, or pregnancy.',
      category: 'Medical History'
    },
    {
      id: 9,
      text: 'How often do you eat vegetables, fruits, or berries?',
      subText: 'A diet rich in fruits and vegetables is associated with lower diabetes risk.',
      category: 'Lifestyle'
    },
    {
      id: 10,
      text: 'Have you ever taken medication for high blood pressure on a regular basis?',
      subText: 'Certain blood pressure medications may affect diabetes risk.',
      category: 'Medical History'
    }
  ],
  
  // Custom answer options for each question
  customAnswerOptions: {
    1: [
      { text: 'Under 40 years', score: 0 },
      { text: '40-49 years', score: 1 },
      { text: '50-59 years', score: 2 },
      { text: '60 years or older', score: 3 }
    ],
    2: [
      { text: 'Female', score: 0 },
      { text: 'Male', score: 1 }
    ],
    3: [
      { text: 'No', score: 0 },
      { text: 'Yes', score: 5 }
    ],
    4: [
      { text: 'No', score: 0 },
      { text: 'Yes', score: 2 }
    ],
    5: [
      { text: 'Yes - I get at least 150 minutes of physical activity per week', score: 0 },
      { text: 'No - I get less than 150 minutes of physical activity per week', score: 2 }
    ],
    6: [
      { text: 'Less than 25 kg/m²', score: 0 },
      { text: '25-30 kg/m²', score: 1 },
      { text: '30-35 kg/m²', score: 3 },
      { text: 'Greater than 35 kg/m²', score: 5 }
    ],
    7: [
      { text: 'Men: Less than 94 cm (37 inches) / Women: Less than 80 cm (31.5 inches)', score: 0 },
      { text: 'Men: 94-102 cm (37-40 inches) / Women: 80-88 cm (31.5-35 inches)', score: 3 },
      { text: 'Men: More than 102 cm (40 inches) / Women: More than 88 cm (35 inches)', score: 4 }
    ],
    8: [
      { text: 'No', score: 0 },
      { text: 'Yes', score: 5 }
    ],
    9: [
      { text: 'Every day', score: 0 },
      { text: 'Not every day', score: 1 }
    ],
    10: [
      { text: 'No', score: 0 },
      { text: 'Yes', score: 2 }
    ]
  },
  
  resultCategories: [
    {
      minScore: 0,
      maxScore: 7,
      title: 'Low Risk for Type 2 Diabetes',
      icon: '🍎',
      color: 'bg-green-100 text-green-800',
      alertLevel: 'bg-green-50 text-green-800',
      description: 'Your responses suggest a low risk for developing type 2 diabetes. Based on your current profile, your estimated 10-year risk of developing type 2 diabetes is less than 1 in 20.',
      recommendations: [
        'Continue maintaining a healthy lifestyle with regular physical activity',
        'Eat a balanced diet rich in fruits, vegetables, and whole grains',
        'Maintain a healthy weight',
        'Have your blood glucose levels checked during your regular health check-ups',
        'Reassess your risk every few years, especially if your health status changes'
      ],
      disclaimer: 'This is not a diagnostic tool. If you have concerns about your health, please consult a healthcare professional.'
    },
    {
      minScore: 8,
      maxScore: 11,
      title: 'Slightly Elevated Risk for Type 2 Diabetes',
      icon: '🥗',
      color: 'bg-blue-100 text-blue-800',
      alertLevel: 'bg-blue-50 text-blue-800',
      description: 'Your responses suggest a slightly elevated risk for developing type 2 diabetes. Based on your current profile, your estimated 10-year risk of developing type 2 diabetes is approximately 1 in 6.',
      recommendations: [
        'Consider discussing your diabetes risk with a healthcare provider',
        'Increase your physical activity to at least 150 minutes per week',
        'Focus on a balanced diet with limited processed foods and added sugars',
        'If you are overweight, aim for modest weight loss (5-7% of your current weight)',
        'Have your blood glucose levels checked annually'
      ],
      disclaimer: 'This screening suggests a slightly elevated risk. Consider discussing these results with a healthcare provider during your next visit.'
    },
    {
      minScore: 12,
      maxScore: 14,
      title: 'Moderate Risk for Type 2 Diabetes',
      icon: '⚠️',
      color: 'bg-yellow-100 text-yellow-800',
      alertLevel: 'bg-yellow-50 text-yellow-800',
      description: 'Your responses suggest a moderate risk for developing type 2 diabetes. Based on your current profile, your estimated 10-year risk of developing type 2 diabetes is approximately 1 in 3.',
      recommendations: [
        'Schedule an appointment with a healthcare provider to discuss your diabetes risk',
        'Ask about getting tested for prediabetes and diabetes',
        'Aim for at least 150 minutes of moderate-intensity physical activity per week',
        'Consider working with a dietitian to develop a healthy eating plan',
        'If you are overweight, aim for modest weight loss (5-7% of your current weight)',
        'Learn about the symptoms of diabetes and monitor for them'
      ],
      disclaimer: 'This screening suggests a moderate risk that warrants attention. Please consider discussing these results with a healthcare provider.'
    },
    {
      minScore: 15,
      maxScore: 20,
      title: 'High Risk for Type 2 Diabetes',
      icon: '🩺',
      color: 'bg-orange-100 text-orange-800',
      alertLevel: 'bg-orange-50 text-orange-800',
      description: 'Your responses suggest a high risk for developing type 2 diabetes. Based on your current profile, your estimated 10-year risk of developing type 2 diabetes is approximately 1 in 2.',
      recommendations: [
        'Schedule an appointment with a healthcare provider as soon as possible to discuss your diabetes risk',
        'Get tested for prediabetes and diabetes',
        'Consider participating in a diabetes prevention program',
        'Work with healthcare professionals to develop a comprehensive plan to reduce your risk',
        'Aim for at least 150 minutes of moderate-intensity physical activity per week',
        'Make dietary changes to reduce intake of refined carbohydrates and added sugars',
        'If you are overweight, aim for modest weight loss (5-7% of your current weight)'
      ],
      disclaimer: 'This screening suggests a high risk that requires attention. Please discuss these results with a healthcare provider soon.'
    },
    {
      minScore: 21,
      maxScore: 29,
      title: 'Very High Risk for Type 2 Diabetes',
      icon: '🏥',
      color: 'bg-red-100 text-red-800',
      alertLevel: 'bg-red-50 text-red-800',
      description: 'Your responses suggest a very high risk for developing type 2 diabetes. Based on your current profile, your estimated 10-year risk of developing type 2 diabetes is greater than 1 in 2. You may already have undiagnosed diabetes or prediabetes.',
      recommendations: [
        'Schedule an appointment with a healthcare provider immediately to discuss your diabetes risk',
        'Get tested for prediabetes and diabetes as soon as possible',
        'Work with healthcare professionals to develop a comprehensive management plan',
        'Consider consulting with an endocrinologist or diabetes specialist',
        'Make significant lifestyle changes including increased physical activity and dietary improvements',
        'Learn about diabetes self-management strategies',
        'Monitor for symptoms of diabetes such as increased thirst, frequent urination, unexplained weight loss, and fatigue'
      ],
      disclaimer: 'This screening suggests a very high risk that requires immediate attention. Please discuss these results with a healthcare provider as soon as possible.'
    }
  ],
  
  furtherResources: [
    {
      title: 'American Diabetes Association',
      url: 'https://www.diabetes.org/'
    },
    {
      title: 'CDC - National Diabetes Prevention Program',
      url: 'https://www.cdc.gov/diabetes/prevention/index.html'
    },
    {
      title: 'International Diabetes Federation',
      url: 'https://www.idf.org/'
    },
    {
      title: 'National Institute of Diabetes and Digestive and Kidney Diseases',
      url: 'https://www.niddk.nih.gov/health-information/diabetes'
    }
  ],
  
  // Additional information about the test
  testInfo: {
    developedBy: 'Based on the American Diabetes Association Risk Test and Finnish Diabetes Risk Score (FINDRISC)',
    yearDeveloped: 'Various (combined from established tools)',
    timeToComplete: '3-5 minutes',
    scoringMethod: 'Sum of all item scores (range: 0-29)',
    clinicalInterpretation: [
      '0-7: Low Risk',
      '8-11: Slightly Elevated Risk',
      '12-14: Moderate Risk',
      '15-20: High Risk',
      '21-29: Very High Risk'
    ],
    validation: 'Based on validated risk assessment tools that have been tested in large population studies.',
    limitations: 'This is a screening tool only and cannot diagnose diabetes or prediabetes. Laboratory testing is required for diagnosis.'
  }
};
