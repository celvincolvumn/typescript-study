"use strict";
// function f2(shouldInitialize: boolean) {
//   if (shouldInitialize) {
//     var x = 10;
//   }
//
//   return x;
// }
//
// f2(true);
//
// f2(false);
function sumMatrix(matrix) {
    var sum = 0;
    for (var i_1 = 0; i_1 < matrix.length; i_1++) {
        var currentRow = matrix[i_1];
        for (var i_2 = 0; i_2 < currentRow.length; i_2++) {
            sum = currentRow[i_2];
        }
    }
    return sum;
}
