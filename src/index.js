#!/user/bin/env node

import chalk from 'chalk'
import inquirer from 'inquirer'
import gradient from 'gradient-string'
import chalkAnimation from 'chalk-animation'
import figlet from 'figlet'
import { createSpinner } from 'nanospinner'

import welcome from './lib/welcome.lib.js'
import sleep from './lib/sleep.lib.js'
import askName from './lib/ask-name.lib.js'
import questionaire from './lib/questionaire.lib.js'
import winner from './lib/winner.lib.js'

let playerName
await welcome('JAVASCRIPT')
playerName = await askName()

await questionaire(
  playerName,
  1,
  'JavaScript was created in 10 days then released on? \n',
  ['May 23rd, 1995', 'Nov 24th, 1995', 'Dec 4th, 1995', 'Dec 17, 1996'],
  'Dec 4th, 1995',
)

await questionaire(
  playerName,
  2,
  'Which operator returns true if the two compared values are not equal? \n',
  ['<>', '~', '==!', '!=='],
  '!==',
)

await questionaire(
  playerName,
  3,
  'How is a forEach statement different from a for statement? \n',
  [
    'Only a for statement uses a callback function.',
    'A for statement is generic, but a forEach statement can be used only with an array.',
    'Only a forEach statement lets you specify your own iterator.',
    'A forEach statement is generic, but a for statement can be used only with an array.',
  ],
  'A for statement is generic, but a forEach statement can be used only with an array.',
)

await questionaire(
  playerName,
  4,
  'Which statement is the correct way to create a variable called rate and assign it the value 100? \n',
  ['let rate = 100', 'let 100 = rate', '100 = let rate', 'rate = 100'],
  'let rate = 100',
)

await questionaire(
  playerName,
  5,
  'Which statement creates a new Person object called “student”? \n',
  [
    'var student = new Person()',
    'var student = construct Person',
    'var student = Person()',
    'var student = construct Person()',
  ],
  'var student = new Person()',
)

await winner(playerName)










