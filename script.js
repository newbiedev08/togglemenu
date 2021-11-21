
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);
hamburger.addEventListener(onmouseover,toggleMenu);

function bgColor() {
document.getElementById('textRed').style.backgroundColor = 'red';
document.getElementById('textBlue').style.backgroundColor = 'blue';
document.getElementById('textYellow').style.backgroundColor = 'yellow';
document.getElementById('textGreen').style.backgroundColor = 'green';
document.getElementById('textOrange').style.backgroundColor = 'orange';
document.getElementById('textPurple').style.backgroundColor = 'purple';
}

window.onload = function(){
    var ul = document.getElementById('colors');
    ul.onclick = function(e){
        var evt = e || window.event;
        var target = evt.target || evt.srcElement;
        document.body.style.backgroundColor = target.innerHTML;
    };
};
