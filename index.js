console.log ("Yay, node is working!");

//find modules to do the heavy lifting for this app, and install them
//USE: https://www.npmjs.com/package/github-scraper
//USE: https://www.npmjs.com/package/inquirer
var fs = require("fs");
var inquirer = require("inquirer");
var scraper = require("github-scraper");
//FOUND: a package called pdf: https://www.npmjs.com/package/pdf
//FOUND: maybe better package: https://www.npmjs.com/package/jspdf

//module: inquirer.js to prompt user ot input fav color, 
//.then use that color for the PDF background
//to prompt user to input the github usernames desired
//var that takes username and creates URL

//module: profile.js that creates:
//var that retrieves object of scraped info
//object constructor that specifies:
    //username
    //icon or image
    //links listed on gitlab
    //user bio
    //number of repos
    //number of followers
    //number of github stars
    //number of users following

//writeFile with above info to a PDF file in this folder

//??figure out how to make the PDF file styled and present the info the way you want.