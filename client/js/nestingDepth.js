$(document).ready(function() {
	$('#getCount').on('click', function(event) {
		var depth = nesting(0, $('body')[0]);
		console.log(depth);
	});
});