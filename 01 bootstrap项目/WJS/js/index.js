$(function () {
    var items = $('.carousel-inner .item');
    $(window).on('resize',function () {
        if($(window).width() <= 768) {
           for(var i = 0; i < items.length; i++) {
               var item = items[i];
             //  console.log(item.getAttribute('data-mb'));
              var src = item.dataset.mb;
               $(item).html("<a href='javascript:;'><img src='"+src+"'></a>");
           }
        }
        else {
            for(var i = 0; i < items.length; i++) {
                var item = items[i];
                //  console.log(item.getAttribute('data-mb'));
                var src = item.dataset.pc;
                // console.log(src);
                var pa = document.createElement('a');
                pa.href = 'javascript:;';
                pa.className = 'pca';
                pa.style.backgroundImage = 'url('+src+')';

                $(item).html(pa);
               // console.log(item);
            }
        }
    }).trigger('resize');


    /*添加移动端的滑动操作*/
    var startX,endX;
    var carousel_inner=$(".carousel-inner")[0];

    /*获取当前轮播图*/
    var carousel=$(".carousel");

    carousel_inner.addEventListener("touchstart",function(e){
        startX= e.targetTouches[0].clientX;
    });
    carousel_inner.addEventListener("touchend",function(e){
        endX= e.changedTouches[0].clientX;
        if(endX-startX > 0){
            /*上一张*/
            carousel.carousel('prev');
        }
        else if(endX-startX < 0){
            /*下一张*/
            carousel.carousel('next');
        }
    });

    $('[data-toggle="tooltip"]').tooltip();

    var widthSum = 0;
    var ul = $('.wjs_recommend .nav-tabs');
    var lis = ul.find('li');
    $(lis).each(function (index,value) {
        widthSum+= $(value).outerWidth(true);
    })
    ul.width(widthSum);


    var myScroll = new IScroll('.nav_fat',{
        scrollX: true,
        scrollY: false
    });
})