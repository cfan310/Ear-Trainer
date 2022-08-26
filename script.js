const keys = [1, 4, 5];

console.log(keys);

const button1 = document.getElementById("buttonTest");

var textAfterClick = document.getElementById("textAfterClick");

var hiddenButton = document.getElementById("hiddenButton");

//var hiddenText = textAfterClick.innerHTML;

// click function to dispay innerhtml if button is clicked

function displayText() {
  textAfterClick.style.display = "block";
  hiddenButton.style.display = "block";
  button1.style.color = "orange";
}

function hideText() {
  textAfterClick.style.display = "none";
  hiddenButton.style.display = "none";
}

hiddenButton.addEventListener("click", hideText);

// build single octave keyboard with css

// add basic button functionality

// import sound files and sync

// expand...
