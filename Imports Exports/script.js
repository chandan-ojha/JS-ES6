//~ imports/exports

//import {pi,a} from './external.js' //named import
/*import * as test from "./external.js";
console.log(test.pi);*/

import external,{a,pi} from "./external.js";
console.log(a,pi);
external();