import {PI} from './module';
import {sqrt} from './module';
import {square} from './module';


const arg1 = process.argv[2];
const arg2 = process.argv[3];

console.log(PI);
console.log(sqrt(+arg1));
console.log(square(+arg2));