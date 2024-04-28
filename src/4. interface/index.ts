namespace Interface{


    /**
     * 1. interface 接口，主要用于约束对象结构（对象属性和方法）
     * 2. 重名的两个 interface 接口，会自动合并
     * 3. extends 继承，也会自动合并
     * 4. interface 接口，也可以用于定义一个函数
     */

    interface Fn{
        ():void
    }

    interface User{
        // 第一种
        name: string,
        age: number,
        // 第二种 (sex属性是一个可选项【可有可无】)
        sex?: number,
        // 第三种 (readonly, 只可读取，不可修改)
        readonly height: number,
        // 第四种 (方法【普通】)
        cb():void,
        // 第五种 (方法【可访问内部属性】)
        say(this:User):void,
        // 第六种（索引签名【当你有些属性不太明确的时候需要它】）我们一般用后台返回的数据，有些是肯定要用的，有些则不必要，那么这样子写正合适
        [propName: string]: any,
        xx:Fn
    }
    
    interface User{
        weight: number
    }


    let u1:User = {
        name: '小韩',
        age: 22,
        // sex: 1
        height: 158,
        cb(){
            console.log('我是一个方法')
        },
        say(this:User){
            console.log('我的名字叫', this.name)
        },
        weight: 88,
        a: 4, // 由于索引签名的存在，可以随便写啦（不会被强校验了）
        xx: ()=>{
            console.log('//')
        }
    }
    u1.age = 28
    // u1.height = 159  只读属性不可以被修改（虽然ts会进行报错，但还是编译成了js，所以还是可以运行成功，但是不建议这么写【不符合情景和用法】）
    console.log(u1)
    u1.cb()
    u1.say()




    

    interface Fn{
        ():void
    }

    let f1:Fn = ()=>{
        console.log('我是一个函数')
    }
    f1()



    interface Person extends User{
        likecolor: string
    }


    let p1:Person = {
        likecolor: 'red',
        name: '小韩',
        age: 22,
        // sex: 1
        height: 158,
        cb(){
            console.log('我是一个方法')
        },
        say(this:User){
            console.log('我的名字叫', this.name)
        },
        weight: 88,
        a: 4, // 由于索引签名的存在，可以随便写啦（不会被强校验了）
        xx: ()=>{
            console.log('//')
        }
    }

    console.log(p1)

}

