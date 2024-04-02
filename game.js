var randomNumber;
i = 0;
level = 1;
counter = 0;

const buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickPattern = [];
var userChoosenColour;

function nextSequence(){
    randomNumber = Math.floor(Math.random()*10)%4;
    var randomChoosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChoosenColour);
    $("#level-title").text("Level " + (i+1));
    while(i<level){
        
        setTimeout(function(){
            console.log(level);
            $("#" + randomChoosenColour).fadeOut(100).fadeIn(100);
            let beat = new Audio ('sounds/' + randomChoosenColour + '.mp3');
            beat.play();
    
        }, 500 * 1)   

    i++; 
}
    level ++;
}

$(document).keydown(function(event){
    var key = event.keyCode;
    if(key === 65){
    level = 1;
    i = 0;
    gamePattern = [];
    userClickPattern = [];
    nextSequence();
}
        
});


$(".btn").on("click", (function(){
    userChoosenColour = $(this).attr('id');
    userClickPattern.push(userChoosenColour);   
    console.log(userClickPattern);
    console.log(gamePattern);

    setTimeout(function(){
        console.log(level);
        $("#" + userChoosenColour).fadeOut(100).fadeIn(100);
        let beat = new Audio ('sounds/' + userChoosenColour + '.mp3');
        beat.play();

    }, 50 * 1)   
    counter ++;

    checkAnswer();


}));


function checkAnswer(){
    if(JSON.stringify(gamePattern) == JSON.stringify(userClickPattern)){
        userClickPattern = [];
        nextSequence();
        counter = 0;
    }
    else if (gamePattern[counter-1] !== userChoosenColour){

        $("#level-title").text("Game over, press A to restart");
        let wrong = new Audio ('sounds/wrong.mp3');
        wrong.play();
        $("body").css("background-color", "violet");
        
        setTimeout(function(){
            $("body").css("background-color", "#011F3F");
        },500*1)

    }
    
}

