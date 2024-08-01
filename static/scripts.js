let rondomNum=Math.trunc(Math.random()*100)+1;
console.log(rondomNum);

let currentScore=10;
let historyHighScore=0;
let guesshistory = [];
let checkbtn=document.querySelector('.checkbtn')
let reset=document.querySelector('.resetbtn');
let msg=document.querySelector('p.statusText')
let userInput=document.querySelector('input');
let currntScore=document.querySelector('.crrntscore');
let resetbtn=document.querySelector('.resetbtn')
let historyHighS=document.querySelector('.highscore')
let guesscompare = 0;

resetbtn.addEventListener('click',function()
{
currentScore=10;
historyHighScore=0;
currntScore.textContent=String(currentScore);
historyHighS.textContent=String(historyHighScore);
msg.textContent='Guess a number';
        msg.style.color='black';
        msg.style.fontSize='medium';
        document.getElementById("questionmark").src = "images/894-8949235_noun-project-question-mark-bubble-icon-1328413-cc.png";
        userInput.style.display = "inline";
        checkbtn.style.display = "inline";
        guesshistory = [];
        
}
)


checkbtn.addEventListener('click',function()
{

    guesshistory.push(userInput.value); 
    console.log(guesshistory);
if(currentScore>0){
    if(Number(userInput.value)===rondomNum){
        msg.textContent='Congrats! you win the game!';
        msg.style.color='green';
        msg.style.fontSize='medium';
        document.getElementById("questionmark").src = "images/you-win-neon-signs-style-text-vector.jpg";
        userInput.style.display = "none";
        checkbtn.style.display = "none";
    if (currentScore>historyHighScore){
        historyHighScore=currentScore;
        historyHighS.textContent=String(historyHighScore);
        }
    }
    else{
       
        if(Number(userInput.value)>rondomNum){
            msg.textContent='Wrong number! too high! try smaller value';
            msg.style.color='yellow';
            msg.style.fontSize='small';
            currentScore=currentScore-1;
            currntScore.textContent=String(currentScore);
            guesscompare = userInput;
            guesshistory.push(userInput.value);
            console.log(guesshistory)
        }
        if(Number(userInput.value)<rondomNum){
            msg.textContent='Wrong number! too low! try a larger value';
            msg.style.color='yellow';
            msg.style.fontSize='small';
            currentScore=currentScore-1;
            currntScore.textContent=String(currentScore);
              

        }
        if(currentScore===0){
            msg.textContent='You lose! Play again!';
            msg.style.color='red';
            msg.style.fontSize='medium';
            userInput.style.display = "none";
            checkbtn.style.display = "none";
            document.getElementById("questionmark").src = "images/OIP.jpeg";

            console.log("lose condition fired");
        }
    }

}

}

)


