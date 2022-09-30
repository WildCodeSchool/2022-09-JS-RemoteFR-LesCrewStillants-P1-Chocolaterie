// Selecting Header and injecting a logo into it
const header = document.querySelector("header");
header.innerHTML = `<span id="menuBurger">&#9776</span>`;
header.appendChild(document.createElement("img")).src = "./Assets/Logo.png";

// Selecting a logo with a class in case its needed later and inserting a nav into header
const logo = document.querySelector("header img");
logo.classList.add("logo");
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
    nav.style.left = "-600px";
    menuIndicator++;
  } else {
    nav.style.left = "0px";
    menuIndicator--;
  }
});
