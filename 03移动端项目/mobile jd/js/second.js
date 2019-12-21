window.onload = function () {
    var content_left = document.querySelector('.content_left');
    var ulBox = content_left.querySelector('ul:first-of-type');
    var lis = ulBox.querySelectorAll('li');


    var content_Height = content_left.offsetHeight;
    var ulBox_Height = ulBox.offsetHeight;
    var liHeight = ulBox_Height / lis.length;


    var minTop = content_Height - ulBox_Height;
    var maxTop = 0;
    var currentY = 0;

    var startY = 0;
    var moveY = 0;
    var distanceY = 0;

   ulBox.addEventListener('touchstart',function(e){
   startY = e.targetTouches[0].clientY;

   })
   ulBox.addEventListener('touchmove',function(e){
   moveY = e.targetTouches[0].clientY;
   distanceY = moveY - startY;

    if ((currentY + distanceY) > minTop -100 && (currentY + distanceY) < maxTop +100) {
        ulBox.style.transition = 'none';
        ulBox.style.top = (currentY + distanceY) + 'px';
    }

   })
    
   ulBox.addEventListener('touchend',function(e){

    currentY += distanceY;

    if((currentY+distanceY) > maxTop ){
        ulBox.style.transition = 'top  .4s';
        ulBox.style.top = maxTop + 'px';
        currentY = distanceY = 0;
    }
     if ((currentY + distanceY) < minTop ) {
         ulBox.style.transition = 'top  .4s';
         ulBox.style.top = minTop + 'px';
         currentY = minTop;
     }

   })

    if ('addEventListener' in document) {
        document.addEventListener('DOMContentLoaded', function() {
            FastClick.attach(document.body);
        }, false);
    }
    for(var i = 0; i < lis.length; i++) {
        lis[i].setAttribute('index',i);
    }

    ulBox.addEventListener('click',function (e) {
        for(var i = 0; i < lis.length; i++) {
            lis[i].classList.remove('current');
        }

        e.target.parentNode.classList.add('current');
        var index = e.target.parentNode.getAttribute('index');


        ulBox.style.transition = 'top .4s';
        if((-index*liHeight)<minTop) {
            currentY = minTop;
            return;
        }

        ulBox.style.top = -index*liHeight + 'px';
        currentY = -index*liHeight;
    })


    // itcast.tap(ulBox,function (e) {
    //
    //    for(var i = 0; i < lis.length; i++) {
    //        lis[i].classList.remove('current');
    //     }
    //
    //    e.target.parentNode.classList.add('current');
    //    var index = e.target.parentNode.getAttribute('index');
    //
    //
    //    ulBox.style.transition = 'top .4s';
    //     if((-index*liHeight)<minTop) {
    //      currentY = minTop;
    //       return;
    //     }
    //
    //    ulBox.style.top = -index*liHeight + 'px';
    //    currentY = -index*liHeight;
    // })


}