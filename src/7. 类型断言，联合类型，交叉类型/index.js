var typeClass;
(function (typeClass) {
    // 联合类型
    let phone = 123;
    phone = '467';
    console.log(phone);
    let fn = (value) => {
        return !!value;
    };
    // 交叉类型
    let afe; // 事实上不存在 number & string 都存在的值
    console.log(afe);
    let m = {
        name: '--',
        age: 22,
        sex: 1
    };
    // 类型断言 （如果你确定某个变量的类型，可直接断言成自己想要的，ts便不会在自行推断了）
})(typeClass || (typeClass = {}));
