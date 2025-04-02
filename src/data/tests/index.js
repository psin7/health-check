// Import all test files
import { depressionTest } from './depressionTest';
import { anxietyTest } from './anxietyTest';
import { colorBlindnessTest } from './colorBlindnessTest';
import { astigmatismTest } from './astigmatismTest';
import { visualAcuityTest } from './visualAcuityTest';
import { hearingTest } from './hearingTest';
import { iqTest } from './iqTest';
import { adhdTest } from './adhdTest';
import { dyslexiaTest } from './dyslexiaTest';
import { autismQuotientTest } from './autismQuotientTest';
import { memoryTest } from './memoryTest';
import { bipolarTest } from './bipolarTest';
import { ptsdTest } from './ptsdTest';
import { ocdTest } from './ocdTest';
import { sleepApneaTest } from './sleepApneaTest';
import { diabetesTest } from './diabetesTest';
import { thyroidTest } from './thyroidTest';
import { heartDiseaseTest } from './heartDiseaseTest';

// Export individual tests
export {
  depressionTest,
  anxietyTest,
  colorBlindnessTest,
  astigmatismTest,
  visualAcuityTest,
  hearingTest,
  bipolarTest,
  ptsdTest,
  ocdTest,
  sleepApneaTest,
  diabetesTest,
  thyroidTest,
  heartDiseaseTest,
  iqTest,
  adhdTest,
  dyslexiaTest,
  autismQuotientTest,
  memoryTest
};

// Export all tests as a single object
export const allTests = {
  depression: depressionTest,
  anxiety: anxietyTest,
  colorBlindness: colorBlindnessTest,
  astigmatism: astigmatismTest,
  visualAcuity: visualAcuityTest,
  hearing: hearingTest,
  iq: iqTest,
  adhd: adhdTest,
  dyslexia: dyslexiaTest,
  autismQuotient: autismQuotientTest,
  memory: memoryTest
};
