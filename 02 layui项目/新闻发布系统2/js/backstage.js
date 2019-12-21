layui.use('element', function(){
      var element = layui.element;
    
    });

    layui.use('form', function(){
    var form = layui.form;
  
    //监听提交
    form.on('submit(formDemo)', function(data){
       layer.msg(JSON.stringify(data.field));
       return false;
       });
    });

    $('.nav li').on('click',function(e){
    	var index = $(this).index();
    	$('.content').find('div').hide().eq(index).show();
    })

    $('.yes').on('click',function() {
    	console.log(11)
    });

    $('.add').on('click', function() {
    	$('.addnews').fadeIn(400);
    });

    $('.clo').on('click', function() {
    	$('.addnews').hide();
    });
    
    $('.del').on('click', function() {
    	$('.shanchu').show(100);
    	setTimeout(function(){
    		$('.shanchu').fadeOut(400);
    	},1000)
    });

     $('.edit').on('click',function(){

        $('.editnew').show();
        $('.bt').val($(this).parent().siblings().eq(1).text());
        $('.lm').val($(this).parent().siblings().eq(2).text());
        $('.nr').val($(this).parent().siblings().eq(3).text());
    })

     $('.cancle').on('click', function() {
      $('.editnew').hide();
     });