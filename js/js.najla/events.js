//...the Counterdown time in next event
const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

let countDown = new Date('Sep 30, 2020 00:00:00').getTime(),
    x = setInterval(function() {

        let now = new Date().getTime(),
            distance = countDown - now;

        document.getElementById('days').innerText = Math.floor(distance / (day)),
            document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

        // // do something later when date is reached
        // if (distance < 0) {
        //  clearInterval(x);
        //  'IT'S MY BIRTHDAY!;
        // }

    }, second);

// .......End the Counterdown time in next event.......

//owl carsouel all events
$(document).ready(function() {
    $("#owl-example").owlCarousel({
        items: 3,
        responsive: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            900: {
                items: 2
            },
            1100: {
                items: 3
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

    //owl carsouel for expired events...
    $("#owl-demo").owlCarousel({
        items: 3,
        responsive: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            900: {
                items: 2
            },
            1100: {
                items: 3
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
});
