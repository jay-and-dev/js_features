//Fonctionnalité 1
let footer = document.querySelector("footer");
let showClique = function() {
  console.log("clique");
};

footer.addEventListener("click",showClique);

//Fonctionnalité 1-bis
i = 0;

let showCliquePlus = function() {
  i++;
  console.log(`clic numéro ${i}`);
};

footer.addEventListener("click", showCliquePlus);

//Fonctionnalité 2
let btnNav = document.getElementsByTagName("button")[0];
let navbarHeader = document.getElementById("navbarHeader");
let close = true;

let toggleMenu = function() {
  if (close) {
    navbarHeader.classList.remove("collapse");
    close = false;
  } else {
    navbarHeader.classList.add("collapse");
    close = true;
  };
};

btnNav.addEventListener("click", toggleMenu);

//Fonctionnalité 3
let firstEditBtn = document.querySelectorAll(".btn-group button")[1];
let firstCard = document.querySelector(".card");
let redText = function() {
  firstCard.style.color = "red";
};

firstEditBtn.addEventListener("click", redText);

//Fonctionnalité 4
let secondEditBtn = document.querySelectorAll(".btn-group button")[3];
let secondCard = document.querySelectorAll(".card")[1];
color = false;
let toggleColor = function() {
  if (color) {
    secondCard.style.color = "";
    color = false;
  } else {
    secondCard.style.color = "green";
    color = true;
  };
};

secondEditBtn.addEventListener("click", toggleColor);

//Fonctionnalité 5
let link = document.getElementsByTagName("link")[0];
let navbar = document.querySelector(".navbar");

linkDisabled = false;
let toggleLink = function() {
  if (linkDisabled) {
    link.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
    linkDisabled = false;
  } else {
    link.href = "";
    linkDisabled = true;
  };
};

navbar.addEventListener("dblclick", toggleLink);

//Fonctionnalité 6
let viewBtn = document.querySelectorAll(".btn-group button");
let allCard = document.querySelectorAll(".card");
let hidden = false;

viewBtn.forEach(function (btn, index) {
  if (index%2 == 0 || index == 0) {
    let content = btn.parentElement.parentElement.previousElementSibling.textContent;
    let toggleHidden = function() {
      if (hidden) {
        btn.parentElement.parentElement.previousElementSibling.textContent = content;
        btn.parentElement.parentElement.parentElement.previousElementSibling.style.width = "100%";
        hidden = false;
      } else {
        btn.parentElement.parentElement.previousElementSibling.textContent = "";
        btn.parentElement.parentElement.parentElement.previousElementSibling.style.width = "20%";
        hidden = true;
      }
    };
    btn.addEventListener("mouseover", toggleHidden);
  };
});

//Fonctionnalité 7
let grayBtn = document.querySelector("body > main > section > div > p > a.btn.btn-secondary.my-2");
let nodeCard = document.querySelector("body > main > div > div > div");
let CardOne = document.querySelector("body > main > div > div > div > div:nth-child(1)");
let lastCard = document.querySelector("body > main > div > div > div > div:nth-child(6)");

let moveCard = function() {
  nodeCard.insertBefore(lastCard, CardOne);  
};

grayBtn.addEventListener("click", moveCard);

//Fonctionnalité 8
let blueBtn = document.querySelector("body > main > section > div > p > a.btn.btn-primary.my-2");

let leftCard = function(e) {
  e.preventDefault();
  lastCard.after(CardOne);
};

blueBtn.addEventListener("click", leftCard);

//Fonctionnalité 9
let jsLogo = document.querySelector("body > header > div.navbar.navbar-dark.bg-dark.box-shadow > div > a");
let body = document.querySelector("body");
let logKey = function(e) {
  switch (e.code) {
    case 'KeyA' :
      body.className = '';
      body.classList.add("col-4");
      break;
    case 'KeyY' :
      body.className = '';
      body.classList.add("offset-md-4");
      body.classList.add("col-4");

      break;
    case 'KeyP' :
      body.className = '';
      body.classList.add("offset-md-8");
      break;
    case 'KeyB' :
      body.className = '';
      break;
    default:
      console.log("Petit coquin");
  }
};

jsLogo.addEventListener("keypress", logKey);