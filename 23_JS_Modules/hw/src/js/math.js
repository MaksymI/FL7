const addition = (a, b) => a + b;

const substraction = (a, b) => a - b;

const multiplication = (a, b) => a * b;

const division = (a ,b) => a / b;


export default function(arg) {
    switch(arg) {
        case '+':
            return addition;
        case '-':
            return substraction;
        case '*':
            return multiplication;
        case '/':
            return division;
        default:
            throw new Error('not a valid Operation');
      }
}
