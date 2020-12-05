var userInput = document.querySelector("#input");
var btnTranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#output");

var serverUrl = "https://api.funtranslations.com/translate/ermahgerd.json"

function getTranslationUrl(input) {
    return serverUrl + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("try again later")
}

function clickHandler() {
    var inputText = userInput.value; //taking a value

    //calling server for processing
    fetch(getTranslationUrl(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText; //output
        })
        .catch(errorHandler)
};
btnTranslate.addEventListener("click", clickHandler);