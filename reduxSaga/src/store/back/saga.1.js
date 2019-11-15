import * as types from './action-types' 
import {takeEvery, put,all} from 'redux-saga/effects'

const delay2 =ms => new Promise(
    resolve=>setTimeout(() => {
        resolve()
    },ms)
)
function* asyncAdd(){
    yield delay2(1000)
    yield put({
        type:types.ADD
    })
}

// watch saga,负责异步加一的动作
function* watchAdd(){
    // 我们要监听每周一次派发ASYNC_ADD 的动作
    yield takeEvery(types.ASYNC_ADD,asyncAdd)
}
function* helloSaga(){
    console.log('ffff')
}


export default function* rootSaga(){
    console.log('rootSaga开始')
    yield all([watchAdd(),helloSaga()])
    console.log('rootSaga执行结束')

}