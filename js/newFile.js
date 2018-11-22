$(function () {
    $.ajax({
        type: "get",
        url: "http://193.112.55.79:9090/api/getcategorytitle",
        dataType: "json",
        success: function (res) {
            // console.log(response)
            var html = template('mmb_title', res);
        }
    });
});