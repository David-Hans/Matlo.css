/*!
 * Matlo.css
 * Copyright 2016 David Hans
 * MIT License ()
 */
$('.button-collapse').sideNav();

$('.collapsible').collapsible();

$('.scrollspy').scrollSpy({scrollOffset:0});

var tocHeight = $('.toc-wrapper .table-of-contents').length ? $('.toc-wrapper .table-of-contents').height() : 0;
var footerOffset = $('body > footer').first().length ? $('body > footer').first().offset().top : 0;
var bottomOffset = footerOffset - tocHeight - 20;
if ($('nav').length){
	$('.toc-wrapper').pushpin({
		top: $('nav').height(),
		bottom: bottomOffset
	});
}
else {
	$('.toc-wrapper').pushpin({
		top: 0,
		bottom: bottomOffset
	});
};