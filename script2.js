var num;
var stop = true;
var t;
var random = Math.floor(Math.random() * 100);

function change() {
  var random = Math.floor(Math.random() * 100);
  num.innerHTML = random;
}

function stopstart() {
  if (random % 2 == 1 && stop == true) {
    stop = false;
    t = setInterval(change, 100);
  } else {
    clearInterval(t);
    stop = true;
  }
}
window.onload = function () {
  num = document.getElementById("num");
  stopstart();
};
