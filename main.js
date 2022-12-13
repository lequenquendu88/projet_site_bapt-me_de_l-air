$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        nav: false,
        pagination: true,
        dots: true,
        loop: true,
        margin:20,
        autoplay: true,
        autoplayspeed: 3000,
        responsive: {
            0: {
                items: 2
            },
            576: {
                items: 3
            },
            768: {
                items: 5
            },
            1200: {
                items: 7
            },
        }
    });
});
