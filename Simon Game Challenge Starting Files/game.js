function nextSequence(){
    let randomNumber = Math.round(Math.random()*3);
    let buttonColours = ["green", "red", "yellow", "blue"];
    let randomChosenColour = buttonColours[randomNumber];
    let randomChosenColourId = $("#" + randomChosenColour);
    $(randomChosenColourId).fadeOut(100).fadeIn(100);
    let audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
    gamePattern.push(randomChosenColour);
    level++;
    $("#level-title").text("Level " + level);

}