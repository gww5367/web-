
var newsT = document.getElementById('newsT');
var newsContainer = document.getElementById('newsContainer');
var flag = document.getElementById('flag');

   for ( var i = 0; i < newsT.children.length - 2; i++) {
           var link = newsT.children[i];
           link.setAttribute('index', i);
              

              link.onmouseover = linkOver;
   }
   
   function linkOver() {  
                  
                   var target = this.offsetLeft;
                   animate(flag, target - 3, 30, 20);

                   for (var i = 0 , le = newsContainer.children.length; i < le; i++) {
                          newsContainer.children[i].className = 'news-b hide';          
                   }

                  var index = parseInt(this.getAttribute('index'));
              	  newsContainer.children[index].className = 'news-b show';
             
              }

   function animate(ele,target,interval,steps) {
   	           if (timeId) {
                	clearInterval(timeId);
                	timeId = null;
                } 

                var timeId = setInterval(function () {
     
                     var current = ele.offsetLeft;
                     var step = steps;

                     if (target < current) {
                     	step = - Math.abs(step);
                     }
                     if (Math.abs(target - current) <= Math.abs(step)) {
                     	clearInterval(timeId);
                     	ele.style.left = target + 'px';
                     	return;
                     }
                     current += step;
                     ele.style.left = current + 'px';

                },interval);
   }