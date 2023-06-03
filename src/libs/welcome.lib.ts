import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';

import sleep from './sleep.lib.js';

interface Props {
  quizType: string;
}

export default async function welcome({ quizType }: Props) {
  const neonTitle = chalkAnimation.neon(`${quizType} QUIZ \n`);

  await sleep();
  neonTitle.stop();

  console.log(`
    ${chalk.bgBlue('How To Play')}
    Choose the correct answer based on the choices.
    Mistakes not allowed.
  `);
}
