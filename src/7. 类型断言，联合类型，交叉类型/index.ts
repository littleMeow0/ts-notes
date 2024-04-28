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
    




    








}