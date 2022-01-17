import { combineReducers } from "redux";
import { personReducer } from "./person";
import { personsReducer } from "./persons";
import { showPersons } from "./showPersons";


export const rootReducer=combineReducers({
person:personReducer,
persons:personsReducer,
showPersons:showPersons
})