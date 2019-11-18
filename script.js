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
console.log(navbar);
navbar.addEventListener("dblclick", toggleLink);

//Fonctionnalité 6

//Fonctionnalité 7

//Fonctionnalité 8

//Fonctionnalité 9