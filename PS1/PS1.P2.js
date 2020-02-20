/* PS1 Problem 2 (PS1.P2.js)
 DESCRIPTION: Write a function that takes as input each of the following strings in turn:
 ‘4+2’
 ‘5*7’
 ‘6-1’
 ‘9/2’
 This function should
 Determine the operator (+, *, -, or /) embedded in the string
 Return a function to implement the input operator that returns the result
 ONLY works for when the inputString has a single digit, followed by a operator, and another single digit
 */

const stringOperatorEval = inputString => {
    const splitString = inputString.split(''); //split the input string into an array of individual characters
    var left = parseInt(splitString[0]); //turn each digit character into an int
    const operator = splitString[1];
    var right = parseInt(splitString[2]); //turn each digit character into an int

    switch(operator){
        case'+':
            return left + right;
            break;
        case'-':
            return left - right;
            break;
        case'*':
            return left * right;
        case'/':
            return left / right;
            // Some additional operators
        case'%':
            return left % right;
        case'^':
            return left ** right;
    }
}

// Some sample tests testing the function above
const sampleTest1 = '4+2'; // Should print out 4+2=6
console.log(`${sampleTest1}=${stringOperatorEval(sampleTest1)}`)

const sampleTest2 = '5*7'; // Should print out 5*7=35
console.log(`${sampleTest2}=${stringOperatorEval(sampleTest2)}`)

const sampleTest3 = '6-1'; // Should print out 6-1=5
console.log(`${sampleTest3}=${stringOperatorEval(sampleTest3)}`)

const sampleTest4 = '9/2'; // Should print out 9/2=4.5
console.log(`${sampleTest4}=${stringOperatorEval(sampleTest4)}`)

const sampleTest5 = '8%3'; // Should print out 8%3=2
console.log(`${sampleTest5}=${stringOperatorEval(sampleTest5)}`)

const sampleTest6 = '2^5'; // Should print out 2^5=32
console.log(`${sampleTest6}=${stringOperatorEval(sampleTest6)}`)