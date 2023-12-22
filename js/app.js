

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