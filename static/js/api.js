export default class API {
  async getCharacter(id) {
    const response = fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const data = (await response).json();
    return data;
    // .then((response) => response.json())
    // .then((data) => data);
  }

  async getAllCharacters() {
    const characters = await fetch(
      "https://rickandmortyapi.com/api/character/"
    );
    return characters.json();
  }

  async getCharacterByName(name) {
    const character = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${name}`
    );
    const data = (await character).json();
    return data;
  }
}
