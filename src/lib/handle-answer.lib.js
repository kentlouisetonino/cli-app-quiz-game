import { createSpinner } from 'nanospinner'

import sleep from './sleep.lib.js'

const handleAnswer = async (isCorrect, playerName) => {
  const spinner = createSpinner('Checking answer...').start()
  await sleep()

  if (isCorrect) {
    spinner.success({ text: `Nice work ${playerName}.`})
  } else {
    spinner.error({ text: `Game over, you lose ${playerName}!`})
    process.exit(1)
  }
}

export default handleAnswer
