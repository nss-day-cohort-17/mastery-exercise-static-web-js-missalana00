/* Instructions

It is absolutely critical that you read each of these requirements because as a professional
you will be expected to completely understand what you are expected to do.
If you submit code that does not fulfill the requirements, you will be sent to your room with no dinner.

CREATE A TREE FUNCTION that should build a pine tree out of a character in the Chrome dev tools console.

It accepts a single OBJECT as an argument. The object should have TWO KEY/VALUE PAIRS:

1. A key that specifies the height of the pine tree.
The value for the height of the tree should be from USER INPUT in a <input type="text"> field in the DOM.

2. The character to use should be from user input in a <input type="text"> field in the DOM.

Once the user enters in a number, and a character, the user can either then just press the enter key
(as long as the cursor is in one of the input fields), or CLICK A BUTTON that is labeled "Grow your tree" and
the tree should be shown in the console.

This requires you to ADD AN EVENT LISTENER TO THE BUTTON,
as well as ADD AN EVENT LISTENER FOR THE ENTER/RETURN KEY.

If either of the input fields does not have a value in it when the user presses the enter key, or presses
the button, then display an alert stating that both fields must have a value (VALIDATE INFORMATION).

Grow your tree:

Example

Here's what the pine tree should look like when you specify a height of 7, and use the asterisk character.

      *
     ***
    *****
   *******
  *********
 ***********
*************
*/


// Pre-Step 1: Write the HTML that creates the two text fields for
// the user to enter the height and character of their tree.
// Additionally, create a button for the user to click that says, "Grow your tree."


// Step 1: You need variables that reference the height, character, and button elements in the DOM

var userInputHeight = document.getElementById("height");
var userInputChar = document.getElementById("char");
var growButton = document.getElementById("grow");


// Step 2: You need a variable that will serve as a placeholder for
// the information the user will enter into the two fields

var PlaceholderObj;

// Step 3: Create an object constructor
// Best reference at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#Using_a_constructor_function)
// Remember to use a capital initial letter here

// Using a constructor function
// You can create an object with these two steps:

// Define the object type by writing a constructor function.
// To define an object type, create a function for the object type that specifies its name, properties, and methods.

function TreeObject (height, char) {
    this.height = height;
    this.char = char;
}

// Notice the use of "this" to assign values to the object's properties based on the values passed to the function.

// Step 4: Form Validation - Specify the circumstances (using if statements) under which an alert
// will pop up if the user correctly enters
// information into the two fields (and indicate what code will run) and if they do not complete both fields


function growTree () {
    if (userInputHeight.value && userInputChar.value) {
        alert("You've successfully created your tree!")

// Now, you need to create a new object which holds the specific inputs the user entered

PlaceholderObj = new TreeObject(userInputHeight.value, userInputChar.value);

// Next, you need to call the function that will run if the user correctly enters information and pass it
// the newly created "TreeObject" which contains the specific user inputs for height and character.

// For now, call that function createTree:

createTree(TreeObject);

// Indicate what will happen if the user does not complete both fields using an else statement

} else {
    alert("You must enter a value in both fields");
  }

}

// Step 5: Add Event Listeners

// Step 6: Write createTree function that specifies how to create the console tree
