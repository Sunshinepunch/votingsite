$(document).ready(function() {
    const voter = parseInt(prompt("What is your age?"));
    if (voter >= 18) {
      $('#learntovote').show();
    } else {
      $('#cantvote').show();
    }
  });

