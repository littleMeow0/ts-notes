namespace typeClass{


    // 联合类型
    let phone:number | string = 123
    phone = '467'
    console.log(phone)

    let fn:Function = (value: number|boolean):boolean=>{  // 这个方法兼容前端需要用到的true和false，传布尔值和数值都行，它兼容了
        return !!value
    }


    // 交叉类型
    let afe:number & string // 事实上不存在 number & string 都存在的值
    console.log(afe)


    // 对象类型的交叉
    interface People{
        name: string
        age: number
    }
    interface Man{
        sex: number
    }

    let m: People&Man = {
        name: '--',
        age: 22,
        sex: 1
    }



    // 类型断言 （如果你确定某个变量的类型，可直接断言成自己想要的，ts便不会在自行推断了）

    let fn1 = (num:string|number):void => {
        console.log((num as string).indexOf('1'))   // 错误用法，目前只是将num断言为string类型，但它本身还是一个数值，请合理使用类型断言（不要把类型和实际应用的方法矛盾）   fn1(12)
        console.log((num as string).length)
    } 
    // fn1(12)
    fn1('12')


    interface A{
        run: string
    }
    interface B{
        build: string
    }
    let fn2 = (type: A|B):void => {
        console.log((type as A).run)   // 断言为某种类型，其实就有它相对应的代码提示和用法啦，会更方便
    }
    fn2({
        build: '888'
    })


    type H = "a" | "b" | "c"
    let str: H = "a"
    let str1 = "a"
    str = str1 as H
    console.log(str)







    // (window as any).abc = 123   // 如果直接为window添加属性是加不上的，加上类型断言让它有相应的方法，就可以啦

    





    








}