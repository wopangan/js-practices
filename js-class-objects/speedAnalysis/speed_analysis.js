let testTexts = [
    "the quick brown fox jumps over the lazy dog.",
    "JavaScript is a versatile programming language that can be used for frontend, backend and more.",
    "Practice makes perfect, so keep learning to improve your skills."
];

let currentTestText = "";
let startTime, endTime;

function startTest() {
    const randomTestText = Math.floor(Math.random() * testTexts.length);
    currentTestText = testTexts[randomTestText];

    document.getElementById('inputText').value = currentTestText; // set the test text
    document.getElementById('userInput').value = '';
    document.getElementById('userInput').readOnly = false;

    // to reset results and timer
    document.getElementById('output').innerHTML = "";
    startTime = new Date().getTime();

    // Change button text and functionality.
    let button = document.getElementById('btn');
    button.innerHTML = "End Test";
    button.onclick = endTest;
}

// function to end the test and display results when the user finished the text.

function endTest() {
    endTime = new Date().getTime();

    // disable user input
    document.getElementById('userInput').readOnly = true;

    // calculate time elapsed and words per minute (WPM);
    var timeElapsed = (endTime - startTime) / 1000; // in seconds
    var userTypedText = document.getElementById('userInput').value;

    // to split the text using regex to count words correctly
    var typedWords = userTypedText.split(/\s+/).filter(function(word) {return word !== "";}).length;

    var wpm = 0; // default value
    
    if (timeElapsed !== 0 && !isNaN(typedWords)) {
        wpm = Math.round((typedWords / timeElapsed) * 60);
    }

    // display the results
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<h2>Typing Test Results: </h2>" +
    "<p>Words Typed: " + typedWords + "</p>" +
    "<p> Time Elapse: " + timeElapsed + "</p>" +
    "<p> Words Per Minute: " + wpm + "</p>";

    // reset the button
    var button = document.getElementById('btn');
    button.innerHTML = "Restart Test";
    button.onclick = startTest;
}