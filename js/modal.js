// 函数立即调用 对外只暴露一个变量
let Modal = (function () {
    let settings = {
        width: 400,
        height: 300
    }

    // 对象合并函数 作用： 将obj对象中的参数合并至target中
    function extend(target, obj) {
        for (let i in obj) {
            if (typeof obj[i] == 'object') {
                target[i] = extend(obj[i].constructor == Array ? [] : {}, obj[i]);
            } else {
                target[i] = obj[i];
            }
        }
        return target;
    }

    // // 定义modal类，弹层组件类
    // class Modal {
    //     that = this;
    //     myModal = document.getElementById(settings.el);

    //     onClick(options) {
    //         extend(settings, options);
    //         // 通过一个对象传属性值
    //         // this.myModal = document.getElementById(settings.el);
    //         myModal.style.display = "block";

    //         // 改变弹窗的宽高
    //         let modelResize = myModal.firstElementChild;//遍历方式，第一个孩子节点 
    //         // let modelResize = util.first(this.myModal);// 使用自己的工具类
    //         modelResize.style.width = settings.width + 'px';
    //         modelResize.style.height = settings.height + "px";

    //         // 点击任意空白区域关闭弹窗
    //         myModal.onclick = function () {
    //             that.close();
    //         }
    //         let dialog = this.myModal.getElementsByClassName('modal-dialog')[0];
    //         dialog.onclick = function (e) {
    //             e.stopPropagation();//阻止事件冒泡
    //         }

    //         // 关闭 
    //         let oBtnClose = this.myModal.getElementsByClassName('modal-close')[0];
    //         oBtnClose.onclick = function () {
    //             that.close();
    //         }

    //         // 取消
    //         let oBtnCancel = this.myModal.getElementsByClassName('modal-cancel')[0];
    //         oBtnCancel.onclick = function () {
    //             that.close();
    //         }

    //         // 确认
    //         let oBtnOk = this.myModal.getElementsByClassName('modal-ok')[0];
    //         oBtnOk.onclick = function () {
    //             // 点击不同的确认按钮会有不同的弹窗或操作 所以在modal类中 操作不能统一
    //             settings.onOk();
    //         }

    //     }

    //     onClose() {
    //         this.myModal.style.display = "none";
    //     }
    // }

    // 定义modal类，弹层组件类

    function Modal(options) {
        let that = this;
        extend(settings, options);
        this.myModal = document.getElementById(settings.el);
        this.myModal.style.display = "block";

        // 改变弹窗的宽高
        let modelResize = util.first(this.myModal);// 使用自己的工具类
        modelResize.style.width = settings.width + 'px';
        modelResize.style.height = settings.height + "px";

        // 点击任意空白区域关闭弹窗
        this.myModal.onclick = function () {
            that.close();
        }
        let dialog = this.myModal.getElementsByClassName('modal-dialog')[0];
        dialog.onclick = function (e) {
            e.stopPropagation();//阻止事件冒泡
        }

        // 关闭 
        let oBtnClose = this.myModal.getElementsByClassName('modal-close')[0];
        oBtnClose.onclick = function () {
            that.close();
        }

        // 取消
        let oBtnCancel = this.myModal.getElementsByClassName('modal-cancel')[0];
        oBtnCancel.onclick = function () {
            that.close();
        }

        // 确认
        let oBtnOk = this.myModal.getElementsByClassName('modal-ok')[0];
        oBtnOk.onclick = function () {
            // 点击不同的确认按钮会有不同的弹窗或操作 所以在modal类中 操作不能统一
            settings.onOk();
        }
    }

    Modal.prototype.close = function () {
        this.myModal.style.display = "none";
    }

    return Modal;// 返回值
})();