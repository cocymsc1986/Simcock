$(document).ready(function() {		
	
	//Execute the slideShow, set 4 seconds for each images
	slideShow(5000);

});

function slideShow(speed) {

	//append a LI item to the UL list for displaying caption
	//$('div#caption').append('<div id="slideshow-caption" class="caption"><div class="slideshow-caption-container"><h3></h3><p></p></div></div>');

	//Set allimages hidden
	$('ul.slideshow li').css('display','none');
	
	//Get the first image and display it
	$('ul.slideshow li:first').css('display','block');
	
	//Get the caption of the first image from REL attribute and display it
	//$('#slideshow-caption h3').html($('ul.slideshow a:first').find('img').attr('title'));
	//$('#slideshow-caption p').html($('ul.slideshow a:first').find('img').attr('alt'));
		
	//Display the caption
	//$('#slideshow-caption').css({opacity: 0.8, bottom:0});
	
	//Call the gallery function to run the slideshow	
	var timer = setInterval('gallery()',speed);
	
	//pause the slideshow on mouse over
	$('ul.slideshow').hover(
		function () {
			clearInterval(timer);	
		}, 	
		function () {
			timer = setInterval('gallery()',speed);			
		}
	);
	
}

function gallery() {

	//If no IMGs have the show class, grab the first image
	var current = ($('ul.slideshow li.show')?  $('ul.slideshow li.show') : $('#ul.slideshow li:first'));

	//Get next image, if it reached the end of the slideshow, rotate it back to the first image
	var next = ((current.next().length) ? ((current.next().attr('id') == 'slideshow-caption')? $('ul.slideshow li:first') :current.next()) : $('ul.slideshow li:first'));
		
	//Get next image caption
	//var title = next.find('img').attr('title');	
	//var desc = next.find('img').attr('alt');	

	//Set the fade in effect for the next image, show class has higher z-index
	
	next.fadeOut('slow', function() {
		next.css('display','none').addClass('show')
	})
	setTimeout(function() {
		next.fadeIn('slow', function() {
		next.css('display','block')
	})
}, 600);
	
	
	//Hide the caption first, and then set and display the caption
	//$('#slideshow-caption').slideToggle(1000, function () { 
		//$('#slideshow-caption h3').html(title); 
		//$('#slideshow-caption p').html(desc); 
		//$('#slideshow-caption').slideToggle(1000); 
	//});		

	//Hide the current image
	current.fadeOut('slow', function() {
		current.css('display','none').removeClass('show');
	})
}