$(document).ready(function () {
  $("form").on("submit", function (e) {
    e.preventDefault();
    const inputUser = $("#user").val();
    const newLine = $(`<li style="cursor:pointer">${inputUser}</li>`);

    newLine.appendTo("#task-list");
    $("#user").val("");
  });

  $("#task-list").on("click", "li", function () {
    $(this).toggleClass("risc");
  });
});
