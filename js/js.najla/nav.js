$(document).ready(function() {
    $(window).scroll(function() {
        var top = $("body , html").scrollTop()
        if (top > 100) {
            $(".navbar").addClass("class-nav")
            $(".navbar .nav-link").addClass("nav-link22")
        } else {
            $(".navbar").removeClass("class-nav")
            $(".navbar a").removeClass("nav-link22")
        }
    });
});