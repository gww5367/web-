 $(function(){
         
            $('.photo_show li').on('mouseenter',function(){
             $(this).children(".cover").show().animate({
             	width: 300,
             	height: 200},
             	'fast', function() {
             	/* stuff to do after animation is complete */
             });
            $(this).find("img").animate({
             	width: 300,
             	height: 200},
             	'fast', function() {
             	/* stuff to do after animation is complete */
             });
            });
   
            $('.photo_show li').on('mouseleave',function(){
         	$(this).children(".cover").hide().animate({
             	width: 290,
             	height: 180},
             	'fast', function() {
             	/* stuff to do after animation is complete */
             });
         	$(this).find("img").animate({
             	width: 290,
             	height: 180},
             	'fast', function() {
             	/* stuff to do after animation is complete */
             });
            });
  
           //导航显示
        $(window).on('scroll',function(){
            var $scroll=$(this).scrollTop();
            if($scroll>=900){
                $('#loutinav').show();
            }else{
                $('#loutinav').hide();
            }
            //滚动页面导航切换
            var $louti1top=$('.louti1').offset().top;
            var $louti2top=$('.louti2').offset().top;
            var $louti3top=$('.louti3').offset().top -200;
            // console.log($louti1top);
            // console.log($louti2top);
            // console.log($louti3top);
            // console.log($scroll);
            if($scroll  >= $louti1top) {
                $('#loutinav li').removeClass('active');
            $('#loutinav li').eq($('.louti1').data('index')).addClass('active'); 
            }
            if($scroll >= $louti2top) {
                $('#loutinav li').removeClass('active');
            $('#loutinav li').eq($('.louti2').data('index')).addClass('active');
            }
            if($scroll >= $louti3top) {
                $('#loutinav li').removeClass('active');
            $('#loutinav li').eq($('.louti3').data('index')).addClass('active'); 
            }
        });
            //点击导航跳转
        var $loutili=$('#loutinav li').not('.last');
        $loutili.on('click',function(){
            $(this).addClass('active').siblings('li').removeClass('active');
            var $loutitop=$('.louti').eq($(this).index()).offset().top;
            $('html,body').animate({
                scrollTop:$loutitop
            });
        });
            //回到顶部
        $('.last').on('click',function(){
            $('html,body').animate({
                scrollTop:0
            });
        });
         $('#lm').on('click',function(){
            $('html,body').animate({
                scrollTop:$(window).height()
            });
        });

        //商品展示
        // console.log($('.protfoloio_nav ul li'));
        var lis = $('.protfoloio_nav ul li');
        lis.on('click',function(e){
            $(this).addClass('active').siblings('li').removeClass('active');
            $('.photo_show ul').eq($(this).index()).slideDown(400).siblings('ul').hide();
        })
  })