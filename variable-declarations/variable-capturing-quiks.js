"use strict";
// for (var i = 0; i < 10; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 100 * i);
// }
for (var i = 0; i < 10; i++) {
    // capturing current "i" variable
    (function (i) {
        setTimeout(function () {
            console.log(i);
        }, 100 * i);
    })(i);
}
