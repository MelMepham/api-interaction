document.addEventListener('DOMContentLoaded', start)

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://eda-te-reo.herokuapp.com/api/whakatauki", false);
xhr.send();

start() {
  proverb()
}

function proverb () {
  var pro = document.getElementById('proverb')

  console.log(xhr.dataFilter[1])
}

function newProverb(){

}
