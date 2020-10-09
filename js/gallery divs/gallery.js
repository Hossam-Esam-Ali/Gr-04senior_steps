$(window).scroll(function () {
  var top = $("body , html").scrollTop()

  if (top > 100) {
      $(".navbar").addClass("class-nav")
      $(".navbar .nav-link").addClass("nav-link22")
  } else {
      $(".navbar").removeClass("class-nav")
      $(".navbar a").removeClass("nav-link22")
  }
});


$(".page1").hide(),
$(".page2").hide(),


$(".btnn0").click(function () {
  $(".page0").show(1000),
  $(".page1").hide(1000),
  $(".page2").hide(1000)

})

$(".btnn1").click(function () {
$(".page0").hide(1000),
$(".page1").show(1000)
$(".page2").hide(1000)

})

$(".btnn2").click(function () {
$(".page0").hide(1000),
$(".page1").hide(1000),
$(".page2").show(1000)


})

















