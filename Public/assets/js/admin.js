$(document).ready(function () {
	console.log("Hello.");
	$("#selectedClub").on("click", function (f) {
		f.preventDefault();
		console.log("Submitted");
		const club = $("#clubSelect").val();
		const addNewButton = $("#newNovel");
		console.log(club);

		window.location.href = `/admin/${club}`;
		addNewButton.removeClass("hide");

    //TODO: Build out delete, edit, and add calls for books.

    $("#modifyBook").on("submit", function (e) {
      e.preventDefault();
      console.log("Submitted");
      const id = $(this).data("id");
      const title = $("#title").attr("value");
      const author = $("#author").attr("value");

      console.log(book);
         
        // window.location.href=`/admin/${book}`;
        // addNewButton.removeClass("hide");
    
      //TODO: add AJAX call and redirect to /vote path.
      $.ajax({
        method:"PUT",
        url: `/api/books/${id}`,
        data: {
          title,
          author,
        }
      }).then((response) => {
        console.log(response);
        // window.location.replace("/updatedBook");
        window.location.href=`/admin/${book}/updatedBook`;
      }
      );
    });


    //TODO: Include these in the modal functions.
    $('#modalNewGroup').modal({
        // onCloseStart: () => {
        //     console.log("Closing out now!")
        // }
    });

	//TODO: Build out delete, edit, and add calls for books.

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

	//TODO: Include these in the modal functions.
	$("#modalNewGroup").modal({
		// onCloseStart: () => {
		//     console.log("Closing out now!")
		// }
	});

	$("#modalNewNovel")
		.modal
		// onCloseStart({
		// })
		();
	// Can we append the newly created novel to the page?

	$("#modalEditNovel")
		.modal
		// onCloseStart({
		// })
		();
});
});
