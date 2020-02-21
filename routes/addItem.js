var data = require("../data2.json");

exports.addItem = function(request, response) {
   
   // Your code goes here
   var item = {
      "itemName": request.query.itemName,
      "expiration": request.query.expiration,
   }
   var category = request.query.category;
   var i;
   for (i = 0; i < data['Sections'].length; i++) {
      if (data.Sections[0].categories[i].categoryName == category) {
         break;
      }
   }
   data.Sections[0].categories[i].items.push(item);
   response.render('items.handlebars', data);
}