var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	console.log("server");
	console.log(req.query);
	var studentId = req.query.studentId;
	var data = {
		details: [
			{
				name: "raj",
				age: 20,
				id: "std_001"
			},
			{
				name: "teena",
				age: 11,
				id: "std_009"
			}, {
				name: 'krish',
				age: 14,
				id: "std_002"
			},
			{
				name: "Ram",
				age:16,
				id: 'std_022'
			},
			{
				name: "Praasad",
				age:56,
				id: 'std_082'	
			}
		]	
	};
	var temp = {};
	var count = 0;
	for (var i = 0; i < data.details.length; i++) {
		if (data.details[i].id == studentId) {
			temp = data.details[i];
			count++;
			break;
		}
	}
	if (count == 0) {
		data = JSON.stringify(data);
		res.send(data);
	} else {
		temp = JSON.stringify(temp);
		res.send(temp);
	}
	
});

module.exports = router;
