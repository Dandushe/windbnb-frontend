import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from 'redux'
import thunk from 'redux-thunk'
import { stayReducer } from "./stay.reducer";

const rootReducer = combineReducers({
    stayModule: stayReducer,
   
})

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
window.gStore = store
// store.subscribe(() => {
//     console.log('Store state is:', store.getState())
// })