const boxRemove = $(".box_remove");
const boxWiraysh = $(".box_wiraysh");
const container = $(".container");
let = screenStart = null;
let = screenRun = null;
let i = true;

$(document).ready(function () {
  if (JSON.parse(localStorage.getItem("nesih")) != null) {
    $(container).append(JSON.parse(localStorage.getItem("nesih")));
  }
});

$(".box_slider").on("touchstart", (event) => {
  if (i) {
    screenStart = event.changedTouches[0].screenY;
    i = false;
  } else {
    screenStart + 140;
  }
});

$(".box_slider").on("touchmove", (event) => {
  screenRun = screenStart - event.changedTouches[0].screenY - 140;
  if (screenRun <= 0 && screenRun >= -140) {
    $(".box_slider").css(
      "bottom",
      `${screenStart - event.changedTouches[0].screenY - 140}px`
    );
  }
});

function btnRemove(event) {
  $(boxRemove).fadeIn();

  $(".box_btn_off_remove").one("click", function () {
    $(boxRemove).fadeOut();
  });

  $(".box_btn_remove").one("click", function () {
    $(event.target).parent().parent().parent().remove();
    localStorage.setItem("nesih", JSON.stringify($(container).html()));
    $(boxRemove).fadeOut();
  });
}

function btnWiraysh(event) {
  $(boxWiraysh).fadeIn();
  $(".btn_off_wiraysh").click(function () {
    $(boxWiraysh).fadeOut(function () {
      $("#W_number").val("");
    });
  });
  $(".btn_wiraysh").click(function () {
    if (!$("#W_number").val() == "") {
      $(event.target).parents("span").text("yasoiin");
      $(event.target).parent().parent().find("span").text($("#W_number").val());
      localStorage.setItem("nesih", JSON.stringify($(container).html()));
    }
    $(boxWiraysh).fadeOut(function () {
      $("#W_number").val("");
    });
  });
}

$(".btn_submit").click(function () {
  if (!$(".in_name").val() == "" && !$(".in_peric").val() == "") {
    $(".container").append(`      
    <div class="card m-3 mb-0">
    <div class="card-header text-center" style="font-weight: bold;">${$(
      ".in_name"
    ).val()}</div>
    <div class="card-body">
      <p style="font-weight: bold;">مبلغ : <span>${$(
        ".in_peric"
      ).val()}</span></p> 
      <div class="d-flex gap-2">
        <button class="btn btn-success w-100" onclick="btnWiraysh(event)">ویرایش</button>
        <button class="btn btn-danger w-100" onclick="btnRemove(event)">حذف</button>
      </div>
    </div>
  </div>`);

    localStorage.setItem("nesih", JSON.stringify($(container).html()));

    $(".in_name").val("");
    $(".in_peric").val("");
  }
});

let j = true;
$("img , .box_siya").click(function () {
  $(".box_siya , .box_slider").toggle("slow");
  if (j) {
    $("img").animate({ rotate: "45deg" }, 500);
    j = false;
  } else {
    $("img").animate({ rotate: "-45deg" }, 500, () => {
      $(".in_name").val("");
      $(".in_peric").val("");
    });
    j = true;
  }
});
