$(document).ready(function() {

    var firstTime = true;
    $('#fullpage').fullpage({
        anchors:['startPage', 'mainPath'],
        loopHorizontal: false,

        //load explication modal just once on load of second section
        afterLoad: function(anchorLink, index){
            var loadedSection = $(this);


            if(anchorLink == 'mainPath' && firtTime == true) {
                $('.firstTime').trigger('click')
                firstTime = false;
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
    
    goGoGo(1, slide);

    function rotor() {
        $('.rotor-1').transition({ rotate: '60000000deg' }, 7500000000, 'linear');
    };

    function rotor2() {
        $('.rotor-2').transition({ rotate: '60000000deg' }, 5600000000, 'linear');
    };
    
    var animLock = false;
    var speed = 800
    
    function moveCloud(slide) {
        switch(slide) {
            case 1:
                $('.cloud-one').animate({
                    top: '-10%'
                }, 700);
                $('.cloud-two').animate({
                    top: '-10%'
                }, 700);
                $('.sun').animate({
                    top: '-10%'
                }, 700);
            break;
                
            case 2:
                $('.cloud-one').animate({
                    left: '40%',
                    top: '22%'
                }, speed);
                $('.cloud-two').animate({
                    left: '100%',
                    top: '19%'
                }, speed);
                $('.sun').animate({
                    top: '15%',
                    left: '6%'
                }, 700);
            break;
        
            case 3:
                $('.cloud-one').animate({
                    left: '30%'
                }, speed);
                $('.cloud-two').animate({
                    left: '90%'
                }, speed);
                $('.sun').animate({
                    left: '5%'
                }, 700);
            break;
                
            case 4:
                $('.cloud-one').animate({
                    left: '20%'
                }, speed);
                $('.cloud-two').animate({
                    left: '80%'
                }, speed);
            break;
                
            case 5:
                $('.cloud-one').animate({
                    left: '10%',
                    top: '22%'
                }, speed);
                $('.cloud-two').animate({
                    left: '70%',
                    top: '19%'
                }, speed);
            break;
                
            case 6:
                $('.cloud-one').animate({
                    top: '-10%'
                }, 700);
                $('.cloud-two').animate({
                    top: '-10%'
                }, 700);
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
        if (animLock) { return; }
        animLock = true;
        setTimeout(function() { animLock = false }, 800);
        switch(e.which) {
            case 37:          //gauche
                if (slide != 1) {
                    slide--;
                    goGoGo(0, slide);
                }
            break;

            case 39:          //droite
                if (slide != 6) {
                    slide++;
                    goGoGo(1, slide);
                }
            break;

            default: return;
        }
    });
});