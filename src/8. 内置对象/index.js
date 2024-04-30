var InnerObject;
(function (InnerObject) {
    /**
     * 内置对象   (这种都是由new构建出来的，它的类型就是class)
     * ES5 ===>  Boolean Number String Object Date RegExp Error XMLHttpRequest
     * DOM ===>  HTMLElement NodeList(元素集合) NodeListOf<HTMLElement>(可以在元素集合中加类型)
     * BOM ===>  Storage Location  Promise<number>
     */
    // ES5
    let b = new Boolean();
    console.log(b);
    // let e:Error = new Error('Error occurred')
    // console.log(e)
    let d = new Date();
    console.log(d);
    let r = /[a-z]/;
    console.log(r);
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: '小韩',
                age: 26
            });
        }, 1000);
    });
    console.log(p);
    // 封装localStorage本地存储
    // localStorage.setItem("myCat", "Tom")
    // let myCat:string = localStorage.getItem("myCat")
})(InnerObject || (InnerObject = {}));
