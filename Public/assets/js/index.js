$(document).ready(function () {
	console.log("Hello.");
	$("#clubSelect").on("click", function (f) {
		f.preventDefault();

		//TODO: add AJAX call and redirect to /vote path.
		$.ajax({
			method: "GET",
			url: "/api/clubs",
		}).then((response) => {
			console.log(response);
			const club = $("#selected-club").val();
			console.log(club);
			console.log("click");
			// return response;
			// window.location.replace("/vote");
		});
		console.log("Submitted");
	});
	// $("#selected-club").on("click", function (e) {
	// 	e.preventDefault();
	// });
});
