// Play-button, when clicked on the function playGame will be called.
let play = document.getElementById("play");
play.addEventListener("click", playGame);

// Dropdown, when the value changes the function changeGame will be called.
let players = document.getElementById("players");
players.addEventListener("change", changeGame);

// Dropdown, list of optionvalues that the player can select.
let p1choice = document.getElementById("p1choice");
let p2choice = document.getElementById("p2choice");

// Score at the beginning of the game.
let p1score = 0;
let p2score = 0;

// Array with the options that can be selected.
let choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];

for (choice of choices) {
    let element = document.createElement("option");
    element.value = choice;
    element.innerHTML = choice;
    p1choice.append(element);
}
for (choice of choices) {
    let element = document.createElement("option");
    element.value = choice;
    element.innerHTML = choice;
    p2choice.append(element);
}

function playGame(event){
    let p1value = p1choice.value;
    let p2value;
    
    // When player 2 is not disabled, player 2 can make a choice (= p2value)
    if (p2choice.disabled === false) {
        p2value = p2choice.value;
    } 
    // When player 2 is disabled, the computer will make a random choice
    else {      
        p2value = choices[Math.floor(Math.random()*choices.length)];
    }
    // p1value and p2value can be used in the function compare
    compare(p1value, p2value);
}

function compare(p1value, p2value) {
    if (p1value === p2value) {
        document.getElementById("result").innerHTML = "Try Again";
    }
    else if (p1value === "Rock") {
        if (p2value === "Scissors") {
            document.getElementById("result").innerHTML = "Player 1 wins!";
            document.getElementById("p1score").innerHTML = ++p1score;
        }
        else if (p2value === "Paper") {
            document.getElementById("result").innerHTML = "Player 2 wins!";
            document.getElementById("p2score").innerHTML = ++p2score;
        }
        else if (p2value === "Lizard") {
            document.getElementById("result").innerHTML = "Player 2 wins!";
            document.getElementById("p2score").innerHTML = ++p2score;
        }
        else {
            document.getElementById("result").innerHTML = "Player 2 wins!";
            document.getElementById("p2score").innerHTML = ++p2score;
        }
    }
    else if (p1value === "Paper") {
        if (p2value === "Rock") {
            document.getElementById("result").innerHTML = "Player 1 wins!";
            document.getElementById("p1score").innerHTML = ++p1score;
        }
        else if (p2value === "Scissors") {
            document.getElementById("result").innerHTML = "Player 2 wins!";
            document.getElementById("p2score").innerHTML = ++p2score;
        }
        else if (p2value === "Lizard") {
            document.getElementById("result").innerHTML = "Player 2 wins!";
            document.getElementById("p2score").innerHTML = ++p2score;
        }
        else {
            document.getElementById("result").innerHTML = "Player 2 wins!";
            document.getElementById("p2score").innerHTML = ++p2score; 
        }
    }
    else if (p1value === "Scissors") {
        if (p2value === "Paper") {
            document.getElementById("result").innerHTML = "Player 1 wins!";
            document.getElementById("p1score").innerHTML = ++p1score;
        }
        else if (p2value === "Lizard") {
            document.getElementById("result").innerHTML = "Player 1 wins!";
            document.getElementById("p1score").innerHTML = ++p1score;
        }
        else if (p2value === "Rock") {
            document.getElementById("result").innerHTML = "Player 2 wins!";
            document.getElementById("p2score").innerHTML = ++p2score;
        }
        else {
            document.getElementById("result").innerHTML = "Player 2 wins!";
            document.getElementById("p2score").innerHTML = ++p2score;
        }
    }
    else if (p1value === "Lizard") {
        if (p2value === "Paper") {
            document.getElementById("result").innerHTML = "Player 1 wins!";
            document.getElementById("p1score").innerHTML = ++p1score;
        }
        else if (p2value === "Scissors") {
            document.getElementById("result").innerHTML = "Player 2 wins!";
            document.getElementById("p2score").innerHTML = ++p2score;
        }
        else if (p2value === "Rock") {
            document.getElementById("result").innerHTML = "Player 2 wins!";
            document.getElementById("p2score").innerHTML = ++p2score;
        }
        else {
            document.getElementById("result").innerHTML = "Player 2 wins!";
            document.getElementById("p2score").innerHTML = ++p2score;
        }
    }
    else if (p1value === "Spock") {
        if (p2value === "Rock") {
            document.getElementById("result").innerHTML = "Player 1 wins!";
            document.getElementById("p1score").innerHTML = ++p1score;

        }
        else if (p2value === "Scissors") {
            document.getElementById("result").innerHTML = "Player 1 wins!";
            document.getElementById("p1score").innerHTML = ++p1score;
        }
        else if (p2value === "Paper") {
            document.getElementById("result").innerHTML = "Player 2 wins!";
            document.getElementById("p2score").innerHTML = ++p2score;
        }
        else {
            document.getElementById("result").innerHTML = "Player 2 wins!";
            document.getElementById("p2score").innerHTML = ++p2score; 
        }
    }
}

/* Als het aantal speler gelijk is aan 1 dan wordt de p2choice inactief.
Als het aantal players niet identiek is aan 1 dan wordt de p2choice niet inactief */
function changeGame(event){
    if (players.value === "1") {
        p2choice.disabled = true;
    } 
    
    else {
        p2choice.disabled = false;
    }
}
