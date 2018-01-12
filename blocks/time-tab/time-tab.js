$(document).ready( () => {
    $(".owl-carousel.time-tab__info").owlCarousel({
        items:4,
        stagePadding: 25,
        responsive:{
            0 : {
                items:1
            },
            600:{
                items:2
            },
            900:{
                items:3
            },
            1200:{
                items:4
            },
        }
    });

    $(".time-tab__interval").click(function()  {
        $(".time-tab__interval").removeClass("time-tab__interval-active");
        $(this).addClass("time-tab__interval-active");

        $(".monitor__value").each((index, item) => {
            $(item).text(Math.floor(Math.random() * 100000));
        })
        $(".monitor__val-percents").each((index, item) => {
            $(item).text(Math.floor(Math.random() * 99 + 1) + "% increase");
        })
    })
})
