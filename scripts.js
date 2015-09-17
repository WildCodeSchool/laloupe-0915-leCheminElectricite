var firtTime = true;

$(document).ready(function() {

    $('#fullpage').fullpage({
        anchors:['startPage', 'mainPath'],

        //load explication modal just once on load of second section
        afterLoad: function(anchorLink, index){
            var loadedSection = $(this);

            
            if(anchorLink == 'mainPath' && firtTime == true) {
                $('.firstTime').trigger('click')
                firtTime = false;
            }
        },
        onSlideLeave: function( anchorLink, index, slideIndex, direction, nextSlideIndex) {
            var leavingSlide = $(this);
            
            //leaving furniture for roleerdf
            if(index == 2 && slideIndex == 3 && direction == 'right'){
                $.fn.fullpage.setAutoScrolling(false);
            }
        }
            
    });

    var slide = 1;

    $(document).keydown(function(e) {
        switch(e.which) {
            case 37: slide--;
                break;

            case 39: slide++;
                break;

            default: return; // exit this handler for other keys
        }
        e.preventDefault(); // prevent the default action (scroll / move caret)
    });

    function cloud() {
        $('.cloud').animate({
            top: "23%"
        }, 1800);
        $('.cloud').animate({
            top: "24%"
        }, 1800);
        cloud();
    };

    function rotor() {
        $('.rotor-1').transition({ rotate: '60000000deg' }, 7500000000, 'linear');
    };

    function rotor2() {
        $('.rotor-2').transition({ rotate: '60000000deg' }, 5600000000, 'linear');
    };

    var x = 1;

    rotor();
    rotor2();
    cloud();
});