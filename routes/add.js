var data = require("../data.json");

exports.addFriend = function(request, response) {   
	// Your code goes here
	var newName = request.query.name;
	var newDescription = request.query.description;
	newFriend = {
		"name" : newName,
		"description" : newDescription,
		"image" : 'http://lorempixel.com/400/400/people'
	};
	console.log(newFriend);
	response.render('index', data);
	data.friends.push(newFriend);
}