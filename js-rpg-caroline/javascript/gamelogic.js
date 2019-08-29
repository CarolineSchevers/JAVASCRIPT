import Person from "./character.js";

// Variables to make and show player
let P1;
let P2;
let username1;
let username2;
let race1;
let race2;
let item1;
let item2;

// Create player 1
function createP1() {
    // Fill in username in play div
    document.getElementById('nameP1').innerHTML = "Player 1";
    if (username1 = document.getElementById('username1').value) {
        document.getElementById('nameP1').innerHTML = username1
    }
    // Get race
    var races1 = document.getElementsByName('race1');
    for (var i = 0, length = races1.length; i < length; i++) {
        if (races1[i].checked) {
            race1 = races1[i].value;
        }
    }
    // Show chosen race in play div
    showPict1();
    // Get item
    var items1 = document.getElementsByName('item1');
    for (var i = 0, length = items1.length; i < length; i++) {
        if (items1[i].checked) {
            // do whatever you want with the checked radio
            item1 = items1[i].value;
        }
    }
    showItem1();
    P1 = new Person(username1, race1, item1);
    event.preventDefault();
}

// Create player 2
function createP2() {
    // Fill in username in play div
    document.getElementById('nameP2').innerHTML = "Player 2"

    if (username2 = document.getElementById('username2').value) {
        document.getElementById('nameP2').innerHTML = username2
    }
    // Get race
    var races2 = document.getElementsByName('race2');
    for (var i = 0, length = races2.length; i < length; i++) {
        if (races2[i].checked) {
            // do whatever you want with the checked radio
            race2 = races2[i].value;
        }
    }
    // Show chosen race in play div
    showPict2();
    // Get item
    var items2 = document.getElementsByName('item2');
    for (var i = 0, length = items2.length; i < length; i++) {
        if (items2[i].checked) {
            // do whatever you want with the checked radio
            item2 = items2[i].value;
        }
    }
    // Show chosen item in play div
    showItem2();

    P2 = new Person(username2, race2, item2);
    event.preventDefault();

}

// EventListener: Create 
document.getElementById('p1').addEventListener('submit', createP1);
document.getElementById('p2').addEventListener('submit', createP2);

function showPict1() {
    let x = race1;
    switch (x) {
        case 'human':
            document.getElementById('imageP1').src = 'styling/images/human.png';
            break;
        case 'orc':
            document.getElementById('imageP1').src = 'styling/images/orc.png';
            break;
        case 'elf':
            document.getElementById('imageP1').src = 'styling/images/elf.png';
            break;
        case 'vampire':
            document.getElementById('imageP1').src = 'styling/images/vampire.png';
            break;
        default:
            document.getElementById('imageP1').src = ""
    }
};

function showPict2() {
    let x = race2;
    switch (x) {
        case 'human':
            document.getElementById('imageP2').src = 'styling/images/human.png'
            break;
        case 'orc':
            document.getElementById('imageP2').src = 'styling/images/orc.png'
            break;
        case 'elf':
            document.getElementById('imageP2').src = 'styling/images/elf.png'
            break;
        case 'vampire':
            document.getElementById('imageP2').src = 'styling/images/vampire.png'
            break;
        default:
            document.getElementById('imageP2').src = ""
    }
};

function showItem1() {
    let x = item1;
    switch (x) {
        case 'boots':
            document.getElementById('itemP1').src = 'styling/images/boots.png';
            break;
        case 'staff':
            document.getElementById('itemP1').src = 'styling/images/staff.png';
            break;
        case 'sword':
            document.getElementById('itemP1').src = 'styling/images/sword.png';
            break;
        case 'bow':
            document.getElementById('itemP1').src = 'styling/images/bow.png';
            break;
        default:
            document.getElementById('itemP1').src = "";
    }
};

function showItem2() {
    let x = item2;
    switch (x) {
        case 'boots':
            document.getElementById('itemP2').src = 'styling/images/boots.png';
            break;
        case 'staff':
            document.getElementById('itemP2').src = 'styling/images/staff.png';
            break;
        case 'sword':
            document.getElementById('itemP2').src = 'styling/images/sword.png';
            break;
        case 'bow':
            document.getElementById('itemP2').src = 'styling/images/bow.png';
            break;
        default:
            document.getElementById('itemP2').src = "";
    }
};

console.log(P1)
console.log(P2)

// Hide create-screen so we can play the game
document.getElementById('startBtn').addEventListener('click', hideCreate);

function hideCreate() {
    var x = document.getElementById("create");
    var y = document.getElementById("battle");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
    } else {
        x.style.display = "none";
        y.style.display = "block";
    }
};

// Variables for the game
let player1 = {
    currenthealth: 100,
    maxHealth: 100,
    min: 3,
    maxDamage: 20,
    maxHealing: 30
};

let player2 = {
    currenthealth: 100,
    maxHealth: 100,
    min: 3,
    maxDamage: 20,
    maxHealing: 30
};

let hitButtonP1 = document.getElementById('hitP1');
let hitButtonP2 = document.getElementById('hitP2');
let healButtonP1 = document.getElementById('healP1');
let healButtonP2 = document.getElementById('healP2');
let yieldButtonP1 = document.getElementById('yieldP1');
let yieldButtonP2 = document.getElementById('yieldP2');
let gameMessage = document.getElementById('log');
let turnP1 = true;
let turnP2 = false;

