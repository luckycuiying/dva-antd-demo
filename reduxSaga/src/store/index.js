import {createStore,applyMiddleware} from 'redux'
import reducer from './reducer'
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga'
import thunk from 'redux-thunk'

const sagaMiddeware = createSagaMiddleware()
// 两种写法
// const store = createStore(reducer,applyMiddleware(sagaMiddeware))
const store = applyMiddleware(sagaMiddeware,thunk)(createStore)(reducer)
sagaMiddeware.run(rootSaga)

export default store