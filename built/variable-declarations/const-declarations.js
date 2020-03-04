"use strict";
var numLivesForCat = 9;
var kitty = {
    name: "Aurora",
    numLives: numLivesForCat,
};
// error
// kitty = {
//   name: "Danielle",
//   numLives: numLivesForCat
// };
// success all
kitty.name = "Rory";
kitty.name = "Kitty";
kitty.name = "Cat";
kitty.numLives--;
