'use strict';

window.onload = function () {
  $("html").css('font-size', window.innerWidth / 10 + 'px');
  scroll()
};
window.onresize = function (){
  $("html").css('font-size', window.innerWidth / 10 + 'px');
};
function scroll (){
  var start = 0,
      distance = 0,
      delta = 0,
      last = [];
  var stop = -13.8*$('.web-map ul li')[0].offsetWidth;
  $('.web-map').on("touchstart",function(event){
    start = event.touches[0].pageX;
  })
  $('.web-map').on('touchmove',function(event){
    delta = event.touches[0].pageX-start;
    distance = delta+distance;
    if(distance>0)distance=0;
    else if(distance<stop)distance=stop;
    $('.web-map ul').css('left',distance+'px')
    last.push(delta);
    start = event.touches[0].pageX
  })
  $('.web-map').on('touchend',function(event){
    distance -= (last[last.length-1]-last[last.length-2])*3;
    console.log($('.web-map ul')[0].offsetLeft);
    $('.web-map ul').animate({"left":distance},300,()=>{
      if($('.web-map ul')[0].offsetLeft >= 0){
        $('.web-map ul').animate({'left':0},300)
      }
      else if($('.web-map ul')[0].offsetLeft <= stop){
        $('.web-map ul').animate({'left': stop + 'px'},300)
      }
    });
    last=[]
  })
}
scroll();

