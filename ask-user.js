var inquirer = require("inquirer");



//module: inquirer on ask-user.js to prompt user ot input fav color, 
//.then use that color for the PDF background
//to prompt user to input the github usernames desired

//var that takes username and creates URL
inquirer
  .prompt([
    
    {type: input,
    message: "What is your favorite color?",
    name: "faveColor"
    },
    {type: list,
    message: "Please enter the Github usernames that you wish to view",
    name: "whichUsernames"
    }
  ])
  .then(answers => {
    // user feedback to:
    //var to store github usename
    //take the user name and create a URL
    //export that URL to 
    //profile.js for the gs to get profile info

    //user feedback for:
    //var to store favorite color
    //export that key, value to
    //the PDFer.js for a background color
  });

module.export