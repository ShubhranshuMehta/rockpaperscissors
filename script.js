const rock = document.querySelector(".divrock");
const paper = document.querySelector(".divpaper");
const scissors = document.querySelector(".divscissors");
let user = document.querySelector(".user");
let computer = document.querySelector(".computer");
let hm = document.querySelector(".hm");
const roundresult = document.querySelector(".round_result");
const result = document.querySelector(".result");

// ====================================================


let computerscore = 0;
let userscore = 0;

// ====================================================

rock.addEventListener('click', Game);
paper.addEventListener('click', Game);
scissors.addEventListener('click', Game);

// ====================================================

let userimg = document.querySelector(".user_img");
let userplay = document.querySelector(".user_play");

function userPlay(hmm) {
    userimg.src = hmm.firstElementChild.src;
    userplay.textContent = hmm.lastElementChild.textContent;
    return (hmm.lastElementChild.textContent);
}

// ====================================================

let computerimg = document.querySelector(".computer_img");
let computerplay = document.querySelector(".computer_play");
function computerPlay() {
    let computerc = Math.floor(Math.random() * 3);
    if (computerc === 0) {
        computerimg.src = rock.firstElementChild.src;
        computerplay.textContent = rock.lastElementChild.textContent;
        return "rock";
    }
    if (computerc === 1) {
        computerimg.src = paper.firstElementChild.src;
        computerplay.textContent = paper.lastElementChild.textContent;
        return "paper"
    };
    if (computerc === 2) {
        computerimg.src = scissors.firstElementChild.src;
        computerplay.textContent = scissors.lastElementChild.textContent;
        return "scissors"
    };
}

// ====================================================

function round(compchoice, userchoice) {
    if (compchoice == userchoice) {
        computerscore++;
        userscore++;
        roundresult.textContent = "Draw"
        return [userscore, computerscore];
    }
    if (userchoice == "rock") {
        if (compchoice == "paper") { computerscore++; roundresult.textContent = `Lose`; return [userscore, computerscore] }
        if (compchoice == "scissors") { userscore++; roundresult.textContent = `Win`; return [userscore, computerscore] }
    }
    if (userchoice == "paper") {
        if (compchoice == "scissors") { computerscore++; roundresult.textContent = `Lose`; return [userscore, computerscore] }
        if (compchoice == "rock") { userscore++; roundresult.textContent = `Win`; return [userscore, computerscore] }
    }
    if (userchoice == "scissors") {
        if (compchoice == "rock") { computerscore++; roundresult.textContent = `Lose`; return [userscore, computerscore] }
        if (compchoice == "paper") { userscore++; roundresult.textContent = `Win`; return [userscore, computerscore] }
    }
}
let computerchoice;
function Game() {
    if (computerscore <= 4 && userscore <= 4) {
        userchoice = userPlay(this).toLowerCase();
        computerchoice = computerPlay();
        [k, l] = round(computerchoice, userchoice);
        result.textContent = `User-${k}    ${l}-Computer`
    }
    else if (computerscore == 5 || userscore == 5) {
        var playagain = document.createElement('button');
        hm.appendChild(playagain)
        computerscore = 6;
        userscore = 6;
        playagain.addEventListener('click', () => {
            computerscore = 0;
            userscore = 0;
            result.textContent = `User-0    0-Computer`
            hm.removeChild(playagain)
        })
    }
}