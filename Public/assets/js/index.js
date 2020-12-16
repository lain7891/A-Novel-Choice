$(document).ready(function () {
  console.log("Hello.");
})

$("#selectedClub").on("click", function (f) {
  f.preventDefault();
  console.log("Submitted");
  let club = $("#clubSelect").val();
  console.log(club);

  //TODO: add AJAX call and redirect to /vote path.
});