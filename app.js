
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

}
    // Use IIFE to get human data from form


    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
