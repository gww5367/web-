
    $('.nav-tabs a').click(function (e) {
      e.preventDefault()
      $(this).tab('show')
    })

    $('.lorg').on('click',function(){
       $('.denglu').fadeIn(100);
       $('.header').addClass('newblur');
       $('.footer').addClass('newblur');
       $('.section').addClass('newblur');
   })

    $('.close').on('click',function(){
       $('.denglu').fadeOut(100);
       $('.zhuce').fadeOut(100);
       $('.header').removeClass('newblur');
       $('.footer').removeClass('newblur');
       $('.section').removeClass('newblur');
   })

    $('.register').on('click',function() {
       $('.denglu').hide();
       $('.zhuce').fadeIn(100);
    });
   
    $('.back').on('click',function() {
       $('.zhuce').hide();
       $('.denglu').fadeIn(100);
    });
