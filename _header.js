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

// We make a loop to insert link based on array length
for (let i = 0; i < navItems.length; i++) {
  //add a li in ul for each loop with a class name based on the loop
  ul.appendChild(document.createElement("li")).classList.add("li" + (i + 1));
  //select the li based on the loop
  const currentLi = document.querySelector(".li" + (i + 1));
  //add a "a" in current Li of the loop
  currentLi
    .appendChild(document.createElement("a"))
    .classList.add(navItems[i].class);
  //select current a based on the loop
  const currentA = document.querySelector(".menu" + (i + 1));
  // inject current a with an href and innerText from the array navItems
  currentA.href = `${navItems[i].link}`;
  currentA.innerText = `${navItems[i].name}`;
}

//Select menuBurger icon and add make a let variable to know if the menu is shown or hidden
const menuBurger = document.querySelector("#menuBurger");
let menuIndicator = 2;

menuBurger.addEventListener("click", () => {
  console.log("click");
  if (menuIndicator < 2) {
    menuBurger.innerHTML = "&#9776";
    menuBurger.style.paddingLeft = "1rem";
    nav.style.left = "-600px";
    menuIndicator++;
    main.style.filter = "none";
    subHeader.style.filter = "none";
    footer.style.filter = "none";
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
window.addEventListener("scroll", (e) => {
  var currentScrollPos = window.pageYOffset;
  if (window.scrollY > 50 && prevScrollpos < currentScrollPos) {
    menuBurger.innerHTML = "&#9776";
    menuBurger.style.paddingLeft = "1rem";
    nav.style.left = "-600px";
    menuIndicator = 2;
    main.style.filter = "none";
    subHeader.style.filter = "none";
    footer.style.filter = "none";
  }
  prevScrollpos = currentScrollPos;
});

// Event for resize of page
window.addEventListener("resize", () => {
  // if (window.matchMedia("(min-width: 1024px)").matches) {
  menuBurger.innerHTML = "&#9776";
  menuBurger.style.paddingLeft = "1rem";
  nav.style.left = "-600px";
  menuIndicator = 2;
  main.style.filter = "none";
  subHeader.style.filter = "none";
  footer.style.filter = "none";
  // }
});
