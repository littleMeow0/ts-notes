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
    let fn1 = (num) => {
        console.log(num.indexOf('1')); // 错误用法，目前只是将num断言为string类型，但它本身还是一个数值，请合理使用类型断言（不要把类型和实际应用的方法矛盾）   fn1(12)
        console.log(num.length);
    };
    // fn1(12)
    fn1('12');
    let fn2 = (type) => {
        console.log(type.run); // 断言为某种类型，其实就有它相对应的代码提示和用法啦，会更方便
    };
    fn2({
        build: '888'
    });
    let str = "a";
    let str1 = "a";
    str = str1;
    console.log(str);
    // (window as any).abc = 123   // 如果直接为window添加属性是加不上的，加上类型断言让它有相应的方法，就可以啦
})(typeClass || (typeClass = {}));
