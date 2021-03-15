//timer
var timer = document.querySelector("#timer");
var timeLeft = 60;
var timerInterval;

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
var scoreList = document.querySelector("#scoreList");

//Start Screen

var startScreen = document.querySelector("#startScreen");

// Questions 
var questionSect = document.querySelector("#questionSect");
var question = document.querySelector("#question");
var questionNum = 0;
var feedback;
// Question Checker
var check = document.querySelector("#check");

// End Screen
var score = document.querySelector("#endScore");
var initials = document.querySelector("#input");
var endScreen = document.querySelector("#endScreen")

var highScores = [];
var storedHighScores = [];
// Questions
var questions = [
    {
        question: "Inside which HTML element do we put the Java Script?",
        answers: ["A. <js>",
                "B. <scripting>",
                "C. <javascript>",
                "D. <script>"],
        correctAnswer: "D. <script>"
    },
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        answers: ["A. <script href='xxx.js'>",
                "B. <script src= 'xxx.js'>",
                "C. <script name = 'xxx.js'>",
                "D. <script = 'xxx.js'>"],
        correctAnswer: "B. <script src= 'xxx.js'>"
    },
    {
        question: "How do you create a function in JavaScript?",
        answers: ["A. function myFunction()",
                "B. function:myFunction()",
                "C. function = myFunction()",
                "D. function:'myFunction()"],
        correctAnswer: "A. function myFunction()"

    },
    {
        question: "How to write an IF statement in JavaScript?",
        answers: ["A. if i == 5 then",
                "B. if i = 5 then",
                "C. if(i==5)",
                "D. if i =5"],
        correctAnswer: "C. if(i==5)"
    }
];
function start(){
    startScreen.style.display = "none";
    questionSect.style.display = "block";
    timerInterval=setInterval(function(){
        timeLeft--;
        timer.textContent = "Time: " + timeLeft + "s";
        if(timeLeft==0){
            clearInterval(timerInterval);
            final();
        }
    }, 1000);
    displayQuestion(questionNum);
}

function displayQuestion(){

    question.textContent = questions[questionNum].question;
    btnA.textContent = questions[questionNum].answers[0];
    btnB.textContent = questions[questionNum].answers[1];
    btnC.textContent = questions[questionNum].answers[2];
    btnD.textContent = questions[questionNum].answers[3];

    btnA.onclick = function(event){
        checkAnswer(event);
    };
    btnB.onclick = function(event){
        checkAnswer(event);
    };
    btnC.onclick = function(event){
        checkAnswer(event);
    };
    btnD.onclick = function(event){
        checkAnswer(event);
    };
}
function checkAnswer(event){
    feedback = event.target.textContent;
    event.preventDefault();

    check.style.display = "block";
    var p = document.createElement("p");
    check.appendChild(p);

    setTimeout(function(){
        p.style.display = "none";
    }, 1300);

    if(questions[questionNum].correctAnswer == feedback){
        timeLeft +=5;
        p.textContent = "Correct you got 5 more seconds added to your time."
    }else if (questions[questionNum].correctAnswer !== feedback){
        timeLeft -=10;
        p.textContent = "That was incorrect!";
    }
    if ( timeLeft < 0) {
        timeLeft === 0;
    }
    if(questionNum < questions.length-1){
        questionNum++;
    
    }else{
        final();
    }

    setTimeout(displayQuestion, 2000)
    displayQuestion(questionNum);

}
function final(){
    score.textContent = timeLeft;

    endScreen.style.display = "block";
    viewHiS.style.display = "block";
    questionScreen = "none";
    clearInterval(timerInterval);
    getStorage();
}

function saveScore(){
    var user = initials.value.toUpperCase();
    highScores.push({initial: user, score: timeLeft});
    for(var i = 0; i  < highScores.length; i++){
        var list = document.createElement("li");
        list.textContent = highScores[i].initial  + "                  " + highScores[i].score;
        scoreList.appendChild(list);
    }
    localStorage.setItem("highScores", JSON.stringify(highScores));
}

function getStorage(){
    var storedHighScores = JSON.parse(localStorage.getItem("highScores"));
    if(storedHighScores != null){
        highScores = storedHighScores;
    }
    highScores = highScores.sort((a,b) =>{
        if(a.score < b.score) {return 1;}
        else{return -1;}
    });

    for(var i = 0; i < highScores.length; i++){
        var list = document.createElement("li");
        list.textContent = highScores[i].initial + "         " + highScores[i].score
        scoreList.appendChild(list);
    }
}

startButton.addEventListener("click", start)

submitB.addEventListener("click", function(){
    saveScore();
})

retryB.addEventListener("click", function(){
    location.reload();
    return false;
})

viewHiS.addEventListener("click", function(){
    startScreen.style.display = "none";
    viewHiS.style.display = "block";
    document.getElementById("").disabled = true;
    getStorage();
})

clearB.addEventListener("click", function(){
    localStorage.clear();
    highScores.innerHTML = "";
    clearB.innerHTML = "Scores Cleared!";
    setTimeout(function(){
        clearB.textContent = "Cleared High Scores";
    })
}, 1700)