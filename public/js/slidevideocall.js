$(document).ready(function () {
  $(".slide-left").click(function () {
    if ($(window).width() <= 992) {
      $(".doc-pres-card").css("display", "none");
      $(".rightcardContainer").css("display", "none");
      $(".leftcardContainer").removeClass("col-lg-6");

      $(".slide-left").prop("disabled", true);
      $(".slide-right").prop("disabled", false);
    } else {
      $(".doc-pres-card").css("display", "none");
      $(".rightcardContainer").css("display", "none");
      $(".leftcardContainer").css("width", "50%");
      $(".leftcardContainer").removeClass("col-lg-6");
      $(".leftcardContainer").animate({ width: "100%" }, 400, "linear");
      $(".slide-left").prop("disabled", true);
      $(".slide-right").prop("disabled", false);
    }
  });

  $(".slide-right").click(function () {
    if ($(window).width() <= 992) {
      $(".doc-pres-card").css("display", "block");
      $(".rightcardContainer").css("display", "");
      $(".leftcardContainer").addClass("col-lg-6");
      $(".slide-right").prop("disabled", true);
      $(".slide-left").prop("disabled", false);
    } else {
      $(".leftcardContainer").animate(
        { width: "50%" },
        400,
        "linear",
        function () {
          $(".leftcardContainer").addClass("col-lg-6");
          $(".doc-pres-card").css("display", "block");
          $(".rightcardContainer").css("display", "");
          $(".leftcardContainer").css("width", "100%");
          $(".slide-right").prop("disabled", true);
          $(".slide-left").prop("disabled", false);
        }
      );
    }
  });
});

// Call log jQuery code

function viewHistory() {
  if (document.getElementById("sideMenuId").style.marginRight == "-60%") {
    setTimeout(() => {
      document.getElementById("sideMenuId").style.marginRight = "0%";
    }, 100);
    document.getElementById("sideMenuId").style.display = "unset";
  } else {
    setTimeout(() => {
      document.getElementById("sideMenuId").style.display = "none";
    }, 300);
    document.getElementById("sideMenuId").style.marginRight = "-60%";
  }
}
