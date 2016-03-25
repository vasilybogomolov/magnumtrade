/**
 * Created by Василий on 29.10.2015.
 */

$(document).ready(function() {
    $(function () {
        var elWrap = $('.news-slider'),
            el =  elWrap.find('.slider-control'),
            indexImg = 1,
            indexMax = el.length;

        function change () {
            el.fadeOut(500);
            el.filter(':nth-child('+indexImg+')').fadeIn(500);
            $('.button-control.selected').removeClass('selected');
            $('.button-control[data-item="'+indexImg+'"]').addClass('selected');
        }

        function autoChange () {
            indexImg++;
            if(indexImg > indexMax) {
                indexImg = 1;
            }
            change (indexImg);
        }
        var interval = setInterval(autoChange, 3000);

        elWrap.mouseover(function() {
            clearInterval(interval);
        });
        elWrap.mouseout(function() {
            interval = setInterval(autoChange, 3000);
        });
        function addButtonControl() {
            for (var i = 1; i <= indexMax; i++) {
                $('.slider-button').append('<span class="button-control" data-item="' + i + '"></span>');
                if (i==1){
                    $('.button-control').addClass('selected');
                }

            }
        }
        addButtonControl();

        $('.button-control').on('click', function() {
            $('.button-control.selected').removeClass('selected');
            $(this).addClass('selected');
            indexImg = $(this).attr('data-item');
            console.log(indexImg);
            change ();
        });
        /*$('span.prev').click(function() {
         indexImg--;
         if(indexImg < 1) {
         indexImg = indexMax;
         }
         change ();
         });*/
    });
});
