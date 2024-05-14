namespace modifier{

    //  当前编译出来的js有问题，请查看配置

    /**
     * class 修饰符
     * 1. public  --默认
     * 2. private  --私有属性，只能在类中访问
     * 3. protected  --类中和继承的子类中访问
     * 4. static  --静态属性、方法 (不可this，只能使用类去调用)  不会被子类继承
     */


    class Person {
        public name: string
        private age: number = 0 // 赋予默认值 
        protected some: any
        static nb:string = '145'
        constructor(name:string, age:number){ // ts不允许直接在constructor中直接定义变量，需要先声明
            this.name = name
            this.age = age
        }
        static run() {
            return this.nb
        }
    }

    class Man extends Person{
        public hobby: string
        constructor(name:string, age:number, hobby: string) {
            super(name, age)
            this.hobby = hobby
        }
        create() {
            console.log(this.some)
        }
    }


    let xiaohan = new Person('小韩', 26)
    xiaohan.age = 33

    console.log(xiaohan)
    console.log(xiaohan.name)   
    console.log(xiaohan.age)
    console.log(xiaohan.some)

    console.log(Person.nb)
    console.log(Person.run())
}