//var questions up here
var questions = [
    {
      title: "Example Question 1:",
      choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
      answer: "Choice 2"
    },
    {
      title: "Example Question 2:",
      choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
      answer: "Choice 3"
    }
  ];

var containerE1 = document.querySelector (".container");
var timerDisplay = document.querySelector(".timer");
var resultsDiv = document.querySelector(".results");

var startText = document.createElement('h1');
var startButton = document.createElement("button");
//create p tag to display question
var questionText = document.createElement("p");
//p tag to display results
var resultsText = document.createElement("p");

//variable to store time
var timer = 75;


//var to store current index
var index = 0;

//timer for results
var resultsTimer=1;

//////////////////functions///////////////////

//function to load content at first
function openPage(){
    //title text
    startText.textContent = "welcome";

    //button
    startButton.textContent = "start quiz";

    //append text to container

    containerE1.appendChild(startText);
    containerE1.appendChild(startButton);
}

    //function that shows the question and begins timer

     function startQuiz(){
        //show timer function
        showTimer();

     }

    //function that handles timer
    function showTimer(){

        //display time on screen
    timerDisplay.textContent = 75;
        //create set interval and store in variable
        //variable because need to clear
    var timeInterval = setInterval(function(){
            //decrease by 1
        timer = timer-1;
            //display to screen
        timerDisplay.textContent = timer;
            //if time reach zero stop
         if (timer === 0){
                clearInterval(timeInterval);
                // clearTimeout(timer);  
            }
        },10);





        //inside
        nextQuestion();
    }
    //function that handles and displays next Q

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
            // questions.answer;

        //    if (".choicebtn"===currentQuestion.answer){
            //console.log(event.target.textContent);
        // for (let i = 0; i < 100; i++){
    if(event.target.textContent==questions[index].answer){
            
     //add correct
        resultsText.textContent ="correct!";
        resultsDiv.appendChild(resultsText);

        }else{

        resultsText.textContent ="WRONG";
        resultsDiv.appendChild(resultsText);
        }
          
        var resultsInterval = setInterval(function(){
            //decrease by 1
            resultsTimer -- ;
            //if time reach zero stop
            if (resultsTimer === 0){
                resultsText.textContent ="";
            }
        },1000)
           


            //logic to check answer

            index ++;
            nextQuestion();

        }

        

    }

    //add event listener
    startButton.addEventListener("click", startQuiz)

    //event listen for choice
    //hook up to whole element, button is not yet created
    document.addEventListener("click", checkAnswer);

    //function to check the answer and display next Q

    openPage();