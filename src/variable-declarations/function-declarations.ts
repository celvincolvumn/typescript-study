// type C = { a: string, b?: number };
//
// function f({ a, b }: C): void {
//   // ...
// }

// function f5({ a, b } = { a: "", b: 0 }): void {
//   console.log(a);
//   console.log(b);
// }
//
// f5();

function f6({ a, b = 0 } = { a: "" }): void {
  console.log(a);
  console.log(b);
}
f6({ a: "yes" }); // success, default b = 0
f6(); // success,
// f6({}); // error
