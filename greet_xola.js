//install modules
 const chalk = require("chalk");
 const greet = require('./greet');
 const figlet = require("figlet");
 //install modules

 const styledMessage = chalk.bgGreen.black(greet('Xola'));
 var data = figlet(greet("Mtho"), (err, data)=>{
    console.log(data)
    return data
 })

console.log(data)
console.log(styledMessage)
