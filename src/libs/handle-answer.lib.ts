import { createSpinner } from 'nanospinner'

import sleep from './sleep.lib.js'

interface Props {
  isCorrect: boolean
  playerName: string
}

export default async function handleAnswer({ isCorrect, playerName }: Props) {
  const spinner = createSpinner('Checking answer...').start()
  await sleep()

  if (isCorrect) {
    spinner.success({ text: `Nice work ${playerName}.` })
  } else {
    console.log('\n')
    spinner.error({ text: `Game over, you lose ${playerName}!` })
    process.exit(1)
  }
}
