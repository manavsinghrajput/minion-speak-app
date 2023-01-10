var btnTranslate = document.querySelector("#btn-translate");
var txtArea = document.querySelector("#txt-area");
var txtOutput = document.querySelector("#output");

var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function getUrl(input) {
    return url + "?" + "text=" + input;
}

function clickHandler() {
    // txtOutput.innerText = "minion lang. " + txtArea.value; //takes input from the textarea and gives output on the screen
    var txtInput = txtArea.value;
    fetch(getUrl(txtInput))
        .then(response => response.json())
        .then(json => {
            var translatedTxt = json.contents.translated;
            txtOutput.innerText = translatedTxt;
        })
};
btnTranslate.addEventListener("click", clickHandler)
