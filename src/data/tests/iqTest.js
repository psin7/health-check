// Professional Standard IQ Test
export const iqTest = {
  id: 'iq-test',
  title: 'Professional-Grade IQ Assessment',
  category: 'Cognitive',
  description: 'A comprehensive assessment of cognitive abilities based on professional IQ test standards including verbal comprehension, perceptual reasoning, working memory, processing speed, and fluid intelligence.',
  instructions: 'This test assesses multiple cognitive domains similar to professional IQ tests. Select the best answer for each question. Try to answer at a steady pace without rushing for the most accurate results. The test will take approximately 20-30 minutes to complete.',
  questions: [
    // Verbal Comprehension Domain
    {
      id: 1,
      text: 'What is the relationship between "democracy" and "government"?',
      options: [
        'Democracy is a type of government',
        'Government is a type of democracy',
        'They are unrelated concepts',
        'They are identical concepts'
      ],
      correctAnswer: 'Democracy is a type of government',
      domain: 'Verbal Comprehension'
    },
    {
      id: 2,
      text: 'What do the words "frugal" and "economical" have in common?',
      options: [
        'They are opposites',
        'They both relate to saving money',
        'They both relate to time management',
        'They have no relationship'
      ],
      correctAnswer: 'They both relate to saving money',
      domain: 'Verbal Comprehension'
    },
    {
      id: 3,
      text: 'Complete the analogy: Book is to Reading as Fork is to:',
      options: [
        'Kitchen',
        'Eating',
        'Cooking',
        'Utensil'
      ],
      correctAnswer: 'Eating',
      domain: 'Verbal Comprehension'
    },
    {
      id: 4,
      text: 'Which of these words is most different from the others?',
      options: [
        'Hesitant',
        'Reluctant',
        'Decisive',
        'Tentative'
      ],
      correctAnswer: 'Decisive',
      domain: 'Verbal Comprehension'
    },
    {
      id: 5,
      text: 'What does the proverb "Don\'t count your chickens before they hatch" mean?',
      options: [
        'Be careful when counting farm animals',
        'Don\'t rely on something before it\'s certain',
        'Farming requires patience and careful planning',
        'Always count everything twice to be sure'
      ],
      correctAnswer: 'Don\'t rely on something before it\'s certain',
      domain: 'Verbal Comprehension'
    },
    
    // Perceptual Reasoning Domain
    {
      id: 6,
      text: 'Which figure completes the pattern?',
      imageUrl: '/images/iq-test/pattern1.svg',
      options: [
        'A',
        'B',
        'C',
        'D'
      ],
      correctAnswer: 'C',
      domain: 'Perceptual Reasoning'
    },
    {
      id: 7,
      text: 'What number should come next in this sequence?',
      imageUrl: '/images/iq-test/pattern2.svg',
      options: [
        'A',
        'B',
        'C',
        'D'
      ],
      correctAnswer: 'C',  // 13 (Fibonacci sequence)
      domain: 'Perceptual Reasoning'
    },
    {
      id: 8,
      text: 'Which figure belongs in the empty cell to complete the pattern?',
      imageUrl: '/images/iq-test/pattern3.svg',
      options: [
        'A',
        'B',
        'C',
        'D'
      ],
      correctAnswer: 'C',  // Green triangle
      domain: 'Perceptual Reasoning'
    },
    {
      id: 9,
      text: 'Which shape should come next in this logical sequence?',
      imageUrl: '/images/iq-test/pattern4.svg',
      options: [
        'A',
        'B',
        'C',
        'D'
      ],
      correctAnswer: 'C',  // Empty square
      domain: 'Perceptual Reasoning'
    },
    {
      id: 10,
      text: 'If a square has an area of 16 square inches, what is the length of its diagonal?',
      options: [
        '4 inches',
        '5.66 inches',
        '8 inches',
        '4.25 inches'
      ],
      correctAnswer: '5.66 inches',  // √32 = 4√2 ≈ 5.66
      domain: 'Perceptual Reasoning'
    },
    
    // Working Memory Domain
    {
      id: 11,
      text: 'Read this sequence once, then select which number would be in the 7th position if you continued the pattern: 2, 5, 8, 11, 14, 17, ...',
      options: [
        '19',
        '20',
        '21',
        '23'
      ],
      correctAnswer: '20',  // +3 pattern
      domain: 'Working Memory'
    },
    {
      id: 12,
      text: 'Rearrange these letters to form a word, then select the category it belongs to: AETRW',
      options: [
        'Animal',
        'Food',
        'Nature',
        'Household item'
      ],
      correctAnswer: 'Nature',  // WATER
      domain: 'Working Memory'
    },
    {
      id: 13,
      text: 'If you count backward from 100 by 7, which of these numbers would you say?',
      options: [
        '97',
        '93',
        '86',
        '79'
      ],
      correctAnswer: '79',  // 100, 93, 86, 79
      domain: 'Working Memory'
    },
    {
      id: 14,
      text: 'Remember this sequence: 7-2-8-3-9-5-1. What is the sum of the 2nd and 6th numbers?',
      options: [
        '6',
        '7',
        '10',
        '11'
      ],
      correctAnswer: '7',  // 2 + 5 = 7
      domain: 'Working Memory'
    },
    
    // Processing Speed Domain
    {
      id: 15,
      text: 'Which symbol appears most frequently in this sequence? @#$%@#@&%@#$@',
      options: [
        '@',
        '#',
        '$',
        '%'
      ],
      correctAnswer: '@',  // 5 times
      domain: 'Processing Speed'
    },
    {
      id: 16,
      text: 'If today is Tuesday, what day will it be 100 days from now?',
      options: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday'
      ],
      correctAnswer: 'Tuesday',  // 100 ÷ 7 = 14 remainder 2, so 2 days later = same day
      domain: 'Processing Speed'
    },
    {
      id: 17,
      text: 'Find the next number in the sequence: 1, 4, 9, 16, 25, 36, ...',
      options: [
        '42',
        '49',
        '54',
        '64'
      ],
      correctAnswer: '49',  // 7² = 49 (sequence of squares)
      domain: 'Processing Speed'
    },
    
    // Fluid Intelligence
    {
      id: 18,
      text: 'All roses have thorns. Some flowers are roses. Therefore:',
      options: [
        'All flowers have thorns',
        'Some flowers have thorns',
        'No flowers have thorns',
        'Cannot be determined'
      ],
      correctAnswer: 'Some flowers have thorns',
      domain: 'Fluid Intelligence'
    },
    {
      id: 19,
      text: 'Which word does not belong in this group?',
      options: [
        'Apple',
        'Banana',
        'Carrot',
        'Grape'
      ],
      correctAnswer: 'Carrot',  // Not a fruit
      domain: 'Fluid Intelligence'
    },
    {
      id: 20,
      text: 'If it takes 5 machines 5 minutes to make 5 widgets, how long would it take 100 machines to make 100 widgets?',
      options: [
        '5 minutes',
        '20 minutes',
        '100 minutes',
        '500 minutes'
      ],
      correctAnswer: '5 minutes',
      domain: 'Fluid Intelligence'
    }
  ],
  answerOptions: [
    { text: 'A', score: 1 },
    { text: 'B', score: 1 },
    { text: 'C', score: 1 },
    { text: 'D', score: 1 }
  ],
  resultCategories: [
    {
      minScore: 0,
      maxScore: 10,
      iqRange: '70-84',
      title: 'Below Average IQ Range (70-84)',
      icon: '🧠',
      color: 'bg-blue-100 text-blue-800',
      description: 'Your performance suggests cognitive abilities in the below average range. This corresponds to approximately 14% of the population. Remember that IQ is just one measure of ability and doesn\'t reflect your full potential or capabilities in many important areas of life.',
      recommendations: [
        'Consider specialized learning strategies that leverage your personal strengths',
        'Regular reading and vocabulary building can help improve verbal comprehension',
        'Practice puzzles, spatial tasks and pattern recognition for perceptual reasoning',
        'Memory games and concentration exercises can help enhance working memory capacity',
        'Ensure adequate sleep, nutrition, and physical exercise, which all support cognitive function',
        'A professional assessment would provide more detailed insights into your cognitive profile'
      ],
      disclaimer: 'This online assessment is not equivalent to a professionally administered IQ test. Many factors can affect test performance including stress, fatigue, testing environment, and familiarity with test formats. This test should not be used for diagnostic purposes or making important life decisions.',
      alertLevel: 'bg-blue-50 text-blue-800'
    },
    {
      minScore: 11,
      maxScore: 14,
      iqRange: '85-99',
      title: 'Low Average IQ Range (85-99)',
      icon: '🧠',
      color: 'bg-green-100 text-green-800',
      description: 'Your performance suggests cognitive abilities in the low average range. This corresponds to approximately 34% of the population. While slightly below the statistical mean, this range indicates functional cognitive abilities for most everyday tasks and many professional roles.',
      recommendations: [
        'Continue engaging in diverse mentally stimulating activities',
        'Challenge yourself with new learning experiences to build cognitive reserve',
        'Consider activities that target different cognitive domains (verbal, spatial, memory, etc.)',
        'Skill-based learning (e.g., musical instruments, languages, technical skills) can enhance cognitive functioning',
        'Maintain a healthy lifestyle with regular exercise and good nutrition',
        'Remember that cognitive abilities can be improved with consistent practice and challenge'
      ],
      disclaimer: 'This online assessment is not equivalent to a professionally administered IQ test. Many factors can affect test performance including stress, fatigue, testing environment, and familiarity with test formats. This test should not be used for diagnostic purposes or making important life decisions.',
      alertLevel: 'bg-green-50 text-green-800'
    },
    {
      minScore: 15,
      maxScore: 17,
      iqRange: '100-114',
      title: 'Average IQ Range (100-114)',
      icon: '🧠',
      color: 'bg-teal-100 text-teal-800',
      description: 'Your performance suggests cognitive abilities in the average to high average range. This corresponds to approximately 34% of the population. This range indicates solid cognitive abilities that are well-suited for most academic and professional pursuits.',
      recommendations: [
        'Leverage your cognitive abilities by exploring intellectually stimulating activities',
        'Challenge yourself with increasingly complex problems to build on your strengths',
        'Consider activities that further develop your cognitive strengths while addressing any relative weaknesses',
        'Interdisciplinary learning can help you make creative connections between different knowledge domains',
        'Consider teaching others as a way to solidify and deepen your own understanding',
        'Explore new fields that interest you - your cognitive profile suggests you can succeed in many areas'
      ],
      disclaimer: 'This online assessment is not equivalent to a professionally administered IQ test. Many factors can affect test performance including stress, fatigue, testing environment, and familiarity with test formats. This test should not be used for diagnostic purposes or making important life decisions.',
      alertLevel: 'bg-teal-50 text-teal-800'
    },
    {
      minScore: 18,
      maxScore: 20,
      iqRange: '115-130+',
      title: 'Superior IQ Range (115-130+)',
      icon: '🧠',
      color: 'bg-indigo-100 text-indigo-800',
      description: 'Your performance suggests cognitive abilities in the superior to very superior range. This corresponds to approximately 14% or less of the population. This range indicates exceptional cognitive abilities that can excel in demanding intellectual pursuits.',
      recommendations: [
        'Seek out intellectually stimulating environments and complex challenges',
        'Consider joining groups like Mensa or other high-IQ societies',
        'Explore advanced academic or professional fields that match your cognitive strengths',
        'Consider how your cognitive abilities can be applied to solve meaningful problems',
        'Develop metacognitive skills to optimize your learning and problem-solving',
        'Remember that emotional intelligence and practical skills are also important for overall success'
      ],
      disclaimer: 'This online assessment is not equivalent to a professionally administered IQ test. Many factors can affect test performance including stress, fatigue, testing environment, and familiarity with test formats. This test should not be used for diagnostic purposes or making important life decisions.',
      alertLevel: 'bg-indigo-50 text-indigo-800'
    }
  ]
};
