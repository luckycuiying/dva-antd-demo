import {observable,autorun} from 'mobx'

// observable 把普通的数据变成可观察的数据 Object.defineProperty proxy
// autorun 自动运行
let o = observable({name:'zfpx'})

autorun(()=>{
    console.log(o.name)
})
o.name = 'hello'