$(document).ready(function () {
    $(".nav-toggler").each(function (_, navToggler) {
      var target = $(navToggler).data("target");
      $(navToggler).on("click", function () {
        $(target).animate({
          height: "toggle",
        });
      });
    });
  });


  

  $(".otp-inputbar").keypress(function (e) {
    if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
        $("#errmsg").html("Digits Only").show().fadeOut("slow");
        return false;
    }
});

$(".otp-inputbar").on("keyup", function (e) {
    if ($(this).val()) {
        $(this).next().focus();
    }
    var KeyID = e.keyCode;
    switch (KeyID) {
        case 8:
            $(this).val("");
            $(this).prev().focus();
            break;
        case 46:
            $(this).val("");
            $(this).prev().focus();
            break;
        default:
            break;
    }
  console.log($(this).val())
});