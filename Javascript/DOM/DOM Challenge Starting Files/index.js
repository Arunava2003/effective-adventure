document.querySelector("h1").innerHTML = "Arunava";

document.firstElementChild.lastElementChild.querySelector("ul").lastElementChild.innerHTML = "Arunava";

document.getElementsByTagName("li")[2].style.color = "red"; // selectors with 's' like 'getElementsByTagName' are array type so we have use index number to specifically select a element.

document.querySelector("li a").style.color = "orange"; // hierarchial selection

document.querySelector("button").style.backgroundColor = "yellow";

document.querySelector("h1").classList.toggle("huge"); // classList : gets list of class in h1 , toggle : turn on/off 
// .add : adds , .remove : removes

document.querySelector("h1").innerHTML = "<em>Arunava</em>";

// attributes manipulatiuon

var att1 = document.querySelector("a").attributes; // type array.lenght
console.log(att1);

var att2 = document.querySelector("a").getAttribute("href"); // what's inside the attribute
console.log(att2);

document.querySelector("a").setAttribute("href", "https://www.bing.com"); // changes what's inside the attribute
