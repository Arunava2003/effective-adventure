// $("h1").css("color", "red"); //changing css color property in js jquery

// document.querySelector("h1") is same as $("h1") in jquery
// document.querySelector("h1.<classname>") is same as $("h1.<classname>") in jquery
// document.querySelector("#<id> h1") is same as $("#<id> h1") in jquery

$("h1").addClass("big-title margin-50"); // two class added

// alert($("h1").hasClass("margin-50")); return Boolean value 

// Manipulating Text using Jquery

// $("button").text("Dont Click Me!"); selects every button and change the text 

$("button").html("<strong>Dont Click Me!</strong>"); // change html

$("a").attr("href", "https://www.google.com"); // change attribute

$("img").attr("src", "/Drum Kit Starting Files/images/snare.png");

console.log($("h1").attr("class")); // classes are also attributes

//***********************************Adding Event listeners with jquery********************************
// Adding to h1
$("h1").click(function () { 
    $("h1").css("color", "aqua");    
});

// Adding event listener to buttons and change h1 on click
$("button").click(function () { 
    $("h1").css("color", "aqua");
});

$(document).keydown(function (event) { 
    $("h1").text(event.key);
});

// *****************************Adding And removing Elements with Jquery********************************
// Add
$("h1").before("<button>Before</button>");
$("h1").after("<button>After</button>");
$("h1").prepend("<button>prepend</button>");
$("h1").append("<button>append</button>");
/*
.before : <button>Before</button><h1></h1>
.after : <h1></h1><button>After</button>
.prepend : <h1><button>Prepend</button>Text</h1>
.append : <h1>Text<button>Arepend</button></h1>
*/
// Remove
// $(selector).remove(); 

//*************************************************Animations with jquery*******************************

$("button").on("click", function () {
    $("h1").fadeToggle();                                 //fadding on/off using fadeToggle on clicking buttons
});
/*
there are 
*/