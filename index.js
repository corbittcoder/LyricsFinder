$(document).ready(function() {
	$("#searchButton").click(function(e) {
		var artist = $("#artist").val();
		var title = $("#title").val();
		e.preventDefault();
		var myurl = 'https://api.lyrics.ovh/v1/' + artist + '/' + title;
		$.getJSON(myurl, function(data) {
			$("#lyrics").html(jsonEscape(data.lyrics));
		})
		.fail(function() {
			$("#lyrics").html("Could not find " + title + " by " + artist);
		})
		.always(function(data) {
			console.log(data);
		});
	});
	function jsonEscape(str)  {
		return str.replace(new RegExp("\n", 'g'), "<br>");
	}
});