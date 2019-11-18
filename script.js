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
    console.log("ok");
  } else {
    navbarHeader.classList.add("collapse");
    close = true;
  };
};

btnNav.addEventListener("click", toggleMenu);
//Fonctionnalité 3

//Fonctionnalité 4

//Fonctionnalité 5

//Fonctionnalité 6

//Fonctionnalité 7

//Fonctionnalité 8

//Fonctionnalité 9