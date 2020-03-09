$(document).ready(function() {
    
    /* STICKY */
    
    $('.js--section-features').waypoint(function(direction) {
        if(direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '8%'
    });
    
    /* BUTTONS */
    
    $('.js--scroll-to-plans').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });
    
    $('.js--scroll-to-start').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });
    
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        nav.slideToggle(200);
        var icon = $('.js--nav-icon i');
        if(icon.hasClass('ion-md-menu')) {
            icon.addClass('ion-md-close-circle-outline');
            icon.removeClass('ion-md-menu');
        } else {
            icon.addClass('ion-md-menu');
            icon.removeClass('ion-md-close-circle-outline');
        }
    });
    
    var map = new GMaps({
      div: '.map',
      lat: 22.719439,
      lng: 88.429941,
      zoom: 12
    });
    
    map.addMarker({
      lat: 22.694339,
      lng: 88.379441,
      title: 'Lima',
      infoWindow: {
        content: '<p>Our SODEPUR HQ<p>'
      }
    });
    
});