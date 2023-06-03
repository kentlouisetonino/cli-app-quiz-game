import figlet from 'figlet';
import gradient from 'gradient-string';

interface WinnerProps {
  playerName: string;
}

export default function winner({ playerName }: WinnerProps) {
  console.clear();
  console.log('test', playerName);
  const message = `Congrats, ${playerName}!`;

  figlet(message, (err, data) => {
    console.log(gradient.morning.multiline(data));
  });
}
