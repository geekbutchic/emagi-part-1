
 const translateWord = require('./translate-word.js');
// no relation to names but good practice 
const encodeWord = require('./encode-word.js');  

// const userInput = process.argv[2];
// console.log(encodeWord(userInput));
// user's input from the terminal
// the result of calling our internal function with their input
// const userInput = process.argv[2]; -> for just one word / problem 1

// const userInput = process.argv.slice(2)   
// const translation = userInput.map(translateWord)
// process.argv[2] is not hard coded - (Step 1)
// grabs the thing at index 2 - (Step 2)
// then passes that into translate word - (Step 3)
const userInput = process.argv.slice(2)
const encodedSentence = userInput.map(encodeWord)
console.log(encodedSentence.join(' '));


// console.log(translation.join(' '));
// takes an array and makes it into a string

// const result = translateWord(userInput); -> used for one word / problem 1
// that return value goes into result - (Step 5)

// output to the terminal  
// console.log(result); -> used for one word 
// printed out in terminal
// not used for code but for use in the terminal


// if we type in multiple words we only get back one word 
// because process.argv[2]
// if we console.log(process.argv[2]) it's an array
// for the next test we want to make an array of the words they type in 
// after process.argv[2]


// for words after process.argv[2] say several words an array of words 
// we can use .map --> take this array go through each element













