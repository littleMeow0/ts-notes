var ObjectType;
(function (ObjectType) {
    /**
     * 1. Object 是包含所有类型的一个类型 （除去null undefined）
     * 2. object 一般用于表示引用类型,例如 对象，数组，函数  (常用于泛型约束)
     * 3. {} 目前来看和 object 一样，但注意标红的代码（不建议这么用）
     */
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
    c.age = 12;
    console.log('c:', c.name, c.age);
    let d = [1, 2];
    d = function () { };
    d = {
        name: '小韩'
    };
    d.age = 22;
    console.log('d:', d.name, d.age);
    let e = {
        name: '--'
    };
    // e = [1]
    e.age = 45;
    console.log('e:', e.name, e.age);
})(ObjectType || (ObjectType = {}));
