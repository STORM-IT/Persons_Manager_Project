import { combineReducers } from "redux";
import { personsReducer } from "./persons";
import { personAgeReducer } from "./person_age";
import { personFullnameReducer } from "./person_fullname";
import { showPersons } from "./showPersons";


export const rootReducer = combineReducers({
    person_fullname: personFullnameReducer,
    person_age: personAgeReducer,
    persons: personsReducer,
    showPersons: showPersons
})