var EnumType;
(function (EnumType) {
    /**
     * 枚举类型
     *
     */
    // 1. 声明一个枚举
    let Color;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Green"] = 1] = "Green";
        Color[Color["BLue"] = 2] = "BLue";
    })(Color || (Color = {}));
    console.log(Color);
    // **会为数值生成一个反向映射**
    console.log(Color['0']); // 默认从0开始
    console.log(Color['Red']);
    // 2. 增长枚举
    let Color1;
    (function (Color1) {
        Color1[Color1["Red"] = 3] = "Red";
        Color1[Color1["Green"] = 4] = "Green";
        Color1[Color1["BLue"] = 5] = "BLue";
    })(Color1 || (Color1 = {}));
    console.log(Color1);
    // 2. 字符串枚举
    let Color2;
    (function (Color2) {
        Color2["Red"] = "red";
        Color2["Green"] = "green";
        Color2["BLue"] = "blue";
    })(Color2 || (Color2 = {}));
    console.log(Color2);
    // 3. 异构枚举
    let Types;
    (function (Types) {
        Types["No"] = "no";
        Types[Types["Yes"] = 1] = "Yes";
    })(Types || (Types = {}));
    console.log(Types);
    // 4. 接口枚举
    let Color4;
    (function (Color4) {
        Color4[Color4["Red"] = 3] = "Red";
        Color4[Color4["Green"] = 4] = "Green";
        Color4[Color4["BLue"] = 5] = "BLue";
    })(Color4 || (Color4 = {}));
    let p = {
        hobby: 3
    };
    console.log(p);
    let directions = [0 /* Directions.Up */, 1 /* Directions.Down */, 2 /* Directions.Left */, 3 /* Directions.Right */];
    console.log(directions);
})(EnumType || (EnumType = {}));
