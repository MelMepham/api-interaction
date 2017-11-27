document.addEventListener('DOMContentLoaded', start)

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://eda-te-reo.herokuapp.com/api/whakatauki", false);
xhr.send();

start() {
  proverb()
}
//function to show the API
function proverb () {
  document.getElementById('proverb').innerHTML = xhr.

}
// button function
function newProverb(){
  document.getElementById('button').addEventListener('click', cycle);

}

//Function to cycle through the proverbs when the button is pressed
function cycle() {

}
