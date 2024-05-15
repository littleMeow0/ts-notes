namespace EnumType{

    /**
     * 枚举类型
     * 
     */


    // 1. 声明一个枚举
    enum Color{
        Red,
        Green,
        BLue
    }
    console.log(Color)
    // **会为数值生成一个反向映射**
    console.log(Color['0']) // 默认从0开始
    console.log(Color['Red'])


    // 2. 增长枚举
    enum Color1{
        Red = 3,
        Green,
        BLue
    }
    console.log(Color1)


    // 2. 字符串枚举
    enum Color2{
        Red = 'red',
        Green = 'green',
        BLue = 'blue'
    }
    console.log(Color2)


    // 3. 异构枚举
    enum Types{
        No = 'no',
        Yes = 1
    }
    console.log(Types)



    // 4. 接口枚举
    enum Color4{
        Red = 3,
        Green,
        BLue
    }
    interface Person{
        hobby: Color4.Red
    }
    let p:Person = {
        hobby: 3
    }
    console.log(p)


    // 5. const 枚举
    const enum Directions {
        Up,
        Down,
        Left,
        Right
    }
    
    let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]
    console.log(directions)

}