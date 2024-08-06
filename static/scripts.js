let rondomNum = Math.trunc(Math.random() * 100) + 1;
console.log(rondomNum);

let currentScore = 10;
let historyHighScore = 0;
let guesshistory = [];
let guesscompare = 0;

let checkbtn = document.querySelector('.checkbtn')
let msg = document.querySelector('p.statusText')
let userInput = document.querySelector('input');
let currntScore = document.querySelector('.crrntscore');
let resetbtn = document.querySelector('.resetbtn')
let submitScorebtn = document.getElementById('submitScorebtn')
let historyHighS = document.querySelector('.highscore')



//////////////////
/* Reset Button */
/////////////////
resetbtn.addEventListener('click', function () {
    currentScore = 10;
    historyHighScore = 0;
    currntScore.textContent = String(currentScore);
    historyHighS.textContent = String(historyHighScore);
    msg.textContent = 'Guess a number';
    msg.style.color = 'black';
    msg.style.fontSize = 'medium';
    document.getElementById("questionmark").src = "static/images/894-8949235_noun-project-question-mark-bubble-icon-1328413-cc.png";
    userInput.style.display = "inline";
    checkbtn.style.display = "inline";
    guesshistory = [];

}
)
///////////////////////////////////////////////////
/* Button to see if guess matches random number. */
///////////////////////////////////////////////////
checkbtn.addEventListener('click', function () {

    guesshistory.push(userInput.value);
    console.log(guesshistory);
    if (currentScore > 0) {
        ///////////////////
        /* Win condition */
        //////////////////
        if (Number(userInput.value) === rondomNum) {
            msg.textContent = `Congrats! you win the game! \n
            Now hit the button to submit your info to the winners roster!`;
            msg.style.color = 'green';
            msg.style.fontSize = 'medium';
            document.getElementById("questionmark").src = "static/images/you-win-neon-signs-style-text-vector.jpg";
            userInput.style.display = "none";
            checkbtn.style.display = "none";
            submitScorebtn.style.display = "block";
            if (currentScore > historyHighScore) {
                historyHighScore = currentScore;
                historyHighS.textContent = String(historyHighScore);
            }
        }
        else {
            //////////////////
            //Guess too high//
            /////////////////
            if (Number(userInput.value) > rondomNum) {
                msg.textContent = 'Wrong number! too high! try smaller value';
                msg.style.color = 'yellow';
                msg.style.fontSize = 'small';
                currentScore -= 1;
                currntScore.textContent = String(currentScore);
                guesscompare = userInput;
                guesshistory.push(userInput.value);
                console.log(guesshistory)
            }
            //////////////////
            /* Guess too low */
            //////////////////
            if (Number(userInput.value) < rondomNum) {
                msg.textContent = 'Wrong number! too low! try a larger value';
                msg.style.color = 'yellow';
                msg.style.fontSize = 'small';
                currentScore -= 1;
                currntScore.textContent = String(currentScore);


            }
            //////////////////////
            /*  Lose condition  */
            //////////////////////
            if (currentScore === 0) {
                msg.textContent = 'You lose! Play again!';
                msg.style.color = 'red';
                msg.style.fontSize = 'medium';
                userInput.style.display = "none";
                checkbtn.style.display = "none";
                document.getElementById("questionmark").src = "static/images/OIP.jpeg";

                console.log("lose condition fired");
            }
        }

    }

}

)
