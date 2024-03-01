/**
*  returns the factorial of a number
*  
*  @param {Number} Number
*  @returns {Number} - factorial of a number
*/

" use strict "

let numFive = 5;

function calcFactorial(n) {

  if(!Number(n)){
    return null;
  }

  return ( n != 1 ) ? (n * calcFactorial(n-1)) : 1;
}
alert(calcFactorial(numFive));