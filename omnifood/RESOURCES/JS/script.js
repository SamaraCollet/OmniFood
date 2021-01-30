$(document).ready(function() {   /* tdo doc jquery tem q começar assim, código só executado após doc for carregado */
    
    /* EXEMPLO: -TODO H1 QUANDO CLICADO FICARA VERMELHO-
    $('h1').click(function() {
        $(this).css('background-color', '#ff0000')    
    })
    */   
    
    /* FOR THE STICKY NAVIGATION */
    $('.js--section-features').waypoint(function(direction) {
        if (direction =="down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
     offset: '60px;'
    });
    
    /*
    var waypoints = $('#handler-first').waypoint(function(direction) {
    notify(this.element.id + ' hit 25% from top of window') 
    }, {
    offset: '25%'
    })
    */
    
    /* SCROLL ON BUTTONS */
    $('.js--scroll-to-plans').click(function () {
        $('html,body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });
    
    $('.js--scroll-to-start').click(function () {
        $('html,body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });
    
    /* NAVIGATION SCROLL */
    $(function() { 
        $('a[href*=#]:not([href=#]').click(function() {    
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {  
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').animate({ 
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
    
    /* ANIMATIONS ON SCROLL */
    $('.js--wp-1').waypoint(function(direction) {
      $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset:'50%'
    });
    
    $('.js--wp-2').waypoint(function(direction) {
      $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset:'50%'
    });
    
    $('.js--wp-3').waypoint(function(direction) {
      $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset:'50%'
    });
    
    $('.js--wp-4').waypoint(function(direction) {
      $('.js--wp-4').addClass('animated pulse');
    }, {
        offset:'50%'
    });
    
    /* Mobile nav */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav')
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200) /* 200 milisegundos */
        if (icon.hasClass('ion-navicon-round')) {
           icon.addClass('ion-close-round');
           icon.removeClass('ion-navicon-round'); 
        } else {
            icon.addClass('ion-navicon-round');
           icon.removeClass('ion-close-round');
        }        
    });
    
});