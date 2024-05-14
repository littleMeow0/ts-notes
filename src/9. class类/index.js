var classType;
(function (classType) {
    // 1. 普通的方式创建一个类
    // class Vue implements VueCls{
    //     options: Options
    //     constructor(options: Options) {
    //         this.options = options
    //     }
    //     init() {
    //         console.log('init调用')
    //     }
    // }
    // let v = new Vue({
    //     el: "#app"
    // })
    // v.init()
    // console.log(v)
    /**
     * 3. 创建VDom, 虚拟DOM类，可对传入的数据生成html元素
     * 1. 创建节点
     * 2. 填充节点内容
     * 3. 渲染到页面上
     */
    class VDom {
        createElement(elementName) {
            let element = document.createElement(elementName);
            return element;
        }
        fillContent(element, text) {
            element.innerText = text;
        }
        render(data) {
            let root = this.createElement(data.node);
            console.log('node1', root);
            if (Array.isArray(data.children)) {
                data.children.forEach((el) => {
                    let node = this.render(el);
                    root.appendChild(node);
                });
            }
            else {
                this.fillContent(root, data.text);
            }
            console.log('node2', root);
            return root;
        }
    }
    // 即会在页面上添加传入的内容
    // new VDom().render({
    //     node: 'div',
    //     children: [{
    //         node: 'span',
    //         text: '元素1'
    //     },{
    //         node: 'span',
    //         text: '元素2'
    //     }]
    // })
    /**
     * 4. class类继承，并加上约束
     */
    class Vue extends VDom {
        constructor(options) {
            super();
            this.options = options;
            this.init();
        }
        init() {
            console.log('init调用');
            let data = {
                node: 'div',
                children: [{
                        node: 'span',
                        text: '元素1'
                    }, {
                        node: 'span',
                        text: '元素2'
                    }]
            };
            let res = this.render(data);
            let app = typeof this.options.el === 'string' ? document.querySelector(this.options.el) : this.options.el;
            app.appendChild(res);
        }
    }
    let v = new Vue({
        el: "#app"
    });
})(classType || (classType = {}));
