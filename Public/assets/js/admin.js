$(document).ready(function () {
    console.log("Hello.");  

    // =============
    // OPTION ONE
    // =============
    // const clubSelect = sessionStorage.getItem("clubSelect");  
    // $('#selectedClub').val(clubSelect);

    // $('#selectedClub').change(function() { 
    //     const dropVal = $(this).val();
    //     sessionStorage.setItem("clubSelect", dropVal);
    // });


    // =============
    // OPTION TWO
    // =============
    // $("#selectedClub").change(function(event){
    //   const clubSelect = $(this).children("option:selected").val();
    //   sessionStorage.setItem("itemName",clubSelect);
    // });

    // $("select").find("option[value="+sessionStorage.getItem("itemName")+"]").attr("selected","selected");

    // Search Button Function
    $("#selectedClub").on("click", function (f) {
      f.preventDefault();
      console.log("Submitted");
      const club = $("#clubSelect").val();
      const addNewButton = $("#newNovel")
      console.log(club);
        
        window.location.href=`/admin/${club}`;
        addNewButton.removeClass("hide");
    });


    // Modal & Function for Adding a New Club
    $('#modalNewClub').modal();
    $("#saveNewClub").on("click", function (f) {
      f.preventDefault();
      const clubName = $("#clubName").val();
      console.log(`${clubName} added.`);
      
      $.ajax({
        method:"POST",
        url:"/api/clubs",
        data: {
          "name" : clubName,
        },
        success: function() { 
          console.log("New club added.")
        }
      }).then((response) => {
        console.log(response);
        window.location.reload();
      });
    })


    // Modal & Function for Adding a New Novel
    $('#modalNewNovel').modal();
    $("#saveNewNovel").on("click", function (f) {
      f.preventDefault();
      const newBookTitle = $("#newBookTitle").val();
      const newBookAuthor = $("#newBookAuthor").val();
      const selectedClub = $("#clubSelect").val();
      console.log(`${newBookTitle} by ${newBookAuthor}`);
      
      $.ajax({
        method:"POST",
        url:"/api/books",
        data: {
          "title" : newBookTitle,
          "author": newBookAuthor,
          "votes" : 0,
          "clubId": selectedClub
        },
        success: function() { 
          console.log("New book added.")
        }
      }).then((response) => {
        console.log(response);
        window.location.reload();
      });
    })


    //TODO: Build out edit call for books.
    // $('#modalEditNovel').modal();
    $("#editNovel").on("click",function (e) {
      const editButton = $("#editNovel");
      const saveButton = $("#saveNovel");

      $("#selectedBook").prop("disabled", false);
      $("#selectedAuthor").prop("disabled", false)
      editButton.addClass("hide");
      saveButton.removeClass("hide");
    });

    $("#saveNovel").on("click", function (e) {
      e.preventDefault();
      const bookId = $("#selectedBook").attr("value");
      console.log(bookId);
      console.log("Saved");
      const title = $("#selectedBook").val();
      const author = $("#selectedAuthor").val();
      

    //   //TODO: add AJAX call and redirect to /vote path.
      $.ajax({
        method:"PUT",
        url: `/api/books/${bookId}`,
        data: {
          "title" : title,
          "author": author
        }
      }).then((response) => {
        console.log(response);
        console.log(`${title} by ${author}`)
        window.location.reload();
    //     // window.location.href=`/admin/${book}/updatedBook`;
      });
    });




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
