function on() {
  var ajax = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHttp");
  ajax.open("get", "http://192.168.1.29:3000/play/hot");
  ajax.send();
  ajax.onreadystatechange = function () {
    if (ajax.readyState == 4) {
      if (ajax.status == 200) {
        var data = JSON.parse(ajax.responseText);
        onData(data);
      }
    }
  };
}

function onData(v) {
  var str = "";
  for (var i of v) {
    for (var j = 0; j < v.length; j++) {
      var img_ = i[j].img.replace(/192.168.1.64/g, "192.168.1.29");
      str += "<div class='main2'>";
      str += '<img src="' + img_ + '" alt="">';
      str += '<div class="border">';
      str += "<p>" + i[j].text + "</p>";
      str += "<span>" + i[j].description + "</span>";
      str += '<div class="img">';
      str += "<span>" + i[j].price + "</span>";
      str += '<img src="../css/img/xin.png" alt="">';
      str += "<p>" + i[j].words + "</p>";
      str += '<img src="../css/img/reply.png" alt="">';
      str += "<p>" + i[j].like + "</p>";
      str += "</div>";
      str += "</div>";
      str += "</div>";
    }
  }
  document.getElementsByClassName("main1")[0].innerHTML = str;
}
window.onload = function () {
  on();
};
function on2() {
  var ajax = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHttp");
  ajax.open("get", "http://192.168.1.29:3000/play/hot");
  ajax.send();
  ajax.onreadystatechange = function () {
    if (ajax.readyState == 4) {
      if (ajax.status == 200) {
        var data = JSON.parse(ajax.responseText);
        onData2(data);
      }
    }
  };
}

function onData2(v) {
  var str = "";
  for (var i = 0; i < v.length; i++) {
    for (var j = 0; j < v[i].length; j++) {
      var img_ = v[i][j].replace(/192.168.1.64/g, "192.168.1.29");
      str += "<div class='main2'>";
      str += '<img src="' + img_ + '" alt="">';
      str += '<div class="border">';
      str += "<p>" + v[i][j].text + "</p>";
      // console.log(v[i][j]);
      str += "<span>" + v[i][j].description + "</span>";
      str += '<div class="img">';
      str += "<span>" + v[i][j].price + "</span>";
      str += '<img src="../css/img/xin.png" alt="">';
      str += "<p>" + v[i][j].words + "</p>";
      str += '<img src="../css/img/reply.png" alt="">';
      str += "<p>" + v[i][j].like + "</p>";
      str += "</div>";
      str += "</div>";
      str += "</div>";
    }
  }
  document.getElementsByClassName("main1")[0].innerHTML = str;
}
