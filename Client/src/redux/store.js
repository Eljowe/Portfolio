import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
const reducer = combineReducers({
    // here I will be adding reducers
})
const store = configureStore({
    reducer,
})
export default store