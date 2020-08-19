
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
    //use AJAX to import data from json file, closely following example from fellow classmate: https://knowledge.udacity.com/questions/305207
//const xhttp = new XMLHttpRequest();
//xhttp.overrideMimeType("application/json");

let dino = [
        {
            "species": "Triceratops",
            "weight": 13000,
            "height": 114,
            "diet": "herbivore",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "First discovered in 1889 by Othniel Charles Marsh"
        },
        {
            "species": "Tyrannosaurus Rex",
            "weight": 11905,
            "height": 144,
            "diet": "carnivore",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "The largest known skull measures in at 5 feet long."
        },
        {
            "species": "Anklyosaurus",
            "weight": 10500,
            "height": 55,
            "diet": "herbivore",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Anklyosaurus survived for approximately 135 million years."
        },
        {
            "species": "Brachiosaurus",
            "weight": 70000,
            "height": "372",
            "diet": "herbivore",
            "where": "North America",
            "when": "Late Jurasic",
            "fact": "An asteroid was named 9954 Brachiosaurus in 1991."
        },
        {
            "species": "Stegosaurus",
            "weight": 11600,
            "height": 79,
            "diet": "herbivore",
            "where": "North America, Europe, Asia",
            "when": "Late Jurasic to Early Cretaceous",
            "fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines."
        },
        {
            "species": "Elasmosaurus",
            "weight": 16000,
            "height": 59,
            "diet": "carnivore",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Elasmosaurus was a marine reptile first discovered in Kansas."
        },
        {
            "species": "Pteranodon",
            "weight": 44,
            "height": 20,
            "diet": "carnivore",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur."
        },
        {
            "species": "Pigeon",
            "weight": 0.5,
            "height": 9,
            "diet": "herbivore",
            "where": "World Wide",
            "when": "Holocene",
            "fact": "All birds are living dinosaurs."
        }
    ];

/*
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    dino = JSON.parse(this.responseText);
    console.log(typeof dino);
  }
};

xhttp.open("GET", "dino.json", true);
xhttp.send(null);
    // Create Dino Objects
console.log(dino);
*/

let dinoArray = dino.map((obj) => {
    let dObj = new Dino(obj.species, obj.weight, obj.height, obj.diet, obj.when, obj.where, obj.fact);
    return dObj;
})
    //Create tile objects for displaying dino info
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

    //get human data using IIFE, closely following recommendation from TA: https://knowledge.udacity.com/questions/304096
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

    //remove form after one second; allow for gathering of data; see https://www.sitepoint.com/delay-sleep-pause-wait/
    setTimeout(() => { generate.style = "display: none"; }, 1000);

    //populate dinosaur tiles with their info
    let dino_tiles = dinoArray.map(obj => {
        
        //randomize which of six dino facts is chosen; use compare methods for three of the facts
        let rand_facts = [compareHeight(human_data, obj), compareWeight(human_data, obj), compareDiet(human_data, obj), 
        `${obj.species} lived during the ${obj.when} era.`, `${obj.species} lived in ${obj.where}.`, obj.fact];

        let chosenFact = "";

        let image = `images/${obj.species}.png`;
        
        if (obj.species == "pigeon"){
            chosenFact = obj.fact;
        }

        else chosenFact = rand_facts[Math.floor(Math.random * rand_facts.length())];

        let dino_tile = new Tile(obj.species, image, chosenFact);

        return dino_tile;

    });

    //create grid element with pre-defined css 'grid' class 

    let grid = document.createElement('div');

    grid.setAttribute('class', 'grid');

    //randomly add four tiles from dino tiles to grid

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
    
    //add human tile at fifth position; no fact paragraph added
    let humanTile = document.createElement('div');

    humanTile.setAttribute('class', 'grid-item');

    let h3 = document.createElement('h3');

    h3.textContent = "Human";

    humanTile.append(h3);

    let pic = document.createElement('image');
        
    pic.setAttribute('src', 'images/human.png');

    humanTile.append(pic);

    grid.append(humanTile);  

    //randomly add remaining four dino tiles

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

    setTimeout(() => { document.append('grid'); }, 2000);

});
    


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
