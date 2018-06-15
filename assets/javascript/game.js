// Audio playback
var audioElement = document.createElement("audio");
audioElement.setAttribute("src", "assets/Wii Music.mp3");

// Declare Variables
var wins = 0;
var losses = 0;
var number = 0;
crys1 = Math.floor(Math.random() * 12) + 1;
crys2 = Math.floor(Math.random() * 12) + 1;
crys3 = Math.floor(Math.random() * 12) + 1;
crys4 = Math.floor(Math.random() * 12) + 1;
var fullscore = 0;

// Create function for random numbers
function onStart(){
    number = Math.floor(19 + Math.random() * 101);
    crys1 = Math.floor(Math.random() * 12) + 1;
    crys2 = Math.floor(Math.random() * 12) + 1;
    crys3 = Math.floor(Math.random() * 12) + 1;
    crys4 = Math.floor(Math.random() * 12) + 1;
    fullscore = 0;
    $("#crystalNum").text(fullscore);
    $("#randnum").text(number);
    audioElement.play();

}

$(document).ready(function(){
    $("#crystal1").click(function(){
        
        fullscore = fullscore + crys1;
        $("#crystalNum").text(fullscore);
        if($("#randnum").text === "0"){
            onstart();
            
        } 
        if(fullscore === number){
            wins++;
            $("#win").text("wins: " + wins);
            onStart();
        }
        
        if(fullscore > number){
            losses++;
            $("#loss").text("losses: " + losses);
            onStart();
        }
    });
});

$(document).ready(function(){
    $("#crystal2").click(function(){
        
        fullscore = fullscore + crys2;
        $("#crystalNum").text(fullscore); 
        if($("#randnum").text === "0"){
            onstart();
            
        } 
        if(fullscore === number){
            wins++;
            $("#win").text("wins: " + wins);
            onStart();
        }
        if(fullscore > number){
            losses++;
            $("#loss").text("losses: " + losses);
            onStart();
        }
    });
});

$(document).ready(function(){
    $("#crystal3").click(function(){
        
        fullscore = fullscore + crys3;
        $("#crystalNum").text(fullscore); 
        if($("#randnum").text === "0"){
            onstart();
           
        } 
        if(fullscore === number){
            wins++;
            $("#win").text("wins: " + wins);
            onStart();
        }
        if(fullscore > number){
            losses++;
            $("#loss").text("losses: " + losses);
            onStart();
        } 
    });
});

$(document).ready(function(){
    $("#crystal4").click(function(){
        
        fullscore = fullscore + crys4;
        $("#crystalNum").text(fullscore);
        if($("#randnum").text === "0"){
            onstart();
           
        } 
        if(fullscore === number){
            wins++;
            $("#win").text("wins: " + wins);
            onStart();
        }
        if(fullscore > number){
            losses++;
            $("#loss").text("losses: " + losses);
            onStart();
        }
    });
});