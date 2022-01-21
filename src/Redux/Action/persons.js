import { toast } from "react-toastify";
import { clearFullnameInput } from './person_fullname'
import { clearAgeInput } from './person_age'
export const addPersons = (fullname, age) => {
    return async (dispatch, getState) => {
        const List_Person = [...getState().persons];
        const person = {
            fullname,
            age,
            id: Math.floor(Math.random() * 1000)
        }
        if (fullname != '' && fullname != " ") {
            List_Person.push(person);
            await dispatch({ type: "ADD_PERSON", payload: List_Person })
            await dispatch(clearFullnameInput());
            await dispatch(clearAgeInput());
            toast.success('success to add 🤞', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark'
            });
        }
    }
}
export const deletePerson = (id) => {
    return async (dispatch, getState) => {
        const List_Person = [...getState().persons]
        console.log(id)
        const filter_persons = List_Person.filter(person => person.id != id)
        console.log(filter_persons)
        await dispatch({ type: "DELETE_PERSONS", payload: filter_persons })
        toast.warning('success to Removed 😐', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark'
        });
    }
}
export const updatePerson = (fullname, age, id) => {
    return async (dispatch, getState) => {
        const persons = [...getState().persons];
        const findIndex = persons.findIndex(e => e.id == id);
        const person = persons[findIndex];
        if (fullname) { person.fullname = fullname }
        if (age) { person.age = age }
        persons[findIndex] = person;
        await dispatch({ type: "UPDATE_PERSON", payload: persons })
        await dispatch(clearFullnameInput());
        await dispatch(clearAgeInput());
        const getInput_update = document.querySelectorAll(".Clear");
        for (let i = 0; i < getInput_update.length; i++) {
            getInput_update[i].value = ""
        }
        toast.info('success to Update 🤞', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark'
        });
    }
}
