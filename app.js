var btnTranslate = document.querySelector("#btn-translate");
var txtArea = document.querySelector("#txt-area");

btnTranslate.addEventListener("click", function () {
    console.log("button clicked");
});

txtArea.addEventListener("input", function () {
    console.log("input", txtArea.value);
});