/* PS2 Problem 2 (PS2.P2.js)
 DESCRIPTION: Write a generator that is initialized with a sentence
 and that emits each word of the sentence in turn.

 Use the generator to print the words, one per line, of the string “All I know is something like a bird within her sang”.
 */

function* wordEmitter(inputSentenceString){
    const wordList = inputSentenceString.split(' ');
    let count = -1;
    let wordListLength = wordList.length;
    while(wordListLength--){
        count++;
        yield wordList[count];
    }
}

const sentence = 'All I know is something like a bird within her sang';
mySentenceString = wordEmitter(sentence);
while(true){
    ans = mySentenceString.next();
    if(ans.done===true)break; // print one word per line
    console.log(ans.value)
}
/* Should print out the following:

All
I
know
is
something
like
a
bird
within
her
sang
*/