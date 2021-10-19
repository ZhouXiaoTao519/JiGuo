var ajax_ = new XMLHttpRequest() || new ActiveXObject();
ajax_.open('get', 'http://192.168.1.29:3000/guid/hot', true);
ajax_.send();
ajax_.onreadystatechange = function () {
    if (ajax_.readyState == 4) {
        if (ajax_.status == 200) {
            var data = JSON.parse(ajax_.responseText);
            console.log(data);
            show(data)

        }
    }
}



// 展示方法 show()
function show(val) {
    var str = '';
    for (var i of val) {
        var img_ = i.img.replace(/192.168.1.64/g, '192.168.1.29');
        str += '<a href="../guid/导购-详情.html">'
        str += '<div class="guid-in">';
        str += '<img src="' + img_ + '"+ alt="">';
        str += '<p>' + i.text + '</p>';
        str += '<div class="guid-zan">';
        str += '<div class="guid-zan-a">';
        str += '<span>';
        str += '<img src="../css/img/xin.png" alt="">';
        str += '</span>';
        str += i.like;
        str += '</div>';
        str += '<div class="guid-zan-b">';
        str += '<span>';
        str += '<img src="../css/img/reply.png" alt="">';
        str += '</span>';
        str += i.words;
        str += '</div>';
        str += '</div>';
        str += '</div>';
        str += '</a>'
    }
    var div = document.getElementsByClassName('guid-content')[0].innerHTML = str;

}
