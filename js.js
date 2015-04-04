var used = [200]; // Array for used numbers
var num = 200; // Variable for random number

function bingo() {
  if (used.length == 100) {
    location.reload();
  }
	while (used.indexOf(num) !== -1) {
    num = getRandomInt(1, 99);
  }
  used[used.length] = num;
  print(num);
  document.getElementById("sfx").play();
	console.log(used.length);
}

// Gets random number
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Puts number on page
function print(text) {
  document.getElementById("num").innerHTML = text;
	document.getElementById("list").innerHTML = document.getElementById("list").innerHTML + "<span>" + text + "</span>, ";
}
