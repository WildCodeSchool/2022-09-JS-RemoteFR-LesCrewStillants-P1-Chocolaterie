//Selecting footer
const footer = document.querySelector("footer");

//Injecting footer with two div and an h3
footer
  .appendChild(document.createElement("div"))
  .classList.add("socialNetworks");
footer
  .appendChild(document.createElement("div"))
  .classList.add("footerDecoration");
footer.appendChild(document.createElement("h3")).classList.add("copyrights");

//selection copyrights and socialNetworks section
const copyrights = document.querySelector(".copyrights");
const socialNetworks = document.querySelector(".socialNetworks");

//Injecting copyrights text
copyrights.innerText = "COPYRIGHTS © CHOCOLAT’INN.BE";

//Creating an Array for social section
const socialNetworksArray = [
  { name: "Facebook", link: "./Assets/facebook.png" },
  { name: "Twitter", link: "./Assets/twitter.png" },
  { name: "Instagram", link: "./Assets/Insta.png" },
];

// We make a loop to insert social pictures based on array length
for (let i = 0; i < socialNetworksArray.length; i++) {
  socialNetworks.appendChild(document.createElement("img")).src =
    socialNetworksArray[i].link;
}
