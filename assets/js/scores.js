// run function when page loads
document.addEventListener("DOMContentLoaded", function(){
  printHighscores();
  if (currentS === null){

  }


 });

var yourScore = document.getElementById("your-score");
var currentS = localStorage.getItem("score");
var scoreList = document.getElementById("highscores");
var highScoresArr = [];
var scoreArr = [];

function printHighscores() {
  scoreArr = JSON.parse(localStorage.getItem("high scores"));
  scoreList.textContent ='';
  for(var i = 0; i < scoreArr.length; i++) {
  var user = scoreArr[i].initials;
  var userScore = scoreArr[i].score;
  var li = document.createElement("li");
  li.textContent = (user + " " + userScore)
  scoreList.append(li);
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
  document.getElementById("highscores").setAttribute("class", "hide");
  // window.location.reload();
};

// user clicks button to clear high scores
document.getElementById("clear").onclick = clearHighscores;

