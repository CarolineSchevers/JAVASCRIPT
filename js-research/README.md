# JavaScript Events (Xandra, Ben D. & Caroline)

Events are actions or occurrences that happen in the system you are programming, which the system tells you about so you can respond to them in some way if desired. 

The system will fire a signal of some kind when an event occurs, and also provide a mechanism by which some kind of action can be automatically taken (e.g. some code running) when the event occurs.

For example, if the user clicks a button on a webpage, you might want to respond to that action by displaying an information box.

In the case of the Web, events are fired inside the browser window, and tend to be attached to a specific item that resides in it — this might be a single element, set of elements, the HTML document loaded in the current tab, or the entire browser window. There are a lot of different types of events that can occur, for example:

  * The user clicking the mouse over a certain element or hovering the cursor over a certain element.  
  * The user pressing a key on the keyboard.  
  * The user resizing or closing the browser window.  
  * A web page finishing loading.  
  * A form being submitted.  
  * A video being played, or paused, or finishing play.  
  * An error occurring.

Each available event has an event handler, which is a block of code (usually a user-defined JavaScript function) that will be run when the event fires. When such a block of code is defined to be run in response to an event firing, we say we are registering an event handler. Note that event handlers are sometimes called event listeners — they are pretty much interchangeable for our purposes, although strictly speaking, they work together. The listener listens out for the event happening, and the handler is the code that is run in response to it happening.

## Bubbling & capturing
There are two ways of event propagation in the HTML DOM, bubbling and capturing.
Event propagation is a way of defining the element order when an event occurs. So for example if you have a `<p>` element inside of a `<div>` element, and the user clicks on the `<p>` element, which element's "click" event should be handled first? Since you’re technically clicking on the `<div>` element as well.

### bubbling
In *bubbling* the innermost element's event is handled first and then the outer: meaning the `<p>` element's click event is handled first, then the `<div>` element's click event.

### capturing
In *capturing* the outermost element's event is handled first and then the inner: meaning the `<div>` element's click event will be handled first, then the `<p>` element's click event.

By default the bubbling propagation will be used. 

## Events
*On this account a HTML/JavaScript-file has been added so you can practice with the different types of event listeners: [HTML/Javascript-file](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/events/random-color-eventhandlerproperty.html )*

### onclick
The onclick event occurs when the user clicks on an element.

### onfocus
The changes will be made when the element is focused (try pressing tab to tab on to the button).

### onblur
The onblur event occurs when an object loses focus.
The onblur event is the opposite of the onfocus event.

### ondblclick
The ondblclick event occurs when the user double-clicks on an element.

### onkeydown/onkeypress/onkeyup
**!** Note that it doesn't work if you try to register this event handler on the button itself.

The order of events related to the onkey… :
  1. onkeydown
  2. onkeypress
  3. onkeyup
#### onkeydown
The onkeydown event occurs when the user is pressing a key (on the keyboard).

#### onkeypress
The onkeypress event occurs when the user presses a key (on the keyboard).

Keypress refers to a general press (button down and then up), while keydown and keyup refer to just the key down and key up parts of the keystroke, respectively.

#### onkeyup
The onkeyup event occurs when the user releases a key (on the keyboard).

### oncopy
The oncopy event occurs when the user copies the content of an element.

### onchange
The onchange event occurs when the value of an element has been changed.  
For radiobuttons and checkboxes, the onchange event occurs when the checked state has been changed.  
This event is similar to the oninput event. The difference is that the oninput event occurs immediately after the value of  
an element has changed, while onchange occurs when the element loses focus, after the content has been changed. The other difference is that the onchange event also works on `<select>` elements.
  
  
  
  
### ondrag  
The ondrag event occurs when an element or text selection is being dragged.  
  
### onsubmit  
The onsubmit event occurs when a form is submitted.  

### onmouse... events  
The order of events related to the onmouse... events (for the left/middle mouse button):  

  1. onmousedown  
  2. onmouseup  
  3. onclick

The order of events related to the onmouse... events (for the right mouse button):

  1. onmousedown  
  2. onmouseup  
  3. oncontextmenu

#### onmousedown
The onmousedown event occurs when a user presses a mouse button over an element.

#### onmouseup
The onmouseup event occurs when a user releases a mouse button over an element.

#### onmouseover
The onmouseover event occurs when the mouse pointer is moved onto an element, or onto one of its children.

**Tip**: This event is often used together with the onmouseout event, which occurs when a user moves the mouse pointer out of an element.

#### onmouseout
The onmouseout event occurs when the mouse pointer is moved out of an element, or out of one of its children.

### oncontextmenu
The oncontextmenu event occurs when the user right-clicks on an element to open the context menu.

! Although the oncontextmenu event is supported in all browsers, the contextmenu attribute is currently only supported in Firefox.

### onload
The onload event occurs when an object has been loaded.

