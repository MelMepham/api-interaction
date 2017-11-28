var proverbContainer = document.getElementById("proverb");
var btn = document.getElementById("myButton");

btn.addEventListener("click", function() {
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://eda-te-reo.herokuapp.com/api/whakatauki");
xhr.onload = function printText() {
  var proverbString = JSON.parse(xhr.responseText);
  proverbHtmlMaori(proverbString['source']);
  proverbHtmlEnglish(proverbString['translation']);
};
xhr.send();
});

function proverbHtmlMaori (maori) {
  var htmlStringMaori = ""
    htmlStringMaori += "<p>" + maori + "</p>";
  proverbContainer.insertAdjacentHTML('beforeend', htmlStringMaori)
}

function proverbHtmlEnglish (english) {
  var htmlStringEnglish = ""
    htmlStringEnglish += "<p>" + english + "</p>";
  proverbContainer.insertAdjacentHTML('beforeend', htmlStringEnglish)
}

var buttonCount = document.getElementById('myButton'),
  count = 0;
buttonCount.onclick = function() {
  count ++;
if (count > 1) {
  location.reload();
  proverbHtmlMaori(proverbString['source']);
  proverbHtmlEnglish(proverbString['translation']);
    }
  }
