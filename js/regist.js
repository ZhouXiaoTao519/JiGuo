/*获取会员名的文本框、密码输入框以及确认密码的输入框*/
/*获取P标签*/
var user = document.getElementById("user"),
    psd = document.getElementById("psd"),
    psd2 = document.getElementById("psd2"),
    myp = document.getElementsByTagName("p"),
    user_p = myp[0],
    psd_p = myp[1],
    psd2_p = myp[2],
    submitBtn = document.getElementById("submitBtn");
//当光标聚集到文本框时，p标签里的文字显示
user.onfocus = function() {
    user_p.style.display = "block";
    //光标再次聚集文本框时，改变文字显示
    user_p.innerHTML = '<i class="ati"></i>6-12个字符'
}
user.onblur = function() {
        //正则判断
        reg = /^[\w\u4e00-\u9fa5]{6,12}$/;
        //如果值为空，则p标签的内容改为“不能为空”
        if (user.value == '') {
            user_p.innerHTML = '<i class="err"></i>不能为空';
            return false;
        }
        //如果长度不在6-12之间并且存在非法字符
        else if (!reg.test(user.value)) {
            user_p.innerHTML = '<i class="err"></i>长度不在范围内或者存在非法字符'
            return false;
        }
        //用户名输入与要求一致
        else {
            user_p.innerHTML = '<i class="ok"></i>正确'
            return true
        }
    }
    //当光标聚集到密码框时，p标签里的文字显示
psd.onfocus = function() {
    psd_p.style.display = 'block';
    //光标再次聚集密码框时，改变文字显示
    psd_p.innerHTML = '<i class="ati"></i>长度在6-12个字符'
}
psd.onblur = function() {
        //不能为空
        //长度在6-12之间 字母数字下划线       
        //不能全是数字
        //不能全是字母
        var reg = /^\w{6,12}$/;
        var reg1 = /[^0-9]/;
        var reg2 = /[^a-zA-Z]/;
        //不能为空
        if (psd.value == '') {
            psd_p.innerHTML = '<i class="err"></i>不能为空';
            return false;
        }
        //长度在6-12之间 字母数字下划线
        else if (!reg.test(psd.value)) {
            psd_p.innerHTML = '<i class="err"></i>长度不在范围内或者存在非法字符'
            return false;
        }
        //不能全是数字  
        else if (!reg1.test(psd.value)) {
            psd_p.innerHTML = '<i class="err"></i>不能全是数字'
            return false;
        }
        //不能全是字母
        else if (!reg2.test(psd.value)) {
            psd_p.innerHTML = '<i class="err"></i>不能全是字母'
            return false;
        }
        //密码输入与要求一致
        else {
            psd_p.innerHTML = '<i class="ok"></i>正确'
            return true;
        }
    }
    //当光标聚集到确认密码框时，p标签里的文字显示
psd2.onfocus = function() {
    psd2_p.style.display = 'block';
    //光标再次聚集确认密码框时，改变文字显示
    psd2_p.innerHTML = '<i class="ati"></i>请输入相同密码';
}
psd2.onblur = function() {
    //不能为空
    if (psd2.value == "") {
        psd2_p.innerHTML = '<i class="err"></i>不能为空';
        return false;
    }
    //两次密码输入不一致
    else if (psd.value != psd2.value) {
        psd2_p.innerHTML = '<i class="err"></i>两次密码不一致';
        return false;
    }
    //密码输入与要求一致
    else {
        psd2_p.innerHTML = '<i class="ok"></i>正确'
        return true;
    }
}
submitBtn.onclick = function() {
    if (user.onblur() && psd.onblur() && psd2.onblur()) {
        //document.forms[0].submit();
        document.getElementsByTagName("form")[0].submit();
    }
}