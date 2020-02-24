
class Student {
  fullName: string;
  constructor(public firstName: string, public middleInital: string, public lastName: string) {
    this.fullName = firstName + ' ' + middleInital + ' ' + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}


function greeter(person: Person) {
  return 'Hello, ' + person.firstName + ' ' + person.lastName;
}

let user = new Student('Kevin', 'J.', 'Song');
// let user = { firstName: 'Kevin', lastName: 'Song' };
// let user = [1, 2, 3];

document.body.innerHTML = greeter(user);
