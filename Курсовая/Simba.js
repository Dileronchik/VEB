function openImageWindow(src) {
    var image = new Image();
    image.src = src;
    var width = image.width - 1000;
    var height = image.height - 300;
    window.open(src,"Image","width=" + width + ",height=" + height);
  }
  var timerID = 0;
var timerRunning = false;
var charNo = 0;
var charMax = 0;
var textLine = "Сайт учебного заведения программиста - РТУ МИРЭА"; //Текст на кнопке
var urlLine = "https://www.mirea.ru/?ysclid=lalfj4xvr9584120069"; //Адрес перехода после нажатия
function startShow() {
  stopShow();
  showLine();
  timerRunning = true;
}
function stopShow() {
  if (timerRunning) {
    clearTimeout(timerID);
    timerRunning = false;
  }
}
function showLine() {
  charMax = textLine.length;
  if (charNo <= charMax) {
    document.animationbutton.but.value = textLine.substring(0, charNo);
    document.animationbutton.but.style.color = "blue";
    charNo++;
    timerID = setTimeout("showLine()", 100);
  }
  else {
    charNo = 0;
    timerID = setTimeout("showLine()", 3000);
  }
}
function gotoURL() {
  location.href = urlLine;
}