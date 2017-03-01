$(document).ready(function() {

		$("#contentBlock").html($("#commandoLnk").text());

		$("#commando").hover(function() {
				$("#contentBlock").html($("#commandoLnk").text());
			} 
		);
		$("#officer").hover(function() {
				$("#contentBlock").html($("#officerLnk").text());
			} 
		);
		$("#reservist").hover(function() {
				$("#contentBlock").html($("#reservistLnk").text());
			} 
		);
});