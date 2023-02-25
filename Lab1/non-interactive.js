'use strict';

const fs = require('fs');

const fileContent = fs.readFileSync('equationData.txt', 'utf-8');
let [a, b, c] = fileContent.split(' ').map(Number);

const quadraticEquation = (a, b, c) => {
  let Disc = b ** 2 - 4 * a * c;

  if (Disc < 0) return 'There are 0 roots';

  let x1 = (-1 * b + Math.sqrt(Disc)) / (2 * a);
  let x2 = (-1 * b - Math.sqrt(Disc)) / (2 * a);

  return Disc === 0
    ? `There is 1 root\n x1 = ${x1.toFixed(2)}`
    : `There are 2 roots\n x1 = ${x1.toFixed(2)}\n x2 = ${x2.toFixed(2)}`;
};

if (a === 0) console.log('Error. a cant be 0');
else if (isNaN(a) || isNaN(b) || isNaN(c)) console.log('Expected real number');
else {
  console.log(`Equation is: (${a})x^2 + (${b})x + (${c}) = 0`);
  console.log(quadraticEquation(a, b, c));
}
