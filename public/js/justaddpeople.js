/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 60
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    
    
    $('.slick').slick({
      arrows: true,
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
        
    flickrAPIKey = $('meta[name=flickrapi]').attr("content")
    
    $(".flickr-set-main-url").each(function() {
      var setId = $(this).data("flickr-set-id")
      var scale = $(this).data("scale")
      var image = $(this)
      src = flickrMainPhotoURL(setId, scale, flickrAPIKey, function(src) {
        image.attr("src", src)        
      })
    })
    
    $('.modal').on('show.bs.modal', function(e) {
        var target = $(e.target)[0]; // Clicked button element        
        var setId = $("#" + target.id + " .flickr-set").data("flickr-set-id")
                
        if($("#" + target.id + " .flickr-set").children().length == 0) {        
          flickrPhotoURLs(setId, "z", flickrAPIKey, function(urls) {
            urls.forEach(function(url) {
              $("#" + target.id + " .flickr-set").append('<img src="'+url+'" class="img-responsive img-centered" alt="">')
            })          
          })
        }
    })    
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: 60
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});