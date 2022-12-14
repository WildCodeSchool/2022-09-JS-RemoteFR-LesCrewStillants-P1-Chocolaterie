// Selecting Header and injecting a Menu Burger Icon
// Also selecting main and subHeader for later
const header = document.querySelector("header");
const main = document.querySelector("main");
const subHeader = document.querySelector("#homeSubHeader");
header.innerHTML = `<p id="menuBurger">&#9776</p>`;

// Injecting an empty link into Header and adding a class to it
header.appendChild(document.createElement("a"));
const logo = document.querySelector("a");
logo.classList.add("logo");

// Making an Object for what's needed to be injected in the link and injecting it
const logoInfo = {
  alt: "Chocolat'Inn Logo",
  src: "./Assets/Logo.png",
  link: "./",
};

logo.innerHTML = `<img src="${logoInfo.src}" alt="${logoInfo.alt}" />`;
logo.href = `${logoInfo.link}`;

// inserting a nav into header
header.appendChild(document.createElement("nav"));

// Selecting nav and inject an ul into it
const nav = document.querySelector("nav");
nav.innerHTML = "<ul></ul>";

// Selecting ul and creating array of nav links
const ul = document.querySelector("ul");
const navItems = [
  { name: "La Chocolaterie", link: "./lachocolaterie.html", class: "menu1" },
  { name: "Nos Chocolats", link: "./chocolates.html", class: "menu2" },
  { name: "Nous Trouver", link: "./contact.html", class: "menu3" },
];

const subNavChocolaterie = [
  { name: "- La Chocolaterie", link: "#laChocolaterie", id: "menuSub1" },
  { name: "- Nos Equipiers", link: "#equipiers", id: "menuSub2" },
  { name: "- Nos Fournisseurs", link: "#fournisseurs", id: "menuSub3" },
];

// We make a loop to insert link based on array length
for (let i = 0; i < navItems.length; i++) {
  //add a li in ul for each loop with a class name based on the loop
  ul.appendChild(document.createElement("li")).classList.add("li" + (i + 1));
  //select the li based on the loop
  let currentLi = document.querySelector(".li" + (i + 1));
  //add a "a" in current Li of the loop
  currentLi
    .appendChild(document.createElement("a"))
    .classList.add(navItems[i].class);
  //select current a based on the loop
  const currentA = document.querySelector(".menu" + (i + 1));
  // inject current a with an href and innerText from the array navItems
  currentA.href = `${navItems[i].link}`;
  currentA.innerText = `${navItems[i].name}`;

  if (
    window.location.pathname ===
      "/2022-09-JS-RemoteFR-LesCrewStillants-P1-Chocolaterie/lachocolaterie.html" &&
    i === 0
  ) {
    for (let j = 0; j < subNavChocolaterie.length; j++) {
      ul.appendChild(document.createElement("li")).classList.add(
        "li-sub" + (j + 1)
      );
      currentLi = document.querySelector(".li-sub" + (j + 1));
      currentLi
        .appendChild(document.createElement("a"))
        .setAttribute("id", `${subNavChocolaterie[j].id}`);
      const currentSubLi = document.querySelector(
        `#${subNavChocolaterie[j].id}`
      );
      currentSubLi.href = `${subNavChocolaterie[j].link}`;
      currentSubLi.innerText = `${subNavChocolaterie[j].name}`;
    }
  }
}

//Making a function with parameters for hiding menu, to call it more easily
const hideMenu = () => {
  menuBurger.innerHTML = "&#9776";
  menuBurger.style.paddingLeft = "1rem";
  nav.style.left = "-600px";
  menuIndicator = 2;
  main.style.filter = "none";
  footer.style.filter = "none";

  if (
    window.location.pathname ===
    "/2022-09-JS-RemoteFR-LesCrewStillants-P1-Chocolaterie/"
  ) {
    subHeader.style.filter = "none";
  }
};

//Select menuBurger icon and add make a let variable to know if the menu is shown or hidden
const menuBurger = document.querySelector("#menuBurger");
let menuIndicator = 2;

menuBurger.addEventListener("click", () => {
  if (menuIndicator < 2) {
    hideMenu();
  } else {
    menuBurger.innerHTML = "&#10005;";
    menuBurger.style.paddingLeft = "1.1rem";
    nav.style.left = "0px";
    menuIndicator--;
    main.style.filter = "opacity(25%)";
    subHeader.style.filter = "opacity(25%)";
    footer.style.filter = "opacity(25%)";
  }
});

// Event for having an open menu burger close if we scroll down
let prevScrollpos = window.pageYOffset;

window.addEventListener("scroll", () => {
  let currentScrollPos = window.pageYOffset;
  if (window.scrollY > 50 && prevScrollpos < currentScrollPos) {
    hideMenu();
    header.style.top = "-100px";
  } else {
    header.style.top = "-1px";
  }
  prevScrollpos = currentScrollPos;
});

// Event for closing menu if resize of page
window.addEventListener("resize", () => {
  // if (window.matchMedia("(min-width: 1024px)").matches) {
  hideMenu();
  // }
});

// Event for closing menu if we click outside of the
document.addEventListener("mousedown", (e) => {
  let navOffset = 0;
  let mouseX = 0;
  let mouseY = 0;

  navOffset = nav.offsetWidth;
  mouseX = e.clientX;
  mouseY = e.clientY;

  if (mouseX > navOffset && mouseY > header.offsetHeight) {
    hideMenu();
  }
});

/*Potential preventDefault for links, but complicated to put into place


    const a = document.querySelectorAll("a"); //maybe change document to main or smt
    if (menuIndicator === 2) {
      main.addEventListener("click", (a) => {
        a.preventDefault();
      });
    }

A test dans la function fermante:

function(evt) {return true;}

window.location = this.href;

 $("#submit").unbind('click').click(); 
*/
