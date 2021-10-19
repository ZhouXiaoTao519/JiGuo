function on() {
    var ajax = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHttp')
    ajax.open('get', 'http://192.168.1.29:3000/useing/public');
    ajax.send();
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4) {
            if (ajax.status == 200) {
                var data = JSON.parse(ajax.responseText);
                onData(data);

            }
        }
    }
}

function onData(v) {
    var str = '';
    for (var i = 0; i < v.length - 8; i++) {
        var img_ = v[i].img.replace(/localhost/g, '192.168.1.29');
        // console.log(v);
        str += "<div class='cp'>";
        str += "<img src='" + img_ + "'>"
        str += "<h6>" + v[i].text + "</h6>"
        str += "<a>" + v[i].totalnum + "</a>"
        str += "<a>" + v[i].num + "</a>"
        str += "<div>"
        str += "<h5>" + v[i].apply + "</h5>"
        str += "申请</div>"
        str += "<div>剩余时间2天</div>"
        str += "</div>"
    }
    document.getElementsByClassName('gd')[0].innerHTML = str;
}

function fn() {
    var ajax = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHttp')
    ajax.open('get', 'http://192.168.1.29:3000/useing/public');
    ajax.send();
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4) {
            if (ajax.status == 200) {
                var data = JSON.parse(ajax.responseText);
                onData2(data);

            }
        }
    }
}

function onData2(v) {
    var str = '';
    for (var i = 0; i < v.length - 1; i++) {
        var img_ = v[i].img.replace(/localhost/g, '192.168.1.29');
        // console.log(v);
        str += "<div class='cp'>";
        str += "<img src='" + img_ + "'>"
        str += "<h6>" + v[i].text + "</h6>"
        str += "<a>" + v[i].totalnum + "</a>"
        str += "<a>" + v[i].num + "</a>"
        str += "<div>"
        str += "<h5>" + v[i].apply + "</h5>"
        str += "申请</div>"
        str += "<div>剩余时间2天</div>"
        str += "</div>"
    }
    document.getElementsByClassName('gd')[0].innerHTML = str;
    document.getElementsByClassName('ck')[0].innerHTML = '没有更多了';
}



// 热门使用渲染
window.onload = function() {
    var ajax = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHttp')
    ajax.open('get', 'http://192.168.1.29:3000/useing/master');
    ajax.send();
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4) {
            if (ajax.status == 200) {
                var data = JSON.parse(ajax.responseText);
                onData3(data);
                dg();
                kw();
            }
        }
    }
}

function onData3(v) {
    var str = '';
    for (var i = 0; i < v.length - 11; i++) {
        var img_ = v[i].img.replace(/localhost/g, '192.168.1.29');
        // console.log(v);
        str += "<div class='cp'>";
        str += "<img src='" + img_ + "'>"
        str += "<h6>" + v[i].text + "</h6>"
        str += "<a>" + v[i].totalnum + "</a>"
        str += "<a>" + v[i].num + "</a>"
        str += "<div>"
        str += "<h5>" + v[i].apply + "</h5>"
        str += "申请</div>"
        str += "<div>剩余时间7天</div>"
        str += "</div>"
    }
    document.getElementsByClassName('d1')[0].innerHTML = str;
}

// 导购精选渲染
function dg() {
    var ajax = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHttp')
    ajax.open('get', 'http://192.168.1.29:3000/report/new');
    ajax.send();
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4) {
            if (ajax.status == 200) {
                var data = JSON.parse(ajax.responseText);
                onData4(data);
            }
        }
    }
}

function onData4(v) {
    var str = '';
    for (var i = 0; i < v.length - 5; i++) {
        var img_ = v[i].img.replace(/localhost/g, '192.168.1.29');
        // console.log(v);
        str += "<div class='cp'>";
        str += "<img src='" + img_ + "'>"
        str += "<h6>" + v[i].text + "</h6>"
        str += "<a>" + v[i].totalnum + "</a>"
        str += "<a>" + v[i].num + "</a>"
        str += "<div>"
        str += "<h5>" + v[i].apply + "</h5>"
        str += "申请</div>"
        str += "<div>剩余时间2天</div>"
        str += "</div>"
    }
    document.getElementsByClassName('d2')[0].innerHTML = str;
}

// 发现酷玩渲染
function kw() {
    var ajax = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHttp')
    ajax.open('get', 'http://192.168.1.29:3000/report/hot');
    ajax.send();
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4) {
            if (ajax.status == 200) {
                var data = JSON.parse(ajax.responseText);
                onData5(data);
            }
        }
    }
}

function onData5(v) {
    var str = '';
    for (var i = 0; i < v.length - 7; i++) {
        var img_ = v[i].img.replace(/localhost/g, '192.168.1.29');
        // console.log(v);
        str += "<div class='cp'>";
        str += "<img src='" + img_ + "'>"
        str += "<h6>" + v[i].text + "</h6>"
        str += "<a>" + v[i].totalnum + "</a>"
        str += "<a>" + v[i].num + "</a>"
        str += "<div>"
        str += "<h5>" + v[i].apply + "</h5>"
        str += "申请</div>"
        str += "<div>剩余时间2天</div>"
        str += "</div>"
    }
    document.getElementsByClassName('d3')[0].innerHTML = str;
}