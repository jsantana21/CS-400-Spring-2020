// PS1 Problem 3 (PS1.P3.js)
// DESCRIPTION: Write a function that accepts two input parameters: a string, and a function.
// The function should execute the passed function with the passed string and return the result.
// Next, write two expressions that call this function.
// For the first, pass the string ‘supercalifragilisticexpialidocious’ and a lambda function
// that returns an array containing fragments of the input string broken on the character ‘c’.
// For the input string ‘supercalifragilisticexpialidocious’, you should get
// [‘super’, ‘califragilisti’, ‘cexpialido’, ‘cious’]
// For the second, pass the string ‘supercalifragilisticexpialidocious’ and a lambda function
// that replaces all of the ‘a’ characters with ‘A’ characters.
// Return an object that contains
// the original string, the modified string, the total number of As in the modified string, and
// the overall length of the modified string:
// {
// 	 	 originalString: xxx,
// 	 	 modifiedString: xxx,
// 	 	 numberReplaced: xxx,
// 	 	 length: xxx
// }
// Print the data from the returned object on the console.

const mainFunction = (inputString, inputFunction) => inputFunction (inputString)

const C_splitter =  (inputString) => inputString.replace(/c/g, '*c').split('*');

const replacewithA = (inputString) => {
    return {originalString: inputString,
        modifiedString: inputString.replace(/a/g, 'A'),
        numberReplaced: inputString.split('a').length - 1,
        length: inputString.length};
};

// Some sample tests testing the functions above

console.log('First Function C_splitter Test:\n', mainFunction('supercalifragilisticexpialidocious', C_splitter));

/* The expected output should be the following:
First Function C_splitter Test:
    [ 'super', 'califragilisti', 'cexpialido', 'cious' ]
*/

console.log('Second Function replacewithA Test: \n', mainFunction('supercalifragilisticexpialidocious', replacewithA));

/* The expected output should be the following:
Second Function replacewithA Test:
 {
  originalString: 'supercalifragilisticexpialidocious',
  modifiedString: 'supercAlifrAgilisticexpiAlidocious',
  numberReplaced: 3,
  length: 34
}
*/