// HIT
hitButtonP1.addEventListener('click', function(){
    hitP1();
    turnP1 = false;
    turnP2 = true;
    nextTurn();
    printToScreen();
});

hitButtonP2.addEventListener('click', function(){
    hitP2();
    turnP2 = false;
    turnP1 = true;
    nextTurn();
    printToScreen();
});

function hitP1() {
        let player1Hit = determineHit(player1.damage);
        player2.currenthealth -= player1Hit;
        printToScreen();

        if (isGamerOver(player2.currenthealth)) {
            endGame();
            document.getElementById("winner").innerHTML = username1 + " wins!";
            if (username1 = "undefined") {
                document.getElementById("winner").innerHTML = "Player 1 wins!"
            return;
            };
        };
        nextTurn()
        gameMessage.innerHTML =  username1 + " dealt " + player1Hit + " damage to " + username2 + "." + "<br>" + username2 + " is about to strike!";
        console.log(player1Hit)
    };

function hitP2() {
        let player2Hit = determineHit(player2.damage);
        player1.currenthealth -= player2Hit;
        printToScreen();

        if (isGamerOver(player1.currenthealth)) {
            endGame();
            document.getElementById("winner").innerHTML = username2 + " wins!"
            if (username2 = "undefined") {
                document.getElementById("winner").innerHTML = "Player 2 wins!"
            }
            return;
        };
        nextTurn()
        gameMessage.innerHTML = username2 + " dealt " + player2Hit + " damage to " + username1 + "." + "<br>" + username1 + " is about to strike!";
        console.log(player2Hit)
    };

// Determine the amount of damage
function determineHit(damage) {
    let min = 3
    let maxDamage = 20;
    return Math.floor((Math.random() * maxDamage) + min);
};

// HEAL
healButtonP1.addEventListener('click', function(){
    healP1();
    turnP1 = false;
    turnP2 = true;
    nextTurn();
    printToScreen();
});

healButtonP2.addEventListener('click', function(){
    healP2();
    turnP2 = false;
    turnP1 = true;
    nextTurn();
    printToScreen();
});

function healP1() {
    let player1Heal = determineHeal(player1.remedy);
    player1.currenthealth += player1Heal;
    printToScreen();

    nextTurn()
    gameMessage.innerHTML = "The health of " + username1 + " has increased by " + player1Heal;
};

function healP2() {
    let player2Heal = determineHeal(player2.remedy);
    player2.currenthealth += player2Heal;
    printToScreen();

    nextTurn()
    gameMessage.innerHTML = "The health of " + username2 + " has increased by " + player2Heal;
};

// Determine the amount of healing
function determineHeal(remedy) {
    let min = 3;
    let maxHealing = 30;
    return Math.floor((Math.random() * maxHealing) + min);  
    };
 
// YIELD
document.getElementById('yieldP1').addEventListener('click', surrenderP1);
document.getElementById('yieldP2').addEventListener('click', surrenderP2);

function surrenderP1() {
    document.getElementById('yieldP1').onclick = function () {
        endGame();
        document.getElementById("winner").innerHTML = username1 + " gives up the fight. " + "<br>" + username2 + " wins!"
        if (username1 = "undefined") {
            document.getElementById("winner").innerHTML = "Player 2 wins!"
        };
    };
};
function surrenderP2() {
    document.getElementById('yieldP2').onclick = function () {
        endGame();
        document.getElementById("winner").innerHTML = username2 + " gives up the fight. " + "<br>" + username1 + " wins!"
        if (username2 = "undefined") {
            document.getElementById("winner").innerHTML = "Player 1 wins!"
        };
    };
};


// Determine who is next
function nextTurn() {
    if (turnP1 === true) {
        hitButtonP1.disabled = false;
        healButtonP1.disabled = false;
        yieldButtonP1.disabled = false;
        hitButtonP2.disabled = true;
        healButtonP2.disabled = true;
        yieldButtonP2.disabled = true;
    } else if (turnP2 === true) {
        hitButtonP2.disabled = false;
        healButtonP2.disabled = false;
        yieldButtonP2.disabled = false;
        hitButtonP1.disabled = true;
        healButtonP1.disabled = true;
        yieldButtonP1.disabled = true;
    } else {}
};

// Check if the game isn't over by checking the currenthealth
function isGamerOver(currenthealth) {
    return currenthealth < 1;
};

// Hide battle-screen and show victory-screen
function endGame() {
    var y = document.getElementById("battle");
    var z = document.getElementById("victory");
    if (y.style.display === "none") {
        y.style.display = "block";
        z.style.display = "none";
    } else {
        y.style.display = "none";
        z.style.display = "block";
    };
};

//Start new game
document.getElementById('newgame-button').addEventListener('click', newGame);

function newGame() {
    var x = document.getElementById("create");
    var z = document.getElementById("victory");
    if (z.style.display === "none") {
        z.style.display = "block";
        x.style.display = "none";
    } else {
        z.style.display = "none";
        x.style.display = "block";
    }
    player1.currenthealth = 100;
    player2.currenthealth = 100; 
    printToScreen();  
};

// Show the currentHealth
function printToScreen (){
    document.getElementById('player1-health').innerHTML = player1.currenthealth + " / " + player1.maxHealth;
    document.getElementById('lifeP1').value = player1.currenthealth;
    document.getElementById('player2-health').innerHTML = player2.currenthealth + " / " + player2.maxHealth;
    document.getElementById('lifeP2').value = player2.currenthealth;
};