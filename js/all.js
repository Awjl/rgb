$(window).scroll(function () {
  console.log("aaa")
  if ($(".ourslist").offset().top - $("body").scrollTop() <= 0) {
    $(".ourslist ul").addClass(".animated");
    console.log("bbb")
  } else {
    $(".ourslist ul").addClass(".animated");
    console.log("ccc")
  }
})