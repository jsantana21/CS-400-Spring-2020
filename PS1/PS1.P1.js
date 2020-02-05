/* PS1 Problem 1 (PS1.P1.js)
 DESCRIPTION: Write a function that takes a string as its input and
 returns a new string that contains all of the letters in the original string,
 but in alphabetical order. IGNORE punctuation and numbers.
 */

const alphabeticalOrderString = inputString => inputString.replace(/[.,@\'"/#!?$<>%\^&\*;:{}=\-_`~()1234567890]/g,"").split('').sort().join('');

// Some sample tests testing the function above
const sampleTest1 = 'supercalifragilisticexpialidocious';
console.log(`The alphabetical order of the string: ${sampleTest1} is ${alphabeticalOrderString(sampleTest1)}`);
/* Should print out the following:
The alphabetical order of the string: supercalifragilisticexpialidocious is aaacccdeefgiiiiiiillloopprrssstuux
 */

const sampleTest2 = 'super123cali^fragilistic456expialidocious!?!';
console.log(`Ignoring puncations and numbers, the alphabetical order of the string: ${sampleTest2} is ${alphabeticalOrderString(sampleTest2)}`);
/* Should print out the following:
Ignoring puncations and numbers, the alphabetical order of the string: super123cali^fragilistic456expialidocious!?! is aaacccdeefgiiiiiiillloopprrssstuux
 */