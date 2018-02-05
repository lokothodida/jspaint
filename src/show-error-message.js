(function({
    // lib/jquery.min.js
    $,
    // src/$Window.js
    $FormWindow,
    // src/create-element.js
    E
}, exports) {

/**
 * @param {string} message
 * @param {Error} error
 */
function show_error_message(message, error) {
	var $w = $FormWindow().title("Error").addClass("dialogue-window");

	$w.$main.text(message);
	$w.$main.css("max-width", "600px");

	if (error) {
		$(E("pre"))
		.appendTo($w.$main)
		.text(error.stack || error.toString())
		.css({
			background: "white",
			color: "#333",
			// background: "#A00",
			// color: "white",
			fontFamily: "monospace",
			width: "500px",
			overflow: "auto",
		});
	}

	$w.$Button("OK", function() {
		$w.close();
	});

	$w.center();
	console.error(message, error);
}

exports.show_error_message = show_error_message;

})(window, window);
