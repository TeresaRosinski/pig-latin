//Business Logic

let pigLatinCreator = function(text) {
  return (text).toLowerCase();
};




//User Interface Logic
$(document).ready(function() {
  $("form#translator").submit(function(event) {
    event.preventDefault();
    const text= $("input#change-text").val();
    const result = pigLatinCreator(text);
    $("#translation").text(result);
  });
});