//var questions up here
var questions = [
    {
      title: "Commonly used data types do not include:",
      choices: ["Strings", "Booleans", "Alerts", "Numbers"],
      answer: "Alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____:",
      choices: ["Quotes", "Curly Brackets", "Parentheses", "Square Brackets"],
      answer: "Parentheses"
    },

    {
        title: "Arrays in Javascript can be used to store _____:",
        choices: ["Numbers and strings", "Other arrays", "Booleans", "All the above"],
        answer: "All the above"
      },

      {
        title: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "Terminal/bash", "For loops", "Console.log"],
        answer: "Console.log"
      },

      {
        title: "String values must be enclosed within _____ when being assigned to variables:",
        choices: ["Commas", "Curly brackets", "Quotes", "Parentheses"],
        answer: "Quotes"
      }
  ];
/////////////
  var leaderForm = document.createElement("FORM");
  var leaderLabel = document.createElement("label");
  var leaderInput = document.createElement("input");
  var leaderP = document.createElement("P");
  var leaderSpan = document.createElement("span");
  var leaderUL = document.createElement("ul");
  var leader = [];
  var leaderboardDiv = document.querySelector(".leader");


var containerE1 = document.querySelector (".container");
var timerDisplay = document.querySelector(".timer");
var resultsDiv = document.querySelector(".results");
var finalresultsDiv = document.querySelector(".finalResults");

var startText = document.createElement('h1');
var startButton = document.createElement("button");
//create p tag to display question
var questionText = document.createElement("p");
//p tag to display results
var resultsText = document.createElement("p");

var finalresultsText = document.createElement("h1");
var finalscoreText = document.createElement("p");

//variable to store time
var timesUp=false;
var timerNumber= 75;
var timer = timerNumber;

//var to store current index
var index = 0;

//timer for results
var resultsTimer=1;

//////???add this 
var score=0;

//////////////////functions///////////////////

//function to load content at first
function openPage(){
    //title text
    startText.textContent = "Welcome to the Coding Quiz";

    //button
    startButton.textContent = "start quiz";
    // startButton.classList.add("startBtn");
    startButton.id="startBtn";

    //append text to container
    containerE1.appendChild(startText);
    containerE1.appendChild(startButton);
}

//function that shows the question and begins timer
function startQuiz(){
//show timer function
    if(event.target.matches("#startBtn")){
        showTimer();
        nextQuestion();        
}
    }
    
//function that handles timer
function showTimer(){
        //display time on screen
    timerDisplay.textContent = timer;
        //create set interval and store in variable
        //variable because need to clear
     timeInterval = setInterval(function(){
            //decrease by 1
            console.log("timerNumber is " + timerNumber +", timer is " + timer);
           // console.log("doin a decrease");
           // console.log(index);
    if (timer-1 >= 0){
        timer = timer-1;
        }else{
            timer=0;
        }
            //display to screen
        timerDisplay.textContent = timer;
            //if time reach zero stop
         if (timer <= 0){
            clearInterval(timeInterval); 
              timesUp=true;  
              timeOut();     
              console.log("timeout");     
        }
    },1000);
    
}


function timeOut(){
    resultsText.textContent ="TIME UP";
    resultsDiv.appendChild(resultsText);           
    index++;
    console.log("timeout incremented index, index is "+ index);
    // if (index === questions.length){
        lastPage();
        // }else{
            //nextQuestion();
            //timer = timerNumber;
            //console.log(timer +"... "+ timerNumber);
            //showTimer();
            textTimeout();
    // }
}

function nextQuestion(){
    var currentQuestion = questions[index];
        //empty container element erase
        containerE1.textContent = "";
        //add current question title to question display var
        questionText.textContent = currentQuestion.title;
        //append question to display
        containerE1.appendChild(questionText);
        //create a div element to wrap choices
        var answersDiv = document.createElement ("div");
        //for loop to create button and a class to button and use event listen add text to button append button to wrapper
        for (let i = 0; i < currentQuestion.choices.length; i++) {
            //creates buttons for choices
            var answerButton = document.createElement("button");
            answerButton.classList.add("choiceBtn");
            answerButton.textContent = currentQuestion.choices[i];
            answersDiv.appendChild(answerButton);
    }
        //append div to container
        containerE1.appendChild(answersDiv);
};



