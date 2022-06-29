import inquirer from 'inquirer'

import handleAnswer from './handle-answer.lib.js'

const questionaire = async (
  playerName,
  questionNumber,
  question,
  choicesArray,
  correctAnswer,
) => {
  console.log('\n')

  switch (questionNumber) {
    case 1:
      const one = await inquirer.prompt({
        name: `question_one`,
        type: 'list',
        message: `${questionNumber}. ${question}`,
        choices: [
          `${choicesArray[0]}`,
          `${choicesArray[1]}`,
          `${choicesArray[2]}`,
          `${choicesArray[3]}`,
        ],
      })

      return handleAnswer(one.question_one === `${correctAnswer}`, playerName)
    case 2:
      const two = await inquirer.prompt({
        name: `question_two`,
        type: 'list',
        message: `${questionNumber}. ${question}`,
        choices: [
          `${choicesArray[0]}`,
          `${choicesArray[1]}`,
          `${choicesArray[2]}`,
          `${choicesArray[3]}`,
        ],
      })

      return handleAnswer(two.question_two === `${correctAnswer}`, playerName)
    case 3:
      const three = await inquirer.prompt({
        name: `question_three`,
        type: 'list',
        message: `${questionNumber}. ${question}`,
        choices: [
          `${choicesArray[0]}`,
          `${choicesArray[1]}`,
          `${choicesArray[2]}`,
          `${choicesArray[3]}`,
        ],
      })

      return handleAnswer(
        three.question_three === `${correctAnswer}`,
        playerName,
      )
    case 4:
      const four = await inquirer.prompt({
        name: `question_four`,
        type: 'list',
        message: `${questionNumber}. ${question}`,
        choices: [
          `${choicesArray[0]}`,
          `${choicesArray[1]}`,
          `${choicesArray[2]}`,
          `${choicesArray[3]}`,
        ],
      })

      return handleAnswer(four.question_four === `${correctAnswer}`, playerName)
    case 5:
      const five = await inquirer.prompt({
        name: `question_five`,
        type: 'list',
        message: `${questionNumber}. ${question}`,
        choices: [
          `${choicesArray[0]}`,
          `${choicesArray[1]}`,
          `${choicesArray[2]}`,
          `${choicesArray[3]}`,
        ],
      })

      return handleAnswer(five.question_five === `${correctAnswer}`, playerName)
  }
}

export default questionaire
