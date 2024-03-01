/*
2. ���� ����� ������������ � ��� ������� � ������� ���������������� ������. 
������ - ���������� ���������� �� ES5 � �������������� �������-������������. 
������� �������� �������� �� ����� print, 
������� ����������� � ������ �������, �� ��� ���� �������� � ���������, 
��� ����� ��������� ����������� ��������� (����� 1 ��� ���� �����������, 
� �� ���������� ��� ������� �� �����������).

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

// ------------ ������� -------------------

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