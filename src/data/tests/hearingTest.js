// Hearing Test
export const hearingTest = {
  id: 'hearing',
  title: 'Hearing Test',
  category: 'Hearing',
  description: 'A self-assessment to evaluate your hearing abilities across different frequencies and situations.',
  instructions: 'This test evaluates your hearing abilities in various situations. For each question, select the option that best describes your experience. For the most accurate results, take this test in a quiet environment.',
  questions: [
    {
      id: 1,
      text: 'How well can you hear low-frequency sounds like thunder, bass drums, or a tuba?',
      imageUrl: '/images/hearing/low_frequency.svg',
      subText: 'Low frequency sounds (125-250 Hz) include thunder, bass drums, and tuba'
    },
    {
      id: 2,
      text: 'How well can you hear mid-frequency sounds like normal conversation or a telephone ringing?',
      imageUrl: '/images/hearing/mid_frequency.svg',
      subText: 'Mid frequency sounds (500-2000 Hz) include human speech, piano, and telephone'
    },
    {
      id: 3,
      text: 'How well can you hear high-frequency sounds like birds chirping, whistles, or cymbals?',
      imageUrl: '/images/hearing/high_frequency.svg',
      subText: 'High frequency sounds (4000-8000 Hz) include birds chirping, whistles, and cymbals'
    },
    {
      id: 4,
      text: 'How well can you follow a conversation in a noisy environment (like a restaurant or party)?',
      imageUrl: '/images/hearing/background_noise.svg',
      subText: 'This tests your ability to filter out background noise and focus on speech'
    },
    {
      id: 5,
      text: 'How well can you determine which direction a sound is coming from?',
      imageUrl: '/images/hearing/directional_hearing.svg',
      subText: 'Directional hearing helps locate sound sources in your environment'
    },
    {
      id: 6,
      text: 'How well can you hear and understand conversations over the phone?',
      imageUrl: '/images/hearing/phone_conversation.svg',
      subText: 'Phone conversations lack visual cues and may be challenging for some'
    },
    {
      id: 7,
      text: 'How well can you hear whispered speech or very quiet sounds?',
      imageUrl: '/images/hearing/whisper_test.svg',
      subText: 'Whispered speech is typically around 30 decibels, much quieter than normal speech'
    },
    {
      id: 8,
      text: 'Do you experience ringing, buzzing, or other sounds in your ears when no external sound is present?',
      imageUrl: '/images/hearing/tinnitus.svg',
      subText: 'This condition is called tinnitus and can be associated with hearing loss'
    },
    {
      id: 9,
      text: 'Do you find sudden loud sounds particularly uncomfortable or painful?',
      imageUrl: '/images/hearing/sudden_loud_sounds.svg',
      subText: 'Heightened sensitivity to loud sounds may indicate hyperacusis'
    },
    {
      id: 10,
      text: 'How clearly can you hear sounds without distortion or muffling?',
      imageUrl: '/images/hearing/sound_clarity.svg',
      subText: 'Sound clarity refers to the quality and crispness of perceived sounds'
    },
    {
      id: 11,
      text: 'How well can you distinguish between similar-sounding words (like "bear" vs "pear")?',
      imageUrl: '/images/hearing/speech_discrimination.svg',
      subText: 'Speech discrimination is the ability to differentiate between similar speech sounds'
    }
  ],
  answerOptions: [
    { text: 'Very well / No difficulty', score: 2 },
    { text: 'Moderately well / Some difficulty', score: 1 },
    { text: 'Poorly / Significant difficulty', score: 0 }
  ],
  resultCategories: [
    {
      minScore: 18,
      maxScore: 22,
      title: 'Excellent Hearing',
      icon: '👂',
      color: 'bg-green-100 text-green-800',
      description: 'Your responses suggest excellent hearing abilities across all frequencies and situations. You appear to have no significant difficulty with hearing in various environments.',
      recommendations: [
        'Continue to protect your hearing by avoiding prolonged exposure to loud noises',
        'Use appropriate hearing protection in noisy environments (concerts, construction sites, etc.)',
        'Consider having a baseline hearing test with an audiologist for future reference',
        'Be aware that hearing naturally changes with age, so periodic reassessment is beneficial'
      ],
      disclaimer: 'This is a simplified screening test and not a substitute for a professional hearing evaluation. For any concerns about your hearing, please consult with an audiologist or ENT specialist.',
      alertLevel: 'bg-green-50 text-green-800'
    },
    {
      minScore: 12,
      maxScore: 17,
      title: 'Good Hearing',
      icon: '👂',
      color: 'bg-green-100 text-green-800',
      description: 'Your responses suggest generally good hearing abilities with some minor difficulties in specific situations or frequency ranges.',
      recommendations: [
        'Be mindful of situations where you experience difficulty and consider positioning yourself to optimize hearing',
        'Protect your hearing by limiting exposure to loud noises and using hearing protection when necessary',
        'Consider a professional hearing evaluation to identify any specific areas of hearing loss',
        'In challenging listening environments, reduce background noise when possible'
      ],
      disclaimer: 'This is a simplified screening test and not a substitute for a professional hearing evaluation. For any concerns about your hearing, please consult with an audiologist or ENT specialist.',
      alertLevel: 'bg-green-50 text-green-800'
    },
    {
      minScore: 6,
      maxScore: 11,
      title: 'Moderate Hearing Difficulties',
      icon: '👂',
      color: 'bg-yellow-100 text-yellow-800',
      description: 'Your responses suggest moderate difficulties with hearing in several situations or frequency ranges. This may be impacting your daily communication.',
      recommendations: [
        'Schedule a comprehensive hearing evaluation with an audiologist',
        'When conversing with others, position yourself to see their face to help with understanding',
        'Reduce background noise when having important conversations',
        'Consider using assistive listening devices for specific situations like watching TV or phone calls',
        'Inform friends and family about your hearing difficulties so they can communicate more effectively with you'
      ],
      disclaimer: 'This is a simplified screening test and not a substitute for a professional hearing evaluation. Please consult with an audiologist or ENT specialist for proper diagnosis and treatment options.',
      alertLevel: 'bg-yellow-50 text-yellow-800'
    },
    {
      minScore: 0,
      maxScore: 5,
      title: 'Significant Hearing Difficulties',
      icon: '👂',
      color: 'bg-red-100 text-red-800',
      description: 'Your responses suggest significant difficulties with hearing across multiple situations and frequency ranges. This is likely impacting your daily communication and quality of life.',
      recommendations: [
        'Schedule a comprehensive hearing evaluation with an audiologist as soon as possible',
        'Discuss hearing aid options and other assistive technologies with hearing healthcare professionals',
        'Learn communication strategies to help manage hearing difficulties',
        'Consider speech reading (lip reading) classes if appropriate',
        'Join support groups for people with hearing loss for additional resources and emotional support'
      ],
      disclaimer: 'This is a simplified screening test and not a substitute for a professional hearing evaluation. Please consult with an audiologist or ENT specialist for proper diagnosis and treatment options.',
      alertLevel: 'bg-red-50 text-red-800'
    }
  ]
};
