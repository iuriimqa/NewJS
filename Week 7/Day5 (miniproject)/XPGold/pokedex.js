let previous = [];
let cposition = previous.length;

const consol = document.getElementsByClassName("console")[0];
console.log(consol);
consol.style.backgroundImage = "url('pokedex.png')";
consol.style.width = "900px";
consol.style.height = "640px";
consol.style.position = "relative";

const logo = document.getElementById("logo");
logo.style.backgroundImage = "url('logo.png')";
logo.style.width = "300px";
logo.style.height = "145px";
logo.style.justifyContent = "center";
logo.style.position = "absolute";
logo.style.left = "280px";
logo.style.top = "0px";

const green = document.getElementById("randomkey");
green.style.height = "72px";
green.style.width = "72px";
green.style.border = "2px solid black";
green.style.borderRadius = "50%";
green.style.position = "absolute";
green.style.top = "440px";
green.style.left = "740px";
green.addEventListener("click", Randomizer);


const prevButton = document.getElementById("leftkey");
prevButton.style.width = "40px";
prevButton.style.height = "20px";
prevButton.style.position = "absolute";
prevButton.style.border = "2px solid black";
prevButton.style.top = "467px";
prevButton.style.left = "145px";
prevButton.addEventListener("click",previousPokemon);

const text = document.getElementById("text");
text.style.position = "absolute";
text.style.top = "370px";
text.style.left = "320px";

// func to choose random item

function Randomizer() {
  const countx = Math.floor(Math.random() * 200);
  previous.push(countx);
  cposition = cposition+1;
  console.log(cposition);
  toShow(countx);
}



/**func to choose previous item */

function previousPokemon() {
    console.log(cposition);
  if (cposition != 0){
    cposition = cposition - 1;
    toShow(previous[cposition]);
  } else {
    console.error("Sorry,you dont have more previous pokemons");
    const img = document.getElementById("display");
    img.innerText = "Sorry,you dont have more previous pokemons!".toUpperCase();
    img.style.fontSize = "30px";
    img.style.color = "white";
  }
};

// func to render components
function toShow(count) {
  // console.log(count);

  const getData = async (count) => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${count}/`,
        {
          method: "GET",
          headers: {
            forms: "forms",
            id: "id",
            type: "types",
          },
        }
      );
      const data = await response.json();
      // console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  async function render() {
    let pokemons = await getData(count);
    console.log(pokemons);
    const img = document.getElementById("display");
    img.style.width = "220px";
    img.style.height = "220px";
    img.style.backgroundImage = `url('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${count}.png')`;
    img.style.backgroundSize = "cover";
    img.style.position = "absolute";
    img.style.left = "320px";
    img.style.top = "42px";

    const name = document.getElementById("name");
    name.innerText = `${pokemons.forms[0].name}`.toUpperCase();
    const number = document.getElementById("number");
    number.innerText = `Pokemon №${pokemons.id}`;
    const weight = document.getElementById("weight");
    weight.innerText = `Weight: ${pokemons.weight}gr`;
    const height = document.getElementById("height");
    height.innerText = `Height: ${pokemons.height}cm`;
    const type = document.getElementById("type");
    type.innerText = `Type: ${pokemons.types[0].type.name}`;
  }
  console.log(previous);
  render();
  return count;
}

// console.log(count);

// Randomizer();
