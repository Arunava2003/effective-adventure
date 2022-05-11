
function fibonacciGenerator(n) {
  var fib_Arr = [];
  var seq1 = 0;
  var seq2 = 1;
  for (var i = 1; i <= n; i++) {
    if (i === 1) {
      fib_Arr.push(seq1);
    } else if (i === 2) {
      fib_Arr.push(seq2);
    } else {
      var add = seq1 + seq2;
      fib_Arr.push(add);
      seq1 = seq2;
      seq2 = add;
    }
  }
  return fib_Arr;
}
console.log(fibonacciGenerator(20));