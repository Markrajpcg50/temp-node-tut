// const amount = 9;

// if (amount < 10) {
//   console.log("small number");
// } else {
//   console.log("large number");
// }

// console.log(`hey it's my first node app!!!`);

// console.log(__dirname);
// console.log(__filename);

// // setInterval(() => {
// //   console.log("Hello World");
// // }, 1000);

// const names=require('./names');
// const sayHi = require('./utils');

// sayHi("susan");
// sayHi(names.john);
// sayHi(names.peter);

// // Modules - encapsulated code(only share minimum)
// // CommonJs, every file is module(by default)

// const data=require('./alternative-flavor')
// console.log(data);

// require('./mind-grenade')

// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular object
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>

// pacakage.json - manifest file(stores important info about project/package)
//manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require("lodash");
 
const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
