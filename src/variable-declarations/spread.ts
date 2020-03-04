let first = [1, 2];
let second = [3, 4];
let bothPlus = [0, ...first, ...second, 5];

console.log(bothPlus);


let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { ...defaults, food: "rich" };

console.log(search);

class C {

  p = 12;

  m() { }
}

let c = new C();
let clone = { ...c };
clone.p; // success
// clone.m(); // error!
