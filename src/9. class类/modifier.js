var modifier;
(function (modifier) {
    //  当前编译出来的js有问题，请查看配置
    /**
     * class 修饰符
     * 1. public  --默认
     * 2. private  --私有属性，只能在类中访问
     * 3. protected  --类中和继承的子类中访问
     * 4. static  --静态属性、方法 (不可this，只能使用类去调用)  不会被子类继承
     */
    class Person {
        constructor(name, age) {
            this.age = 0; // 赋予默认值 
            this.name = name;
            this.age = age;
        }
        static run() {
            return this.nb;
        }
    }
    Person.nb = '145';
    class Man extends Person {
        constructor(name, age, hobby) {
            super(name, age);
            this.hobby = hobby;
        }
        create() {
            console.log(this.some);
        }
    }
    let xiaohan = new Person('小韩', 26);
    xiaohan.age = 33;
    console.log(xiaohan);
    console.log(xiaohan.name);
    console.log(xiaohan.age);
    console.log(xiaohan.some);
    console.log(Person.nb);
    console.log(Person.run());
})(modifier || (modifier = {}));
