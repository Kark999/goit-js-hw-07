const userInput = document.querySelector("#name-input");
const userOutput = document.querySelector("#name-output");
// console.log(userInput);
// console.log(userOutput);

userInput.addEventListener("input", updateText);

function updateText() {
  const inputText = userInput.value.trim();

  if (inputText === "" || inputText === " ") {
    return (userOutput.textContent = "Anonymous");
  } else {
    return (userOutput.textContent = inputText);
  }
}
