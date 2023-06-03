import inquirer from 'inquirer';
import handleAnswer from './handle-answer.js';

interface QuestionaireProps {
  playerName: string;
  questionNumber: number;
  question: string;
  choicesArray: string[];
  correctAnswer: string;
}

export default async function questionaire({
  playerName,
  questionNumber,
  question,
  choicesArray,
  correctAnswer,
}: QuestionaireProps) {
  console.log('\n');

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
      });

      return handleAnswer({
        isCorrect: one.question_one === `${correctAnswer}`,
        playerName: playerName,
      });
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
      });

      return handleAnswer({
        isCorrect: two.question_two === `${correctAnswer}`,
        playerName: playerName,
      });
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
      });

      return handleAnswer({
        isCorrect: three.question_three === `${correctAnswer}`,
        playerName: playerName,
      });
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
      });

      return handleAnswer({
        isCorrect: four.question_four === `${correctAnswer}`,
        playerName: playerName,
      });
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
      });

      return handleAnswer({
        isCorrect: five.question_five === `${correctAnswer}`,
        playerName: playerName,
      });
  }
}
