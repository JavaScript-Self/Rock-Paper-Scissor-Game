let choices = document.querySelectorAll('.choice');
let msg = document.querySelector('#msg')
let userscore = document.querySelector('#user-score')
let compscore = document.querySelector('#comp-score')
let wins = 0;
let looses = 0;
for(let choice of choices){
    choice.addEventListener('click',()=>{
        const userChoice = choice.getAttribute("id");
        playGame(choice.getAttribute("id"));
    })
}
function playGame(userChoice){
    const compChoice = genCompChoice();
    let win =false;
    if(userChoice=="scissors"){
        if(compChoice=="paper")win =true;
    }else if(userChoice == "rock"){
        if(compChoice=="scissors")win=true;
    }else{
        if(compChoice=="rock")win=true;
    }
    showWinner(win,userChoice,compChoice);
}


function showWinner(win, userChoice, compChoice){
    if(userChoice===compChoice)msg.innerText="Draw";
    else if(win){
        msg.innerText = `Won ${userChoice} Beats ${compChoice} `;
        wins++;
    }
    else {
        msg.innerText = `Loose ${compChoice} Beats ${userChoice}`;
        looses++;
    }
    scoreupdate();
}

function scoreupdate(){
    userscore.innerText = wins;
    compscore.innerText = looses;
}

function genCompChoice(){
    let a =["rock","paper","scissors"];
    let result = Math.floor(Math.random()*3);
    return a[result];

}

//10:25

