function fold(arr, fn, start){
    for (let i = 0; i < arr.length; i++){
        start = fn(start, arr[i])
    }
    return start
}
function foldRight(arr, fn, total){
    for (let i = arr.length-1; i >= 0; i--){
        total = fn(total, arr[i])
    }
    return total
}
function reduce(arr, fn, total) {
  let i = 0;

  if (total === undefined) {
    total = arr[0];
    i = 1;
  }
  for (; i < arr.length; i++) {
    total = fn(total, arr[i]);
  }
  return total;
}
function reduceRight(arr, fn, total){
 let i = arr.length-1;

  if (total === undefined) {
    total = arr[arr.length-1];
    i = arr.length-2;
  }
  for (; i >= 0; i--) {
    total = fn(total, arr[i]);
  }
  return total;
}
// const adder = (a, b) => a + b
// console.log (fold([1, 2, 3], adder, 2)) // returns 8 (2 + 1 + 2 + 3)
// console.log(foldRight([1, 2, 3], adder, 2)) // returns 8 (2 + 3 + 2 + 1)
// console.log (reduce([1, 2, 3], adder)) // returns 6 (1 + 2 + 3)
// console.log(reduceRight([1, 2, 3], adder)) // returns 6 (3 + 2 + 1)

