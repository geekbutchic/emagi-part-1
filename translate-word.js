const emojis = require('./emojis.js')


// this function takes in one word and verifies if that word is 
// in our emoji file
const translateWord = function(word) {
    for (const emoji of emojis) {
        if (emoji.name === word.toLowerCase()) {
            return emoji.symbol;
        }
    }

    return word;
}

// taken in as input then printed out again - (Step 4)
module.exports = translateWord;


// Last test is for case sensitive
// word.lowerCase() 

