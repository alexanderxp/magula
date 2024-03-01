/*
2. Есть класс пользовател€ с его данными и методом форматированного вывода. 
«адача - переписать функционал на ES5 с использованием функции-конструктора. 
—ледует обратить внимание на метод print, 
который отсутствует в каждом объекте, но при этом доступен в прототипе, 
что легко проверить проконсолив экземпл€р (метод 1 дл€ всех экземпл€ров, 
а не дублирован дл€ каждого по отдельности).

class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  print() {
    console.log(Name: ${this.firstName}; Last Name: ${this.lastName}; age: ${this.age});
  }
}

const user = new User('John', 'Connor', '32');
user.print();
*/

// ------------ Решение -------------------

function User(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

User.prototype.print = function() {
    console.log(`Name: ${this.firstName}; Last Name: ${this.lastName}; age: ${this.age}`);
}

const user = new User('John', 'Connor', '32');
user.print();