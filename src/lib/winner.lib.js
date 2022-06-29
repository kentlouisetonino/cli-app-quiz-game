import figlet from 'figlet'
import gradient from 'gradient-string'

const winner = (playerName) => {
  console.clear()
  const message = `Congrats, ${playerName}!`

  figlet(message, (err, data) => {
    console.log(gradient.morning.multiline(data))
  })
}

export default winner
