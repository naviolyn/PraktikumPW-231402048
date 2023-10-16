var i = 0;
var txt = "Nancy's   ";
var speed = 100;

var z = 0;
var t = "Portofolio";
var spd = 50;

window.onload = function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    
    if (z < t.length) {
        document.getElementById("por").innerHTML += t.charAt(z);
        z++;
        setTimeout(type, spd);
      }
  }
};