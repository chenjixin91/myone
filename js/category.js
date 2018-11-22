$(function () {
    $.ajax({
        type: "get",
        url: "http://193.112.55.79:9090/api/getcategorytitle",
        dataType: "json",
        success: function (res) {
            var html = template('mmb_title', res);
            $('.mmb_category').html(html);
            var titleId;
            var flag;
            $('.mmb_category >.mmb_cy').on('click','h4 ',function(){
              
               var id =$(this).attr('id')
               $.ajax({
                   type: "get",
                   url: "http://193.112.55.79:9090/api/getcategory",
                   data: {titleid:id},
                   dataType: "json",
                   success: function (res) {
                    console.log(res)
                      var html=template('pageTp',{list:res.result})
                      console.log(html)
                      $('.mmb_cy > ul').html(html);
                       
                   }
               });
            })

        }
    })


})