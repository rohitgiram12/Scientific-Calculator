let display = document.getElementById("display");

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function clearEntry() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value.replace("^", "**"));
  } catch (e) {
    alert("Invalid Expression");
  }
}

function scientificFunction(func) {
  try {
    let result = eval(`${func}(${display.value})`);
    display.value = result;
  } catch (e) {
    alert("Invalid Function");
  }
}
function clearLastCharacter() {
    display.value = display.value.slice(0, -1); // Remove the last character
  }
  