import chalkAnimation from 'chalk-animation'
import chalk from 'chalk'

import sleep from './sleep.lib.js'

const welcome = async (quizType) => {
  const neonTitle = chalkAnimation.neon(`${quizType} QUIZ \n`)

  await sleep()
  neonTitle.stop()

  console.log(`
    ${chalk.bgBlue('How To Play')}
    Choose the correct answer based on the choices.
    Mistakes not allowed.
  `)
}

export default welcome
