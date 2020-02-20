
var data = require('../data.json');
var item =
   {
      "itemName": "TEST",
      "section": "Fridge",
      "category": "Dairy",
      "expiration": "2 weeks",
      "notification": "3 day",
      "shared": "TRUE"
   }
data.items.push(item);

exports.view = function (request, response) {

   console.log(data);
   response.render('items.handlebars', data);

   response.render('itemsScreen.js', data);
};