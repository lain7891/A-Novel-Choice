$(document).ready(function () {
  console.log("Hello.");  
  $("#selectedClub").on("click", function (f) {
    f.preventDefault();
    console.log("Submitted");
    const club = $("#clubSelect").val();
    console.log(club);
  
    //TODO: add AJAX call and redirect to /vote path.
    $.ajax({
      method:"GET",
      url:`/vote/${club}`,
    }).then((response) => {
      console.log(response);
      window.location.href=`/vote/${club}`;
      // window.location.replace("/vote");
    });
  });
});
