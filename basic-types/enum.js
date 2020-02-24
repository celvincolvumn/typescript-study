"use strict";
// enum Color { Red, Green, Blue };
// let c: Color = Color.Green;
// enum Color { Red = 1, Green, Blue };
// let c: Color = Color.Green;
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
;
var colorName = Color[2];
alert(colorName);
