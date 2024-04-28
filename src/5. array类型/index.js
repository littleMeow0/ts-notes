var ArrayType;
(function (ArrayType) {
    // 定义数组的第一种方式
    let arr = [1, 2, 3];
    console.log(arr);
    // 定义数组的第二种方式 (更灵活)
    let arr1 = ['1', '2', '3'];
    console.log(arr1);
    // let a1:Array<string|number> = [1, '2']
    // 定义数组的第三种方式
    let arr2 = [1, '2'];
    console.log(arr2);
    let userArr = [{
            name: '小韩',
            age: 25
        }];
    console.log(userArr);
    // 定义一个二维数组
    let arr4 = [[1]];
    console.log(arr4);
    let a4 = [['1']];
    console.log(a4);
    /**
     * 定义函数的剩余参数
     * 定义类数组（伪数组）
     */
    function fn1(...args) {
        console.log('剩余参数', args);
        let argu = arguments;
        console.log('arguments', argu, ...args);
    }
    fn1(1, 2, 3);
    let a = {
        '0': 1,
        length: 1,
        callee() {
        },
    };
    // Array.from() 可以将类数组转化为数组
})(ArrayType || (ArrayType = {}));
