window.onload = function () {
    var jd_login =document.querySelector('.jd_login');
    document.onscroll = function () {
        var tp = document.documentElement.scrollTop;
        var  bili = tp/180;
        if(tp<180){
            jd_login.style.background = 'rgba(233,35,34,'+bili+')';
        }
    }

    var span = document.querySelector('.time').querySelectorAll('span');

    var time = 3785;
   var timeId = setInterval(function () {
        time--;
        if(time < 0) {
           clearInterval(timeId);
           return;
        }
        var h = Math.floor(time/3600);
        var m = Math.floor(time%3600/60);
        var s = Math.floor(time%60);


        span[0].innerText = ''+Math.floor(h/10)+'';
        span[1].innerText = ''+Math.floor(h%10)+'';
        span[3].innerText = ''+Math.floor(m/10)+'';
        span[4].innerText = ''+Math.floor(m%10)+'';
        span[6].innerText = ''+Math.floor(s/10)+'';
        span[7].innerText = ''+Math.floor(s%10)+'';
    },1000);
     
    var carousel_box = document.querySelector('.carousel_box');
    var jd_crl = carousel_box.querySelector('.jd_crl');

    var firstc = jd_crl.firstElementChild;
    var lastc = jd_crl.lastElementChild;

    jd_crl.appendChild(firstc.cloneNode(true));
    jd_crl.insertBefore(lastc.cloneNode(true),firstc);
    var lis = jd_crl.querySelectorAll('li');
    var w = carousel_box.offsetWidth ;
    var lis = jd_crl.querySelectorAll('li');
    var count = lis.length;

    jd_crl.style.width = w* count + 'px';

    for (var i = 0; i < lis.length; i++) {
        lis[i].style.width = w + 'px';
    }

    var index = 1;
    jd_crl.style.left = -w*index + 'px';
     window.onresize = function () {
         w = carousel_box.offsetWidth ;
         jd_crl.style.width = w* count + 'px';

         for (var i = 0; i < lis.length; i++) {
             lis[i].style.width = w + 'px';
         }
         jd_crl.style.left = -w*index + 'px';

     }
    var timeId;
    var startTime = function () {
        timeId  = setInterval(function () {

            index++;
            jd_crl.style.transition = 'left .3s ';
            jd_crl.style.left = -w*index + 'px';

            setTimeout(function () {
                if(index == count - 1) {
                    index = 1;
                    jd_crl.style.transition = 'none';
                    jd_crl.style.left = -w*index + 'px';
                }
            },500)
        },1500)
    }
    startTime();

    var point = function (index) {
        var jd_pt = document.querySelector('.jd_pt');
        var lis = jd_pt.querySelectorAll('li');
        for(var i = 0; i < lis.length; i++) {
            lis[i].classList.remove('current');
        }
        lis[index-1].classList.add('current');
    }

    var startX,moveX,distanceX;
    var isEnd = true;
    jd_crl.addEventListener('touchstart',function (e) {
       startX = e.targetTouches[0].clientX;
        clearInterval(timeId);
    })
    jd_crl.addEventListener('touchmove',function (e) {
        if(isEnd) {
            moveX = e.targetTouches[0].clientX;
            distanceX = moveX - startX;
            jd_crl.style.transition = 'none';
            jd_crl.style.left =  -w*index+distanceX + 'px';
        }
    })
    jd_crl.addEventListener('touchend',function (e) {
        isEnd = false;
        if(Math.abs(distanceX)>100) {
             if(distanceX>0) {
                 index--;
             }else {
                 index++;
             }
             jd_crl.style.transition = 'left .3s';
             jd_crl.style.left =  -w*index + 'px';
         }
         else if (Math.abs(distanceX) > 0) {
             jd_crl.style.transition = 'left .3s';
             jd_crl.style.left =  -w*index + 'px';
         }
        distanceX = 0;
         moveX = 0;
         startX = 0;
    })

    jd_crl.addEventListener('transitionend',function () {
        if(index == 0) {
            index = count - 2;
            jd_crl.style.transition = 'none';
            jd_crl.style.left =  -w*index + 'px';
        }
        if(index == count - 1 ) {
            index = 1;
            jd_crl.style.transition = 'none';
            jd_crl.style.left =  -w*index + 'px';
        }
        point(index);
        setTimeout(function () {
            isEnd = true;
            clearInterval(timeId);
            startTime();
        },1000)

    })

}