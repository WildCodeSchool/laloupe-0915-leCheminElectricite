$(document).ready(function() {
    
    $('#fullpage').fullpage({
        anchors:['startPage', 'mainPath'],
    });
            
    function rotor() {
        $('.rotor-1').transition({ rotate: '60000000deg' }, 7500000000, 'linear');
    };

    function rotor2() {
        $('.rotor-2').transition({ rotate: '60000000deg' }, 5600000000, 'linear');
    };
    
    var slide = 1;
    
    function moveCloud(slide) {
        switch(slide) {
            case 1:  
                $('.cloud-one').animate({
                    left: '40%'
                }, 800);
                $('.cloud-two').animate({
                    left: '100%'
                }, 800);
            break;
        
            case 2:
                $('.cloud-one').animate({
                    left: '30%'
                }, 800);
                $('.cloud-two').animate({
                    left: '90%'
                }, 800);
            break;
                
            case 3:
                $('.cloud-one').animate({
                    left: '20%'
                }, 800);
                $('.cloud-two').animate({
                    left: '80%'
                }, 800);
            break;
                
            case 4:
                $('.cloud-one').animate({
                    left: '10%'
                }, 800);
                $('.cloud-two').animate({
                    left: '70%'
                }, 800);
            break;
        }
    }
    
    function goGoGo(direction, slide) {
        moveCloud(slide);
        if (slide == 1) {
            rotor();
            rotor2();
        }
    };
    
    $(document).keydown(function(e) {
        switch(e.which) {
            case 37: //gauche
                slide--;
                if (!(slide))
                    slide = 4;
                goGoGo(0, slide);
            break;

            case 39: //droite
                slide++;
                if (slide == 5)
                    slide = 1;
                goGoGo(1, slide);
            break;

            default: return;
        }
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
    
    var x = 1;
    
    goGoGo(0, slide);
    
});
