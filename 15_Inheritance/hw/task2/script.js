// Write your own extend/assign method.
// Invocation example:
// var defaults = { width: 100, height: 100 };
// var options = { width: 150 };
// var configs = assign({}, defaults, options); // -> {width: 150, height: 100}

function extend(target) {

    if (target === undefined || target === null) {
        throw new TypeError('Cannot convert first argument to object');
    }

    var to = Object(target);

    for (var i = 1; i < arguments.length; i++) {
        var nextSource = arguments[i];
        if (nextSource === undefined || nextSource === null) {
          continue;
        }

        var keysArray = Object.keys(Object(nextSource));

        for (var nextIndex = 0; nextIndex < keysArray.length; nextIndex++) {
          var nextKey = keysArray[nextIndex];
          to[nextKey] = nextSource[nextKey];
        }
    }

    return to;
}

function Persona(config) {
    this._name = config.name;
    this._attack = config.attack;
    this._totalHitpoints = config.hitpoints;
    this._hitpoints = config.hitpoints;
    this._attackCount = 0;
    this._attackMultiplayer = 1;
}

Persona.prototype.getHitpoints = function() {
    return this._hitpoints;
}

Persona.prototype.setHitpoints = function(points) {
    this._hitpoints = points;
    return this;
}

Persona.prototype.getTotalHitpoints = function() {
    return this._totalHitpoints;
}

Persona.prototype.setTotalHitpoints = function(points) {
    this._totalHitpoints = points;
    return this;
}

Persona.prototype.getAttack = function() {
    return this._attack;
}

Persona.prototype.setAttack = function(damage) {
    this._attack = damage;
    return this;
}

Persona.prototype.isAlive = function() {
    return this._hitpoints > 0;
}

Persona.prototype.fight = function(persona) {
    persona._hitpoints -= this._attack;
    ++this._attackCount;
    return this;
}


function Champion(config) {
    Persona.call(this, config);
    this._defence = false;
}

function Monster(config) {
    Persona.call(this, config);
    this._attackCountEnrage = 0;
    this._enrage = false;
}


function setInheritance(Father, Child) {
    Child.prototype = Object.create(Father.prototype);
    Child.prototype.constructor = Child;
}

setInheritance(Persona, Champion);
setInheritance(Persona, Monster);


Champion.prototype.rest = function() {
    this._hitpoints = ((this._hitpoints + 5) <= this._totalHitpoints) ? (this._hitpoints + 5) : this._totalHitpoints;
    return this;
}

Champion.prototype.defence = function() {
    this._defence = true;
    return this;
}

Champion.prototype.fight = function(persona) {
        
    if (persona._defence){
        ++this._attackCount;
        return this;
    }
        
    persona._hitpoints -= this._attack;
    ++this._attackCount;

    if (!persona.isAlive()){
        ++this._attack;
    }

    return this;
}

Monster.prototype.enrage = function() {
    this._enrage = true;
    this._attackCountEnrage = this._attackCount;
    return this;
}

Monster.prototype.fight = function(persona) {
    if (!(this._attackCount - this._attackCountEnrage)) {
        this._attack *= 2;
    } else if ((this._attackCount - this._attackCountEnrage) == 2) {
        this._attack /= 2;
    }
    
    if (persona._defence){
        ++this._attackCount;
        return this;
    }

    if (!persona.isAlive()){
        persona.setTotalHitpoints(Math.floor(persona._totalHitpoints*0.25));
        this._hitpoints += Math.floor(persona._totalHitpoints*0.1);
        
    }

    persona._hitpoints -= this._attack;
    ++this._attackCount;
    return this;
}



module.exports = {
  Champion: Champion,
  Monster: Monster,
  extend: extend
}
