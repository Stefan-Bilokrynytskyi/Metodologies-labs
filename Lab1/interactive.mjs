'use strict';

import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const quadraticEquation = (a, b, c) => {
  let Disc = b ** 2 - 4 * a * c;
  console.log(`Equation is: (${a})x^2 + (${b})x + (${c}) = 0`);

  if (Disc < 0) return 'There are 0 roots';

  let x1 = (-1 * b + Math.sqrt(Disc)) / (2 * a);
  let x2 = (-1 * b - Math.sqrt(Disc)) / (2 * a);

  return Disc === 0
    ? `There is 1 root\n x1 = ${x1.toFixed(2)}`
    : `There are 2 roots\n x1 = ${x1.toFixed(2)}\n x2 = ${x2.toFixed(2)}`;
};

const question = (str) => new Promise((answer) => rl.question(str, answer));

let isIncorrect = true;
while (isIncorrect) {
  const a = +(await question('Enter a: '));
  const b = +(await question('Enter b: '));
  const c = +(await question('Enter c: '));

  if (a === 0) console.log('Error. a cant be 0');
  else if (isNaN(a) || isNaN(b) || isNaN(c))
    console.log('Expected real number');
  else {
    isIncorrect = false;
    rl.close();
    console.log(quadraticEquation(a, b, c));
  }
}
