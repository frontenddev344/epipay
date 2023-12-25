

$(document).ready(function () {
    $(".toggle_menu").click(function () {
        $("body").addClass("toggle");
    });
});

$(document).ready(function () {
    $(".closebtn").click(function () {
        $("body").removeClass("toggle");
    });
});


$(".select").click(function() {
  var is_open = $(this).hasClass("open");
  if (is_open) {
    $(this).removeClass("open");
  } else {
    $(this).addClass("open");
  }
});

$(".select li").click(function() {

  var selected_value = $(this).html();
  var first_li = $(".select li:first-child").html();

  $(".select li:first-child").html(selected_value);
  $(this).html(first_li);

});

$(document).mouseup(function(event) {

  var target = event.target;
  var select = $(".select");

  if (!select.is(target) && select.has(target).length === 0) {
    select.removeClass("open");
  }

});


