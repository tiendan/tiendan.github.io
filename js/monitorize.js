/* ===========================================================
 * monitorize.js
 * ===========================================================
 * Copyright 2016 Onur Ferhat.
 * http://onurferhat.com
 *
 * A very jQuery plugin that allows you to present content
 * within a CSS-based monitor design.
 *
 * https://github.com/tiendan/monitorize.js
 *
 *
 * Plugin based on the design from Will Paige:
 *     http://codepen.io/willpaige/pen/rFElD
 *
 * which in turn is based on Pierre Borodin's design:
 *     https://dribbble.com/shots/997747-Apple-flat-devices-Episode-2-PSD?list=searches&tag=flat_icon
 *
 * ========================================================== */
/* Usage:
 * $("items").monitorize({
    type: "monitor",    // TYPE OF SCREEN: "monitor", "laptop", or "phone"
    base: true,     // DOES MONITOR HAVE A BASE? (Only for "monitor" type)
    shadow: true,   // DOES THE SCREEN HAVE A SHADOW?
    reflection: true,   // DOES THE SCREEN HAVE A SHINY REFLECTION?
    size: "small"   // SIZE OF DESIGN large-small
 })
 */

! function($) {
    var defaults = {
        id: "",
        type: "monitor",
        base: true,
        shadow: true,
        reflection: true,
        size: ""
    };

    $.fn.monitorize = function(options) {
        var settings = $.extend({}, defaults, options);

        return this.each(function() {
            var el = $(this);
            var sizeClass = "";
            var reflectionClass = ""

            if (settings.size !== "") {
                sizeClass = "mon-" + settings.size;
            }

            if (settings.reflection) {
                reflectionClass = "mon-reflection"
            }

            switch (settings.type) {
                case "monitor":
                    el.wrap('<div class="mon-container ' + sizeClass + '"><div class="mon-screen-container"><div class="mon-monitor mon-screen"><div class="mon-content ' + reflectionClass + '"></div></div></div></div>');

                    // Should the monitor have a base?
                    if (settings.base) {
                        var baseHtml = '<div class="mon-base-container"><div class="mon-base"><div class="mon-grey-shadow"></div></div><div class="mon-foot mon-top"></div><div class="mon-foot mon-bottom"></div>';
                        if (settings.shadow) {
                            baseHtml += '<div class="mon-shadow"></div>';
                        }

                        baseHtml += '</div>';

                        // Add the HTML code for the base piece
                        el.parent().parent().parent().after(baseHtml);
                    }
                    break;

                case "phone":
                    el.wrap('<div class="mon-container ' + sizeClass + '"><div class="mon-screen-container"><div class="mon-phone mon-screen"><div class="mon-content ' + reflectionClass + '"></div></div></div></div>')

                    /*
                    NO SHADOW FOR THE PHONE FOR NOW
                    if(settings.shadow) {
                          el.parent().parent().after('<div class="mon-base-container"><div class="mon-phone-base"><div class="mon-shadow"></div></div></div>');
                    }
                    */
                    break;

                case "laptop":
                    el.wrap('<div class="mon-container ' + sizeClass + '"><div class="mon-laptop-screen-container"><div class="mon-laptop mon-screen"><div class="mon-content ' + reflectionClass + '"></div></div></div></div>');

                    var baseHtml = '<div class="mon-base-container"><div class="mon-btm"></div>';
                    if (settings.shadow) {
                        baseHtml += '<div class="mon-shadow"></div>';
                    }

                    baseHtml += '</div>';

                    // Add the HTML code for the base piece
                    el.parent().parent().parent().after(baseHtml);
                    break;
            }
        });
    }

}(window.jQuery);