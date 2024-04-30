var FnExtend;
(function (FnExtend) {
    /**
     * 1. 对函数进行约束，一般是对传参的参数类型和函数返回值进行约束
     * 2. 函数重载，根据不同的传参执行相应的代码 (想象这样一个场景，假设我有一个函数，里面实现了好几个功能，每个功能它都有自己的传参和结果，有它自己的意义)
     *                                         那么使用重载规定每个功能的传参和返回值，实现的时候分开去写，很能体现每个功能的意义，ts检查也会很好，自己读代码也很清晰
     */
    // 定义函数的方式 （第一种）
    function add(a, b) {
        return a + b;
    }
    console.log('add执行', add(1, 2));
    // 定义函数的方式 （第二种）
    let add2 = (a, b) => a + b;
    let add3 = function (a, b) {
        return a;
    };
    console.log('add2执行', add2('1', '2'));
    console.log('add3执行', add3(true, false));
    //  定义函数的方式 （第三种）这种只能说明add4是一个函数，范围较大
    let add4 = () => { };
    let add5 = (name) => {
        console.log(name);
    };
    let fn = (user) => {
        return user;
    };
    let u1 = {
        name: '小韩',
        age: 22
    };
    console.log('u1', fn(u1));
    // 函数重载  (可参考https://blog.csdn.net/w1099690237/article/details/134822663)
    let arr = [1, 2, 3, 4, 2];
    // 2. 函数实现
    function arrFn(value) {
        console.log('arrFn', typeof value); // typeof 类型
        if (typeof value === 'undefined') { // 查询所有
            return arr;
        }
        if (typeof value === 'number') { // 查询单个
            return arr.filter((item) => value == item);
        }
        if (typeof value === 'object') { // 新增
            return arr.concat(value);
        }
    }
    console.log(arrFn());
    console.log(arrFn(1));
    console.log(arrFn([1]));
})(FnExtend || (FnExtend = {}));
