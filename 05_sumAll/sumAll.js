
function sumAll(start, end) {
    let finalSum = 0;
  if (typeof start !== 'number' || typeof end !== 'number') {
    return "ERROR"
    
  }

    if (end > start && start > 0 && end > 0){
  for (let index = 0; index <= end; index++) {
    finalSum = finalSum + index;
  }
  }
  else if (end < start && start > 0 && end > 0) {
    for (let index = start; index >= end; index--){
        finalSum = finalSum + index;
    }
  }
else if (start < 0 || end < 0 ){
return "ERROR"
}
return finalSum;

  }


// Do not edit below this line
module.exports = sumAll;
