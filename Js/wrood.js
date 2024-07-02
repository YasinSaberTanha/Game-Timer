let aryPlayers = JSON.parse(localStorage.getItem("aryPlayers"));
let deta = new Date();
let x = 1;
let frag = document.createDocumentFragment();

setInterval(() => {
  let deta = new Date();
  $("tbody").empty();
  aryPlayers.forEach((item) => {
    if (item.sany != null) {
      if (item.sany < (deta.getTime() - +item.time) / 1000) {
        frag += `                
        <tr class="time">
            <td onclick="TdClick(event)">${item.sistemId}</td>
            <td>${item.jamanShroo}</td>
            <td>${item.jamanAtmam}</td>
            <td>${Math.floor((deta.getTime() - +item.time) / 60 / 1000)}</td>
            <td style="color: #d81c2e;">${Math.floor(
              item.ghimat * Math.floor((deta.getTime() - +item.time) / 1000)
            )}</td>
        </tr>`;
      }
      else{
        frag += `                
        <tr class="time">
            <td onclick="TdClick(event)">${item.sistemId}</td>
            <td>${item.jamanShroo}</td>
            <td>${item.jamanAtmam}</td>
            <td>${Math.floor((deta.getTime() - +item.time) / 60 / 1000)}</td>
            <td>${Math.floor(
              item.ghimat * Math.floor((deta.getTime() - +item.time) / 1000)
            )}</td>
        </tr>`;
      }
    } else {
      frag += `                
      <tr>
          <td onclick="TdClick(event)">${item.sistemId}</td>
          <td>${item.jamanShroo}</td>
          <td></td>
          <td>${Math.floor((deta.getTime() - +item.time) / 60 / 1000)}</td>
          <td>${Math.floor(
            item.ghimat * Math.floor((deta.getTime() - +item.time) / 1000)
          )}</td>
      </tr>`;
    }
  });
  $("tbody").append(frag);
  frag = null
}, 1000);

function TdClick(event){
  $(".box_remove").fadeIn();
  $(".box_btn_remove").one("click",function () { 
    $(event.target).parent()
    console.log();
    aryPlayers.find((item , index)=>{
      if (item.sistemId == $(event.target).text()) {   
        aryPlayers.splice(index,1)
      }
    })
    $(event.target).parent().remove()
    localStorage.setItem("aryPlayers",JSON.stringify(aryPlayers))
    $(".box_remove").fadeOut();
  });
}

$(".box_btn_off_remove").click(function () { 
  $(".box_remove").fadeOut();
});