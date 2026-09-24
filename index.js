var button = document.querySelectorAll("button");
var audio = [ new Audio("sounds/crash.mp3") ,
    new Audio("sounds/kick-bass.mp3"),
    new Audio("sounds/snare.mp3"),
    new Audio("sounds/tom-1.mp3"),
    new Audio("sounds/tom-2.mp3"),
    new Audio("sounds/tom-3.mp3"),
    new Audio("sounds/tom-4.mp3")];



for(let i=0;i< button.length ;i++) {
    button[i].addEventListener("click",z);
    function z(){

            audio[i].play();

        }
};

