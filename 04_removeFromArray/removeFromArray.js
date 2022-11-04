let array = '';
function removeFromArray(array, num, num1, num2, num3) {
    for (index = array.length -1 ; index >=  0; index--) {
        const element = array[index];
        if (element === num || element === num1 || element === num2 || element === num3 ) {
            array.splice(index,1);
        } 
        // else if (element === num1 || element === num){
        //     array.splice(index, 1)
        // }
        // else if (element === num2 || element === num){
        //     array.splice(index, 1)
        // }
        // else if (element === num3 || element === num){
        //     array.splice(index, 1)
        // }


    }
    return array
}

// Do not edit below this line
module.exports = removeFromArray;
