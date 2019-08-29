// Indicates the field
let field = document.getElementById("field");

// Button calls the function generateField
let standard = document.getElementById("generate");
standard.addEventListener("click", generateField);

// Button calls the function makeRandom
let random = document.getElementById("random");
random.addEventListener("click", makeRandom)

function generateField() {
    // Clear the browser before adding a field
    reset()
    /*
    Write your code here to generate a field as indicated in the image.
    For now you don't need to write any CSS. Any necessary classes are already provided!
    */
   var i;
   var b = false;
    for (i = 1; i < 101; i++) {
        if (b == true) {
        field.innerHTML += "<div class='cell'>" + i + "</div>";
            if (i % 10 !== 0) {
            b = false;
            }
        } 
        else if (b == false) {
        field.innerHTML += "<div class='cell bgblack'>" + i + "</div>";
            if (i % 10 !== 0) {
                b = true;
            }
         }
    }
}

function makeRandom() {
    /* 
    Write your code here to randomize the colors.
    You could do this for example by making some classes in CSS with different color schemes,
    and then asigning a random one to each cell.
    */
   generateField()
   
   var myElements = document.querySelectorAll(".bgblack");

        for (var i = 0; i < myElements.length; i++) {
             myElements[i].style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            console.log(Math.floor(Math.random()*16777215).toString(16));
        }
}

function reset() {
    field.innerHTML = "";
}