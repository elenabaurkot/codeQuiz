// run function when page loads
document.addEventListener("DOMContentLoaded", function(){
  printHighscores();
});

var yourScore = document.getElementById("your-score");
var currentS = localStorage.getItem("score");
var scoreList = document.getElementById("highscores");
var initials = document.querySelector("#usr").value;
var highScoresArr = [];

/**
 * Function to print high scores

 * 
 * @description
 * This function will:
 *  - [ ] Retrieve the high scores
 *  - [ ] Display high scores in descending order
 * 
 * @see https://www.w3schools.com/jsref/prop_win_localstorage.asp
 * @see https://www.w3schools.com/jsref/jsref_sort.asp
 * @see https://www.w3schools.com/jsref/met_node_appendchild.asp
 * @see https://www.w3schools.com/jsref/met_document_createelement.asp
 */

function printHighscores() {
  yourScore.textContent = ("Your score is: " + currentS);
  scoreList.textContent = JSON.parse(localStorage.getItem("high scores") || "[]");
}

document.querySelector(".submit").addEventListener("click", function(event){
  initials = document.querySelector("#usr").value; 
  localStorage.setItem("score", currentS);
  console.log(currentS);
  localStorage.setItem("initials", initials); 
  console.log(initials);
  highScoresArr.push(initials + ": " + currentS);
  localStorage.setItem("high scores", JSON.stringify(highScoresArr));
  printHighscores();
});



/**
 * Function to clear high scores
 * 
 * @description
 * This function will:
 *  - [ ] Clear all the high scores
 *  - [x] Reload the window
 * 
 * @see https://www.w3schools.com/jsref/prop_win_localstorage.asp
 */
function clearHighscores() {

  /*
    @TODO: write the rest of your function code here
  */

  // reload window
  window.location.reload();

}

// user clicks button to clear high scores
document.getElementById("clear").onclick = clearHighscores;


// printHighscores();