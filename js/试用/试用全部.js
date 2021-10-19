function on() {
  var ajax = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHttp");
  ajax.open("get", "http://192.168.1.29:3000/useing/public");
  ajax.send();
  ajax.onreadystatechange = function () {
    if (ajax.readyState == 4) {
      if (ajax.status == 200) {
        var data = JSON.parse(ajax.responseText);
        onData(data);
        // console.log(data);
      }
    }
  };
}

function onData(v) {
  var str = "";
  for (var i of v) {
    console.log(i);

    str += '<div class="main2">';
    str += '<div class="main3">';
    str += '<img src="' + i.img + '" alt="">';
    str += "<p>" + i.text + "</p>";
    str += "<div>" + i.totalnum + "</div>";
    str += "<div>" + i.num + '+"台"</div>';
    //         <br><span>1392<p>申请</p></span>
    //         <br><span>报告数量:8</span>
    str += "</div>";
    str += "</div>";
  }
}
// document.getElementsByClassName("main1")[0].innerHTML = str;
// }
window.onload = function () {
  on();
};
// function on2() {
//   var ajax = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHttp");
//   ajax.open("get", "http://192.168.1.29:3000/using/public");
//   ajax.send();
//   ajax.onreadystatechange = function () {
//     if (ajax.readyState == 4) {
//       if (ajax.status == 200) {
//         var data = JSON.parse(ajax.responseText);
//         onData2(data);
//       }
//     }
//   };
// }

// function onData2(v) {
//   var str = "";
//   for (var i = 0; i < 4; i++) {
//     for (var j = 0; j < v[i].length; j++) {
//       // console.log(v[i][j].img);
//       var img_ = v[i][j].img.replace(/192.168.1.64/g, "192.168.1.29");
//       // console.log(i[j].img);
//       str += "<div class='main2'>";
//       str += '<img src="' + img_ + '" alt="">';
//       str += '<div class="border">';
//       str += "<p>" + v[i][j].text + "</p>";
//       str += "<span>" + v[i][j].description + "</span>";
//       str += '<div class="img">';
//       str += "<span>" + v[i][j].price + "</span>";
//       str += '<img src="../css/img/xin.png" alt="">';
//       str += "<p>" + v[i][j].words + "</p>";
//       str += '<img src="../css/img/reply.png" alt="">';
//       str += "<p>" + v[i][j].like + "</p>";
//       str += "</div>";
//       str += "</div>";
//       str += "</div>";
//     }
//   }
// document.getElementsByClassName("main1")[0].innerHTML = str;
// }
