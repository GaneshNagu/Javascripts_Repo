var express = require("express");
var router = express.Router();

router.get("/", function(req, res){
	var data = {
		name: "raj",
		age: 20,
		gender: "Male"
	}
	res.send(data);
});


module.exports = router;