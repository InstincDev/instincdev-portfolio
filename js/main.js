
document.getElementById('about').addEventListener("resize", checkSize)

function checkSize(event){
 
  if(document.getElementById("about").style.width >= '1046px'){
 event.preventDefault();
    document.querySelector(".scroller").classList.toggle('reveal');
  }
}





function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();

/*Navigation Animation */
// inspired by Rotating text codepen by Rachel Smith https://codepen.io/rachsmith/pen/BNKJme

const home = document.getElementById('navHome');
const about = document.getElementById('navAbout');
const service = document.getElementById('navServices');
const projects = document.getElementById('navProjects');
const contact = document.getElementById('navContact');

// Show Home
document.getElementById('showHome').addEventListener('mouseenter',showHome )
document.getElementById('showHome').addEventListener('mouseleave',showHome )

function showHome(){
    home.classList.toggle("hidden")
}

// Show About
document.getElementById('showAbout').addEventListener('mouseenter',showAbout )
document.getElementById('showAbout').addEventListener('mouseleave',showAbout )

function showAbout(){
    about.classList.toggle("hidden")
}

// Show Services
document.getElementById('showServices').addEventListener('mouseenter',showServices )
document.getElementById('showServices').addEventListener('mouseleave',showServices )

function showServices(){
    service.classList.toggle("hidden")
}

// Show Projects
document.getElementById('showProjects').addEventListener('mouseenter',showProjects )
document.getElementById('showProjects').addEventListener('mouseleave',showProjects )

function showProjects(){
    projects.classList.toggle("hidden")
}

// Show Contact
document.getElementById('showContact').addEventListener('mouseenter',showContact )
document.getElementById('showContact').addEventListener('mouseleave',showContact )

function showContact(){
    contact.classList.toggle("hidden")
}

var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }
  
  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }
  
  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
cw[i].className = 'letter out';
  }, i*80);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
nw[i].className = 'letter in';
  }, 340+(i*80));
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }
  
  wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 820);
