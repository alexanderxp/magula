/*
1. Написать функцию-консторуктор, которая в качестве параметров 
принимает 3 значения - имя, фамилия и возраст. 

Функция-консторуктор также будет иметь метод print, 
которая будет выводить форматированный вывод в консоль имени, фамилии и возраста. 


Пример:
let user = new User("Вася");


user.print();
» Name: John, last name: Smith, age: 30.

*/

" use strict "

function User(name, lastName, age) {
  this.name = name;
  this.lastName = lastName;
  this.age = age;
 
  this.print = function(){
    console.log("Name: " + this.name + ", last name: " + this.lastName  + ", age: " + this.age);
  }
}


let user = new User("John","Smith",30);

// console.log(user.name);  
// для примера работы

user.print();