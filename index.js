#!/user/bin/env node

import chalk from 'chalk'
import inquirer from 'inquirer'
import gradient from 'gradient-string'
import chalkAnimation from 'chalk-animation'
import figlet from 'figlet'
import { createSpinner } from 'nanospinner'

let playerName

// Number of seconds to show it to user
const sleep = (ms = 1000) => new Promise((r) => setTimeout(r, ms))

async function welcome() {
  const neonTitle = chalkAnimation.neon(
    'Who wants to be a JavaScript Wizard? \n'
  )

  await sleep()
  neonTitle.stop()

  console.log(`
    ${chalk.bgBlue('How To Play')}
    I am a process on your computer.
    If you get any question wrong I will be ${chalk.bgRed('killed')}.
    So get all the questions right.
  `)
}

async function askName() {
  // This will prompt to ask question
  const answers = await inquirer.prompt({
    name: 'player_name',
    type: 'input',
    message: 'What is your name?',
    default() {
      return 'Player'
    }
  })

  playerName = answers.player_name
}

async function questionOne() {
  const answers = await inquirer.prompt({
    name: 'question_one',
    type: 'list',
    message: 'JavaScript was created in 10 days then released on? \n',
    choices: [
      'May 23rd, 1995',
      'Nov 24th, 1995',
      'Dec 4th, 1995',
      'Dec 17, 1996',
    ],
  })

  return handleAnswer(answers.question_one === 'Dec 4th, 1995')
}

async function handleAnswer(isCorrect) {
  const spinner = createSpinner('Checking answer...').start()
  await sleep()

  if (isCorrect) {
    spinner.success({ text: `Nice work ${playerName}.`})
  } else {
    spinner.error({ text: `Game over, you lose ${playerName}!`})
    process.exit(1)
  }
}

async function winner() {
  console.clear()
  const message = `Congrats, ${playerName}!`

  figlet(message, (err, data) => {
    console.log(gradient.pastel.multiline(data))
  })
}

await welcome()
await askName()
await questionOne()
await winner()
