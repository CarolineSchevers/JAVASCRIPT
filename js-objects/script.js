// Exercise 1
let aboutMe = {
    "First name": "Caroline",
    "Last name": "Schevers",
    Age: 24,
    Gender: "female",
    "Favorite food": "lasagne",
    "Favorite serie": "The Bridge",
    "Favorte movie": "idk",
};

let infoKeys = Object.keys(aboutMe);
let infoValues = Object.values(aboutMe);


for (i = 0; i < infoKeys.length; i++) {
    document.getElementById('exercise1').innerHTML += '<li>' + infoKeys[i] + ": " + infoValues[i] + '</li>';
}


let btn = document.createElement("BUTTON");
btn.innerHTML = "Show picture";
btn.setAttribute("id", "pictCaroline");
btn.setAttribute("onclick", "picCS()");
document.getElementById("exercise1").appendChild(btn);

function picCS() {
    let photo = document.createElement("IMG");
    photo.setAttribute("align", "right");
    document.getElementById("imageCS").appendChild(photo);
    photo.setAttribute("src", "images/barbabientje.png");
}

// Exercise 2 + 3
function familyMember(fname, lname, age) {
    this["First name"] = fname;
    this["Last name"] = lname;
    this["Age"] = age;
};

let myFather = new familyMember("Danny", "Schevers", 56);
    let dadKeys = Object.keys(myFather);
    let dadValues = Object.values(myFather);

let myMother = new familyMember("Christine", "Berckx", 55);
    let momKeys = Object.keys(myMother);
    let momValues = Object.values(myMother);
let myOldestBrother = new familyMember("Frank", "Schevers", 32);
    let obKeys = Object.keys(myOldestBrother);
    let obValues = Object.values(myOldestBrother);
let myOtherBrother = new familyMember("Christophe", "Schevers", 31);
    let ybKeys = Object.keys(myOtherBrother);
    let ybValues = Object.values(myOtherBrother);
let mySister = new familyMember("Isabelle", "Schevers", 26);
    let sisKeys = Object.keys(mySister);
    let sisValues = Object.values(mySister);

function fillIn(key, value) {
    for (i = 0; i < key.length; i++) {
        document.getElementById('infobox').innerHTML += "<li>" + key[i] + ": " + value[i] + "</li>";
    }
};

function Father() {
    clearFields();
    fillIn(dadKeys, dadValues);
    document.getElementById("imagebox").innerHTML = "<img src='images/barbapapa1.png'>";

    // other way: 
    // let photo = document.createElement("IMG");
    // document.getElementById("imagebox").appendChild(photo);
    // photo.setAttribute("src", "images/barbapapa1.png");
};

function Mother() {
    clearFields();
    fillIn(momKeys, momValues);
    document.getElementById("imagebox").innerHTML = "<img src='images/barbamama.png'>"
};

function bBrother() {
    clearFields();
    fillIn(obKeys, obValues);
    document.getElementById("imagebox").innerHTML = "<img src='images/barbaborre.png'>"
};

function yBrother() {
    clearFields();
    fillIn(ybKeys, ybValues);
    document.getElementById("imagebox").innerHTML = "<img src='images/barbabenno.png'>"
};

function Sister() {
    clearFields();
    fillIn(sisKeys, sisValues);
    document.getElementById("imagebox").innerHTML = "<img src='images/Barbabella.png'>"
};

// Exercise 3
function clearFields() {
    document.getElementById("infobox").innerHTML = "";
    document.getElementById("imagebox").innerHTML= "";
}


