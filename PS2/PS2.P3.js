/* PS2 Problem 3 (PS2.P3.js)
 DESCRIPTION: Write a function that prints the cube value of its input (ie f(x)=x^3).
 Next, write a single line of code to call the function
 on each value of the array [1,2,3,4,5,6,7].

Note: The .map() method on Array is your friend here.
 */

function* cube(inputValue){
    yield inputValue**3;
}

const array = [1,2,3,4,5,6,7];
const cubedArray = array.map(i=>cube(i).next().value);
console.log(cubedArray);

/* Should print out the following:

[
    1,   8,  27, 64,
  125, 216, 343
]

*/