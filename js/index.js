$(function() {
	var root = $('body');
	var children = [];
	var index = 0; // Page index.
	var selected = false; // Whether a selection has been made in the current page.
	var selection1 = selection2 = selection3 = ''; // '' means no selection

	function advancePage() {
		selected = false;
		children[index].hide();
		index++;
		children[index].show();
	}

	function comboFilenameGenerator() {
		if (selection1 == '') {
			return '';
		}

		var filename = 'images/';

		if (selection2 == '') {
			filename += ('1-combinations/cs247-p1-' + selection1);
		} else if (selection3 == '') {
			filename += ('2-combinations/cs247-p1-' + selection1 + '-' + selection2);
		} else if (selection3 != '') {
			filename += ('3-combinations/cs247-p1-' + selection1 + '-' + selection2 + '-' + selection3);
		}

		return filename + '.png';
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

	$('.button.gated-next').click(function(e) {
		if (selected) {
			advancePage();
		}
	});

	$('#pick-color .option').click(function(e) {
		var option = $(this).attr('class').split(' ')[1].trim();

		switch (option) {
			case 'option1':
				selection1 = 'b';
				break;
			case 'option2':
				selection1 = 'p';
				break;
			case 'option3':
				selection1 = 'y';
				break;
		}

		$('#pick-color .preview').css('background', 'url(' + comboFilenameGenerator() + ')');
		selected = true;
	});
});
