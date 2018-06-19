$(window).scroll(function () {
  if($(window).scrollTop()+$(window).height()>$(".title-one").offset().top) {
    $(".title-one").css({opacity:"1"});
  }
  if($(window).scrollTop()+$(window).height()>$(".title-two").offset().top ) {
    $(".title-two ").css({opacity:"1"});
  }
  if($(window).scrollTop()+$(window).height()>$(".title-three").offset().top) {
    $(".title-three").css({opacity:"1"});
  }
  if ($(window).scrollTop()+$(window).height()>$(".ourslist").offset().top) {
    $(".ourslist ul").addClass("animated");
  } 
  if ($(window).scrollTop()+$(window).height()>$(".welfare").offset().top) {
    $(".welfare ul").addClass("animated");
  } 
  if ($(window).scrollTop()+$(window).height()>$(".recruit-list").offset().top) {
    $(".recruit-list").addClass("animatedDiv");
  } 
  $(".recruit-list>div").click(function() {
    $(this).addClass("all-recruit")
    console.log("11");
  })

})