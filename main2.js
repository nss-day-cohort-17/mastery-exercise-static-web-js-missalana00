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

var outputTree = ' ';  /* Note: You have to declare var before filling it. You also need to give it
an empty string as a place holder. */

for (var i = 0; i < object.height; i++ ) {
outputTree = " ".repeat(object.height - 1 - i)
outputTree += object.char.repeat(i * 2 + 1)
   console.log(outputTree);
  }
}


growButton.addEventListener("click", getTreeInfo)

userInputHeight.addEventListener("keypress", function(e) {

    if (e.key === "Enter") {
    getTreeInfo();
    }
});

userInputChar.addEventListener("keypress", function(e) {

    if (e.key === "Enter") {
    getTreeInfo();
    }
});
