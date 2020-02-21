var data = require("../itemsList.json");

exports.addItem = function (request, response) {
   var section = request.query.sect;

   var item = {
      "itemName": request.query.itemName,
      "expiration": request.query.expiration,
   }
   var category = request.query.category;
   var i;
   var k;
   console.log("length: " + data.Sections[0].categories.length);
loop1:
   for (i = 0; i < data['Sections'].length; i++) {
      console.log(i + " s: " + data.Sections[i].sectionName);
      if (data.Sections[i].sectionName == section) {
loop2:
         for (k = 0; k < data.Sections[i].categories.length; k++) {
            console.log("c: " + data.Sections[i].categories[k].categoryName);
            if (data.Sections[i].categories[k].categoryName == category) {
               console.log("end loop");
               break loop1;
            }
         }
      }
   }
   console.log("This: " + data.Sections[i].categories[k].items);  
   data.Sections[i].categories[k].items.push(item);
   response.render('items.handlebars', data);
}