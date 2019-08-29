/* 
Write your script here!
Note: it is advised to work on this in small steps!
    1. When you click a button, make your code log something to the console.
        This way you can see if your event listener is linked properly!
    2. When you click a button, make the number/operation appear in the calc-preview div.
    3. ......
*/

// Made a function so I can use a variable
function fillIn(btnNumber) {
    if (document.getElementById("calc-preview").innerHTML === "Make a calculation...") {
        document.getElementById("calc-preview").innerHTML = btnNumber;
    } else if (document.getElementById("calc-preview").innerHTML.includes("=")) {
        document.getElementById("calc-preview").innerHTML = btnNumber;
    } else {
        document.getElementById("calc-preview").innerHTML += btnNumber;
    }
};

// Make calculation
function giveCalc() {
    let str = document.getElementById("calc-preview").innerHTML;
    let res = str.replace("%", "/100");
    document.getElementById("calc-preview").innerHTML += "<br>" + "= " + eval(res);
};

// Back to the initial status
function reset() {
    document.getElementById("calc-preview").innerHTML = "";
    fillIn("Make a calculation...");
};

// Backspace
function backs() {
if (document.getElementById("calc-preview").innerHTML !== "Make a calculation...") {
    let backsp = document.getElementById("calc-preview").innerHTML;
    document.getElementById("calc-preview").innerHTML = backsp.substring(0, backsp.length - 1);
    if (document.getElementById("calc-preview").innerHTML == "") {
        document.getElementById("calc-preview").innerHTML = "Make a calculation..."
    }
}};

// Fill in the variable for the numbers and the operations
document.getElementById("n1").addEventListener("click", function () {
    fillIn(1);
});

document.getElementById("n2").addEventListener("click", function () {
    fillIn(2);
});

document.getElementById("n3").addEventListener("click", function () {
    fillIn(3);
});

document.getElementById("n4").addEventListener("click", function () {
    fillIn(4);
});

document.getElementById("n5").addEventListener("click", function () {
    fillIn(5);
});

document.getElementById("n6").addEventListener("click", function () {
    fillIn(6);
});

document.getElementById("n7").addEventListener("click", function () {
    fillIn(7);
});

document.getElementById("n8").addEventListener("click", function () {
    fillIn(8);
});

document.getElementById("n9").addEventListener("click", function () {
    fillIn(9);
});

document.getElementById("n0").addEventListener("click", function () {
    fillIn(0);
});

document.getElementById("add").addEventListener("click", function () {
    fillIn("+");
});

document.getElementById("subs").addEventListener("click", function () {
    fillIn("-");
});

document.getElementById("mult").addEventListener("click", function () {
    fillIn("*");
});

document.getElementById("div").addEventListener("click", function () {
    fillIn("/");
});

document.getElementById("perc").addEventListener("click", function () {
    fillIn("%");
});

document.getElementById("calc").addEventListener("click", giveCalc); 

document.getElementById("clear").addEventListener("click", reset);

document.getElementById("backs").addEventListener("click", backs);

//Hover-effect
let buttons = document.getElementsByTagName("button");
let i = 0;

for (i = 0; i < buttons.length; i++) {
    buttons[i].onmouseover = mouseOver;
    buttons[i].onmouseout = mouseOut;
}

function mouseOver() {
    this.classList.add("hovering");
}
    // Other way to notate
        // function mouseOver(e) {
        //     e.target.classList.add("hovering");
        // }

function mouseOut() {
    this.classList.remove("hovering");
}
    // Other way to notate
        // function mouseOut(e) {
        //     e.target.classList.remove("hovering");
        // }

// Combine the keys to the numbers/operators
function myFunction(event) {
    var x = event.key

    if (x == "1") {
        fillIn(1);
    } else if (x == "2") {
        fillIn(2);
    } else if (x == "3") {
        fillIn(3);
    } else if (x == "4") {
        fillIn(4);
    } else if (x == "5") {
        fillIn(5);
    } else if (x == "6") {
        fillIn(6);
    } else if (x == "7") {
        fillIn(7);
    } else if (x == "8") {
        fillIn(8);
    } else if (x == "9") {
        fillIn(9);
    } else if (x == "0") {
        fillIn(0);
    } else if (x == "+") {
        fillIn("+");
    } else if (x == "-") {
        fillIn("-");
    } else if (x == "*") {
        fillIn("*");
    } else if (x == "/") {
        fillIn("/");
    } else if (x == "%") {
        fillIn("%");
    } else if (x == "Enter" || x == "=") {
        giveCalc();
    } else if (x == "c") {
        reset();
    } else if (x == "Backspace") { // 8 is the backspace key
        backs();
    }
}


