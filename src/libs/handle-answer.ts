import { createSpinner } from 'nanospinner';
import sleep from './sleep.js';

interface HandleAnswerProps {
  isCorrect: boolean;
  playerName: string;
}

export default async function handleAnswer({
  isCorrect,
  playerName,
}: HandleAnswerProps) {
  const spinner = createSpinner('Checking answer...').start();
  await sleep();

  if (isCorrect) {
    spinner.success({ text: `Nice work ${playerName}.` });
  } else {
    console.log('\n');
    spinner.error({ text: `Game over, you lose ${playerName}!` });
    process.exit(1);
  }
}
