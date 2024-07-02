let ghimat = [
  { P4: null, P4_1_txt: $("#input_ps4_1").val() },
  { P4: null, P4_2_txt: $("#input_ps4_2").val() },
  { P4: null, P4_3_txt: $("#input_ps4_3").val() },
  { P4: null, P4_4_txt: $("#input_ps4_4").val() },
];
if (JSON.parse(localStorage.getItem("ghimat")) != null) {
  $("#input_ps4_1").val(JSON.parse(localStorage.getItem("ghimat"))[0].P4_1_txt);
  $("#input_ps4_2").val(JSON.parse(localStorage.getItem("ghimat"))[1].P4_2_txt);
  $("#input_ps4_3").val(JSON.parse(localStorage.getItem("ghimat"))[2].P4_3_txt);
  $("#input_ps4_4").val(JSON.parse(localStorage.getItem("ghimat"))[3].P4_4_txt);
}

$("input").keyup(function () {
  ghimat[0].P4 = $("#input_ps4_1").val() / 3600;
  ghimat[1].P4 = $("#input_ps4_2").val() / 3600;
  ghimat[2].P4 = $("#input_ps4_3").val() / 3600;
  ghimat[3].P4 = $("#input_ps4_4").val() / 3600;

  ghimat[0].P4_1_txt = $("#input_ps4_1").val();
  ghimat[1].P4_2_txt = $("#input_ps4_2").val();
  ghimat[2].P4_3_txt = $("#input_ps4_3").val();
  ghimat[3].P4_4_txt = $("#input_ps4_4").val();

  localStorage.setItem("ghimat", JSON.stringify(ghimat));
});
