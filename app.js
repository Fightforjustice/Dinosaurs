
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
var data = JSON.parse(dinos);

let dinoArray = data.map(obj => {
    let dino = new Dino(obj.species, obj.weight, obj.height, obj.diet, obj.when, obj.where, obj.fact);
    return dino;
})

    // Create Human Object
function Human(weight, height, diet){
    this.weight = weight;
    this.height = height;
    this.diet = diet;
}
    // Use IIFE to get human data from form


    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

function compareHeight(Human, Dino){
    let heightRatio = Human.height / Dino.height;

    if (heightRatio > 1){
        return `You are ${heightRatio} times as tall as ${Dino.species}!`;
    }
    else return `${Dino.species} is ${heightRatio} times as tall as you!`;
}    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

function compareWeight(Human, Dino){
    let weightRatio = Human.weight / Dino.weight;

    if (weightRatio > 1){
        return `You are ${weightRatio} times as tall as ${Dino.species}!`;
    }
    else return `${Dino.species} is ${weightRatio} times as tall as you!`;
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
        return `You and ${Dino.species} have the same diet; you both eat ${diet_map[Dino.diet]}!`;
    }

    else return `${Dino.species} eats ${Dino.diet}, while you eat ${Human.diet}`;
}
    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
