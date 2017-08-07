function Persona (config){
    this._name = config.name;
    this._attack = config.attack;
    this._hitpoints = config.hitpoints;
}

Persona.prototype.getHitpoints = function(){
    return this._hitpoints;
}

Persona.prototype.setHitpoints = function(points){
    this._hitpoints+=points;
    return this;
}

Persona.prototype.getTotalHitpoints = function(){
    return this._totalHitpoints;
}

Persona.prototype.setTotalHitpoints = function(points){
    this._totalHitpoints+=points;
    return this;
}

Persona.prototype.getAttack = function(){
    return this._attack;
}

Persona.prototype.setAttack = function(damage){
    this._attack+=damage;
    return this;
}

Persona.prototype.fight = function(persona){
    this._attack+=damage;
    return this;
}

function Champion (config){
    
}

function Monster (config){
    
}

function setInheritance(Father, Child){
    Child.prototype = Object.create(Father.prototype);
    Child.prototype.constructor = Child;
}

setInheritance(Persona, Champion);

setInheritance(Persona, Monster);

