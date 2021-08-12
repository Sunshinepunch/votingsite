// business logic

function Age() {
  const voter = parseInt(prompt("Please enter your age."));
  if (voter >= 18) {
    $('#learntovote').show();
  } else {
    $('#cantvote').show();
  }
}



// user logic
$(document).ready(function () {
  $("form#").submit(function (event) {
    event.preventDefault();
  });
});



