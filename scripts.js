$(document).ready(function() {
    
    $('#fullpage').fullpage({
        anchors:['startPage', 'mainPath'],
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
    
    rotor();
    rotor2();
    cloud();
});
