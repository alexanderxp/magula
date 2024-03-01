/*
3. ��������� ��� �� ������ 2 :

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


�������� �����, 
������� ��������� User � ��� ���� ��������� ���. 
�������� ������ Admin, � ����� ��������� �������� role, ������� ����� � ���. 
�������� �������� ���������� Admin.
*/

// ------------ ������� -------------------

class Admin extends User {
    constructor (firstName, lastName, age, role) {
        super(firstName, lastName, age);

        this.role = role;
    }
}

const admin = new Admin('John', 'Connor', '32', 'adm');

console.dir(admin);