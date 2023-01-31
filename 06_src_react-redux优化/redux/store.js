import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import countReducer from './count_reducer.js'
import thunk from 'redux-thunk'

export default createStore(countReducer, applyMiddleware(thunk))
