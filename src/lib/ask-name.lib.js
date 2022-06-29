import inquirer from 'inquirer'

const askName = async () => {
  // This will prompt to ask question
  const answers = await inquirer.prompt({
    name: 'player_name',
    type: 'input',
    message: 'What is your name?',
    default() {
      return 'Player'
    }
  })

  return answers.player_name
}

export default askName
