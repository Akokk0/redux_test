import { legacy_createStore as createStore, applyMiddleware, combineReducers} from 'redux'
import countReducer from './reducers/count'
import personReducer from './reducers/person'
import thunk from 'redux-thunk'

const reducers = combineReducers({
    count: countReducer,
    persons: personReducer
})

export default createStore(reducers, applyMiddleware(thunk))
