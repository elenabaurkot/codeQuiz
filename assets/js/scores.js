// run function when page loads
document.addEventListener("DOMContentLoaded", function(){
  printHighscores();
  if (currentS === null){

  }

  document.querySelector(".submit").addEventListener("click", function(event){
    highScoresArr= JSON.parse(localStorage.getItem("high scores") || "[]");
    initials = document.querySelector("#usr").value; 
    highScoresArr.push({initials:initials, score:currentS});
    localStorage.setItem("high scores", JSON.stringify(highScoresArr));
    printHighscores();
    document.getElementById('form-group').innerHTML= '';
  });



 });

var yourScore = document.getElementById("your-score");
var currentS = localStorage.getItem("score");
var scoreList = document.getElementById("highscores");
var initials = document.querySelector("#usr").value;
var highScoresArr = [];
var scoreArr = [];

function printHighscores() {
  yourScore.textContent = ("Your score is: " + currentS);
  scoreArr = JSON.parse(localStorage.getItem("high scores"));
  scoreList.textContent ='';
  for(var i = 0; i < scoreArr.length; i++) {
  var user = scoreArr[i].initials;
  var userScore = scoreArr[i].score;
  var li = document.createElement("li");
  li.textContent = (user + " " + userScore)
  scoreList.append(li);

  if (currentS === null) {
    initials.display = 'none';
  }
}; 
};



/*
document.querySelector(".submit").addEventListener("click", function(event){
  highScoresArr= JSON.parse(localStorage.getItem("high scores") || "[]");
  initials = document.querySelector("#usr").value; 
  highScoresArr.push({initials:initials, score:currentS});
  localStorage.setItem("high scores", JSON.stringify(highScoresArr));
  printHighscores();
  document.getElementById('form-group').innerHTML= '';
});
*/ 

function clearHighscores() {
  localStorage.clear();
  document.getElementById('form-group').innerHTML= '';
  // window.location.reload();
};

// user clicks button to clear high scores
document.getElementById("clear").onclick = clearHighscores;

