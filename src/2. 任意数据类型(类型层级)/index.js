var AnyType;
(function (AnyType) {
    /**
     * 1. any,unknown 属于顶级类型，使用它们做变量类型可以为变量的值赋任何类型的值（关掉限制）
     * 2. Object 属于第二级别，js中我们使用的所有数据类型和函数本质上来说都是一个Object，Object包含所有的数据类型了(不包含null undefined)
     * 3. Number String Boolean 可以使用日常的方式进行直接赋值，也可以用new Number()
     * 4. number string boolean 可以使用日常的方式进行直接赋值
     * 5. 做类型声明，可以直接使用值   例如：1 ‘2’ false
     * 6. never类型，最底层的数据类型，一般用于容错
     */
    let a = '123';
    a = [];
    a = null;
    a = function () {
    };
    a = new Date();
    a = {
        name: '小韩a'
    };
    console.log(a);
    console.log(a.name); // any 类型的变量属性可被读取
    let a1 = 11;
    a1 = a; // any 类型的变量可以赋值给其它类型的变量（被赋值的这个变量类型由此不确定了）
    console.log(a1);
    let b = '123';
    b = [];
    b = null;
    b = function () {
    };
    b = new Date();
    b = {
        name: '小韩b'
    };
    console.log(b);
    // console.log(b.name)   // unknown 类型的变量属性不可被读取
    let b1 = 22;
    // b1 = b    // 可以发现这行代码是错误的，unknown 类型的变量不可被赋值给其它变量 （由此发现，unknown 要比 any 更安全）
    let b2 = 0;
    b2 = b; // unknown 类型的变量可被赋值给同类型的变量
    let c = {
        name: 'c'
    };
    c = 123;
    c = '123';
    c = function () {
    };
    c = new Date();
    // c = null
    // c = undefined
    c = new Object({
        name: 'c'
    });
    console.log(c);
    // c = b
    let d = 10;
    d = new Number(11);
    console.log(d);
    let e = 10;
    // e = new Number(20)
    console.log(e);
    let g = 1;
    // g = 2
    console.log(g);
})(AnyType || (AnyType = {}));
