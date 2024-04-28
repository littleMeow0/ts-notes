namespace ArrayType{


    // 定义数组的第一种方式
    let arr:number[] = [1, 2, 3]
    console.log(arr)

    // 定义数组的第二种方式 (更灵活)
    let arr1:Array<string> = ['1', '2', '3']
    console.log(arr1)
    // let a1:Array<string|number> = [1, '2']

    // 定义数组的第三种方式
    let arr2:[number, string] = [1, '2']
    console.log(arr2)


    // 定义一个对象数组
    interface User{
        name: string,
        age: number
    }

    let userArr:User[] = [{
        name: '小韩',
        age: 25
    }]
    console.log(userArr)


    // 定义一个二维数组
    let arr4:number[][] = [[1]]
    console.log(arr4)
    let a4:Array<Array<string>> = [['1']]
    console.log(a4)




    /**
     * 定义函数的剩余参数
     * 定义类数组（伪数组）
     */
    function fn1(...args:any):void{
        console.log('剩余参数', args)
        let argu:IArguments = arguments
        console.log('arguments', argu)
    }

    fn1(1,2,3)



    // IArguments类型原理实现
    interface IArgu {
        [propName:string]:any,
        length: number,
        callee():void,
        // Symbol(Symbol.iterator):
    }

}