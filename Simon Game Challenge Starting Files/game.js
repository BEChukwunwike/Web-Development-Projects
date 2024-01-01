let gamePattern =[];


function nextSequence(){
    //random numbers from 0-3
    let randomNumber = Math.round(Math.random()*3);
    //array of colours
    let buttonColours = ["green", "red", "yellow", "blue"];
    //chooses random colour
    let randomChosenColour = buttonColours[randomNumber];
    //Chooses the id
    let randomChosenColourId = "#" + randomChosenColour;
    //animate upon click
    $(randomChosenColourId).fadeToggle(100);
    //play sound
    playSound(randomChosenColour)
    
    gamePattern.push(randomChosenColour);
}

function playSound(colour){
    let audio = new Audio("sounds/" + colour + ".mp3");
    audio.play();
}