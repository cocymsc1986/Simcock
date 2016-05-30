$(document).ready(function() {	
	
	// accordian gallery
	$(function() {
		 $("#st-accordion").accordion();
	});
	
	// lightbox gallery display - not on mobile
	$(function() {
		if (screen.width >= 680) {
			$(function() {
			$('.st-content a').lightBox();
			});
		} else {
			$('.st-content a').removeAttr('href');
		};
	});
	
	// mobile nav menu show/hide
	$("#showHide").click(function() {
		if ($('#showHide').hasClass('active')){
			$("#mobileNavLinkList").fadeOut();
			$("#showHide").removeClass('active');
		} else {
			$("#mobileNavLinkList").fadeIn();
			$("#showHide").addClass('active');
		}
	});
	
	// Detect whether device supports orientationchange event, otherwise fall back to
	// the resize event.
	var supportsOrientationChange = "onorientationchange" in window,
	    orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

	window.addEventListener(orientationEvent, function() {
	    if(window.orientation==0)
	    {
	      document.getElementById('mobileNavigation').style.display = '';
	      document.getElementById('mobileNavigationLandscape').style.display = 'none';
	    }
	    else if(window.orientation==90)
	    {
	      document.getElementById('mobileNavigation').style.display = 'none';
	      document.getElementById('mobileNavigationLandscape').style.display = 'block';
	    }
	}, false);
	
	
	
});