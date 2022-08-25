const keys = [1, 4, 5];

console.log(keys);

const button1 = document.getElementById("buttonTest");

var textAfterClick = document.getElementById("textAfterClick");

var hiddenText = textAfterClick.innerHTML;

hiddenText = "SURPRISE";

// click function to dispay innerhtml if button is clicked

function displayText() {
  textAfterClick.innerHTML = "SURPRISE";
  button1.style.color = "orange";
}
