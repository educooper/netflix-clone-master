$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
$(document).ready(function() {

    $('.video').fancybox({
            maxWidth    : 800,
            maxHeight   : 600,
            fitToView   : false,
            width       : '65%',
            height      : '65%',
            autoSize    : true,
            closeClick  : true,
            openEffect  : 'none',
            closeEffect : 'none'
        });
})
