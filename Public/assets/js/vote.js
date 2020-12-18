$(document).ready(function () {
    console.log("Hello"); 
    
    $("#voteButton").on("click", function (f) {
      f.preventDefault();
      console.log("Submitted");
      const book = $("#votedBook").attr("value");
      const club = $("#clubId").attr("value");
      console.log(club);

// todo put increment issue
      $.ajax({
        method:"PUT",
        url:`/api/books/${book}`
      }).then((response) => {
        console.log(response);
        window.location.href=`/vote/${club}/submitted`;
      });
    });
});