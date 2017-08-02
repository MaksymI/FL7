// You should create two classes `Casino` and `SlotMachine`.

// Constructor of `Casino` class should expect two arguments:
// Number of SlotMachines in casino
// Initial amount of money in casino


function Casino(slotMachinesQt, initialMoneyCasino){
    this._slotMachinesQt = slotMachinesQt < 0 ? 0 : slotMachinesQt;
    this._initialMoneyCasino = initialMoneyCasino < 0 ? 0 : initialMoneyCasino;
    this._initialMoneyMachine = Math.floor(initialMoneyCasino/slotMachinesQt);
    this._initialMoneyFirstMachine = this._initialMoneyMachine + (initialMoneyCasino%slotMachinesQt);
    
    this._slotMachines = [];
    this._slotMachines.push(new SlotMachine(this._initialMoneyFirstMachine));
    this._slotMachines[0].lucky = true;
    for (var i = 1; i < slotMachinesQt; i++){
        this._slotMachines.push(new SlotMachine(this._initialMoneyMachine));
    }
}

Casino.prototype.getTotalMoney = function(){
    return this._slotMachines.map(element => element._totalMoneyMachine).reduce((sum, val) => sum + val);
}

Casino.prototype.getTotalMachines = function(){
    return this._slotMachines.length;
}

Casino.prototype.addMachine = function(){
    this._slotMachines.sort((a,b) => b._totalMoneyMachine - a._totalMoneyMachine);
    var biggest = this._slotMachines[0];
    this._slotMachines.push(new SlotMachine(Math.floor(biggest._totalMoneyMachine/2)));
    biggest._totalMoneyMachine -= Math.floor(biggest._totalMoneyMachine/2);
    return this._slotMachines;
}

Casino.prototype.removeMachine = function(id){
    if (id < 0) {console.log("Unable to find Machine with id: " + id);}
    for (var i=0; i<this._slotMachines.length; i++){
        if(this._slotMachines[i].id == id) {
            var spread = this._slotMachines[i]._totalMoneyMachine;
            this._slotMachines.splice(i, 1);
            this._slotMachines[0].putMoney(Math.floor(spread/this._slotMachines.length) + (spread%this._slotMachines.length));
            for (var j = 1; j < this._slotMachines.length; j++){
                this._slotMachines[j].putMoney(Math.floor(spread/this._slotMachines.length));
            }
            return this;
        }
    }
    console.log("Unable to find Machine with id: " + id);
    return this;
}

Casino.prototype.takeMoney = function(amount){
    if (amount >= this.getTotalMoney()){
        for (var i=0; i<this._slotMachines.length; i++){
            this._slotMachines[i]._totalMoneyMachine=0;
        }
        return this._slotMachines;
    }
    var _amount = amount < 0 ? 0 : amount;
    this._slotMachines.sort((a,b) => b._totalMoneyMachine - a._totalMoneyMachine);
    var i = 0;
    do {
        if (this._slotMachines[i]._totalMoneyMachine >= _amount){
            this._slotMachines[i]._totalMoneyMachine -= _amount;
            break;
        } else {
            this._slotMachines[i]._totalMoneyMachine = 0;
            _amount -= this._slotMachines[i]._totalMoneyMachine;
            i++;
        }
    } while (i<this._slotMachines.length);

    return this._slotMachines;
}


// Contructor of `SlotMachine` class should expect one argument (initial amount of money that is passed to machine).

function SlotMachine(initialMoneyMachine){
    this._initialMoneyMachine = initialMoneyMachine;
    this._totalMoneyMachine = initialMoneyMachine;
    this._id = Math.ceil(Math.random()*1e13);
}

SlotMachine.prototype.lucky = false;

SlotMachine.prototype.getTotalMoney = function(){
    return this._totalMoneyMachine;
}

SlotMachine.prototype.takeMoney = function(amount){
    var _amount = amount < 0 ? 0 : amount;
    this._totalMoneyMachine -= _amount;
    return this;
}

SlotMachine.prototype.putMoney = function(amount){
    var _amount = amount < 0 ? 0 : amount;
    this._totalMoneyMachine += amount;
    return this;
}

SlotMachine.prototype.play = function(amount){
    var _amount = amount < 0 ? 0 : amount;
    this._totalMoneyMachine += amount;
    var vin = 0;
    var digits = [Math.floor(Math.random()*10), Math.floor(Math.random()*10), Math.floor(Math.random()*10)];
    
    console.log(digits);

    if (digits[0] === 7 && digits[1] === 7 && digits[2] === 7 && this.lucky === false){
        vin = this._totalMoneyMachine;
        this._totalMoneyMachine = 0;
        return vin;
    } else if (digits[0] === 7 && digits[1] === 7 && digits[2] === 7 && this.lucky === true) {
        digits = [Math.floor(Math.random()*10), Math.floor(Math.random()*10), Math.floor(Math.random()*10)];
    }
    
    digits.sort();
    var count = 0;
    
    for(var i=1; i<digits.length; i++){
        if(digits[i]===digits[i-1]){
            count++;
        }
    }
    
    if (count === 1){
        vin = _amount * 2;
    } else if (count === 2){
        vin = _amount * 5;
    }
    this._totalMoneyMachine -= vin;
    return vin;
}


var casino = new Casino (6, 1000);
casino._slotMachines[0].play(5);
casino._slotMachines[0].play(5);
casino._slotMachines[1].play(5);
casino._slotMachines[1].play(5);
casino._slotMachines[2].play(5);
casino._slotMachines[2].play(5);
casino._slotMachines[3].play(5);
casino._slotMachines[3].play(5);
casino._slotMachines[4].play(5);
casino._slotMachines[4].play(5);
casino._slotMachines[5].play(5);
casino._slotMachines[5].play(5);

console.log("Total machines in Casino: " + casino.getTotalMachines());
console.log("Total money in Casino: " + casino.getTotalMoney());

casino.addMachine();
casino.addMachine();

console.log("Total machines in Casino: " + casino.getTotalMachines());

casino._slotMachines[6].play(5);
casino._slotMachines[6].play(15);
casino._slotMachines[7].play(5);
casino._slotMachines[7].play(15);

console.log("Total machines in Casino: " + casino.getTotalMachines());
console.log("Total money in Casino: " + casino.getTotalMoney());

casino.takeMoney(500);

console.log("Total money in Casino: " + casino.getTotalMoney());

