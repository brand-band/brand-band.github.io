$(function() {
	var root = $('body');
	var children = [];
	var index = 0;

	function advancePage() {
		children[index].hide();
		index++;
		children[index].show();
	}

	// Store all reference to children and hide.
	root.children().each(function(i) {
		children.push($(this));
		if (i != index) {
			$(this).hide();
		}
	});

	/*
		Button registrations
	*/
	$('.button.simple-next').click(function(e) {
		advancePage();
	});
});
