var express = require('express');
var router = express.Router();
var MongoClient = require("mongodb").MongoClient;



router.post('/', function(req, res, next) {
	var response = { msg:''};
	var mongoclient = MongoClient.connect("mongodb://localhost:27017", { useNewUrlParser: true }, function(err, client){
		var db = client.db('empdb');
		db.collection("logindetails", function(err, collection){
			var acountDetails = [];
			collection.find().toArray(function(err, items) {
            if(err) throw err;    
           acountDetails = items;  
           console.log("hereeee");
						for (var i = 0; i < acountDetails.length; i++) {
							if (acountDetails[i].uid == req.body.userId && acountDetails[i].pwd == req.body.pwd) {
									response.msg = "Valid";
									response = JSON.stringify(response);
									db.close();
									res.send(response);
									
							}
					}  
					if (response.msg != 'Valid')   {
						response.msg = "InValid";
						db.close();
						response = JSON.stringify(response);
  					res.send(response);
					}
     });

		})
	})

	/*if (req.body.userId == 'admin' && req.body.pwd == 'india') {
		response.msg = "Valid";
	} else {
		response.msg = "InValid";
	}
	response = JSON.stringify(response);
  	//res.send(response);*/
});

module.exports = router;
