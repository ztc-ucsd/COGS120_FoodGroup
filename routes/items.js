
var data = require('../data2.json');

exports.view = function (request, response) {

	 var test = {
	 	"itemName": "YESSSS",
		"expiration": "2020-02-19",
		"notification": "3 day",
		"shared": "TRUE"

   }


   console.log(data);
   data['Sections'][0]['categories'][1]['items'].push(test);
   response.render('items.handlebars', data);
};