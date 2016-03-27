function frontpage() {
  
 $(document).ready(function(){
  
  //Carousel
  
  $('.owl-carousel').owlCarousel({
    loop: true,
    dots: true,
    items: 1,
    autoplay: true
  });
   
  //Modal
  var ModalEffects = (function() {

	function init() {

		var overlay = document.querySelector( '.md-overlay' );

		[].slice.call( document.querySelectorAll( '.md-trigger' ) ).forEach( function( el, i ) {

			var modal = document.querySelector( '#' + el.getAttribute( 'data-modal' ) ),
				close = modal.querySelector( '.md-close' );

			function removeModal( hasPerspective ) {
				classie.remove( modal, 'md-show' );

				if( hasPerspective ) {
					classie.remove( document.documentElement, 'md-perspective' );
				}
			}

			function removeModalHandler() {
				removeModal( classie.has( el, 'md-setperspective' ) ); 
			}

			el.addEventListener( 'click', function( ev ) {
				classie.add( modal, 'md-show' );
				overlay.removeEventListener( 'click', removeModalHandler );
				overlay.addEventListener( 'click', removeModalHandler );

				if( classie.has( el, 'md-setperspective' ) ) {
					setTimeout( function() {
						classie.add( document.documentElement, 'md-perspective' );
					}, 25 );
				}
			});

			close.addEventListener( 'click', function( ev ) {
				ev.stopPropagation();
				removeModalHandler();
			});

		} );

	}

	init();

})();
   
  //Validation
   
  $('.contacts button[type="submit"]').click(function() {
     var name = $('#name').val();
     var email = $('#email').val();
     var textMess = $('#message').val();
      $('#name').removeClass('error'); 
      $('#email').removeClass('error');
      $('#message').removeClass('error');
     
     function validateEmail(email){
       var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/;
       if(regex.test(email) === true) {
         return true;
       } else {
         return false;
       }
     }
    
     if(name === "") {
       $('#name').addClass('error');
     }
     if(email === "" || validateEmail(email) === false) {
       $('#email').addClass('error');
     }
     if(textMess === "") {
       $('#message').addClass('error');
     }
     return false;
   });
  

  //Scroll To Top Button
  
  $(window).on('scroll', function() {
      var windowWidth = $(window).width();
      if ($(this).scrollTop() > 100 && windowWidth > 767) {
          $('.scrollup').fadeIn();
      } else {
          $('.scrollup').fadeOut();
      }
  });
  
  $('.scrollup').on('click', function() {
      $("html, body").animate({
          scrollTop: 0
      }, 700);
      return false;
  });
  
});
  
  }
    
