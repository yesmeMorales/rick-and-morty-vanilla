import API from "./api.js";
import Character from "./character.js";

const api = new API();
let currentCharacter = 1;
const $loadNext = document.querySelector("#load-next");
const $loadBefore = document.querySelector("#load-before");

$loadNext.addEventListener("click", async () => {
  const characterData = await api.getCharacter(++currentCharacter);
  new Character(characterData);
});

$loadBefore.addEventListener("click", async () => {
  let characterData;
  if (currentCharacter > 1) {
    characterData = await api.getCharacter(--currentCharacter);
    new Character(characterData);
  }
  characterData = await api.getCharacter(currentCharacter);
  new Character(characterData);
});

async function initApp(initCharacterId) {
  const characterData = await api.getCharacter(initCharacterId);
  console.log(characterData);
  const rick = new Character(characterData);
  new Character(characterData);
  //   name: "pancho",
  //   img: "http://127.0.0.1:5500/static/images/logo@2x.png",
  // });
}

initApp(currentCharacter);
