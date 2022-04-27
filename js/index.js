// 登录 - 函数立即调用(封装)
(function () {
    let oBtnLogin = document.getElementById('btn-login');// 登录
    let oBtnRegist = document.getElementById('btn-regist'); // 注册  

 
    // oBtnLogin.onclick = function () {
    //     let modal = new Modal();
    //     // 调用modal类的方法，给onClick方法传递不定参数，使用对象的方式传参
    //     modal.onClick({ 
    //         el: 'myModal1',
    //         onOk: function () {
    //             let username = document.getElementById('username');
    //             let password = document.getElementById('password');
    //             console.log(username.value, password.value);
    //         }
    //     });  
    // }
    // oBtnRegist.onclick = function () {
    //     let modal = new Modal();
    //     // 打开
    //     modal.onClick({
    //         el: 'myModal2',
    //         width: 600,
    //         height: 400,
    //         onOk: function () {
    //             let user = document.getElementById('user');
    //             let pw = document.getElementById('pw');
    //             console.log(user.value, pw.value);
    //         }
    //     });  
    // }
 

    // 登录
    oBtnLogin.onclick = function () {
        let modal = new Modal({
            el:'myModal1',
            // 点击ok后的操作 获取用户名和密码并打印
            onOk: function () {
                let username = document.getElementById('username');
                let password = document.getElementById('password');
                console.log(username.value, password.value);
            }
        });  
    }
    // 注册
    oBtnRegist.onclick = function () {
        let modal = new Modal({ 
            el: 'myModal2',
            width: 600,
            height: 400,
            onOk: function () {
                let username = document.getElementById('user');
                let password = document.getElementById('pw');
                console.log(user.value, pw.value);
            }
        });  
    }

})();
