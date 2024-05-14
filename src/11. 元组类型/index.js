var TupleType;
(function (TupleType) {
    /**
     * 元组类型
     * 特点：元组中的元素类型可以是不固定的，而且数量固定
     * 好处：可以把多个元素作为一个单元传递，如果一个方法需要返回多个值，可以把这多个值作为一个元组返回
     */
    let arr = ['abc', 123];
    arr.push(1); // 越界会被推断为联合类型
    arr.push('han');
    console.log(arr);
    let arr1 = ['abc']; // 初始时写法更灵活
    arr1.push('han'); // 越界会被推断为联合类型
    console.log(arr1);
    console.log(typeof arr1[0]); // 获取值类型
    let arr2 = [
        ['title', 'name', 1, '123'],
        ['title', 'name', 1, '123'],
    ];
    console.log(arr2);
})(TupleType || (TupleType = {}));
