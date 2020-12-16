$(document).ready(function () {
    console.log("Hello.");  
    $("#selectedClub").on("click", function (f) {
      f.preventDefault();
      console.log("Submitted");
      const club = $("#clubSelect").val();
      const addNewButton = $("#newNovel")
      console.log(club);
    
      //TODO: add AJAX call and redirect to /vote path.
      $.ajax({
        method:"GET",
        url:`/admin/${club}`,
      }).then((response) => {
        console.log(response);
        
      },addNewButton.removeClass("hide")
      );
    });


    // $("#newNovel").on("click", function (event) {
    //     event.preventDefault();
    //     console.log("New Novel clicked.");

    // })

    $('.modal').modal();

          
      
    //TODO: Build out delete, edit, and add calls for books.


});
