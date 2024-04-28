var Interface;
(function (Interface) {
    /**
     * 1. interface 接口，主要用于约束对象结构（对象属性和方法）
     * 2. 重名的两个 interface 接口，会自动合并
     * 3. extends 继承，也会自动合并
     * 4. interface 接口，也可以用于定义一个函数
     */
    let u1 = {
        name: '小韩',
        age: 22,
        // sex: 1
        height: 158,
        cb() {
            console.log('我是一个方法');
        },
        say() {
            console.log('我的名字叫', this.name);
        },
        weight: 88,
        a: 4,
        xx: () => {
            console.log('//');
        }
    };
    u1.age = 28;
    // u1.height = 159  只读属性不可以被修改（虽然ts会进行报错，但还是编译成了js，所以还是可以运行成功，但是不建议这么写【不符合情景和用法】）
    console.log(u1);
    u1.cb();
    u1.say();
    let f1 = () => {
        console.log('我是一个函数');
    };
    f1();
    let p1 = {
        likecolor: 'red',
        name: '小韩',
        age: 22,
        // sex: 1
        height: 158,
        cb() {
            console.log('我是一个方法');
        },
        say() {
            console.log('我的名字叫', this.name);
        },
        weight: 88,
        a: 4,
        xx: () => {
            console.log('//');
        }
    };
    console.log(p1);
})(Interface || (Interface = {}));
