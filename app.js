var btnTranslate = document.querySelector("#btn-translate");
var txtArea = document.querySelector("#txt-area");
var txtOutput = document.querySelector("#output");

// txtOutput.innerText = "manav"; - gives the output

function clickHandler() {
    txtOutput.innerText = "minion lang. " + txtArea.value; //takes input from the textarea and gives output on the screen
};
btnTranslate.addEventListener("click", clickHandler)
