const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "React.Js",
				weight: 12.3
			}, {
				text: "AWS",
				weight: 12
			}, {
				text: "javascript",
				weight: 10
			}, {
				text: "CloudFront",
				weight: 7
			}, {
				text: "MySQL",
				weight: 9
			},
			{
				text: "Github",
				weight: 8
			},
			{
				text: "Netlify",
				weight: 6
			},
			{
				text: "Heroku",
				weight: 7
			},
			
			{
				text: "EC2",
				weight: 8
			}, {
				text: "python",
				weight: 10
			}, {
				text: "java",
				weight: 9
			}, {
				text: "S3",
				weight: 10
			}, {
				text: "MongoDB",
				weight: 8
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 60});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am a Full-Stack Web Developer.", "love everything about code.", " teach programming to people.", "solve problems."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color":"#ffffff", "background-color": "#2d5986"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
