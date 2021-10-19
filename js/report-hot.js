var ajax_ = new XMLHttpRequest() || new ActiveXObject();
ajax_.open('get', 'http://192.168.1.29:3000/report/hot', true);
ajax_.send();
ajax_.onreadystatechange = function () {
    if (ajax_.readyState == 4) {
        if (ajax_.status == 200) {
            var data = JSON.parse(ajax_.responseText);

            show(data)

        }
    }
}



// 展示方法 show()
function show(val) {
    var str = '';
    for (var i = 0; i <= 5; i++) {
        console.log(i);
        var img_ = val[i].img.replace(/localhost/g, '192.168.1.29');

        str += '<div class="report-jj">';
        str += '<img src="' + img_ + '"+ alt="" class="bj">';
        str += '<p>' + val[i].text + '</p>';
        str += '<div class="report-zan">';
        str += '<div class="report-zan-name">';
        str += '<span>';
        str += val[i].uName
        str += '</span>';
        str += '<span>';
        str += val[i].endTime;
        str += '</span>';

        str += '</div>';
        str += ' <div class="report-zan-a">';
        str += '<span>';
        str += '<img src="../css/img/xin.png" alt="" >';
        str += val[i].num
        str += '</span>';
        str += '</div>'
        str += ' <div class="report-zan-b">';
        str += '<span>';
        str += '<img src="../css/img/reply.png" alt="">';
        str += val[i].totalnum
        str += '</span>';
        str += '</div>';
        str += '</div>';
        str += '</div>';

        str += '<div class="report-bd">'
        str += '<p>关于格林盛特空气净化器的四篇报道，点击查看';
        str += '</p>'
        str += '</div>'
    }
    var div = document.getElementsByClassName('report-content-left')[0].innerHTML = str;

}
function more() {
    var ajax_ = new XMLHttpRequest() || new ActiveXObject();
    ajax_.open('get', 'http://192.168.1.29:3000/report/new', true);
    ajax_.send();
    ajax_.onreadystatechange = function () {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                var data = JSON.parse(ajax_.responseText);

                show2(data)

            }
        }
    }
}



// 展示方法 show()
function show2(val) {
    var str = '';
    for (var i of val) {
        console.log(i);
        var img_ = i.img.replace(/localhost/g, '192.168.1.29');

        str += '<div class="report-jj">';
        str += '<img src="' + img_ + '"+ alt="" class="bj">';
        str += '<p>' + i.text + '</p>';
        str += '<div class="report-zan">';
        str += '<div class="report-zan-name">';
        str += '<span>';
        str += i.uName
        str += '</span>';
        str += '<span>';
        str += i.endTime;
        str += '</span>';

        str += '</div>';
        str += ' <div class="report-zan-a">';
        str += '<span>';
        str += '<img src="../css/img/xin.png" alt="" >';
        str += i.num
        str += '</span>';
        str += '</div>'
        str += ' <div class="report-zan-b">';
        str += '<span>';
        str += '<img src="../css/img/reply.png" alt="">';
        str += i.totalnum
        str += '</span>';
        str += '</div>';
        str += '</div>';
        str += '</div>';

        str += '<div class="report-bd">'
        str += '<p>关于格林盛特空气净化器的四篇报道，点击查看';
        str += '</p>'
        str += '</div>'
    }
    var div = document.getElementsByClassName('report-content-left')[0].innerHTML = str;

    document.getElementsByClassName('more')[0].innerHTML = '没有更多了...';
}
