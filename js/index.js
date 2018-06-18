// (function () {
//   setTimeout(function () {
//     document.body.classList.toggle('open-state');
//     // $(".loder").delay(3000).css("display","none")
//   }, 2000)

// })();
var $slider = $('.wrapper');
var startTime = Date.now(); //开始时间
var time = 3000; //间隔时间
var timer;
var numberOfSlides = $slider.find('.panel').length;
$slider.find('.panel:eq(0)').addClass('_active');
var $activeSlide = $slider.find('.panel._active');

function nextSlide() {
  $activeSlide = $slider.find('.panel._active');
  if ($activeSlide.index() == numberOfSlides - 1) {
    return
  } else {
    var $nextSlide = $activeSlide.next('.panel');//在这儿做判断
    $activeSlide.removeClass('_active');
    $nextSlide.addClass('_active');
    console.log("下翻");
    if ($activeSlide.index() == 0) {
      $(".nav>div").removeClass("nav-list").addClass("active")
    }
    if($activeSlide.index() == 1){
      $(".nav>div").removeClass("active").addClass("three")
    }
  }
}
function prevSlide() {
  $activeSlide = $slider.find('.panel._active');
  if ($activeSlide.index() == 0) {
    return console.log($activeSlide.index())
  } else {
    var $prevSlide = $activeSlide.prev('.panel');//在这儿做判断
    $activeSlide.removeClass('_active');
    $prevSlide.addClass('_active');
    console.log("上翻");
    if ($activeSlide.index() == 1) {
      $(".nav>div").removeClass("active").addClass("nav-list")
    }
    if($activeSlide.index() == 2){
      $(".nav>div").removeClass("three").addClass("active")
    }
  }
}

function scrollFunc(e) {
  e = e || window.event;
  let currentTime = Date.now();
  // console.log(startTime,currentTime,time)
  if (currentTime - startTime >= time) {
    if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件               
      if (e.wheelDelta > 0) { //当滑轮向上滚动时  
        prevSlide();
      }
      if (e.wheelDelta < 0) { //当滑轮向下滚动时  
        nextSlide();
      }
    } else if (e.detail) {  //Firefox滑轮事件  
      if (e.detail > 0) { //当滑轮向上滚动时  
        prevSlide();
      }
      if (e.detail < 0) { //当滑轮向下滚动时  
        nextSlide();
      }
    }
    startTime = currentTime;
  } else {
    return
  }
}
//给页面绑定滑轮滚动事件  
if (document.addEventListener) {//firefox  
  document.addEventListener('DOMMouseScroll', scrollFunc, false);
}
//滚动滑轮触发scrollFunc方法  //ie 谷歌
window.onmousewheel = document.onmousewheel = scrollFunc;

$('#sky').on('mousemove', function (e) {
  //公式
  var offsetX = e.clientX / window.innerWidth - 0.5,
    offsetY = e.clientY / window.innerHeight - 0.5;
  var _left = -0.6 * offsetX;
  var _bottom = -0.6 * offsetY;
  //应用公式
  $('#skyimg').css('left', 10 + _left * 1 + "%").css('bottom', 37.3 + _bottom * 1 + "%");  //将您的left值和top值先+此数值，*的小数越大，动的越大，否则越小
});