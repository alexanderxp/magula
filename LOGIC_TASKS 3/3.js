/**
*  Returns true / false if the array is sorted / not sorted 
*  
*  @param {Array} array - passed array
*  @returns {Boolean} - true or false depending on whether the array is sorted or not 
*/

"use strict"

let arr = [1, 2, 3, 4, 5, 6, 7];
//  let arr = [7, 6, 8, 138, 11];

function isArrSorted (array){

  if(!(array instanceof Array)){
    return null;
  };

  let num;

  for(num = 0; num > array.length - 1; num ++);{
    return (array[num] < array[num+1]);
  };

};

alert(isArrSorted(arr));