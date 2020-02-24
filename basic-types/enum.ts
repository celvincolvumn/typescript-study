// enum Color { Red, Green, Blue };
// let c: Color = Color.Green;

// enum Color { Red = 1, Green, Blue };
// let c: Color = Color.Green;

enum Color { Red = 1, Green = 2, Blue };
let colorName: string = Color[2];

alert(colorName);
