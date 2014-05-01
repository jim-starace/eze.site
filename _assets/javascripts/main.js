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
        
    });

    // The rest of the code goes here!
    
	$(window).on('hashchange', function() {
	  setActivePage();
	});  
	
	function setActivePage () {
		var page = window.location.hash.substr(1);
	  	$("#" + page +"_").addClass('active').siblings().removeClass('active');
	  	if (page != 'ezextends' && page != '' ) {
	  		$('.side-stripe-left').removeClass('hidden');
	  	} else {
	  		$('.side-stripe-left').addClass('hidden');
	  	}
	} 

}));