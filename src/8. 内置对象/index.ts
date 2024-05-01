namespace InnerObject{

    /**
     * 内置对象   (这种都是由new构建出来的，它的类型就是class)
     * ES5 ===>  Boolean Number String Object Date RegExp Error XMLHttpRequest
     * DOM ===>  HTMLElement NodeList(元素集合) NodeListOf<HTMLElement>(可以在元素集合中加类型)
     * BOM ===>  Storage Location  Promise<number>  
     */


    // ES5

    let b:Boolean = new Boolean()
    console.log(b)


    // let e:Error = new Error('Error occurred')
    // console.log(e)


    let d:Date = new Date()
    console.log(d)


    let r: RegExp = /[a-z]/;
    console.log(r)




    // DOM (需要运行在浏览器环境中)

    // let body:HTMLElement = document.body
    // console.log(body)

    // let allDiv:NodeList = document.querySelectorAll('div')
    // console.log(NodeList)



    // BOM

    interface data{
        name: string,
        age: number
    }
    let p:Promise<data> = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({
                name: '小韩',
                age: 26
            })
        }, 1000)
    })
    console.log(p)


    
    // 封装localStorage本地存储

    /**
     * localStorag 的作用是什么呢？大型项目中为什么要使用 localStorage 呢？它能解决什么问题？实际应用又是怎么样的呢？有其它的替代存储方案吗？
     * 1. 本地存储 （都会存储在当前域名下的本地Storage对象） 
     * 2. 在用户设备上持久化存储少量数据，总是以字符串的形式存储  (键值对存储)
     * 3. setItem, getItem, removeItem, clear
     * 
     * 
     * 4. storage 在项目中只是起到一个过渡作用，主要用于解决vuex存储的数据在页面被刷新之后被清空的问题（vuex的数据是存储在内存中的）
     * 5. 建议在线上找一个大型项目完整的敲一遍（学习 storage ）
     * 6. 目前自己给出的解决方案：页面中所有的响应式数据都需要存放在vuex中，监听页面刷新之前把vuex中的数据在storage中做个备份，之后拿数据的时候看一下，
     *    如果vuex中的数据是空的，就去storage中拿。如果有数据，就从它这拿就行。这样确保是最新的数据。（因为不刷新数据就不是null，而刷新的时候就在storage
     *    中存放过一份了，形成一个闭环，肯定是最新的）---建议在项目中实践一下
     */

    


    // localStorage.setItem("myCat", "Tom")
    // let myCat:string = localStorage.getItem("myCat")




}