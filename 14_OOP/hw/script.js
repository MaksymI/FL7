// You should create two classes `Casino` and `SlotMachine`.

// Constructor of `Casino` class should expect two arguments:
// Number of SlotMachines in casino
// Initial amount of money in casino


function Casino(numberOfSlotMachines, initialAmountOfMoneyInCasino){
    this._numberOfSlotMachines = numberOfSlotMachines;
    this._initialAmountOfMoneyInCasino = initialAmountOfMoneyInCasino;
    this._initialAmountOfMoneyInMachine = Math.floor(initialAmountOfMoneyInCasino/numberOfSlotMachines);
    this._initialAmountOfMoneyInFirstMachine = this._initialAmountOfMoneyInMachine + (initialAmountOfMoneyInCasino%numberOfSlotMachines);
    
    this._slotMachine = [];
    this._slotMachine.push(new SlotMachine(this._initialAmountOfMoneyInFirstMachine));
    this._slotMachine[0].lucky = true;
    for (var i = 1; i < numberOfSlotMachines; i++){
        this._slotMachine.push(new SlotMachine(this._initialAmountOfMoneyInMachine));
    }
}

Casino.prototype.getTotalMoney = function(){

}

Casino.prototype.getTotalMachines = function(){
    
}

Casino.prototype.getBiggestInMachines = function(){
    return  Math.max.apply(null, this._slotMachine.map(element => element._totalMoney));
}

Casino.prototype.addMachine = function(){

    this._slotMachine.push(new SlotMachine(this._initialAmountOfMoneyInFirstMachine));
}

Casino.prototype.removeMachine = function(id){
    
}

Casino.prototype.takeMoney = function(amount){
    
}



// Contructor of `SlotMachine` class should expect one argument (initial amount of money that is passed to machine).

function SlotMachine(initialAmountOfMoneyInMachine){
    this._initialAmountOfMoneyInMachine = initialAmountOfMoneyInMachine;
    this._totalMoney = initialAmountOfMoneyInMachine;
}

SlotMachine.prototype.lucky = false;

SlotMachine.prototype.getTotalMoney = function(){
    return this._totalMoney;
}

SlotMachine.prototype.takeMoney = function(amount){
    this._totalMoney -= amount;
}

SlotMachine.prototype.putMoney = function(amount){
    this._totalMoney += amount;
}

SlotMachine.prototype.play = function(money){

}



// When new instance of `Casion` class initializes it should create needed amount of SlotMachine instances
// (one of SlotMachines should be lucky) and spread equally initial amount between all machines
// (the rest should be passed into the first machine).





var casino = new Casino (5, 33);