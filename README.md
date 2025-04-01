# Health Assessment App

![Health Assessment App](https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80)

## Overview

The Health Assessment App is a comprehensive web application designed to provide users with a variety of self-administered health screening tools. This application offers a suite of tests to assess different aspects of health, including vision, hearing, neurological function, and mental health.

## Features

### Vision Tests

- **Color Blindness Test (Ishihara)**: A series of 10 plates with embedded numbers to detect color vision deficiencies.
- **Astigmatism Test**: Five patterns to help identify irregularities in cornea shape.
- **Visual Acuity Test**: A simplified version of the Snellen chart to assess distance vision.

### Hearing Tests

- **Hearing Ability Assessment**: Evaluates hearing across different frequencies and listening situations.
- **Tinnitus Assessment** (Coming Soon): Will help identify and assess tinnitus symptoms.
- **Speech-in-Noise Test** (Coming Soon): Will assess the ability to understand speech in noisy environments.

### Neurological Tests

- Tests for ADHD, dyslexia, autism spectrum, and cognitive function (Coming Soon).

### Mental Health Tests

- Screenings for depression, anxiety, bipolar disorder, PTSD, and OCD (Coming Soon).

### Other Health Tests

- Tests for sleep apnea, diabetes risk, heart disease risk, and thyroid issues (Coming Soon).

### IQ Test

- Assessment of cognitive abilities and problem-solving skills (Coming Soon).

## Technology Stack

- **Frontend**: React.js with Framer Motion for animations
- **Styling**: Tailwind CSS for responsive design
- **State Management**: React Hooks
- **Visualization**: SVG images for test patterns and illustrations

## Key Components

- **Test Engine**: A reusable component that powers all tests with standardized UI and scoring logic
- **Custom SVG Images**: Over 25 custom SVG images for various tests
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## Running the Application

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/psin7/health-check.git
   cd health-check
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Deployment

To build the app for production:

```
npm run build
```

This creates an optimized build in the `build` folder that can be deployed to any static hosting service.

## License

MIT

## Acknowledgements

- SVG illustrations created specifically for this application
- Test methodologies based on established medical screening protocols
