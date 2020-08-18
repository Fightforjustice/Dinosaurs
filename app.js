
    // Create Dino Constructor

function Dino(species, weight, height, diet, when, where, fact){
    this.species = species;
    this.weight = weight;
    this.height = height;
    this.diet  = diet;
    this.when = when;
    this.where = where;
    this.fact = fact;
}
    // Create Dino Objects
const xhttp = new XMLHttpRequest();
let dino = "";
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    // dino = this.responseText;
    // console.log(dino)
    dino = JSON.parse(this.responseText);
    console.log(typeof dino);
  }
};
xhttp.open("GET", "dino.json", true);
xhttp.send();

let dinoArray = dino.map(obj => {
    let dObj = new Dino(obj.species, obj.weight, obj.height, obj.diet, obj.when, obj.where, obj.fact);
    return dObj;
})

function Tile(species, image, fact){
    this.species = species;
    this.image = image;
    this.fact = fact;

} 
    // Create Human Object
function Human(weight, height, diet){
    this.weight = weight;
    this.height = height;
    this.diet = diet;
}

var generate = document.getElementById('dino-compare');

generate.addEventListener('submit', () => {
    let human_data = (function getHumanData(){

        let weight = document.getElementById('weight').value;

        let feet = document.getElementById('feet').value;

        let inches = document.getElementById('inches').value;

        let height = (feet * 12) + inches;

        let diet = document.getElementById('diet').value;

        let human = new Human(weight, height, diet);

        return human;
    })();

    generate.style = "display: none";

    let dino_tiles = dinoArray.map(obj => {
        
        let rand_facts = [compareHeight(human_data, obj), compareWeight(human_data, obj), compareDiet(human_data, obj), 
        `${obj.species} lived during the ${obj.when} era.`, `${obj.species} lived in ${obj.where}.`, obj.fact];

        let chosenFact = "";

        let image = `images/${obj.species}.png`;

        /*TODO: import image according to species*/
        
        if (obj.species == "pigeon"){
            chosenFact = obj.fact;
        }

        else chosenFact = rand_facts[Math.floor(Math.random * rand_facts.length())];

        let dino_tile = new Tile(obj.species, image, chosenFact);

        return dino_tile;

    });

    let grid = document.createElement('div');

    grid.setAttribute('class', 'grid');

    for (let i = 0; i < 4; i++){
        let index = Math.floor(Math.random * 4);

        let chosenTile = dino_tiles[index];
        
        let tile = document.createElement('div');

        tile.setAttribute('class', 'grid-item');

        let h3 = document.createElement('h3');

        h3.textContent = chosenTile.species;

        tile.append(h3);

        let pic = document.createElement('image');
        
        pic.setAttribute('src', chosenTile.image);

        tile.append(pic);

        let para = document.createElement('p');

        para.textContent = chosenTile.fact;

        tile.append(para);

        grid.append(tile);

        dino_tiles.splice(index, 1);

    }
    
    let humanTile = document.createElement('div');

    humanTile.setAttribute('class', 'grid-item');

    let h3 = document.createElement('h3');

    h3.textContent = "Human";

    humanTile.append(h3);

    let pic = document.createElement('image');
        
    pic.setAttribute('src', 'images/human.png');

    humanTile.append(pic);

    grid.append(humanTile);  

    for (let i = 0; i < 4; i++){
        let index = Math.floor(Math.random * 4);

        let chosenTile = dino_tiles[index];
        
        let tile = document.createElement('div');

        tile.setAttribute('class', 'grid-item');

        let h3 = document.createElement('h3');

        h3.textContent = chosenTile.species;

        tile.append(h3);

        let pic = document.createElement('image');
        
        pic.setAttribute('src', chosenTile.image);

        tile.append(pic);

        let para = document.createElement('p');

        para.textContent = chosenTile.fact;

        tile.append(para);

        grid.append(tile);

        dino_tiles.splice(index, 1);

    }  

    document.append('grid');

});
    // Use IIFE to get human data from form


    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

function compareHeight(Human, Dino){
    let heightRatio = Human.height / Dino.height;

    if (heightRatio > 1){
        return `You are ${heightRatio} times as tall as the ${Dino.species}!`;
    }
    else return `The ${Dino.species} was ${heightRatio} times as tall as you!`;
}    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

function compareWeight(Human, Dino){
    let weightRatio = Human.weight / Dino.weight;

    if (weightRatio > 1){
        return `You are ${weightRatio} times heavier than the ${Dino.species}!`;
    }
    else return `The ${Dino.species} was ${weightRatio} times heavier than you!`;
}    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.

function compareDiet(Human, Dino){
    let diet_map = {
        "carnivore" : "meat",
        "herbivore" : "plants",
        "omnivore" : "everything"
    };

    if (Human.diet == Dino.diet){
        return `You and the ${Dino.species} have the same diet; you both eat ${diet_map[Dino.diet]}!`;
    }

    else return `The ${Dino.species} ate ${diet_map[Dino.diet]}, while you eat ${diet_map[Human.diet]}.`;
}
    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
