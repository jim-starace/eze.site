//= require vendor/jquery.cycle2.min.js

// IIFE - Immediately Invoked Function Expression
(function (yourcode) {

    // The global jQuery object is passed as a parameter
    yourcode(window.jQuery, window, document);

}(function ($, window, document) {

    // The $ is now locally scoped 
    // Listen for the jQuery ready event on the document
    $(function () {

        // The DOM is ready!
		setActivePage();
		$('a[data-target="flare"]').peFlareLightbox();
              
        
    });

    // The rest of the code goes here!
    
	$(window).on('hashchange', function() {
	  setActivePage();
	});  
	
	function setActivePage () {
		var page = window.location.hash.substr(1);
	  	$("#" + page +"_").addClass('active').siblings().removeClass('active');
	  	if (page != 'ezextenz' && page != '' ) {
	  		$('.prev-button').removeClass('hidden');
	  		//$('.gallery').show();
	  	} else {
	  		$('.prev-button').addClass('hidden');
	  		//$('.gallery').hide();
	  	}
	  	if (page != 'contact' ) {
	  		$('.next-button').removeClass('hidden');
	  	} else {
	  		$('.next-button').addClass('hidden');
	  	}
	  	if (page == 'chute-gallery') {
	  		//$('#site-content').css('height' , '100%');
	  	} else {
	  		//$('#site-content').css('height' , '');
	  	}
	}
	
	$(document).on('click','.navbar-collapse.in',function(e) {
	    if( $(e.target).is('a') ) {
	        $(this).collapse('hide');
	    }
	});	
		

}));