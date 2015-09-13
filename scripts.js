$(document).ready(function() {
    
    
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
        $('.rotor').transition({ rotate: '360deg' }, 7500, 'linear');
        $('.rotor').transition({ rotate: '0' }, 7500, 'linear');
        rotor();
    }
    
  //  cloud();
    rotor();
});