function checkAnswer(event){  
//if event.target matches class choice button
    if (event.target.matches(".choiceBtn")){
        if(event.target.textContent==questions[index].answer){           
//add correct
            resultsText.textContent ="correct!";
            resultsDiv.appendChild(resultsText);
            textTimeout();
            
            console.log("score= " + score );
            index++;
//if answer is wrong********************************************************************
                }else if (event.target.textContent!=questions[index].answer){
    if(timer-5 >= 0){
           timer =timer-5;
        }else{
            timer =0;
           }
            timerDisplay.textContent=timer;
            //timeDecrease();***
            resultsText.textContent ="WRONG";
            resultsDiv.appendChild(resultsText);           
            textTimeout();
            index++;
                    }

    if(index != questions.length && timerNumber > 0){

        console.log("checkAnswer incremented index, index is " + index);
        nextQuestion();
            }else{
        lastPage();

        }
    }
 }

function textTimeout(){
    var resultsInterval = setInterval(function(){
//decrease by 1
    resultsTimer -- ;
//if time reach zero stop
    if (resultsTimer === 0){
    resultsText.textContent ="";
    resultsTimer=1;
    clearInterval(resultsInterval);
            }
    },1000)
}

function lastPage(){    
    timesUp=true; 
    clearInterval(timeInterval);
    containerE1.textContent = "";
    timerDisplay.textContent="";
    resultsDiv.textContent="";
    finalresultsText.textContent = "High Score";
    score=timer;
    finalscoreText.textContent = "Your Final Score is " + score;
    containerE1.appendChild(finalresultsText);
    containerE1.appendChild(finalscoreText);
   init();
   runLeaderboard();
 

    console.log("last page runnin")
    }

function renderLeader() {

    leaderForm.id = "leader-form";
    leaderForm.method='POST';
    leaderboardDiv.appendChild(leaderForm);
    
    leaderForm.appendChild(leaderLabel);
    leaderLabel.textContent= "Add Your Name: ";

     leaderForm.appendChild(leaderInput);
     leaderInput.id = "leader-text";
     leaderInput.name = "leader-text";

     leaderP.textContent = "Leaders ";
     leaderboardDiv.appendChild(leaderP);

     leaderSpan.id = "leader-count";
     leaderP.appendChild(leaderSpan);
     leaderSpan.textContent = "0";

     leaderUL.id="leader-list";
     leaderboardDiv.appendChild(leaderUL);
     

     leaderUL.innerHTML = "";
     leaderSpan.textContent = leader.length;
    console.log ("render leader ran");


    // Render a new li for each leader
     for (var i = 0; i < leader.length; i++) {
       var leader1 = leader[i];
  
       var li = document.createElement("li");
       li.textContent = leader1;
       li.setAttribute("data-index", i);
  
       var button = document.createElement("button");
       button.textContent = "Clear";
  
       li.appendChild(button);
       leaderUL.appendChild(li);
      
    }
   console.log("leaderboard running");
  }

  function init() {
    var storedLeader = JSON.parse(localStorage.getItem("leader"));
    if (storedLeader !== null) {
      leader = storedLeader;
    }
  
    // Render leader to the DOM
    renderLeader();
  }
  
  function storeLeader() {
    // Stringify and set "todos" key in localStorage to todos array
    localStorage.setItem("leader", JSON.stringify(leader));
  }

function runLeaderboard(){
    // When form is submitted...
leaderForm.addEventListener("submit", function(event) {
    event.preventDefault();
  
    var leaderText = leaderInput.value.trim();
  
    // Return from function early if submitted leadertext is blank
    if (leaderText === "") {
      return;
    }
  
    // Add new leaderText to todos array, clear the input
    leader.push(leaderText + " " + score);
    leaderInput.value = "";
  
    // Store updated leader in localStorage, re-render the list
    storeLeader();
    renderLeader();
  });
  
  // When a element inside of the todoList is clicked...
    leaderUL.addEventListener("click", function(event) {
    var element = event.target;
  
    // If that element is a button...
    if (element.matches("button") === true) {
      // Get its data-index value and remove the todo element from the list
      var index = element.parentElement.getAttribute("data-index");
      leader.splice(index, 1);
  
      // Store updated todos in localStorage, re-render the list
      storeLeader();
      renderLeader();
    }
  });

}

//add event listener
startButton.addEventListener("click", startQuiz);

//event listen for choice
//hook up to whole element, button is not yet created
document.addEventListener("click", checkAnswer);

openPage();












//******************the things i need***************************************************************************
    
    //need css format******************************





    //view highscores****************
     //need restart quiz*****