let aryPlayerBtn = JSON.parse(localStorage.getItem("aryPlayers"));
const btnText = $(".box_sistems button").text();

$(".box_sistems")
  .empty()
  .append(JSON.parse(localStorage.getItem("boxSistems")));
if (
  $(".box_sistems button:last-child").html() != `<span class="mb-1">+</span>`
) {
  $(".box_sistems").append(`
    <button class="btn_hazf btn btn-danger m-2"><span class="mb-1" style="font-weight: bold;font-size: 30px;">-</span></button>
    <button class="btn_azafbtn btn btn-primary m-2"><span class="mb-1">+</span></button>`);
}

if (JSON.parse(localStorage.getItem("aryPlayers")) != null) {
  if (JSON.parse(localStorage.getItem("aryPlayers")).length != 0) {
    aryPlayerBtn.forEach((item) => {
      for (let i = 0; i < btnText.length; i++) {
        if (item.sistemId == i) {
          $(`.box_sistems button:eq(${i - 1})`).attr("disabled", "");
        }
      }
    });
  }

}

$(".box_sistems").click(function (event) {
  if (event.target.tagName == "BUTTON") {
    $("#sistem_txt").text($(event.target).text());
  }
});

$(".box_daste").click(function (event) {
  if (event.target.tagName == "BUTTON") {
    $("#dashe_txt").text($(event.target).text());
  }
});

$("#in_mablag").keyup(function () {
  $("#mablag_txt").text($("#in_mablag").val());
});

$(".btn_azafbtn").click(function () {
  if (JSON.parse(localStorage.getItem("aryPlayers")) == null || JSON.parse(localStorage.getItem("aryPlayers")).length == 0)  {
    let number = +$(this).prev().prev().text() + 1;

    $(".btn_azafbtn")
      .prev()
      .before(
        `<button class="btn btn-dark focus-ring focus-ring-light m-2">${number}</button>`
      );
    localStorage.setItem(
      "boxSistems",
      JSON.stringify($(".box_sistems").html())
    );
  } else {
    if (i == true) {
      i = false;
      $(".alert_add_btn").animate({ left: "0%" }, 1000);
      setTimeout(() => {
        $(".alert_add_btn")
          .animate({ left: "-100%" }, 1000)
          .animate({ left: "100%" }, 0);
        i = true;
      }, 3000);
    }
  }
});

let i = true;
$(".btn_hazf").click(function (e) {
  if (JSON.parse(localStorage.getItem("aryPlayers")) == null || JSON.parse(localStorage.getItem("aryPlayers")).length == 0) {
    $(this).prev().remove();
    localStorage.setItem(
      "boxSistems",
      JSON.stringify($(".box_sistems").html())
    );
  } else {
    if (i == true) {
      i = false;
      $(".alert_add_btn").animate({ left: "0%" }, 1000);
      setTimeout(() => {
        $(".alert_add_btn")
          .animate({ left: "-100%" }, 1000)
          .animate({ left: "100%" }, 0);
        i = true;
      }, 3000);
    }
  }
});

let aryPlayers = [];
if (JSON.parse(localStorage.getItem("aryPlayers")) != null) {
  aryPlayers = JSON.parse(localStorage.getItem("aryPlayers"));
}

let ghimat = JSON.parse(localStorage.getItem("ghimat"));

$(".box_submit").click(function () {
  if (
    +$("#sistem_txt").text() &&
    +$("#dashe_txt").text() &&
    +$("#mablag_txt").text()
  ) {
    let ghimatB = ghimat[+$("#dashe_txt").text() - 1].P4;

    let sany = +$("#mablag_txt").text() / ghimatB;
    let deta = new Date();
    let time = deta.getTime();

    objPlayer = {
      sistemId: $("#sistem_txt").text(),
      jamanShroo: `${deta.getHours()}:${deta.getMinutes()}`,
      jamanAtmam: `${deta.getHours()}:${deta.getMinutes()}`,
    };
    deta.setTime(deta.getTime() + sany * 1000);
    objPlayer2 = {
      jamanAtmam: `${deta.getHours()}:${deta.getMinutes()}`,
      sany: sany,
      ghimat: ghimatB,
      time: time,
    };
    objPlayer = { ...objPlayer, ...objPlayer2 };
    aryPlayers.push(objPlayer);
    localStorage.setItem("aryPlayers", JSON.stringify(aryPlayers));
    location.replace("wrood.html");
  } else if (+$("#sistem_txt").text() && +$("#dashe_txt").text()) {
    let ghimatB = ghimat[+$("#dashe_txt").text() - 1].P4;
    let deta = new Date();
    let time = deta.getTime();

    objPlayer = {
      sistemId: $("#sistem_txt").text(),
      jamanShroo: `${deta.getHours()}:${deta.getMinutes()}`,
      sany: null,
      ghimat: ghimatB,
      time: time,
    };
    aryPlayers.push(objPlayer);
    localStorage.setItem("aryPlayers", JSON.stringify(aryPlayers));
    location.replace("wrood.html");
  }
});

// let deta1 = new Date();
// let time1 = deta1.getTime()
// $(".box_submit").click(function () {
//   let deta2 = new Date();
//   let time2 = deta2.getTime()
//   let time = time2 - time1
//   console.log(time);
//   console.log(Math.floor(time / 1000));
// });
