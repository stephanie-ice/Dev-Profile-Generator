//module: gs on profile.js to scrape github for username profile info
//return data as an object

var gs = require("github-scraper");
//this is the var that retrieves object of scraped info
var url = '/stephanie-ice' 
gs(url, function(err, data) {
    console.log( 
    //I want to take specific data from the returned object, 
  
      {username:data.username,
      image:data.avatar,
      location:data.location,
      url:("github.com" + data.url),
      blog:("github.blog/author"+data.url),
      website:data.website,
      bio:data.bio,
      repos:data.repos,
      followers:data.followers,
      stars:data.stars,
      following:data.following}
  );
  
});  

//module: create-html on profile.js to take object data and turn it into 
//a generated HTML document
//https://www.npmjs.com/package/create-html

//and export that data to thePDFer.js
    module.export = gs()