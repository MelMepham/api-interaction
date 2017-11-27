var proverbContainer = document.getElementById("proverb");
var btn = document.getElementById("myButton");

btn.addEventListener("click", function() {
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://eda-te-reo.herokuapp.com/api/whakatauki");
xhr.onload = function() {
  var proverb = JSON.parse(xhr.responseText);
  proverbHTML(proverb.source);
};
xhr.send();
});
