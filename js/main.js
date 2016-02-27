function slider(running) {

}
$(document).ready(function() {
    $('#logo').on('click', function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 500);

    });
    var slider = $('#slider').tinycarousel({
        interval: true
    }).data("plugin_tinycarousel");

    var popover = $('[data-toggle="popover"]');
    popover.popover();
    popover.on('show.bs.popover', function () {
        slider.stop();
    });
    popover.on('hidden.bs.popover', function () {
        slider.start();
    });
});