
    $('.nav-tabs a').click(function (e) {
      e.preventDefault()
      $(this).tab('show')
    })
   // 编辑
    $('.edit').on('click',function(){
        var bt = $(this).parent().siblings().eq(1).text();
        var lm = $(this).parent().siblings().eq(2).text();
        var nr = $(this).parent().siblings().eq(3).text();
        var fbr = $(this).parent().siblings().eq(4).text();

        $('.editor').show();
        $('#ntitle').val(bt);
        $('#ncontent').val(nr);
        $('#nperson').val(fbr);
        
    })
   // 删除
    $('.delete').on('click',function() {
        $('.del').fadeIn(100);
    })
   // 取消
    $('.cancle').on('click',function() {
        $('.del').hide();
    })
    // 关闭
    $('.close').on('click',function(){
         $('.editor').hide();
    })
