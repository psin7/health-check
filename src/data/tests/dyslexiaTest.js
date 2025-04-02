// Dyslexia Screening Test
export const dyslexiaTest = {
  id: 'dyslexia',
  title: 'Dyslexia Screening Test',
  category: 'Neurological',
  description: 'A comprehensive screening tool to assess risk factors and symptoms associated with dyslexia.',
  instructions: 'Answer each question based on your experiences or observations. Choose the option that best applies to you or the person you are assessing.',
  questions: [
    {
      id: 1,
      text: 'Difficulty with reading fluently or reading well below the expected level for age',
    },
    {
      id: 2,
      text: 'Problems with spelling, including inconsistent spelling of the same word',
    },
    {
      id: 3,
      text: 'Difficulty sounding out unfamiliar words (phonetic decoding)',
    },
    {
      id: 4,
      text: 'Slow reading and writing that requires extra time and effort',
    },
    {
      id: 5,
      text: 'Avoiding activities that involve reading or writing',
    },
    {
      id: 6,
      text: 'Mispronouncing words or names, or trouble retrieving the right word when speaking',
    },
    {
      id: 7,
      text: 'Difficulty remembering sequences or following multi-step instructions',
    },
    {
      id: 8,
      text: 'Confusing or reversing similar-looking letters or numbers (like b/d, p/q, 6/9)',
    },
    {
      id: 9,
      text: 'Struggling with rhyming words or identifying sounds in words',
    },
    {
      id: 10,
      text: 'Trouble learning a foreign language or solving math word problems',
    },
    {
      id: 11,
      text: 'Family history of reading or learning difficulties',
    },
    {
      id: 12,
      text: 'Strong skills in areas not dependent on reading (like problem-solving, creativity, or spatial awareness)',
    }
  ],
  answerOptions: [
    { text: 'Not at all', score: 0 },
    { text: 'Sometimes', score: 1 },
    { text: 'Frequently', score: 2 }
  ],
  resultCategories: [
    {
      minScore: 0,
      maxScore: 7,
      title: 'Low Likelihood of Dyslexia',
      icon: '📚',
      color: 'bg-green-100 text-green-800',
      description: 'Your responses suggest a low likelihood of dyslexia. You seem to have few or no significant difficulties with reading, spelling, or language processing.',
      recommendations: [
        'Continue to engage with reading and writing regularly',
        'If you have any specific concerns about certain reading or language tasks, consider discussing them with an educator',
        'Monitor for any changes in reading or writing abilities',
        'Maintain good reading habits like reading in a well-lit environment and taking breaks when needed'
      ],
      disclaimer: 'This is a screening tool only and does not provide a diagnosis. If you have specific concerns, please consult with an educational psychologist or learning specialist.',
      alertLevel: 'bg-green-50 text-green-800'
    },
    {
      minScore: 8,
      maxScore: 15,
      title: 'Moderate Likelihood of Dyslexia',
      icon: '📖',
      color: 'bg-yellow-100 text-yellow-800',
      description: 'Your responses suggest a moderate likelihood of dyslexia. You may be experiencing some challenges with reading, spelling, or language processing that could be associated with dyslexia.',
      recommendations: [
        'Consider scheduling an assessment with an educational psychologist or learning specialist',
        'Discuss your reading challenges with teachers, employers, or support services',
        'Explore reading strategies such as using larger text, different fonts, or text-to-speech tools',
        'Allow yourself extra time for reading and writing tasks'
      ],
      disclaimer: 'This screening suggests you may benefit from a professional evaluation. This tool does not provide a diagnosis of dyslexia.',
      alertLevel: 'bg-yellow-50 text-yellow-800'
    },
    {
      minScore: 16,
      maxScore: 24,
      title: 'High Likelihood of Dyslexia',
      icon: '🔍',
      color: 'bg-red-100 text-red-800',
      description: 'Your responses suggest a high likelihood of dyslexia. You appear to be experiencing significant difficulties with reading, spelling, and language processing that are commonly associated with dyslexia.',
      recommendations: [
        'Seek a comprehensive evaluation from an educational psychologist or specialist in learning disabilities',
        'Look into accommodations available at school, university, or workplace (like extra time, assistive technology)',
        'Explore evidence-based interventions such as structured literacy programs',
        'Connect with dyslexia support organizations for resources and community'
      ],
      disclaimer: 'This screening indicates a strong possibility of dyslexia, but a formal diagnosis requires professional assessment. Many people with dyslexia are highly intelligent and creative, with dyslexia affecting only specific aspects of learning.',
      alertLevel: 'bg-red-50 text-red-800'
    }
  ]
};
