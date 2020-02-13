var data = require("../data.json");

exports.addMember = function(request, response) {
   
	// Your code goes here
   var member = {
      "memberName": request.query.memberName,
      "html": request.query.memberName + ".html",
      "id": request.query.memberName
   }
   console.log(member);
   data.members.push(member);
   response.render('group.handlebars', data);
}