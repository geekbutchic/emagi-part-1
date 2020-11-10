const emojis = require('./emojis.js');


// for each letter in our word 
// check each emoji in the emojis for whether 
// its .letter property matches that letter
// double loop problem 

const encodeWord = function(word) {
    let result = '';
    for (const letter of word) {
        for (const emoji of emojis) {
            if (emoji.letter === letter) {
                result += emoji.symbol;
            }
        }
    }
    return result;
}


module.exports = encodeWord;



