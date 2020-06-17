//var questions up here
var questions = [
    {
      title: "Example Question 1:",
      choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
      answer: "Choice 1"
    },
    {
      title: "Example Question 2:",
      choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
      answer: "Choice 1"
    },

    {
        title: "Example Question 3:",
        choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
        answer: "Choice 1"
      },

      {
        title: "Example Question 4:",
        choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
        answer: "Choice 1"
      },

      {
        title: "Example Question 5:",
        choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
        answer: "Choice 1"
      }
  ];

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

//variable to store time
var timesUp=false;
var timerNumber= 4;
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
    startText.textContent = "welcome";

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
    timerDisplay.textContent = timerNumber;
        //create set interval and store in variable
        //variable because need to clear
//if(timesUp===false){
     timeInterval = setInterval(function(){
            //decrease by 1
            console.log(timesUp + "times up");
           // console.log("doin a decrease");
           // console.log(index);
        timer = timer-1;
            //display to screen
        timerDisplay.textContent = timer;
            //if time reach zero stop
         if (timer === 0){
            clearInterval(timeInterval);
                // clearTimeout(timer); 
              timesUp=true;  
              timeOut();          
        }
    },1000);
    //}
}
    //function that handles and displays next Q

function restartTimer(){
            timer= timerNumber;
            timerDisplay.textContent = timerNumber;
            timesUp=false;
            console.log("reset timer did the thing")
}

function timeOut(){
    resultsText.textContent ="TIME UP";
    resultsDiv.appendChild(resultsText);
        //textTimeout();
            
    index++;
    console.log("timeout incremented index, index is "+ index);
    if (index === questions.length){
        lastPage();
        }else{
            nextQuestion();
            timer = timerNumber;
            console.log(timer +"... "+ timerNumber);
            showTimer();
            textTimeout();
    }
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

//function to check answer and display
function checkAnswer(event){  
//if event.target matches class choice button
    if (event.target.matches(".choiceBtn")){
        if(event.target.textContent==questions[index].answer){           
//add correct
            resultsText.textContent ="correct!";
            resultsDiv.appendChild(resultsText);
            textTimeout();
                }else{
// if (event.target.textContent!=questions[index].answer){
            resultsText.textContent ="WRONG";
            resultsDiv.appendChild(resultsText);
            textTimeout();
                    }
         //logic to check answer
        // index ++;
        // console.log("checkAnswer incremented index, index is " + index);
        // nextQuestion();
        
        // lastPage();
        //console.log(timer);
         index ++;
         //restartTimer();
         //nextQuestion();
    if(index != questions.length){
        console.log("checkAnswer incremented index, index is " + index);
      //  index ++;
        nextQuestion();
       restartTimer();
        }else{
        // console.log("checkAnswer incremented index, index is " + index);
        // nextQuestion();
        // restartTimer();
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
    containerE1.appendChild(finalresultsText);
    console.log("last page runnin")
    }

//add event listener
startButton.addEventListener("click", startQuiz);

//event listen for choice
//hook up to whole element, button is not yet created
document.addEventListener("click", checkAnswer);

openPage();
    //lastPage();
    // textTimeout();