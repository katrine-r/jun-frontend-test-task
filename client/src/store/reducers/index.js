import { combineReducers } from 'redux'
import horseRacingReducer from './horseRacing'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { applyMiddleware, createStore } from 'redux';

const rootReducer = combineReducers({
    horseRacing: horseRacingReducer,
})

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store