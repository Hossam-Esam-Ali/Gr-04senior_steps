$(".up-to").click(function () {
    $("body , html").animate({
        scrollTop: 0
    }, 2000)
});

var data = ["Frontend" , "Backend" , "Angular" , "JS" , "Full Stack" , "Android Camp 3*1" , "Sestem adminstration"];
$(".auto-complete").autocomplete({
    source:data
})

$(".sliderr").owlCarousel({
    items: 3,
    responsive: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        }
    },
    autoPlay: 3000,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    autoHeight: true,
    merge: true,
    loop: true,
    margin: 10,
    video: true,
    lazyLoad: true,
    center: true
});


AOS.init()


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


$(".Trainers ").owlCarousel({
    items: 3,
    margin:20,
    responsive: true,
    responsive: {
        0: {
            items: 1
        },
        425: {
            items: 2
        },
        800: {
            items: 3
        },
        1000: {
            items: 4
        }
    },
    autoPlay: 2000,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    autoHeight: true,
    merge: true,
    loop: true,
    margin: 10,
    video: true,
    lazyLoad: true,
    center: true
});

$(".success").owlCarousel({
    items: 3,
    margin:20,
    responsive: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        }
    },
    autoPlay: 2000,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    autoHeight: true,
    merge: true,
    loop: true,
    margin: 10,
    video: true,
    lazyLoad: true,
    center: true
});

