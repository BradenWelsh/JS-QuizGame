//timer
var timer = document.querySelector("#timer");
var timeLeft = 60;

//buttons
var startButton = document.querySelector("#startButton");
var viewHiS = document.querySelector("#viewHis")
var btnA = document.querySelector("#a");
var btnB = document.querySelector("#b");
var btnC = document.querySelector("#c");
var btnD = document.querySelector("#d");
var submitB = document.querySelector("#submit");
var clearB = document.querySelector("#clear");
var retryB = document.querySelector("#retry");

//Start Screen

var startScreen = document.querySelector("#startScreen");

// Questions 
var questionSect = document.querySelector("#questionSect");

// Question Checker
var check = document.querySelector("#check");

// End Screen
var Score = document.querySelector("#endScore");
var initials = document.querySelector("#input");
var endScreen = document.querySelector("#endScreen")

var highScores = [];
var allHighScores = [];
// Questions
var questions = [
{
    question: "Inside which HTML element do we put the Java Script?",
    answers: ["A. <js>",
            "B. <scripting>",
            "C. <javascript>",
            "D. <script>"],
    correctAnswer: "D. <script>";
},
{
    question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
    answers: ["A. <script href='xxx.js'>",
            "B. <script src= ' xxx.js'>",
            "C. <script name = 'xxx.js'>",
            "D. <script = 'xxx.js'>"],
    correctAnswer: "B. <script src= ' xxx.js'>";
},
{
    question: "How do you create a function in JavaScript?",
    answers: ["A. function myFunction()",
            "B. function:myFunction()",
            "C. function = myFunction()",
            "D. function:'myFunction()"],
    correctAnswer: "A. function myFunction()";

},
{
    question: "How to write an IF statement in JavaScript?",
    answers: ["A. if i == 5 then",
            "B. if i = 5 then,"
            "C. if(i==5)",
            "D. if i =5"],
    correctAnswer: "C. if(i==5)";
}
];
function start(){
    startScreen.style.display = "none";
    questionSect.style.display = "block";
}
startButton.addEventListener("click", start)

submitB.addEventListener("click", function(){

})

retryB.addEventListener("click", function(){

})

viewHiS.addEventListener("click", function(){

})

clearB.addEventListener("click", function(){

})