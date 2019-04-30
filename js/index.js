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

	$('.option').click(function(e) {
		var screen = $(this).parent().parent().attr('id').trim();
		var option = $(this).attr('class').split(' ')[1].trim();

		switch (option) {
			case 'option1':
				if (screen == 'pick-color') {
					selection1 = 'b';
				} else if (screen == 'pick-celeb') {
					selection2 = 'ts';
				}
				break;
			case 'option2':
				if (screen == 'pick-color') {
					selection1 = 'p';
				} else if (screen == 'pick-celeb') {
					selection2 = 'tc';
				}
				break;
			case 'option3':
				if (screen == 'pick-color') {
					selection1 = 'y';
				} else if (screen == 'pick-celeb') {
					selection2 = 'dj';
				}
				break;
		}

		$('.preview').css('background-image', 'url(' + comboFilenameGenerator() + ')');
		selected = true;
	});
});
