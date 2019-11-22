var inquirer = require("inquirer");

//module: ask-user.js to prompt user ot input fav color, 
//.then use that color for the PDF background
//to prompt user to input the github usernames desired
//var that takes username and creates URL
inquirer
  .prompt([
    /* Pass your questions in here */
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
    // Use user feedback for... whatever!!
  });

module.export