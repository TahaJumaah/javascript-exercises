const repeatString = function(word,num) {
    let timesRepeated = 1;
    let constructedSentence = '';
    if (num > 0) {
        do {
            constructedSentence = constructedSentence + word
            timesRepeated++    
        } while (timesRepeated <= num);
    }
    else if (num === 0) {
        return ""
    }

    else {
         return "ERROR"
    }
    return(constructedSentence)

    

};

// Do not edit below this line
module.exports = repeatString;
