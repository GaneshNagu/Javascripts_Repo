var express = require('express');
var router = express.Router();
var MongoClient = require("mongodb").MongoClient;

router.post('/', function(req, res, next) {
    var response = { msg: '' };
    var mongoclient = MongoClient.connect("mongodb://localhost:27017", { useNewUrlParser: true }, function(err, client) {
        var db = client.db('empdb');
        db.collection("logindetails", function(err, collection) {
            collection.find().toArray(function(err, userDetails) {
                var response = {};
                var isDuplicate = false;
                console.log(userDetails);
                for (var i = 0; i < userDetails.length; i++) {
                    if (userDetails[i].uid == req.body.uid) {
                        isDuplicate = true;
                    }
                }
                if (isDuplicate) {
                    response.msg = "User Already Exists";
                    response = JSON.stringify(response);
                    res.send(response);
                } else {
                    collection.insert(req.body, function(err) {
                        if (err) {
                            res.msg = "ERRor"
                        } else {
                            response.msg = "INSERTED";
                        }
                        response = JSON.stringify(response);
                        res.send(response);
                    })
                }
            });


        })
    })
});

module.exports = router;