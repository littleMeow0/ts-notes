var BaseType;
(function (BaseType) {
    /**
     * 1. 给变量规定了类型，那么之后赋予变量的值类型一定要遵循这个标准，不然ts就会报错
     * 2. void 类型其实是 undefined | null 的交叉类型 （一般用于函数中，标识函数没有返回值）
     * 3. object 和 function 其实并不属于基础数据类型，因为直接写的话并不能给它约束（根据场景选择）
     */
    let a = 1;
    console.log(a);
    let b = '1';
    console.log(b);
    let c = true;
    console.log(c);
    // let d:object = {
    //     name: '小韩'
    // }
    // console.log(d)
    let e;
    console.log(e);
    let f = null;
    console.log(f);
    let g = e;
    g = f;
    console.log(g);
    function fn() {
        console.log('我是一个函数');
    }
    let h = () => {
    };
    console.log(h);
})(BaseType || (BaseType = {}));
