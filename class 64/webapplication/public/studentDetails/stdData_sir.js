function getStdData() {
    var url = "http://localhost:8082/data/student/info";
    var req = $.ajax({
        url: url,
        method: 'GET',
        dataType: 'JSON'
    });
    req.done(function(res) {
        console.log("response is");
        console.log(res.details);
        loadDetails(res.details);
    })
}

function loadDetails(data) {
    for (var i = 0; i < data.length; i++) {
        $("#container").loadTemplate($("#stdTmplt"), data[i], { append: true });
    }
}

function showBlock(tabType) {

    if (tabType == 'tab1') {
        $(".tab1Container").show(500);
        $(".tab2Container").hide();
    } else {
        $(".tab2Container").show(500);
        $(".tab1Container").hide();
    }
}

function searchUserDetails() {
    var userId = $("#userId").val();
    var url = "http://localhost:8082/data/student/info";
    var req = $.ajax({
        url: url,
        dataType: 'JSON',
        method: 'GET',
        data: {
            studentId: userId,
            sample: 'tes'
        }
    });
    req.done(function(res) {
        console.log("respone is");
        console.log(res);
    });
}

function valideDetails() {
    var url = "http://localhost:8082/validate/logindetails";
    var loginReq = $.ajax({
        url: url,
        method: 'POST',
        dataType: 'JSON',
        data: {
            userId: $("#usname").val(),
            pwd: $("#upiwd").val()
        }
    });
    loginReq.then(function(res) {
        console.log("success");
        console.log(res);
        if (res.msg == 'Valid') {
            $(".loginBlock").hide();
            $(".mainContainer").show(500);
        } else {
            $(".err").show(500);
        }
    }, function(err) {
        console.log("err");
        console.log(err);
    })
}