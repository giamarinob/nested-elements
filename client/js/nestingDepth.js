$(document).ready(function() {
	$('#getCount').on('click', function(event) {
		//start recursive search of dom starting at the Body element
		var body = $('body')[0];
		var depth = nesting(0, body);

		//Append the answer to the DOM
		$('body').append("<p id='answer'>The deepest nesting of UL or OL elements is " + depth + " elements long!</p>");
	});
});