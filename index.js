console.log ("Yay, node is working!");

var fs = require("fs");

//find modules to do the heavy lifting for this app, and install them
//FOUND: a package called pdf: https://www.npmjs.com/package/pdf
//FOUND: maybe better package: https://www.npmjs.com/package/jspdf
//USE: https://www.npmjs.com/package/github-scraper
//USE: https://www.npmjs.com/package/inquirer

//key words github, profile, generator, scrape, PDF

//module inquirer to prompt user ot input fav color, .then use that color for the PDF background
//module inquirer to prompt user to input the github usernames desired
//var that takes username and creates URL
//var that retrieves object of scraped info
//object notation that specifies:

//scrape github for:
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