Result: [js-loops](https://carolineschevers.github.io/JAVASCRIPT/js-loops/)

# Challenge: Looooops

|Challenge Parameters  |Challenge Details              |
|:---------------------|:------------------------------|
|Repository            |`js-loops`                     |
|Challenge type        |`learning challenge`           |
|Duration              |`1 day`                        |
|Deadline              |`11/07/2019 8h59`              |
|Deployment method     |`GitHub pages`                 |
|Group composition     |`N/A`                          |

## Warm up

Take your time and do some research on the keywords below. Put all of them to practical use!

## Keywords

Here you'll find some keywords to help you on your search!

* Loops
* For
* While

## Exercise

We are going to make a playing field (similar to chess)! The basic setup you can find in [this](./index.html) HTML file. An example you can find [here](./example.png).

1. Read the code and make sure you understand it. Write comments wherever necessary.
1. Add some `console.log`'s in the code and see what certain variables contain. Play around with it a little bit!
1. Write the code necessary to complete the exercise (Use the CSS already provided). 
    * To start off, we are going to generate a 100 squares.
    * Those squares should be given an alternating colorscheme (black-white-black-white-...)
    * Every square needs to contain it's own number. (1, 2, 3, 4, ...).
1. Style your page to make it look a bit more appealing!

**Bonus**
* Add the `makeRandom` functionality.
* Make the field look more like a chessboard. Add an indicator row on top and on the side (numbers and letters).
* Make the squares contain their coördinate instead of their number.

## Useful JS functions

```Javascript
    //Looks through my HTML document, and stores the HTML tag with id "field" in my variable.
    let field = document.getElementById("field");

    //Creates a div tag and stores it in the variable "square".
    let square = document.createElement("div");

    //Adds the class "flex-center" to the div we stored in the variable square.
    square.classList.add("flex-center");

    //Adds the HTML we have stored in the variable "square" to our field.
    field.append(square)
```


## Goals

- [ ] Understand the different comparison operators.
- [ ] Understand the different logical operators.
- [ ] Understand the structure of a for loop.
- [ ] Understand the structure of a while loop. 

