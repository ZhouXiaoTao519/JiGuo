var ajax_ = new XMLHttpRequest() || new ActiveXObject();
ajax_.open('get', 'http://192.168.1.29:3000/useing/public', true);
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
    for (var i = 0; i < 4; i++) {
        console.log(i);
        var img_ = val[i].img.replace(/localhost/g, '192.168.1.29');

        str += '<div class="more-show-box">';
        str += '<img src="' + img_ + '"+ alt="" class="bj">';
        str += '<p>' + val[i].text + '</p>';
        str += '<div class="more-show-box-first">';
        str += '<span>';
        str += val[i].uName
        str += '</span>';
        str += '<span>';
        str += val[i].endTime;
        str += '</span>';
        str += '</div>';
        str += '<div class="more-show-box-two">';
        str += '<p>';
        str += val[i].totalnum + '申请'
        str += '</p>';
        str += '</div>';
        str += '<div class="more-show-box-three">';
        str += '<p>';
        str += '剩余时间' + val[i].num + '天'
        str += '</p>';
        str += '</div>';
        str += '</div>';
    }
    var div = document.getElementsByClassName('more-show')[0].innerHTML = str;

}
function more2() {
    var ajax_ = new XMLHttpRequest() || new ActiveXObject();
    ajax_.open('get', 'http://192.168.1.29:3000/useing/public', true);
    ajax_.send();
    ajax_.onreadystatechange = function () {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                var data = JSON.parse(ajax_.responseText);

                show1(data)

            }
        }
    }
}



// 展示方法 show()
function show1(val) {
    var str = '';
    for (var i = 0; i < 8; i++) {
        console.log(i);
        var img_ = val[i].img.replace(/localhost/g, '192.168.1.29');

        str += '<div class="more-show-box">';
        str += '<img src="' + img_ + '"+ alt="" class="bj">';
        str += '<p>' + val[i].text + '</p>';
        str += '<div class="more-show-box-first">';
        str += '<span>';
        str += val[i].uName
        str += '</span>';
        str += '<span>';
        str += val[i].endTime;
        str += '</span>';
        str += '</div>';
        str += '<div class="more-show-box-two">';
        str += '<p>';
        str += val[i].totalnum + '申请'
        str += '</p>';
        str += '</div>';
        str += '<div class="more-show-box-three">';
        str += '<p>';
        str += '剩余时间' + val[i].num + '天'
        str += '</p>';
        str += '</div>';
        str += '</div>';
    }
    var div = document.getElementsByClassName('more-show')[0].innerHTML = str;
    document.getElementById('morekan').innerHTML = '没有更多了...';

}