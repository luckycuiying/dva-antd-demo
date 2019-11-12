import {Route,Redirect} from 'dva/router'
import dynamic from 'dva/dynamic'
const renderRoutes=(routesConfig,app)=>{
    // return routesConfig.map(({path='/',component:Component,exact=false,routes},index)=>{
        // 无法给组件传递拥有的子组件信息。是写死的渲染内容
        // return <Route  key ={path} path={path} exact={exact} component={component} />

        // return <Route  key ={path} path={path} exact={exact} render={
        //     props=><Component {...props} routes={routes}/>
        // } />

        // 实现按需加载第三部
       
    // })
    return routesConfig.map(({path="/",component,exact=false,routes})=>{
        return<Route 
            path={path}
            exact={exact}
            key ={path}
            component={dynamic({
                app,
                component:()=>{
                    return component().then(result=>{
                        // 判断是es6
                            console.log(result)
                            let Component = result.default||result;
                            console.log(Component)
                            return props=><Component {...props} routes={routes} app={app}/>
                        }
                    )
                }
            })}
        />
})
}

const renderRedirect =(routes,from ,exact)=>{
   let{ path, component} = routes.find((item)=>item.redirect)||routes[0]
   return <Redirect exact={exact} from={from} to={path} />
}

export{
    renderRoutes,
    renderRedirect
}