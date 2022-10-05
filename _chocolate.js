const cardArray = [
  {
    name: "!CARD_TITLE1!",
    description: "!CARD_DESCRIPTION1!",
    image: "./Assets/pachoco.png",
  },
  {
    name: "!CARD_TITLE2!",
    description: "!CARD_DESCRIPTION2!",
    image: "./Assets/chockhot.png",
  },
  {
    name: "!CARD_TITLE3!",
    description: "!CARD_TITLE3!",
    image: "./Assets/crocmou.png",
  }
];

const gridCard = document.querySelector(".gridCard");

// We make a loop to insert cards based on array length
for (let i = 0; i < cardArray.length; i++) {
  gridCard.appendChild(document.createElement("div")).classList.add("card");
  const card = document.querySelectorAll(".card");

  //Card picture
  card.appendChild(document.createElement("div")).classList.add("cardPicture");
  const cardPicture = document.querySelector(".cardPicture");
  cardPicture.appendChild(document.createElement("img")).src = cardArray[i].image;

  //Title for card
  card.appendChild(document.createElement("div")).classList.add("cardTitle");
  const cardTitle = document.querySelector(".cardTitle");
  cardTitle.innerText = cardArray[i].name;
}