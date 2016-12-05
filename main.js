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


// Pre-Step 1: Write the HTML that creates the two text feilds for
// the user to enter the height and character of their tree.
// Additionally, create a button for the user to click that says, "Grow your tree."


// Step 1: You need variables that reference the height, character, and button elements in the DOM



var heightInput = getElementById("height");
var charInput = getElementById("char");
var growButton = getElementById("grow");


// Step 2: You need a variable that will serve as a placeholder for
// the information the user will enter into the two fields

var placeholderObj;

// Step 3:
