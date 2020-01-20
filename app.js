'use strict';


startGame();


function startGame() {
  const secret = getRandomNumber();
  let message = 'Enter your number';

  while (true) {
    const guess = prompt(message);

    if (guess === null) {
      alert('Game was finished');
      break;
    }

    if (!isValid(guess)) {
      alert('Please enter 4 digit number with unique digits');
      continue;
    }

    if (guess === secret) {
      alert('You won!');
      break;
    }

    let bulls = 0;
    let cows = 0;

    for (let i = 0; i < guess.length; i++) {
      const index = secret.indexOf(guess[i]);
      if (index === i) {
        bulls++
      } else if (index > -1) {
        cows++;
      }
    }

    message = `${guess} - ${bulls} bulls ${cows} cows \n${message}`;
  }

  function isValid(guess) {
    const pattern = /^[0123456789]{4}$/;

    if (!pattern.test(guess)) {
      return false;
    }

    for (let i = 0; i < guess.length; i++) {
      if (guess.lastIndexOf(guess[i]) !== guess.indexOf(guess[i])) {
        return false;
      }
    }

    return true;
  }

  function getRandomNumber() {
    const secret = '0123456789'.split('')
      .sort((a, b) => Math.random() - 0.5)
      .slice(0, 4)
      .join('');

    console.log(secret);
    return secret;
  }
}
