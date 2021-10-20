window.onload = function () {
  var ajax = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHttp");
  ajax.open("get", "http://192.168.1.29:3000/useing/public");
  ajax.send();
  ajax.onreadystatechange = function () {
    if (ajax.readyState == 4) {
      if (ajax.status == 200) {
        var data = JSON.parse(ajax.responseText);
        onData(data);
      }
    }
  };
};

function onData(v) {
  var str = "";
  for (var i = 0; i < v.length; i++) {
    var img_ = v[i].img.replace(/localhost/g, "192.168.1.29");
    str += '<div class="main2">';
    str += '<div class="main3">';
    str += '<img src="' + img_ + '" alt="">';
    str += "<p>" + v[i].text + "</p>";
    str += "<div>" + v[i].totalnum + "</div>";
    str += "<div>" + v[i].num + "</div>";
    str += "<br><span>" + v[i].apply + "<p>申请</p></span>";

    str += "</div>";
    str += "</div>";
  }
  document.getElementsByClassName("main1")[0].innerHTML = str;
}
