// Write `compose` function which performs right-to-left function composition.
// Note: this function shouldn’t have limitaion on count of passed function
// Invocation example:
// const compose = require('./compose');
// const toUpper = string => string.toUpperCase();
// const classyGreeting = (firstName, lastName) => "The name's " + lastName + ", " + firstName + " " + lastName;
// const yellGreeting = compose(toUpper, classyGreeting);
// yellGreeting('James', 'Bond'); //=> "THE NAME'S BOND, JAMES BOND"


function compose() {
    return Array.prototype.reduceRight.call(arguments, function(prev, cur){
        return function(){
            return cur(prev.apply(null, arguments));
        };   
    });
}

module.exports = compose;