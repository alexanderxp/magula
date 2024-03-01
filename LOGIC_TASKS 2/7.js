/**
*  return contacts the string parameters when calling without parameters, after of its previous calls with string parameters
*  
*  @param {String} String
*  @returns {String} - contacts the string parameters
*/

" use strict "

function concatString(){
  let strIn = "";

  return function(piece){

    if(arguments.length == 0 ){
      return strIn;
    }

    strIn = strIn + "   " + piece;
  };

};
let makeConcat = concatString();

makeConcat('test string 1');
makeConcat('test2');
makeConcat('finish');

console.log(makeConcat());