$(document).ready(function () {
    console.log("Hello.");  

    $("#selectedClub").on("click", function (f) {
      f.preventDefault();
      console.log("Submitted");
      const club = $("#clubSelect").val();
      const addNewButton = $("#newNovel")
      console.log(club);
        
        window.location.href=`/admin/${club}`;
        addNewButton.removeClass("hide");
    });


    //TODO: Build out delete, edit, and add calls for books.
    //TODO: Include these in the modal functions.
    $('#modalNewGroup').modal({
        // onCloseStart: () => {
        //     console.log("Closing out now!")
        // }
    });

    $('#modalNewNovel').modal(
        // onCloseStart({
        // })
    );
    // Can we append the newly created novel to the page?



    $('#modalEditNovel').modal(
        // onCloseStart({
        // })
    );

  	$("#deleteNovel").on("click", function (f) {
    f.preventDefault();
    const book = $("#selectedBook").attr("value");
    console.log(book);
		$.ajax({
			method: "DELETE",
			url: `/api/books/${book}`,
		}).then((response) => {
			console.log(response);
			window.location.reload();
		});
	});

});
