var data = require("../data.json");

exports.addSection = function(request, response) {
   
	// Your code goes here
   var section = {
      "sectionName": request.query.sectionName,
      "html": request.query.sectionName + ".html",
      "id": request.query.sectionName
   }
   console.log(section);
   data.sections.push(section);
   response.render('sections.handlebars', data);
}