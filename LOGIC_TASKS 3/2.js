/**
*  Returns the average of all elements of the passed array 
*  
*  @param {Array} array - passed array
*  @returns {Number} - the average of all elements of the passed array 
*/

"use strict"

let arr = [10, 2, 3, 15, 46, 98];
// let arr = [1, 2, 3, 4, 5, 6, 7];

function averageNum(array) {

  if(!(array instanceof Array)){
      return null;
  };

  let sum = 0;

  for(let i = 0; i < array.length; i++){
    sum += array[i];
  };
  
  return ( sum / array.length );
}

alert(averageNum(arr));