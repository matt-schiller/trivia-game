var questions = [
 {
   "question": "Arguably the most famous photographer of all time had the surname 'Adams'. What was his first name?",
   "a": "Hansel",
   "b": "Hans",
   "c": "Ansel",
   "d": "Ansell",
   "answer": "c"
 },
 {
   "question": "In what year was the first DSLR with live preview introduced?",
   "a": "1996",
   "b": "1998",
   "c": "2000",
   "d": "2002",
   "answer": "c"
 },
 {
   "question": "What does the 'R' in DLSR stand for?",
   "a": "reflection",
   "b": "reflex",
   "c": "referential",
   "d": "refraction",
   "answer": "b"
 },
 {
   "question": "When was Snappr founded?",
   "a": "May 2016",
   "b": "June 2016",
   "c": "July 2016",
   "d": "August 2016",
   "answer": "a"
 },
 {
   "question": "When did Kodak go bankrupt?",
   "a": "2009",
   "b": "2010",
   "c": "2011",
   "d": "2012",
   "answer": "d"
 },
 {
   "question": "Who was the first British monarch to be photographed?",
   "a": "William IV",
   "b": "Victoria",
   "c": "Edward VII",
   "d": "George V",
   "answer": "b"
 }
]

//Start with all panels hidden
$("#timer-panel").hide();
$("#question-panel").hide();
$("#results").hide();

//Set starting parameters
function start() {
	console.log("started");
	currentQuestion = -1;
	totalQuestions = questions.length;
	correct = 0;
	incorrect = 0;
	unanswered = 0;
	timeLeft = 30;
	//Hides and shows elements as necessary
	$("#start").hide();
	$("#results").hide();
	$("#timer-panel").show();
	$("#question-panel").show();
	//Load the first question
	newQuestion();
};

//
$("#start").click(start);

var timer = setInterval(function() { startTimer() },1000);

function startTimer () {
	if(timeLeft == 0) {
		unanswered++;
		newQuestion ();
		stopTimer();
	} else {
		timeLeft--;
		$("#timer").html(timeLeft);
	};
};

function stopTimer () {
    clearInterval(timer);
}

function newQuestion () {
	//Advance one question forward
	currentQuestion++;
	//Check if questions remaining
	if(currentQuestion < totalQuestions) {
		//Reset timer
		timeLeft = 30;
		//Load in new question
		$("#question").html(questions[currentQuestion].question);
		$("#a").html("A. " + questions[currentQuestion].a);
		$("#b").html("B. " + questions[currentQuestion].b);
		$("#c").html("C. " + questions[currentQuestion].c);
		$("#d").html("D. " + questions[currentQuestion].d);
		//Start the timer again
		startTimer();
	//End game if no questions remaining
	} else {
		endGame();
	};
};


//End game routine
function endGame () {
	$("#correct").html("You got " + correct + " answers correct (" + Math.round(correct/totalQuestions*100) + "%)");
	$("#incorrect").html("You got " + incorrect + " answers incorrect (" + Math.round(incorrect/totalQuestions*100) + "%)");
	$("#unanswered").html("You didn't answer " + unanswered + " questions (" + Math.round(unanswered/totalQuestions*100) + "%)");
	$("#timer-panel").hide();
	$("#question-panel").hide();
	$("#results").show();
	$("#start").show();
	};

//When answer clicked routine
$(".option").click(function() {
	//Check if answer correct
	if($(this).attr('id') == questions[currentQuestion].answer) {
		correct++;
		alert("Correct!");
		newQuestion();
	//If the answer is not correct
	} else {
		incorrect++;
		alert("Nooooo!");
		newQuestion();
	};
});