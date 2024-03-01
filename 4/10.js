/*
3. Используя код из задачи 2 :

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


дописать класс, 
который наследует User и при этом расширяет его. 
Название класса Admin, и новое строковое свойство role, которое будет в нем. 
Написать создание экземпляра Admin.
*/

// ------------ Решение -------------------

class Admin extends User {
    constructor (firstName, lastName, age, role) {
        super(firstName, lastName, age);

        this.role = role;
    }
}

const admin = new Admin('John', 'Connor', '32', 'adm');

console.dir(admin);