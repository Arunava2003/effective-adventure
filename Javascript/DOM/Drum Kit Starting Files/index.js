// document.querySelector("button").addEventListener("click", handleClick);

// above code can be also written as it is below.
// document.querySelector("button").addEventListener("click", function () {
    //     alert("I got clicked");
    // });
    
    function handleClick() {
        alert("I got clicked");
    }
var numberOfDrums = document.querySelectorAll(".drum").length; // total count of drum buttons only.


// iterrating through all btns with class drum and adding event listener.
// section of buttons clicking
for (let i = 0; i < numberOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

// keypress event listener
document.addEventListener("keydown", function (event) { // event : that triggered the function
    makeSound(event.key); // .key : only the key pressed value taken out out of key.
    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();                
            break;                
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();                
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();                
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();                
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();                
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();                
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();                
            break;
    
        default:
            console.log(buttonInnerHTML);
            break;
    }
}

// Giving animation to buttons

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed"); // adding class for applying it to specific button required.
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100); // removes the class after wait of 0.1 sec
}