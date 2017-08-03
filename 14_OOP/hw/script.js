// You should create two classes `Casino` and `SlotMachine`.

// Constructor of `Casino` class should expect two arguments:
// Number of SlotMachines in casino
// Initial amount of money in casino

function Casino(slotMachinesQt, initialMoneyCasino){
    var _slotMachinesQt = slotMachinesQt < 0 ? 0 : slotMachinesQt;
    var _initialMoneyCasino = initialMoneyCasino < 0 ? 0 : initialMoneyCasino;
    var _initialMoneyMachine = Math.floor(_initialMoneyCasino/_slotMachinesQt);
    var _initialMoneyFirstMachine = _initialMoneyMachine + (_initialMoneyCasino%_slotMachinesQt);
    
    this._slotMachines = [];
    this._slotMachines.push(new SlotMachine(_initialMoneyFirstMachine));
    this._slotMachines[0].lucky = true;
    for (var i = 1; i < slotMachinesQt; i++){
        this._slotMachines.push(new SlotMachine(_initialMoneyMachine));
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
    if (id < 0) {
        console.log("Unable to find Machine with id: " + id);
        return this;
    }
    for (var i=0; i<this._slotMachines.length; i++){
        if(this._slotMachines[i]._id == id) {
            var spread = this._slotMachines[i]._totalMoneyMachine;
            this._slotMachines.splice(i, 1);
            console.log("Machine with id: " + id + " removed.");
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
    var _amount = amount < 0 ? 0 : amount;
    if (_amount >= this.getTotalMoney()){
        var temp = this.getTotalMoney();
        for (var i=0; i<this._slotMachines.length; i++){
            this._slotMachines[i]._totalMoneyMachine=0;
        }

        console.log("Taked away " + temp + " from casino.");
        return this._slotMachines;
    }
    
    this._slotMachines.sort((a,b) => b._totalMoneyMachine - a._totalMoneyMachine);
    var i = 0;
    do {
        if (this._slotMachines[i]._totalMoneyMachine >= _amount){
            this._slotMachines[i].takeMoney(_amount);
            break;
        } else {
            _amount -= this._slotMachines[i]._totalMoneyMachine;
            this._slotMachines[i]._totalMoneyMachine = 0;   
            i++;
        }
    } while (i<this._slotMachines.length);

    console.log("Taked away " + _amount + " from casino.");

    return this._slotMachines;
}


// Contructor of `SlotMachine` class should expect one argument (initial amount of money that is passed to machine).

function SlotMachine(initialMoneyMachine){
    this._initialMoneyMachine = initialMoneyMachine;
    this._totalMoneyMachine = initialMoneyMachine;
    this._id = Math.ceil(Math.random()*1e13);
    this._playCount = 0;
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
    this._initialMoneyMachine += amount;
    this._totalMoneyMachine += amount;
    return this;
}

SlotMachine.prototype.play = function(amount){
    var _amount = amount < 0 ? 0 : amount;
    this._playCount++;
    this._totalMoneyMachine += _amount;
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

function tests() {
    var casino = new Casino (6, 1000);
    console.log("Initial amount machines in Casino: " + casino.getTotalMachines());
    console.log("Initial amount of money in Casino: " + casino.getTotalMoney());

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
    console.log("Total money in Casino: " + casino.getTotalMoney() + " after " + casino._slotMachines.map(e=>e._playCount).reduce((a,b)=>a+b) + " games");

    casino.addMachine();
    casino.addMachine();

    console.log("Total machines in Casino: " + casino.getTotalMachines());

    casino._slotMachines[6].play(5);
    casino._slotMachines[6].play(15);
    casino._slotMachines[7].play(5);
    casino._slotMachines[7].play(15);

    casino.removeMachine(casino._slotMachines[1]._id);
    console.log("Total machines in Casino: " + casino.getTotalMachines());
    console.log("Total money in Casino: " + casino.getTotalMoney());

    casino.removeMachine(casino._slotMachines[1]._id);
    console.log("Total machines in Casino: " + casino.getTotalMachines());
    console.log("Total money in Casino: " + casino.getTotalMoney());

    casino.takeMoney(Math.floor(casino.getTotalMoney()/10));
    console.log("Total money in Casino: " + casino.getTotalMoney());

    casino.takeMoney(Math.floor(casino.getTotalMoney()/3));
    console.log("Total money in Casino: " + casino.getTotalMoney());
    casino.takeMoney(casino.getTotalMoney() + 10);
    console.log("Total money in Casino: " + casino.getTotalMoney());
}

module.exports = {
  Casino: Casino,
  SlotMachine: SlotMachine,
  tests: tests
}
