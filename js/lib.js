// 工具
let util = (function () {
    return {
        // 封装：获取某一个节点的下一个兄弟节点，解决各种兼容性问题 Bom和Dom
        next: function (elem) {
            do {
                elem = elem.nextSibling;
            } while (elem && elem.nodeType != 1)
            return elem;
        },
        // 封装：获取某一节点的第一个孩子节点，解决各种兼容性问题  Bom和Dom
        first: function (elem) {
            elem = elem.firstChild;
            return elem && elem.nodeName != 1 ? this.next(elem) : elem;
        }
    }
})();