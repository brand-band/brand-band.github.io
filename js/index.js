$(function() {
	var root = $('body');
	var children = [];
	var index = 0; // Page index.
	var selected = false; // Whether a selection has been made in the current page.
	var selection1 = selection2 = selection3 = ''; // '' means no selection

	function turnPage(forward = true) {
		selected = false;
		children[index].hide();
		if (forward) {
			index++;
		} else {
			index--;			
		}
		children[index].show();
	}

	function reset() {
		index = 0;
		selected = false;
		selection1 = selection2 = selection3 = '';
		$('.preview').css('background-image', 'url()');
	}

	function populateReactions() {
		var reactionObject = reactions[selection1][selection2][selection3];
		$('#reaction1 .likedislike').css('background-image', reactionObject['sally'][0] ? 'url(images/cs247-p1-smile.png)' : 'url(images/cs247-p1-frown.png)');
		$('#reaction2 .likedislike').css('background-image', reactionObject['travis'][0] ? 'url(images/cs247-p1-smile.png)' : 'url(images/cs247-p1-frown.png)');
		$('#reaction3 .likedislike').css('background-image', reactionObject['sam'][0] ? 'url(images/cs247-p1-smile.png)' : 'url(images/cs247-p1-frown.png)');
		$('#reaction4 .likedislike').css('background-image', reactionObject['casey'][0] ? 'url(images/cs247-p1-smile.png)' : 'url(images/cs247-p1-frown.png)');
		$('#reaction1 .opinion').text(reactionObject['sally'][1]);
		$('#reaction2 .opinion').text(reactionObject['travis'][1]);
		$('#reaction3 .opinion').text(reactionObject['sam'][1]);
		$('#reaction4 .opinion').text(reactionObject['casey'][1]);
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
		turnPage();
	});

	$('.button.gated-next').click(function(e) {
		if (selected) {
			turnPage();
		}
	});

	$('.button.simple-back').click(function(e) {
		turnPage(false);
	});

	$('#released .button').click(function(e) {
		populateReactions();
	});

	$('#result .goto' ).click(function(e) {
		children[index].hide();
		reset();
		index++;
		children[index].show();
	});

	$('#credits2 .reset').click(function(e) {
		children[index].hide();
		reset();
		children[index].show();
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
				} else if (screen == 'pick-slogan') {
					selection3 = 'u';
				}
				break;
			case 'option2':
				if (screen == 'pick-color') {
					selection1 = 'p';
				} else if (screen == 'pick-celeb') {
					selection2 = 'tc';
				} else if (screen == 'pick-slogan') {
					selection3 = 'h';
				}
				break;
			case 'option3':
				if (screen == 'pick-color') {
					selection1 = 'y';
				} else if (screen == 'pick-celeb') {
					selection2 = 'dj';
				} else if (screen == 'pick-slogan') {
					selection3 = 't';
				}
				break;
		}

		$('.preview').css('background-image', 'url(' + comboFilenameGenerator() + ')');
		selected = true;
	});
});
