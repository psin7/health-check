// Memory & Cognitive Function Test
export const memoryTest = {
  id: 'memory-test',
  title: 'Memory & Cognitive Function Assessment',
  category: 'Cognitive',
  description: 'A comprehensive assessment of memory and cognitive functions including working memory, pattern recognition, visual-spatial memory, and information processing speed.',
  instructions: 'This test evaluates different aspects of memory and cognitive function. Answer each question carefully. Some questions may require you to remember information from previous screens. The test will take approximately 15-20 minutes to complete.',
  answerOptions: [
    { text: 'A', score: 1 },
    { text: 'B', score: 0 },
    { text: 'C', score: 0 },
    { text: 'D', score: 0 }
  ],
  questions: [
    // Working Memory Domain
    {
      id: 1,
      text: 'Memorize this sequence of numbers, then select the correct sequence.',
      subText: '7 - 2 - 9 - 4 - 1',
      imageUrl: 'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      options: [
        '7 - 2 - 9 - 4 - 1',
        '7 - 2 - 9 - 1 - 4',
        '7 - 9 - 2 - 4 - 1',
        '7 - 2 - 4 - 9 - 1'
      ],
      correctAnswer: '7 - 2 - 9 - 4 - 1',
      domain: 'Working Memory'
    },
    {
      id: 2,
      text: 'Memorize these words, then select the correct list.',
      subText: 'APPLE - CHAIR - BLUE - ELEPHANT - PENCIL',
      imageUrl: 'https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      options: [
        'APPLE - CHAIR - BLUE - ELEPHANT - PENCIL',
        'APPLE - CHAIR - BLUE - PENCIL - ELEPHANT',
        'APPLE - BLUE - CHAIR - ELEPHANT - PENCIL',
        'APPLE - CHAIR - ELEPHANT - BLUE - PENCIL'
      ],
      correctAnswer: 'APPLE - CHAIR - BLUE - ELEPHANT - PENCIL',
      domain: 'Working Memory'
    },
    {
      id: 3,
      text: 'Repeat this sequence backward: 8-3-5-2-7',
      imageUrl: 'https://images.unsplash.com/photo-1503792501406-2c40da09e1e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      options: [
        '7-2-5-3-8',
        '8-3-5-2-7',
        '7-5-2-3-8',
        '8-7-5-3-2'
      ],
      correctAnswer: '7-2-5-3-8',
      domain: 'Working Memory'
    },
    
    // Visual-Spatial Memory
    {
      id: 4,
      text: 'Study this geometric pattern, then select which option EXACTLY matches it.',
      subText: 'Look carefully at the arrangement, colors, and number of shapes.',
      imageUrl: 'https://via.placeholder.com/600x400/4287f5/ffffff?text=Geometric+Pattern',
      options: [
        '3 blue squares and 2 red circles',
        '2 blue squares and 3 red circles',
        '3 red squares and 2 blue circles',
        '2 red squares and 3 blue circles'
      ],
      correctAnswer: '3 blue squares and 2 red circles',
      domain: 'Visual-Spatial Memory'
    },
    {
      id: 5,
      text: 'Memorize the positions of the dots in this grid, then select the matching arrangement.',
      subText: 'The image will only be shown briefly. Pay attention to both position and color.',
      imageUrl: 'https://via.placeholder.com/600x400/f542e5/ffffff?text=Dot+Arrangement',
      options: [
        '4 dots in corner positions',
        '5 dots in cross formation',
        '3 dots in diagonal line',
        '4 dots in diamond pattern'
      ],
      correctAnswer: '4 dots in diamond pattern',
      domain: 'Visual-Spatial Memory'
    },
    {
      id: 6,
      text: 'Count how many triangles are in this geometric image.',
      subText: 'Look carefully for overlapping shapes and hidden triangles.',
      imageUrl: 'https://via.placeholder.com/600x400/42f5b3/000000?text=Count+Triangles',
      options: [
        '4 triangles',
        '5 triangles',
        '6 triangles',
        '7 triangles'
      ],
      correctAnswer: '5 triangles',
      domain: 'Visual-Spatial Memory'
    },
    
    // Pattern Recognition
    {
      id: 7,
      text: 'What number comes next in this sequence?',
      subText: '2, 4, 8, 16, 32, ...',
      imageUrl: 'https://via.placeholder.com/600x400/f58c42/ffffff?text=Number+Sequence',
      options: [
        '36',
        '48',
        '64',
        '128'
      ],
      correctAnswer: '64',
      domain: 'Pattern Recognition'
    },
    {
      id: 8,
      text: 'What letter comes next in this alphabetical pattern?',
      subText: 'A, C, E, G, ...',
      imageUrl: 'https://via.placeholder.com/600x400/42adf5/ffffff?text=Letter+Sequence',
      options: [
        'H',
        'I',
        'J',
        'K'
      ],
      correctAnswer: 'I',
      domain: 'Pattern Recognition'
    },
    {
      id: 9,
      text: 'What number completes this mathematical sequence?',
      subText: '1, 4, 9, 16, 25, ...',
      imageUrl: 'https://via.placeholder.com/600x400/f54263/ffffff?text=Math+Pattern',
      options: [
        '30',
        '36',
        '49',
        '64'
      ],
      correctAnswer: '36',
      domain: 'Pattern Recognition'
    },
    
    // Information Processing Speed
    {
      id: 10,
      text: 'Quickly count how many 7s appear in this sequence:',
      subText: '2749378275371787',
      imageUrl: 'https://via.placeholder.com/600x400/3b5998/ffffff?text=Count+7s',
      options: [
        '3',
        '4',
        '5',
        '6'
      ],
      correctAnswer: '5',
      domain: 'Processing Speed'
    },
    {
      id: 11,
      text: 'If A=1, B=2, C=3... quickly calculate:',
      subText: 'H + E + L + L + O',
      imageUrl: 'https://via.placeholder.com/600x400/bc5090/ffffff?text=Letter+Math',
      options: [
        '47',
        '52',
        '38',
        '43'
      ],
      correctAnswer: '52', // H(8) + E(5) + L(12) + L(12) + O(15) = 52
      domain: 'Processing Speed'
    },
    {
      id: 12,
      text: 'Quickly identify which word below is spelled incorrectly:',
      subText: 'Check each word carefully for spelling errors.',
      imageUrl: 'https://via.placeholder.com/600x400/58508d/ffffff?text=Spelling+Test',
      options: [
        'Necessary',
        'Accomodation',
        'Recommendation',
        'Definitely'
      ],
      correctAnswer: 'Accomodation', // Correct: Accommodation
      domain: 'Processing Speed'
    },
    
    // Verbal Memory
    {
      id: 13,
      text: 'Earlier in this test, you memorized a list of 5 words. Select the list that matches exactly what you saw:',
      subText: 'Try to recall the words in their exact order.',
      imageUrl: 'https://via.placeholder.com/600x400/ff6f61/ffffff?text=Word+Recall',
      options: [
        'APPLE - CHAIR - BLUE - ELEPHANT - PENCIL',
        'APPLE - TABLE - BLUE - ELEPHANT - PENCIL',
        'APPLE - CHAIR - RED - ELEPHANT - PENCIL',
        'APPLE - CHAIR - BLUE - GIRAFFE - PENCIL'
      ],
      correctAnswer: 'APPLE - CHAIR - BLUE - ELEPHANT - PENCIL',
      domain: 'Verbal Memory'
    },
    {
      id: 14,
      text: 'Read this short passage:',
      subText: '"John went to the store to buy milk, eggs, bread, and coffee." What did John NOT buy?',
      imageUrl: 'https://via.placeholder.com/600x400/6b5b95/ffffff?text=Reading+Comprehension',
      options: [
        'Sugar',
        'Milk',
        'Bread',
        'Eggs'
      ],
      correctAnswer: 'Sugar',
      domain: 'Verbal Memory'
    },
    {
      id: 15,
      text: 'Memorize this sentence:',
      subText: '"The quick brown fox jumps over the lazy dog." What color is the fox?',
      imageUrl: 'https://via.placeholder.com/600x400/88b04b/ffffff?text=Sentence+Memory',
      options: [
        'Red',
        'Brown',
        'Gray',
        'Black'
      ],
      correctAnswer: 'Brown',
      domain: 'Verbal Memory'
    },
    
    // Executive Function
    {
      id: 16,
      text: 'If it takes 5 machines 5 minutes to make 5 widgets, how long would it take 100 machines to make 100 widgets?',
      subText: 'Think carefully about the relationship between machines, time, and widgets.',
      imageUrl: 'https://via.placeholder.com/600x400/ff9671/000000?text=Logic+Problem',
      options: [
        '1 minute',
        '5 minutes',
        '20 minutes',
        '100 minutes'
      ],
      correctAnswer: '5 minutes',
      domain: 'Executive Function'
    },
    {
      id: 17,
      text: 'A bat and a ball cost $1.10 in total. The bat costs $1.00 more than the ball. How much does the ball cost?',
      subText: 'Work through this logic problem step by step.',
      imageUrl: 'https://via.placeholder.com/600x400/ffc75f/000000?text=Bat+and+Ball+Problem',
      options: [
        '5 cents',
        '10 cents',
        '15 cents',
        '20 cents'
      ],
      correctAnswer: '5 cents', // If ball = x, then bat = x + 1.00, and x + (x + 1.00) = 1.10, so 2x + 1.00 = 1.10, 2x = 0.10, x = 0.05
      domain: 'Executive Function'
    },
    {
      id: 18,
      text: 'Which of these activities requires the most complex planning?',
      subText: 'Consider the number of steps and decisions required for each activity.',
      imageUrl: 'https://via.placeholder.com/600x400/845ec2/ffffff?text=Planning+Tasks',
      options: [
        'Brushing teeth',
        'Making a sandwich',
        'Planning a multi-city vacation',
        'Walking the dog'
      ],
      correctAnswer: 'Planning a multi-city vacation',
      domain: 'Executive Function'
    },
    
    // Attention to Detail
    {
      id: 19,
      text: 'Find the mistake in this sequence:',
      subText: '1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 31, 14, 15',
      imageUrl: 'https://via.placeholder.com/600x400/00c9a7/000000?text=Find+The+Error',
      options: [
        '6 should be 7',
        '10 should be 11',
        '31 should be 13',
        '15 should be 16'
      ],
      correctAnswer: '31 should be 13',
      domain: 'Attention to Detail'
    },
    {
      id: 20,
      text: 'How many differences can you spot between these two similar images?',
      subText: 'Look at colors, positions, and small details.',
      imageUrl: 'https://via.placeholder.com/600x400/c34a36/ffffff?text=Spot+The+Differences',
      options: [
        '3',
        '4',
        '5',
        '6'
      ],
      correctAnswer: '5',
      domain: 'Attention to Detail'
    }
  ],
  resultCategories: [
    {
      minScore: 0,
      maxScore: 5,
      title: 'Below Average Cognitive Function',
      description: 'Your performance suggests potential challenges with memory and cognitive processing. This could be due to various factors including stress, fatigue, or underlying cognitive issues.',
      recommendations: [
        'Consider consulting with a healthcare professional for a comprehensive evaluation',
        'Practice memory exercises and brain training activities regularly',
        'Ensure adequate sleep and proper nutrition',
        'Reduce stress through relaxation techniques',
        'Consider tracking your cognitive performance over time'
      ]
    },
    {
      minScore: 6,
      maxScore: 10,
      title: 'Average Cognitive Function',
      description: 'Your performance is within the average range for memory and cognitive processing. There may be specific areas where you could improve.',
      recommendations: [
        'Focus on areas where you scored lower to improve overall cognitive function',
        'Incorporate regular mental exercises into your routine',
        'Maintain a healthy lifestyle with regular physical activity',
        'Consider brain-healthy nutrition like omega-3 fatty acids and antioxidants',
        'Practice mindfulness to improve focus and attention'
      ]
    },
    {
      minScore: 11,
      maxScore: 15,
      title: 'Above Average Cognitive Function',
      description: 'Your performance indicates strong memory and cognitive abilities. You demonstrated good skills across multiple cognitive domains.',
      recommendations: [
        'Continue challenging your brain with new learning experiences',
        'Consider more advanced cognitive training in areas of interest',
        'Maintain your cognitive health through regular mental and physical exercise',
        'Share your cognitive strategies with others who might benefit',
        'Consider activities that combine multiple cognitive skills for continued growth'
      ]
    },
    {
      minScore: 16,
      maxScore: 20,
      title: 'Superior Cognitive Function',
      description: 'Your performance demonstrates exceptional memory and cognitive processing abilities. You showed strength across all tested domains.',
      recommendations: [
        'Challenge yourself with complex problem-solving activities',
        'Consider learning new languages or musical instruments to further enhance cognitive abilities',
        'Maintain your cognitive edge through varied and challenging mental activities',
        'Continue with a brain-healthy lifestyle including proper nutrition, exercise, and sleep',
        'Consider mentoring others in cognitive enhancement techniques'
      ]
    }
  ]
};
