function computerPlay() {
    let computer = Math.floor(Math.random() * 3);
    if (computer === 0) return "rock";
    if (computer === 1) return "paper";
    if (computer === 2) return "scissors";
}

let computerscore = 0;
let userscore = 0;

function round(compchoice, userchoice) {
    if (compchoice == userchoice) {
        computerscore++;
        userscore++;
        return "Draw";
    }
    if (userchoice == "rock") {
        if (compchoice == "paper") { computerscore++; return `You Lose! ${compchoice} beats ${userchoice}` }
        if (compchoice == "scissors") { userscore++; return `You Win! ${userchoice} beats ${compchoice}` }
    }
    if (userchoice == "paper") {
        if (compchoice == "scissors") { computerscore++; return `You Lose! ${compchoice} beats ${userchoice}` }
        if (compchoice == "rock") { userscore++; return `You Win! ${userchoice} beats ${compchoice}` }
    }
    if (userchoice == "scissors") {
        if (compchoice == "rock") { computerscore++; return `You Lose! ${compchoice} beats ${userchoice}` }
        if (compchoice == "paper") { userscore++; return `You Win! ${userchoice} beats ${compchoice}` }
    }
}
let computerchoice;
function Game() {
    for (let i = 1; i <= 5; i++) {
        userchoice = prompt("Rock Paper or Scissors").toLowerCase();
        computerchoice = computerPlay();
        console.log(round(computerchoice, userchoice));
    }
    console.log(`computer-${computerscore} user-${userscore}`);
}
Game();