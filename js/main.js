$(document).ready(function() {
    $('.top-background').flowtype({
       minimum : 0,
       maximum : 600
    });
    $('#logo').on('click', function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 500);

    });

    var slider = $('#slider').tinycarousel({
        interval: true,
        intervalTime: 2000
    }).data('plugin_tinycarousel');

    var popover = $('[data-toggle="popover"]');
    popover.popover();
    popover.on('show.bs.popover', function () {
        slider.stop();
    });
    popover.on('hidden.bs.popover', function () {
        slider.start();
    });
});