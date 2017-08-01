

function Fire(obj){
    this._height = obj.height;
    this._weight = obj.weight;
    this._type = 'Fire';
    this._fly = false;
    this._walk = true;
    this._specie = 'Flame Pokémon';
}


Fire.prototype.getHeight = function(){
    return this._height;
}

Fire.prototype.getWeight = function(){
    return this._weight;
}

Fire.prototype.canWalk = function(){
    return this._walk;
}

Fire.prototype.canFly = function(){
    return this._fly;
}

Fire.prototype.getType = function(){
    return this._type;
}

Fire.prototype.getSpecie = function(){
    return this._specie;
}

// Fire.prototype.evolve = function(){
//     return this._specie;
// }

function Charmander(obj) {
    Fire.call(this, obj);
    this._specie = 'Lizard Pokémon';
}

function Charmeleon(obj) {
    Charmander.call(this, obj);
    this._specie = 'Flame Pokémon';
}

function Charizard(obj) {
    Charmeleon.call(this, obj);
    this._fly = true;

}

function setInheritance(Father, Child){
    Child.prototype = Object.create(Father.prototype);
    Child.prototype.constructor = Child;
}

setInheritance(Fire, Charmander);

// Charmander.prototype = Object.create(Fire.prototype);
// Charmander.prototype.constructor = Charmander;

setInheritance(Charmander, Charmeleon);

// Charmeleon.prototype = Object.create(Charmander.prototype);
// Charmeleon.prototype.constructor = Charmeleon;

setInheritance(Charmeleon, Charizard);

// Charizard.prototype = Object.create(Charmeleon.prototype);
// Charizard.prototype.constructor = Charizard;

var embury = new Charmander({ height: 1, weight: 15 });
var mercury = new Charmeleon({ height: 2, weight: 45 });
var morderbrand = new Charizard({ height: 10, weight: 200 });
           
// embury.getType(); // -> “Fire”
// embury.getType() === mercury.getType();
// mercury.getType() === morderbrand.getType(); // -> true

// embury.getSpecie(); // -> “Lizard Pokémon”
// mercury.getSpecie(); // -> “Flame Pokémon”
// morderbrand.getSpecie() === mercury.getSpecie(); // -> true

// embury.getHeight(); // -> 1
// morderbrand.canWalk(); // -> true

// embury.canFly(); // -> false
// embury.canFly() === mercury.canFly(); // -> true
// morderbrand.canFly(); // -> true


function Pokemon(type, level){
    this._level = level;
    this._type = type;
    this._happiness = 0;
    this._thunderstone = 0;
    this._evolveMap = {
        'Pichu': {nextType: 'Pikachu', level: 20},
        'Pikachu': {nextType: 'Raichu', level: 30},
    }
}


Pokemon.prototype.evolve = function(){
    if (this._type in this._evolveMap && this._level < this._evolveMap[this._type].level) {
        return new Pokemon(this._evolveMap[this._type].nextType, this._evolveMap[this._type].level);
    }
}

var my_pokemon = new Pokemon("Pichu", 10);


// var my_pokemon = new Pichu();
//    my_pokemon.getPokemonType(); // -> “Pichu”
//    my_pokemon = my_pokemon.evolve();
//    my_pokemon.getPokemonType(); // -> “Pikachu”

