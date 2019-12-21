var video = $("video").get(0); 
$('.close').on('click',function () { 
   $(this).parent().fadeOut();  
    $('.box').show(); 
    $('.bg').removeClass('newblur');
    video.pause(); 
    $(".switch").addClass("fa-play").removeClass('fa-pause'); 
 })
$('.nav ul').on('click',function(e){
    var cn = '.' + $(e.target).data("name");
    $(cn).fadeIn(800);
    $('.box').hide();
    $('.bg').addClass('newblur')
})
$(window).on('resize',function() {
   if($(window).width() < 707) {
      $('.fir').hide();
      $('.sec').hide();
      $('.name').val('   NAME');
      $('.email').val('   EMAIL');
   }else {
      $('.fir').show();
      $('.sec').show();
      $('.name').val('');
      $('.email').val('');
   }
})
$('input').on('focus',function(){
   $('.fir').val('');
   $('.sec').val('');
})
