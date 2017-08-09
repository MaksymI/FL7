import {PI} from './modules_default_export_math';
import {sqrt} from './modules_default_export_math';
import {square} from './modules_default_export_math';


const arg1 = process.argv[2];
const arg2 = process.argv[3];

console.log(PI);
console.log(sqrt(+arg1));
console.log(square(+arg2));