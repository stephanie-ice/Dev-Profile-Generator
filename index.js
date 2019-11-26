console.log ("Yay, node is working!");
//find modules to do the heavy lifting for this app, and install them
//USE: https://www.npmjs.com/package/github-scraper
//USE: https://www.npmjs.com/package/inquirer
//USE: https://www.npmjs.com/package/create-html
//USE: https://www.npmjs.com/package/jspdf
var fs = require("fs");
var inquirer = require("inquirer");
var gs = require("github-scraper");
var jspdf = require("jspdf");

//module: inquirer on ask-user.js to prompt user ot input fav color, 
//then use that color for the PDF background
//to prompt user to input the github usernames desired

//module: gs on profile.js to scrape github for username profile info
//return data as an object

//module: create-html on profile.js to take object data and turn it into 
//a generated HTML document

//module: jspdf on thePDFer.js to convert that HTML doc to a PDF

//All of the above needs to be a function in index.js, 
//where the arguments of the function are from the CLI:

// node index.js "gitHubUserName" "faveColor"
