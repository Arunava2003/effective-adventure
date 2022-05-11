var list = ["Angela", "Arunava", "Rahul", "Mainak", "Anwesha"];
var guestName = prompt("What is your name : ");
if (list.includes(guestName)){
  alert("Welcome "+guestName);
}
else{
  alert("Sorry "+guestName+", maybe next time.");
}