var request = require('request');

request('http://api.open-notify.org/iss-now.json', function (error, response, body) {
  
  console.log(response);
  console.log(error);
  console.log(body);
    
  if (!error && response.statusCode === 200) {
    var theResult = JSON.parse(body);
    
    console.log(theResult);
    
    console.log(theResult.iss_position.latitude);
    //var documents = theResult.documents;
    
    // for (var i = 0; i < documents.length; i++) {
    //     console.log(documents[i].title);
    // }
    // // or...
    // var titles = documents.map(function(doc) {return doc.title;});
  }  
});