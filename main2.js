var userInputHeight = document.getElementById("height");
var userInputChar = document.getElementById("char");
var growButton = document.getElementById("grow");
var PlaceholderObj = " ";



function getTreeInfo () {
    if (userInputHeight.value && userInputChar.value) {
      alert("You've successfully created your tree!")

      PlaceholderObj = { height: userInputHeight.value, char: userInputChar.value }

      createTree(PlaceholderObj);
    } else {
        alert("You must enter a value in both fields");
    }

}


function createTree (object) {

var output = ' ';  /* Note: You have to declare var before filling it. You also need to give it
an empty string as a place holder. */

for (var i = 0; i < object.height; i++ ) {

   console.log(object.char);
  }
}




growButton.addEventListener("click", getTreeInfo)
