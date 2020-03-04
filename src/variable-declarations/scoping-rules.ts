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


function sumMatrix(matrix: number[][]) {

  var sum = 0;

  for (let i = 0; i < matrix.length; i++) {
    var currentRow = matrix[i];
    for (let i = 0; i < currentRow.length; i++) {
      sum = currentRow[i];
    }
  }

  return sum;
}
