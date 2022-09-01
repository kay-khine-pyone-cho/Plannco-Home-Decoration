$(document).ready(function () {
  //Start BAck-to-top
  $(".btn-backtotops").hide();
  $(window).scroll(function () {
    let getscrolltop = $(this).scrollTop();
    // console.log(getscrolltop);
    if (getscrolltop >= 370) {
      $(".btn-backtotops").fadeIn(1000);
    } else {
      $(".btn-backtotops").fadeOut(1000);
    }
  });

  //End Back-to-top

  // Start nav
  $(".navbuttons").click(function () {
    $(".navbuttons").toggleClass("crossxs");
  });
  // End nav

  //for nav
  $(window).scroll(function () {
    let getscrolltop = $(this).scrollTop();
    if (getscrolltop >= 200) {
      $(".navbar").addClass("navmenus");
    } else {
      $(".navbar").removeClass("navmenus");
    }
  });
  //Start Properties

  //for active item
  $(".propertylists").click(function () {
    $(this).addClass("activeitems").siblings().removeClass("activeitems");

    //for filter
    let getattvalue = $(this).attr("data-filter");
    if (getattvalue === "all") {
      $(".filters").show("slide", 500);
    } else {
      $(".filters").hide();
      $(".filters")
        .not("." + getattvalue)
        .hide("slide", 500);

      $(".filters")
        .filter("." + getattvalue)
        .show("slide", 500);
    }
  });
  lightbox.option({
    showImageNumberLabel: false,
  });

  //End Properties

  //Start Adv
  $(window).scroll(function () {
    let getscrolltop = $(this).scrollTop();
    console.log(getscrolltop);
    if (getscrolltop >= 1000) {
      $(".advimages").addClass("fromrights");
      $(".advtexts").addClass("fromlefts");
    } else {
      $(".advimages").removeClass("fromrights");
      $(".advtexts").removeClass("fromlefts");
    }
  });

  //End Adv

  //Start footer
  const getYear = $("#getyear");
  const getFullYear = new Date().getUTCFullYear();
  getYear.text(getFullYear);
  //End Footer
});
