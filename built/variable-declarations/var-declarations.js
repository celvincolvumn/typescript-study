"use strict";
// var a = 10;
//
// function f() {
//   var message = "Hello, world!";
//
//   return message;
// }
function f1() {
    var a = 10;
    return function g1() {
        var b = a + 1;
        return b;
    };
}
var g = f1();
// error '11'
g();
// function f() {
//   var a = 1;
//   a = 2;
//   var b = g();
//   a = 3;
//
//   return b;
//
//   function g() {
//     return a;
//   }
// }
//
// f();
