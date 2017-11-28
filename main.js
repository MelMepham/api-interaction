var proverbContainer = document.getElementById("proverb");
var btn = document.getElementById("myButton");

btn.addEventListener("click", function() {
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://eda-te-reo.herokuapp.com/api/whakatauki");
xhr.onload = function printText() {
  var proverbString = JSON.parse(xhr.responseText);
  proverbHtmlMaori(proverbString['source'], proverbString['translation'])
};
xhr.send();
});

function proverbHtmlMaori (maori, english) {
  var htmlStringMaori = ""
    htmlStringMaori += "<p>" + maori + "</p>" + "<p>" + english + "</p>";
  proverbContainer.innerHTML = htmlStringMaori
}
