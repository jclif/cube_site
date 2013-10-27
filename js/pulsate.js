(function($) {
    $.fn.pulsate = function(options) {
        var defaults = {
            fadeIn: 1000,
            fadeInDelay: 150,
            fadeOut: 1000,
            fadeOutDelay: 150
        };

        var settings = $.extend({}, defaults, options);

        function fadeOutIn(element) {
            $(element || this).delay(settings.fadeOutDelay)
                .fadeOut(settings.fadeOut)
                .delay(settings.fadeInDelay)
                .fadeIn(settings.fadeIn, fadeOutIn);
        }

        this.each(function() {
           fadeOutIn(this);
        });
    };
})(jQuery);
