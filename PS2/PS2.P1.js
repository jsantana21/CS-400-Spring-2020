/* PS2 Problem 1 (PS2.P1.js)
 DESCRIPTION: Write two generators that together implement a series of even Fibonacci numbers.
 The first generator should return the series of fibonacci numbers starting from 0. The series F is defined as:
 F(0) = 0;
 F(1) = 1;
 F(n) = F(n-1) + F(n-2)
The second generator should use the first to obtain the next number in the sequence, rejecting
it if it is odd and asking for the next. Once an even Fibonacci number is obtained, it is emitted.

Use the generators to print out the first 6 EVEN Fibonacci numbers.
 */

//First Generator
function* fibGenerator () {
    let [val1, val2, result] = [0, 1, 0];
    while (true) {
        result = val1+val2;
        val1 = val2;
        val2 = result;
        yield result
    }
}

//Second Generator
function* evenFibGenerator() {
    while (true) {
        if(fibGenerator.next().value%2===0) yield fibGenerator.next().value
    }
}

//First 6 EVEN Fibonacci numbers
myEvenFibs = evenFibGenerator();
let count = 6;
console.log(`The first 6 EVEN Fibonacci numbers are: `);
while (count --> 0) {
    console.log(myEvenFibs.next().value)
}

