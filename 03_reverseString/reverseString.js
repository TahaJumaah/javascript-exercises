let splitWord = '';
let reversedSplitWord = '';
let reversedWord = '';

const reverseString = function(wordtoReverse) {
    splitWord = wordtoReverse.split('');
    reversedSplitWord = splitWord.reverse();
    reversedWord = reversedSplitWord.join('');
    return reversedWord;

};

// Do not edit below this line
module.exports = reverseString;
