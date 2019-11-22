var gs = require("github-scraper");
//var that retrieves object of scraped info
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


//and export that data to the pdf-generator.js
    module.export 