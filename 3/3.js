/**
*  returns a mirroring of the string
*  
*  @param {String} String
*  @returns {String} - a mirroring of the string
*/

" use strict "

let lala = "lala";

function strReverseBack(str){

  if(!String(str) ){
    return NaN;
  }

  let strBack = ' ';
  for(let i=0; i< str.length ; i++ ) {
    strBack += str[ (str.length - 1 ) - i ];
  }
  return strBack;
}
alert(strReverseBack(lala));