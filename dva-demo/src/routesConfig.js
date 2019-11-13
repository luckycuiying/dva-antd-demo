// import IndexPage from "./routes/IndexPage";
// import Home from "./routes/Home";
// import Profile from "./routes/Profile";
// import SignIn from "./routes/SignIn";
// import SignUp from "./routes/SignUp";
// import User from "./routes/User";
// import UserList from './routes/User/UserList'
// import UserAdd from './routes/User/UserAdd'
// 按需加载
export default[
    {
        path:'/',
        exact:false,
        component:()=>import('./routes/IndexPage'),
        routes:[
            {
                path:'/home', 
                models:[import('./models/home')],
                // 按需加载第一步
                component:()=>import ('./routes/Home'),
                redirect:true
            },
            {
                path:'/profile',
                component:()=>import ('./routes/Profile'),
                auth:true // 添加权限验证
            },
            {
                path:'/signIn',
                component:()=>import ('./routes/SignIn')
            },{
                path:'/signUp',
                component:()=>import ('./routes/SignUp')
            },{
                path:'/user',
                component:()=>import('./routes/User'),
                routes:[
                    {
                        path:'/user/list',
                        component:()=>import ('./routes/User/UserList')
                    },
                    {
                        path:'/user/add',
                        component:()=>import ('./routes/User/UserAdd')
                    }
                ]
            }
        ]
    }
]