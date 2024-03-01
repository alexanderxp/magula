/**
*  returns the result of adding all occurrences in a sequence
*  
*  @param {Number} Number
*  @returns {Number} - result of adding all occurrences in a sequence
*/

" use strict "

let numFive = 5;

function addNumsAll(num){

  if(!Number(num)){
    return null;
  }

  if(num == 0 )
    return 0;
    return num + addNumsAll(num-1);
}
alert(addNumsAll(numFive));