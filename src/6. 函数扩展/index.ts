namespace FnExtend{

    /**
     * 1. 对函数进行约束，一般是对传参的参数类型和函数返回值进行约束
     * 2. 函数重载，根据不同的传参执行相应的代码 （类似于后台对某个table数据的增删改查，名字一致，传参不同而已）查看代码时也更清晰
     */


    // 定义函数的方式 （第一种）
    function add(a:number, b:number):number{
        return a+b
    }
    console.log('add执行', add(1,2))


    // 定义函数的方式 （第二种）
    let add2 = (a: string, b: string):string=>a+b
    let add3 = function(a: boolean, b: boolean):boolean{
        return a
    }
    console.log('add2执行', add2('1','2'))
    console.log('add3执行', add3(true, false))

    //  定义函数的方式 （第三种）这种只能说明add4是一个函数，范围较大
    let add4:Function = ()=>{}

    // 定义函数的方式 （第四种）较麻烦
    interface Fn{
        (name:string):void
    }
    let add5:Fn = (name:string):void => {
        console.log(name)
    }




    // 当函数参数是一个对象, 返回也是一个对象

    interface User{
        name: string,
        age:number
    }

    let fn = (user:User):User=>{
        return user
    }

    let u1 = {
        name: '小韩',
        age: 22
    }

    console.log('u1', fn(u1))


    // 函数重载
    let arr:number[] = [1, 2, 3, 4, 2]
    /**
     * 我们需要针对arr写几个函数
     * 1. 查询某个参数是否存在
     * 2. 新增一个参数
     * 3. 删除一个参数
     * 4. 查询所有
     */

    





    
}