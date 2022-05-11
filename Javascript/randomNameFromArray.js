var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
function whosPaying(names) {
  var arr_len = names.length;
  var random_Selection = Math.floor(Math.random() * arr_len);
  var select = names[random_Selection];
  return select+" is going to buy lunch today!";
}
// console.log(whosPaying(names));
// console.log(arr[1]);