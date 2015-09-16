$(document).ready(function() {

    $('#fullpage').fullpage({
        anchors:['startPage', 'mainPath'],

        //load explication modal just once on load of second section
        afterLoad: function(anchorLink, index){
            var loadedSection = $(this);

            var firtTime = true;
            if(anchorLink == 'mainPath' && firtTime == true) {
                $('#modal-1, md-overlay').addClass("md-show")
                firtTime = false;
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