"use strict";
var Student = /** @class */ (function () {
    function Student(firstName, middleInital, lastName) {
        this.firstName = firstName;
        this.middleInital = middleInital;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + middleInital + ' ' + lastName;
    }
    return Student;
}());
function greeter(person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
}
var user = new Student('Kevin', 'J.', 'Song');
// let user = { firstName: 'Kevin', lastName: 'Song' };
// let user = [1, 2, 3];
document.body.innerHTML = greeter(user);
