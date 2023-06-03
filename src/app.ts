import askName from './libs/ask-name.lib.js';
import questionaire from './libs/questionaire.lib.js';
import welcome from './libs/welcome.lib.js';
import winner from './libs/winner.lib.js';

let playerName;
await welcome({ quizType: 'JAVASCRIPT' });
playerName = await askName();

await questionaire({
  playerName: playerName,
  questionNumber: 1,
  question: 'JavaScript was created in 10 days then released on? \n',
  choicesArray: [
    'May 23rd, 1995',
    'Nov 24th, 1995',
    'Dec 4th, 1995',
    'Dec 17, 1996',
  ],
  correctAnswer: 'Dec 4th, 1995',
});

await questionaire({
  playerName: playerName,
  questionNumber: 2,
  question:
    'Which operator returns true if the two compared values are not equal? \n',
  choicesArray: ['<>', '~', '==!', '!=='],
  correctAnswer: '!==',
});

await questionaire({
  playerName: playerName,
  questionNumber: 3,
  question: 'How is a forEach statement different from a for statement? \n',
  choicesArray: [
    'Only a for statement uses a callback function.',
    'A for statement is generic, but a forEach statement can be used only with an array.',
    'Only a forEach statement lets you specify your own iterator.',
    'A forEach statement is generic, but a for statement can be used only with an array.',
  ],
  correctAnswer:
    'A for statement is generic, but a forEach statement can be used only with an array.',
});

await questionaire({
  playerName: playerName,
  questionNumber: 4,
  question:
    'Which statement is the correct way to create a variable called rate and assign it the value 100? \n',
  choicesArray: [
    'let rate = 100',
    'let 100 = rate',
    '100 = let rate',
    'rate = 100',
  ],
  correctAnswer: 'let rate = 100',
});

await questionaire({
  playerName: playerName,
  questionNumber: 5,
  question: 'Which statement creates a new Person object called “student”? \n',
  choicesArray: [
    'var student = new Person()',
    'var student = construct Person',
    'var student = Person()',
    'var student = construct Person()',
  ],
  correctAnswer: 'var student = new Person()',
});

winner({ playerName: playerName });
