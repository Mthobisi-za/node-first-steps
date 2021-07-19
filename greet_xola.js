"use strict"
//install modules
 const chalk = require("chalk");
 const greet = require('./greet');
 const figlet = require("figlet");
 //install modules

 const styledMessage = chalk.bgGreen.black(greet('Xola'));
 var datap = figlet(greet("Xola"), (err, data)=>{
     console.log(data)
    return data
 })


console.log(styledMessage)
