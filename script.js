// how we can acces html element in dom java script ?

// To access HTML elements in JavaScript using the DOM (Document Object Model), you can use various methods and properties provided by the DOM AP

 // let heading = document.getElementById("heading1");
//  console.log(heading.innerHTML="Ahmad");    


//  let heading= document.getElementsById("heading");
//  heading.innerHTML="Usman"
//  console.log(heading.innerHTML); 

// What are the activities that we can perform in DOM?
// Sure! Here are some activities you can perform in the DOM with examples:

// Accessing Elements:
// javascript

// Get an element by its ID
var heading = document.getElementById("heading");

// Get the first element that matches a CSS selector
var paragraph = document.querySelector("p");

// Get all elements with a specific class
var buttons = document.getElementsByClassName("btn");
// Modifying Content:
// javascript

// Change the text content of an element
heading.textContent = "Hello, DOM!";

// Change the HTML content of an element
paragraph.innerHTML = "<strong>This is a bold text.</strong>";
// Manipulating Styles:
// javascript

// Change the color and font-size of an element
heading.style.color = "blue";
heading.style.fontSize = "24px";
// Handling Events:
// javascript

// Add a click event listener to a button
button.addEventListener("click", function() {
    alert("Button clicked!");
});
// Creating and Removing Elements:
// javascript
// Create a new element
var newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph.";

// Add the new element to the DOM
document.body.appendChild(newParagraph);

// Remove an element from the DOM
var elementToRemove = document.getElementById("elementToRemove");
elementToRemove.parentNode.removeChild(elementToRemove);
// Traversing the DOM:
// javascript

// Get the parent element of an element
var parentElement = element.parentNode;

// Get the first child element of an element
var firstChild = element.firstChild;

// Get the next sibling element of an element
var nextSibling = element.nextSibling;
// Manipulating Attributes:
// javascript

// Get the value of an attribute
var imageUrl = image.getAttribute("src");

// Set the value of an attribute
link.setAttribute("href", "https://www.example.com");

// Remove an attribute from an element
button.removeAttribute("disabled");
// Working with Forms:


// Access a form element and get its value
var inputElement = document.getElementById("inputField");
var inputValue = inputElement.value;

// Submit a form programmatically
var formElement = document.getElementById("myForm");
formElement.submit();
// These examples demonstrate some of the common activities you can perform in the DOM using JavaScript. Remember, the DOM offers a wide range of methods and properties, providing great flexibility in manipulating and interacting with HTML elements.

click: Fires when a mouse click occurs on the specified element.
submit: Fires when a form is submitted.
keydown: Fires when a keyboard key is pressed down.
keyup: Fires when a keyboard key is released.
mouseover: Fires when the mouse pointer enters the specified element.
mouseout: Fires when the mouse pointer leaves the specified element.
change: Fires when the value of an input element or select dropdown changes.
focus: Fires when an element receives focus (e.g., when an input field is clicked).
blur: Fires when an element loses focus (e.g., when an input field is clicked outside of).
load: Fires when a page or an element has finished loading.
const button = document.getElementById('my-button');

button.addEventListener('click', function() {
  // Code to execute when the button is clicked
  console.log('Button clicked!');
});


