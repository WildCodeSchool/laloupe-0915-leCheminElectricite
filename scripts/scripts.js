$(document).ready(function() {

    var firtTime = true;
    $('#fullpage').fullpage({
        anchors:['startPage', 'mainPath'],
        loopHorizontal: false,

        //load explication modal just once on load of second section
        afterLoad: function(anchorLink, index){
            var loadedSection = $(this);


            if(anchorLink == 'mainPath' && firtTime == true) {
                $('.firstTime').trigger('click')
                firtTime = false;
            }
        },
        afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex){
            var loadedSlide = $(this);

            //first slide of the second section
            if(anchorLink == 'mainPath' && slideIndex == 1){
                $(".upanim").css('animation', 'upanim 2s ease');
                $(".upanim").css('opacity', '1');
            }
        },

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