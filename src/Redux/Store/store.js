import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import {rootReducer} from './../Reducer/index'

export const store=createStore(rootReducer,applyMiddleware(thunk));
store.subscribe(()=>console.log(store.getState()))