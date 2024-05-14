var Block;
(function (Block) {
    /**
     * 自定义拦截
     * get set
     */
    class Obj {
        constructor(value) {
            this._value = value;
        }
        get value() {
            return this._value;
        }
        set value(newVal) {
            this._value = newVal + '小韩';
        }
    }
    let o = new Obj('happy');
    o.value = '开心';
    console.log(o);
    console.log(o.value);
})(Block || (Block = {}));
