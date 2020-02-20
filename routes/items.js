
var data = require('../data2.json');

exports.view = function (request, response) {
   var test = {
      "itemName": "YESSSS",
      "expiration": "2020-02-19",
      "notification": "3 day",
      "shared": "TRUE"
   }

   /*var section = window.location.href; //Current section passed in url from '/sections' page
   var ind = section.lastIndexOf('/');
   section = section.substring(ind); //Gets the actual section from the url
   console.log("Section: " + section);*/

   console.log(data);
   data['Sections'][0]['categories'][1]['items'].push(test);
   response.render('items.handlebars', data);

   response.render('itemsScreen.js', data);
}