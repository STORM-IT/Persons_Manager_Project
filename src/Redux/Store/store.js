import { applyMiddleware, createStore,compose } from "redux";
import thunk from "redux-thunk";
import {rootReducer} from './../Reducer/index'

export const store=createStore(
    rootReducer,
    compose(

        applyMiddleware(thunk)
    )
    );
store.subscribe(()=>console.log(store.getState()))