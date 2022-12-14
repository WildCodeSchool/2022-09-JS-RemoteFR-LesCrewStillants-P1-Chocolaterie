const cardArray = [
  {
    name: "Pachoco'",
    description:
      "Ingredients: Chocolate, Sugar, Milk, Cocoa Butter, Soy Lecithin",
    image: "./Assets/pachoco.png",
  },
  {
    name: "Chock'Hot",
    description:
      "Ingredients: Chocolate, Sugar, Milk, Cocoa Butter, Soy Lecithin",
    image: "./Assets/chockhot.png",
  },
  {
    name: "Crocmou",
    description:
      "Ingredients: Chocolate, Sugar, Milk, Cocoa Butter, Soy Lecithin",
    image: "./Assets/crocmou.png",
  },
];

const gridCard = document.querySelector(".gridCard");

// We make a loop to insert cards based on array length
for (let i = 0; i < cardArray.length; i++) {
  gridCard
    .appendChild(document.createElement("div"))
    .classList.add("card", "card" + (i + 1));
  const card = document.querySelector(".card" + (i + 1));

  //
  card
    .appendChild(document.createElement("div"))
    .classList.add("middle", "middle" + (i + 1));
  const cardMiddle = document.querySelector(".middle" + (i + 1));

  //Card picture
  card
    .appendChild(document.createElement("img"))
    .classList.add("cardPicture", "cardPicture" + (i + 1));
  const cardPicture = document.querySelector(".cardPicture" + (i + 1));
  cardPicture.src = cardArray[i].image;

  //Title for card
  card
    .appendChild(document.createElement("div"))
    .classList.add("cardTitle", "cardTitle" + (i + 1));
  const cardTitle = document.querySelector(".cardTitle" + (i + 1));
  cardTitle.innerHTML = cardArray[i].name;

  //Card description
  cardMiddle
    .appendChild(document.createElement("div"))
    .classList.add("cardDescription", "cardDescription" + (i + 1));
  const cardDescription = document.querySelector(".cardDescription" + (i + 1));
  cardDescription.innerHTML = cardArray[i].description;

  //Post card description
  gridCard
    .appendChild(document.createElement("div"))
    .classList.add("postCardDescription", "postCardDescription" + (i + 1));
  const postCardDescription = document.querySelector(
    ".postCardDescription" + (i + 1)
    );
    postCardDescription.innerHTML = cardArray[i].description;
}
