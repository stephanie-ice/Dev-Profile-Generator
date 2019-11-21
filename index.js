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

//object constructor that specifies:
   //username
    data.username
    //icon or image
    data.avatar
    //links listed on gitlab
        //user location viw google maps
        data.location
        //github profile
        "github.com" + data.url
        //github blog: no such thing. Checked actual github.blog; contributors to 
        //the public blog have a separate url that isn't a link on their github profile
        //page. unless i did:
        "github.blog/author"+data.url
        //which only works if the person contributed to the github blog.
    data.website
    //user bio
    data.bio
    //number of repos
    data.repos
    //number of followers
    data.followers
    //number of github stars
    data.stars
    //number of users following
    data.following

//writeFile with above info to a PDF file in this folder

//??figure out how to make the PDF file styled and present the info the way you want.
