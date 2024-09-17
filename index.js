var numFirkanter = 6;
var colors = [];
var pickedColor;

var firkanter = document.querySelectorAll(".firkant");
var colorDisplay = document.querySelector("#color-display");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var easyButton = document.querySelector(".mode");

init();

function init() {
  colorDisplay.textContent = pickedColor;
  setupFirkanter();
  setupMode();
  reset();
}

resetButton.addEventListener("click", function () {
  reset();
})

function setupFirkanter() {
  for (let i = 0; i < firkanter.length; i++) {
    firkanter[i].style.backgroundColor = colors[i];
    firkanter[i].addEventListener("click", function () {
      var clickedColor = this.style.backgroundColor;
      if (clickedColor == pickedColor) {
        messageDisplay.textContent = "Correct";
        resetButton.textContent = "Play again";
        changeColors(pickedColor);
      } 
      else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try again";
      }
    });
  }
}

function setupMode() {
  for (let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function () {
      for (let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].classList.remove("selected");
      }
      this.classList.add("selected")
      if (this.textContent === "Easy") {
        numFirkanter = 3;
      } 
      else {
        numFirkanter = 6;
      }
      reset();
    });
  }
}

function reset() {
  colors = genRandomColors(numFirkanter);
  pickedColor = chooseColor();
  colorDisplay.textContent = pickedColor;
  h1.style.backgroundColor = "#2c8e99";
  resetButton.textContent = "New colors";
  messageDisplay.textContent = "";
  for (let i = 0; i < firkanter.length; i++) {
    if (colors[i]) {
      firkanter[i].style.display = "block";
      firkanter[i].style.backgroundColor = colors[i];
    }
    else {
      firkanter[i].style.display = "none";
    }
  }
}

function changeColors(color) {
  for (let i = 0; i < firkanter.length; i++) {
    firkanter[i].style.backgroundColor = color;
    h1.style.backgroundColor = color;
  }
}

function chooseColor() {
  var random = Math.floor(Math.random() * colors.length)
  return colors[random];
}

function genRandomColors(num) {
  var arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(makeColor());
  }
  return arr;
}

function makeColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}