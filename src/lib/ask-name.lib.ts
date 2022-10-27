import inquirer from 'inquirer'

export default async function askName() {
  // This will prompt to ask question
  const answers = await inquirer.prompt({
    name: 'player_name',
    type: 'input',
    message: 'What is your name?',
    default() {
      return 'Player'
    },
  })

  return answers.player_name
}
