console.log ("Yay, node is working!");

//find modules to do the heavy lifting for this app, and install them
//USE: https://www.npmjs.com/package/github-scraper
//USE: https://www.npmjs.com/package/inquirer
var fs = require("fs");
var inquirer = require("inquirer");
var gs = require("github-scraper");
//FOUND: a package called pdf: https://www.npmjs.com/package/pdf
//FOUND: maybe better package: https://www.npmjs.com/package/jspdf

//module: ask-user.js to prompt user ot input fav color, 
//.then use that color for the PDF background
//to prompt user to input the github usernames desired

//var that takes username and creates URL
var url = '/jeremyepling' // a random username
//module: profile.js that creates:
//var that retrieves object of scraped info
gs(url, function(err, data) {
  console.log(data); // or what ever you want to do with the data
})


  

//writeFile with above info to a PDF file in this folder

//??figure out how to make the PDF file styled and present the info the way you want.
