class Person {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  sayHello() {
    return 'Hello, ' + this.name;
  }
}

const person = new Person('Kevin');

console.log(person.sayHello());
