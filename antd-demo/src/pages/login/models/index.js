export default{
    namespace:'login',
    state:{
        isLogin:false,
        userInfo:null,
        errorInfo:null
    },
    effects:{
        *signup({payload},{ call,put}){
            yield call(service.signup,payload);
            yield put({
                type:'save',
                payload:{
                    isLogin:true
                }
        })
        }
    },
    reducers:{
        save(state,action){
            return {...state,...action.payload}
        }
    }
}