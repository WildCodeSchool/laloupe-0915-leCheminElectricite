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
        $('.rotor').transition({ rotate: '60000000deg' }, 7500000000, 'linear');
    };
    
  //  cloud();
    rotor();
});
