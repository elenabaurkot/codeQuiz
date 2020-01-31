// variable for questions
var questions = [
  {   
    q: "What do the 100 folds in a chef's hat represent?",
    choices: ['100 hours of official training', '100 five-star reviews', '100 ways to cook an egg', '100 recognized desserts'], 
    a:  '100 ways to cook an egg'
    },
    {
    q: "What is the national animal of Scotland?",
    choices: ['Unicorn', 'Horse', 'Donkey', 'Sparrow'], 
    a:  'Unicorn'
    },
    {
    q: "On average, how much does the heart of a blue whale (the world's largest animal) weight?",
    choices: ['50 pounds', '100 pounds', '200 pounds', '400 pounds'], 
    a:  '400 pounds'
    },
    {
    q: "Which bird can mimick almost any sound they hear (including a chainsaw)?",
    choices: ['Kookaburra', 'Mockingbird', 'Lyrebird', 'Hummingbird'], 
    a:  'Lyrebird'
    },
    {
    q: "Which college can you major in wine ('Viticulture and Enology' a.k.a, the cultivation of grapes and the science of winemaking)",
    choices: ['University of California, Santa Barbara', 'Cornell University', 'Arizona State University', 'Tulane'], 
    a:  'Cornell University'
    },
    {
    q: "How much does it cost to make a $1 bill?",
    choices: ['1 cent', '5 cents', '8 cents', '11 cents'], 
    a:  '5 cents'
    },
];


// variables to keep track of quiz state
var time = questions.length * 20;
var currentQuestionIndex = 0;
var timerId;

var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var choiceArr = questions[currentQuestionIndex].choices;
var question = questions[currentQuestionIndex].q;
var choicess = document.querySelector(".choices");
var questionss = document.getElementById("questions");


// function to show questions
function getQuestion(){
  question = questions[currentQuestionIndex].q;
  questionss.innerHTML = '';
  questionss.innerHTML = question;
  choiceArr = questions[currentQuestionIndex].choices;
  choicess.innerHTML = "";
  
  // for loop for the choices array to create the choice "button" for each choice
  for (var i = 0; i < choiceArr.length; i++) {
    var choiceButton = document.createElement("button");
      choiceButton.innerHTML =choiceArr[i];
      choicesEl.appendChild(choiceButton);
      choicesEl.setAttribute("class", "choice");
    }
  };

// When a choice button is clicked check if answer is correct, increase the question index and if a next question exists go to it, otherwise end quiz
  document.querySelector(".choices").addEventListener("click", function(event){
    console.log("button.event", event.target);
    console.log(event.target.textContent);
      getAnswer();
      currentQuestionIndex++;
      // see if there's even a next question
      if (currentQuestionIndex >= questions.length) {
        endQuiz();
      } else {
        getQuestion();
      }
  });

  // function to check if answer is correct
  function getAnswer (){
    if (event.target.textContent === questions[currentQuestionIndex].a){
      alert("You got it!");
    }
    if (event.target.textContent !== questions[currentQuestionIndex].a){
      alert("not quite, lose ten seconds");
      time = time - 10;
    }
  }


/**
 * Function to start the quiz
 */
function startQuiz() {
  // hide start screen
  var startScreenEl = document.getElementById("start-screen");
  startScreenEl.setAttribute("class", "hide");
  // un-hide questions container
  questionsEl.removeAttribute("class", "hide");
  // start timer
  timerId = setInterval(clockTick, 1000);
  // show starting time
  timerEl.textContent = time;
  // call the function that gets the next question 
  //getQuestion();
  getQuestion();
  
}



/**
 * Function that runs when the user clicks on an answer
 *
 * This function will:
 *  - [ ] Check if the user picked the right answer or not, and behave accordingly
 *  - [x] End quiz if no more questions left, or go onto next question
 *
 * HINT: for hiding/showing elements, take a look at the `.hide` class in
 *  `styles.css`!
 * 
 * @see https://www.w3schools.com/jsref/met_win_settimeout.asp
 * @see https://www.w3schools.com/jsref/met_element_setattribute.asp
 * @see https://www.w3schools.com/jsref/met_element_removeattribute.asp
 */


/**
 * Function to end the quiz
 * 
 * @description
 * This function will:
 *  - [ ] Stop the timer
 *  - [ ] Update the DOM accordingly
 *
 * HINT: for hiding/showing elements, take a look at the `.hide` class in
 *  `styles.css`!
 * 
 * @see https://www.w3schools.com/jsref/met_win_clearinterval.asp
 * @see https://www.w3schools.com/jsref/met_element_setattribute.asp
 * @see https://www.w3schools.com/jsref/met_element_removeattribute.asp
 */
function endQuiz() {
  // for(var i = 0; i < questions.length; i++){
    // if (currentQuestionIndex > questions.length-1) {
      alert("You are done!")
      window.location.href = "highscores.html";
    // }
  // }
};

//  timer not working at end to redirect




/**
 * Function to handle the timer
 * 
 * @description
 * This function will:
 *  - [ ] Update the timer
 *  - [x] End the quiz if the user runs out of time
 */
function clockTick() {
      time = time - 1; 
      if (time < questions.length * 20) {
        timerEl.innerHTML = time; 
      }
      if (time < 1 ) {
        window.location.href = "highscores.html";
      }
    startBtn.addEventListener("click", clockTick);
    }



/**
 * Function to save a new high score
 * 
 * @description
 * This function will:
 *  - [ ] Let user save their initials and high score
 *  - [ ] Redirect to high scores page
 * 
 * @see https://www.w3schools.com/jsref/prop_text_value.asp
 * @see https://www.w3schools.com/jsref/prop_win_localstorage.asp
 * @see https://www.w3schools.com/howto/howto_js_redirect_webpage.asp
 */
function saveHighscore() {

  /*
    @TODO: write your function code here
  */

}

// user clicks button to submit initials
submitBtn.onclick = saveHighscore;

// user clicks button to start quiz
startBtn.onclick = startQuiz;

