function getMilk(balance, price) {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
    console.log("Buy bottle of rupees : "+balance);
    console.log("Milk bottles bought : "+getBottles(balance, price));
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");

    return getchange(balance, price);
}

function getBottles(money, price) {
    var bottles = Math.floor(money / price);
    return bottles;
}
function getchange(money, price) {
  var change = money % price;
  return change;
}

var change = getMilk(10, 3); // 3 bottles
console.log("Money returned : "+change);