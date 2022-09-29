// Selecting Header and injecting a logo into it
const header = document.querySelector("header");
header.innerHTML = "<span>&#9776</span>";
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
  ul.appendChild(document.createElement("li")).classList.add("li" + (i + 1));
  const currentLi = document.querySelector(".li" + (i + 1));
  currentLi
    .appendChild(document.createElement("a"))
    .classList.add(navItems[i].class);
  const currentA = document.querySelector(".menu" + (i + 1));
  currentA.href = `${navItems[i].link}`;
  currentA.innerText = `${navItems[i].name}`;

  console.log(currentLi);
}
