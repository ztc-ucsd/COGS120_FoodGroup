var data = require("../data2.json");

exports.addItems = function(request, response) {
   
	// Your code goes here
   var item = {
      "itemName": request.query.itemName,
      "expiration": "2 weeks",
   }
   console.log(item);
   data['AllItems'][0]['Dairy'].push(item);
   response.render('items.handlebars', data);
}