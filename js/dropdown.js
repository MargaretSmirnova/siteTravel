/**
 * Created by User on 26.09.2016.
 */
$(document).ready(function() {
    $('.special').fadeIn(1500);

    $('#top ul li').hover(
        function () {

            $('ul:first', this).slideDown(150);
        },

        function () {
            $('ul:first', this).slideUp(150);
        }

    );

});
