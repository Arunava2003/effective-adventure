var comment = prompt("Enter your name");
var count = comment.length;
// console.log(count);
// var rem = 140 - count;
var cut1 = comment.slice(0, 1);
var cut2 = comment.slice(1, count);
// console.log(final);
// alert("number of characters written : "+count+" remaining characters limit : "+rem);
// var name = "arunava";
// name = name.toUpperCase();
// console.log(name);
// var name1 = "RAHUL";
// name1 = name1.toLowerCase();
// console.log(name1);
var cap_letter = cut1.toUpperCase();
var low_letter = cut2.toLowerCase();
alert("Hello, "+cap_letter+low_letter);