*onload* is most often used within the <body> element to execute a script once a web page has completely loaded all content (including images, script files, CSS files, etc.).

The onload event can be used to check the visitor's browser type and browser version, and load the proper version of the web page based on the information.

The onload event can also be used to deal with cookies.

### onloadeddata
The onloadeddata event occurs when data for the current frame is loaded, but not enough data to play next frame of the specified audio/video.
During the loading process of an audio/video, the following events occur, in this order:
  1. onloadstart  
  2. ondurationchange  
  3. onloadedmetadata  
  4. onloadeddata  
  5. onprogress  
  6. oncanplay  
  7. oncanplaythrough
### keyCode
The keyCode property returns the Unicode character code of the key that triggered the onkeypress event, or the Unicode key code of the key that triggered the onkeydown or onkeyup event.
The difference between the two code types:
* Character codes - A number which represents an ASCII character  
* Key codes - A number which represents an actual key on the keyboard
These types do not always mean the same thing; for example, a lower case "w" and an upper case "W" have the same keyboard code, because the key that is pressed on the keyboard is the same (just "W" = the number "87"), but a different character code because the resulting character is different (either "w" or "W", which is "119" or "87").
**Tip:** To find out if the user is pressing a printable key (e.g. "a" or "5"), it is recommended to use this property on the onkeypress event. To find out if the user is pressing a function key (e.g. "F1", "CAPS LOCK" or "Home") use the onkeydown or onkeyup event.

**Note:** In Firefox, the keyCode property does not work on the onkeypress event (will only return 0). For a cross-browser solution, use the which property together with keyCode
	 	 	 	
**!** Note: The keyCode property does not work on the onkeypress event for non-printable, function keys (like CAPS LOCK, CTRL, ESC, F12, etc.).
```html
<html>  
<body>
<p>Press any key on the keyboard in the input field to get the Unicode character code and the Unicode key code of the pressed key.</p>  
<input type="text" size="50" onkeypress="uniCharCode(event)" onkeydown="uniKeyCode(event)"> 
<p>onkeypress - <span id="demo"></span></p>  
<!-- Result: onkeypress - The Unicode Character code is: 114  
but when using shift + a the Character code is the same as the Unicode Character  
because shift + a = A and the letters on the keyboard are uppercase (= key) -->  
<p>onkeydown - <span id="demo2"></span></p>  
<!-- Result: onkeypress - The Unicode Character code is: 82 -->
<script>  
function uniCharCode(event) {  
	var char = event.which || event.keyCode;  
	document.getElementById("demo").innerHTML = "The Unicode CHARACTER code is: " + char;  
}
function uniKeyCode(event) {  
	var key = event.keyCode;  
  	document.getElementById("demo2").innerHTML = "The Unicode KEY code is: " + key;  
}  
</script>  
</body>  
</html>
```
[A list containing more of the possibilities, most with a short description of the event](https://developer.mozilla.org/en-US/docs/Web/Events)

## Coding examples

### Adding an onclick event
There are multiple ways to add eventListeners to HTML elements:
A first method:
Both the eventListener and function are written directly inside of the HTML-file:
```html
<html>
<body>  
<button onclick="document.getElementById('demo').innerHTML=Date()">The time is?</button>  
<p id="demo"></p>  
</body>
</html>
```
A second method:
The function itself is written in a separate script(-file), however the eventListener is still added to the HTML-file.   
```html
<html>
<body>  
<p>Click the button to display the date.</p>  
<button onclick="displayDate()">The time is?</button>  
<script>  
function displayDate() {  
document.getElementById("demo").innerHTML = Date();  
}  
</script>  
<p id="demo"></p>  
</body>
</html>
```
A third method:

The eventListener is add through JavaScript and the function is also written inside the separate JavaScript-file.
Example part of the HTML:
```html
<!--The button element that will be “listened” to for a ‘click’ event-->
<button id="btn">Click me</button>

<!--The targeted div element of which the EventHandler will change the innerHTM-->
<div id="demo">This text will be replaced</div>
```
Example JavaScript:
```javascript
/*Targeting the button element in the HTML to be “listened” for ‘click’ events and
saying that myFucntion has to be executed when a click occurs (note that there are no ()
present behind myFunction in the addEventListener. Because adding () would ask to return
the result of the function and not to execute the function */
document.getElementById("btn").addEventListener("click", myFunction);

/* Creating a short function that can be executed, to replace the innerHTML of the targeted
HTML element (in this example the text "This text will be replaced" of the div with id =
“demo”)
This function is the EventHandler in this example, since it HANDLES what happens after
the click EVENT occurs*/
function myFunction() {
  document.getElementById("demo").innerHTML = "I am the replacement text"
};
```

# Sources:
  * [Tutorialpoint](https://www.tutorialspoint.com/javascript/javascript_events)  
  * [w3schools](https://www.w3schools.com/js/js_events.asp)  
  * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events  
