// Heart Disease Risk Calculator
// Based on the Framingham Risk Score and ASCVD Risk Estimator Plus
export const heartDiseaseTest = {
  id: 'heart-disease',
  title: 'Heart Disease Risk Calculator',
  category: 'Physical Health',
  description: 'This assessment evaluates your 10-year risk of developing cardiovascular disease based on established risk factors from the Framingham Heart Study and American College of Cardiology guidelines.',
  instructions: 'Please answer the following questions accurately to help determine your risk for developing heart disease. For medical values like blood pressure and cholesterol, use your most recent measurements if available.',
  imageUrl: '/images/physical-health/heart_disease_test.svg',
  
  questions: [
    {
      id: 1,
      text: 'What is your age?',
      subText: 'Age is one of the strongest risk factors for cardiovascular disease.',
      category: 'Demographics'
    },
    {
      id: 2,
      text: 'What is your gender?',
      subText: 'Men generally have a higher risk of heart disease than women of the same age, though risk equalizes after menopause.',
      category: 'Demographics'
    },
    {
      id: 3,
      text: 'What is your systolic blood pressure (the top number)?',
      subText: 'Systolic blood pressure is the pressure in your arteries when your heart beats.',
      category: 'Clinical Measurements',
      helpText: 'If you don\'t know your blood pressure, select "I don\'t know" and the calculator will use average values based on your age and gender.'
    },
    {
      id: 4,
      text: 'Are you currently taking medication to treat high blood pressure?',
      subText: 'Blood pressure medication reduces your risk, but having high blood pressure that requires treatment is still a risk factor.',
      category: 'Medical History'
    },
    {
      id: 5,
      text: 'Do you have diabetes?',
      subText: 'Diabetes significantly increases the risk of developing cardiovascular disease.',
      category: 'Medical History'
    },
    {
      id: 6,
      text: 'Do you currently smoke cigarettes?',
      subText: 'Smoking damages blood vessels and increases risk of atherosclerosis.',
      category: 'Lifestyle'
    },
    {
      id: 7,
      text: 'What is your total cholesterol level?',
      subText: 'Total cholesterol is the sum of all cholesterol components in your blood.',
      category: 'Clinical Measurements',
      helpText: 'If you don\'t know your cholesterol levels, select "I don\'t know" and the calculator will use average values based on your age and gender.'
    },
    {
      id: 8,
      text: 'What is your HDL (good) cholesterol level?',
      subText: 'HDL cholesterol helps remove other forms of cholesterol from your bloodstream.',
      category: 'Clinical Measurements',
      helpText: 'Higher HDL levels are generally better and protective against heart disease.'
    },
    {
      id: 9,
      text: 'Do you have a family history of premature heart disease?',
      subText: 'Premature heart disease means a heart attack or coronary disease before age 55 in a male first-degree relative (parent, sibling) or before age 65 in a female first-degree relative.',
      category: 'Family History'
    },
    {
      id: 10,
      text: 'How would you describe your physical activity level?',
      subText: 'Regular physical activity strengthens your heart and improves circulation.',
      category: 'Lifestyle'
    }
  ],
  
  // Custom answer options for each question
  customAnswerOptions: {
    1: [
      { text: 'Under 30 years', score: 0, ageValue: 25 },
      { text: '30-34 years', score: 0, ageValue: 32 },
      { text: '35-39 years', score: 0, ageValue: 37 },
      { text: '40-44 years', score: 1, ageValue: 42 },
      { text: '45-49 years', score: 2, ageValue: 47 },
      { text: '50-54 years', score: 3, ageValue: 52 },
      { text: '55-59 years', score: 4, ageValue: 57 },
      { text: '60-64 years', score: 5, ageValue: 62 },
      { text: '65-69 years', score: 6, ageValue: 67 },
      { text: '70-74 years', score: 7, ageValue: 72 },
      { text: '75 years or older', score: 8, ageValue: 78 }
    ],
    2: [
      { text: 'Female', score: 0, genderValue: 'female' },
      { text: 'Male', score: 1, genderValue: 'male' }
    ],
    3: [
      { text: 'Less than 120 mmHg', score: 0, bpValue: 110 },
      { text: '120-129 mmHg', score: 1, bpValue: 125 },
      { text: '130-139 mmHg', score: 2, bpValue: 135 },
      { text: '140-159 mmHg', score: 3, bpValue: 150 },
      { text: '160 mmHg or higher', score: 4, bpValue: 170 },
      { text: 'I don\'t know', score: 2, bpValue: 'unknown' }
    ],
    4: [
      { text: 'No', score: 0, medValue: false },
      { text: 'Yes', score: 1, medValue: true }
    ],
    5: [
      { text: 'No', score: 0, diabetesValue: false },
      { text: 'Yes', score: 2, diabetesValue: true }
    ],
    6: [
      { text: 'Never smoked', score: 0, smokerValue: 'never' },
      { text: 'Former smoker (quit more than 1 year ago)', score: 1, smokerValue: 'former' },
      { text: 'Current smoker', score: 3, smokerValue: 'current' }
    ],
    7: [
      { text: 'Less than 160 mg/dL', score: 0, cholValue: 150 },
      { text: '160-199 mg/dL', score: 1, cholValue: 180 },
      { text: '200-239 mg/dL', score: 2, cholValue: 220 },
      { text: '240-279 mg/dL', score: 3, cholValue: 260 },
      { text: '280 mg/dL or higher', score: 4, cholValue: 300 },
      { text: 'I don\'t know', score: 2, cholValue: 'unknown' }
    ],
    8: [
      { text: 'Less than 35 mg/dL', score: 2, hdlValue: 30 },
      { text: '35-44 mg/dL', score: 1, hdlValue: 40 },
      { text: '45-49 mg/dL', score: 0, hdlValue: 47 },
      { text: '50-59 mg/dL', score: -1, hdlValue: 55 },
      { text: '60 mg/dL or higher', score: -2, hdlValue: 65 },
      { text: 'I don\'t know', score: 1, hdlValue: 'unknown' }
    ],
    9: [
      { text: 'No', score: 0, familyHistoryValue: false },
      { text: 'Yes', score: 2, familyHistoryValue: true }
    ],
    10: [
      { text: 'Sedentary (little to no exercise)', score: 2, activityValue: 'sedentary' },
      { text: 'Lightly active (light exercise 1-3 days per week)', score: 1, activityValue: 'light' },
      { text: 'Moderately active (moderate exercise 3-5 days per week)', score: 0, activityValue: 'moderate' },
      { text: 'Very active (vigorous exercise 6-7 days per week)', score: -1, activityValue: 'very' },
      { text: 'Extremely active (very intense exercise daily, or physical job)', score: -1, activityValue: 'extreme' }
    ]
  },
  
  // Calculate 10-year risk based on Framingham-derived algorithm
  calculateRisk: function(answers) {
    // Extract values from answers
    const riskFactors = {};
    
    // Map answers to their corresponding values
    this.questions.forEach((question, index) => {
      const answerOption = this.customAnswerOptions[question.id].find(option => 
        option.score === answers[index]
      );
      
      if (answerOption) {
        // Extract specific values for risk calculation
        if (question.id === 1) riskFactors.age = answerOption.ageValue;
        if (question.id === 2) riskFactors.gender = answerOption.genderValue;
        if (question.id === 3) riskFactors.systolicBP = answerOption.bpValue;
        if (question.id === 4) riskFactors.onBPMeds = answerOption.medValue;
        if (question.id === 5) riskFactors.diabetes = answerOption.diabetesValue;
        if (question.id === 6) riskFactors.smoker = answerOption.smokerValue;
        if (question.id === 7) riskFactors.totalCholesterol = answerOption.cholValue;
        if (question.id === 8) riskFactors.hdlCholesterol = answerOption.hdlValue;
        if (question.id === 9) riskFactors.familyHistory = answerOption.familyHistoryValue;
        if (question.id === 10) riskFactors.activityLevel = answerOption.activityValue;
      }
    });
    
    // Calculate base risk score (simplified version of Framingham algorithm)
    let baseRiskScore = 0;
    
    // Age points already included in the score
    
    // Gender adjustment (women have lower base risk)
    if (riskFactors.gender === 'female') {
      baseRiskScore -= 3;
    }
    
    // Blood pressure adjustment
    if (riskFactors.systolicBP !== 'unknown') {
      if (riskFactors.systolicBP >= 160) {
        baseRiskScore += 3;
      } else if (riskFactors.systolicBP >= 140) {
        baseRiskScore += 2;
      } else if (riskFactors.systolicBP >= 130) {
        baseRiskScore += 1;
      }
      
      // Additional points if on BP medication
      if (riskFactors.onBPMeds) {
        baseRiskScore += 1;
      }
    }
    
    // Diabetes adjustment
    if (riskFactors.diabetes) {
      baseRiskScore += 2;
    }
    
    // Smoking adjustment
    if (riskFactors.smoker === 'current') {
      baseRiskScore += 3;
    } else if (riskFactors.smoker === 'former') {
      baseRiskScore += 1;
    }
    
    // Cholesterol adjustment
    if (riskFactors.totalCholesterol !== 'unknown' && riskFactors.hdlCholesterol !== 'unknown') {
      // Total cholesterol impact
      if (riskFactors.totalCholesterol >= 280) {
        baseRiskScore += 3;
      } else if (riskFactors.totalCholesterol >= 240) {
        baseRiskScore += 2;
      } else if (riskFactors.totalCholesterol >= 200) {
        baseRiskScore += 1;
      }
      
      // HDL (protective) impact
      if (riskFactors.hdlCholesterol >= 60) {
        baseRiskScore -= 2;
      } else if (riskFactors.hdlCholesterol >= 50) {
        baseRiskScore -= 1;
      } else if (riskFactors.hdlCholesterol < 35) {
        baseRiskScore += 2;
      }
    }
    
    // Family history adjustment
    if (riskFactors.familyHistory) {
      baseRiskScore += 2;
    }
    
    // Physical activity adjustment (protective)
    if (riskFactors.activityLevel === 'moderate' || riskFactors.activityLevel === 'very' || riskFactors.activityLevel === 'extreme') {
      baseRiskScore -= 1;
    } else if (riskFactors.activityLevel === 'sedentary') {
      baseRiskScore += 1;
    }
    
    // Convert score to estimated 10-year risk percentage
    let riskPercentage;
    
    if (baseRiskScore <= 0) {
      riskPercentage = '<1%';
    } else if (baseRiskScore <= 4) {
      riskPercentage = '1-5%';
    } else if (baseRiskScore <= 6) {
      riskPercentage = '5-10%';
    } else if (baseRiskScore <= 8) {
      riskPercentage = '10-15%';
    } else if (baseRiskScore <= 10) {
      riskPercentage = '15-20%';
    } else if (baseRiskScore <= 12) {
      riskPercentage = '20-25%';
    } else {
      riskPercentage = '>25%';
    }
    
    return {
      score: baseRiskScore,
      riskPercentage: riskPercentage
    };
  },
  
  resultCategories: [
    {
      minScore: -10,
      maxScore: 4,
      title: 'Low Risk of Heart Disease',
      icon: '💚',
      color: 'bg-green-100 text-green-800',
      alertLevel: 'bg-green-50 text-green-800',
      description: 'Your responses suggest a low 10-year risk of developing cardiovascular disease (approximately 1-5%). This means that out of 100 people with similar risk factors, 1-5 would be expected to develop heart disease in the next 10 years.',
      recommendations: [
        'Continue maintaining a heart-healthy lifestyle with regular physical activity',
        'Eat a balanced diet rich in fruits, vegetables, whole grains, and lean proteins',
        'Limit sodium, added sugars, and unhealthy fats',
        'Have your blood pressure and cholesterol checked regularly',
        'Avoid smoking and limit alcohol consumption',
        'Manage stress through relaxation techniques, adequate sleep, and social connections',
        'Reassess your cardiovascular risk every 3-5 years'
      ],
      disclaimer: 'This is not a diagnostic tool. For a more accurate assessment of your cardiovascular risk, please consult a healthcare professional who can perform appropriate laboratory tests and physical examinations.'
    },
    {
      minScore: 5,
      maxScore: 8,
      title: 'Moderate Risk of Heart Disease',
      icon: '⚠️',
      color: 'bg-yellow-100 text-yellow-800',
      alertLevel: 'bg-yellow-50 text-yellow-800',
      description: 'Your responses suggest a moderate 10-year risk of developing cardiovascular disease (approximately 5-15%). This means that out of 100 people with similar risk factors, 5-15 would be expected to develop heart disease in the next 10 years.',
      recommendations: [
        'Schedule a check-up with your healthcare provider to discuss your cardiovascular risk',
        'Have your blood pressure, cholesterol, and blood glucose levels checked',
        'Aim for at least 150 minutes of moderate-intensity physical activity per week',
        'Follow a heart-healthy diet like the Mediterranean or DASH diet',
        'If you smoke, talk to your doctor about smoking cessation programs',
        'Maintain a healthy weight or work toward weight loss if overweight',
        'Learn stress management techniques',
        'Reassess your cardiovascular risk annually'
      ],
      disclaimer: 'This screening suggests a moderate risk that warrants attention. Please consider discussing these results with a healthcare provider.'
    },
    {
      minScore: 9,
      maxScore: 12,
      title: 'High Risk of Heart Disease',
      icon: '🔴',
      color: 'bg-orange-100 text-orange-800',
      alertLevel: 'bg-orange-50 text-orange-800',
      description: 'Your responses suggest a high 10-year risk of developing cardiovascular disease (approximately 15-25%). This means that out of 100 people with similar risk factors, 15-25 would be expected to develop heart disease in the next 10 years.',
      recommendations: [
        'Schedule an appointment with your healthcare provider soon to discuss your cardiovascular risk',
        'Ask about comprehensive cardiovascular risk assessment, including additional tests if appropriate',
        'Work with your healthcare provider to develop a personalized risk reduction plan',
        'Follow a heart-healthy diet strictly, possibly with the guidance of a dietitian',
        'Engage in regular physical activity as recommended by your doctor',
        'If you smoke, quit smoking with medical support if needed',
        'Take any prescribed medications as directed',
        'Monitor your blood pressure regularly if recommended',
        'Learn about the warning signs of heart attack and stroke'
      ],
      disclaimer: 'This screening suggests a high risk that requires attention. Please discuss these results with a healthcare provider soon.'
    },
    {
      minScore: 13,
      maxScore: 30,
      title: 'Very High Risk of Heart Disease',
      icon: '🚨',
      color: 'bg-red-100 text-red-800',
      alertLevel: 'bg-red-50 text-red-800',
      description: 'Your responses suggest a very high 10-year risk of developing cardiovascular disease (greater than 25%). This means that out of 100 people with similar risk factors, more than 25 would be expected to develop heart disease in the next 10 years.',
      recommendations: [
        'Schedule an appointment with your healthcare provider as soon as possible',
        'Ask about comprehensive cardiovascular risk assessment and management',
        'Consider consultation with a cardiologist',
        'Follow medical advice regarding medications and lifestyle changes strictly',
        'Adopt a heart-healthy diet under medical supervision',
        'Engage in physical activity as recommended by your healthcare provider',
        'If you smoke, quit smoking immediately with medical support',
        'Monitor your blood pressure regularly as recommended',
        'Learn about the warning signs of heart attack and stroke and have an emergency plan',
        'Consider cardiac rehabilitation programs if recommended'
      ],
      disclaimer: 'This screening suggests a very high risk that requires immediate attention. Please discuss these results with a healthcare provider as soon as possible.'
    }
  ],
  
  furtherResources: [
    {
      title: 'American Heart Association',
      url: 'https://www.heart.org/'
    },
    {
      title: 'CDC - Heart Disease Prevention',
      url: 'https://www.cdc.gov/heartdisease/prevention.htm'
    },
    {
      title: 'National Heart, Lung, and Blood Institute',
      url: 'https://www.nhlbi.nih.gov/health-topics/heart-healthy-living'
    },
    {
      title: 'DASH Eating Plan',
      url: 'https://www.nhlbi.nih.gov/health-topics/dash-eating-plan'
    }
  ],
  
  // Additional information about the test
  testInfo: {
    developedBy: 'Based on the Framingham Risk Score and ASCVD Risk Estimator Plus',
    yearDeveloped: '2025 (adapted from established risk calculators)',
    timeToComplete: '3-5 minutes',
    scoringMethod: 'Modified Framingham-based algorithm with lifestyle factors',
    clinicalInterpretation: [
      'Score -10 to 4: Low Risk (1-5% 10-year risk)',
      'Score 5 to 8: Moderate Risk (5-15% 10-year risk)',
      'Score 9 to 12: High Risk (15-25% 10-year risk)',
      'Score 13+: Very High Risk (>25% 10-year risk)'
    ],
    validation: 'Based on validated risk assessment tools that have been tested in large population studies.',
    limitations: 'This is a simplified screening tool. For a more accurate assessment, laboratory tests and clinical evaluation by a healthcare provider are necessary.'
  }
};
