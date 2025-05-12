const url = "https://rickandmortyapi.com/api/character";
let allData = [];

const fetchData = async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    allData = data.results;
    renderCharacters(allData);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const renderCharacters = (character) => {
  const container = document.getElementById("container");
  container.innerHTML = "";

  character.forEach((person) => {
    const card = document.createElement("div");

    const img = document.createElement("img");
    img.src = person.image;

    const name = document.createElement("p");
    name.textContent = person.name;

    card.appendChild(img);
    card.appendChild(name);
    container.appendChild(card);
  });
};

const filterData = (contentItem) => {
  const filter = allData.filter((a) =>
    a.name.toLowerCase().includes(contentItem.toLowerCase())
  );
  renderCharacters(filter);
};

document.getElementById("search").addEventListener("submit", (e) => {
  e.preventDefault();
  const input = e.target.querySelector("input").value;
  filterData(input);
});

fetchData();
