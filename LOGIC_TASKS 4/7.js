/*
3. Задача на Map, Set, WeakMap, WeakSet. 
Есть массив объектов. У каждого объекта есть id 

const arr = [ { id: 1 }, { id: 2 }, { id: 3 }, { id: 1 }]

. В массиве могут быть дубликаты. 

Написать функцию, которая будет удалять дубликаты из массива . 
Использовать вышеперечисленные инструменты для решения задачи. 
В дополнение к этому - разрешается использовать любые средства ES6.
*/

" use strict "

const arr = [ { id: 1 }, { id: 2 }, { id: 3 }, { id: 1 }]

function delArrDubl(arr){
	
  if (!(arr instanceof Array)) {
    alert('You must enter an array ');
    return null;
  }

  let changeArr = arr.map(item => {
	return  [item.id, item]
  })
  
  return [...new Map(changeArr).values()]
  
}
console.log(delArrDubl(arr)); 