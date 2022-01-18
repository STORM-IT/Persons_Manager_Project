import { toast } from "react-toastify";
import { clearInput } from "./person";
export const addPersons=(name,age)=>{
    return async (dispatch,getState)=>{
        if (name && age) {
            const List_P = [...getState().persons]
            const person = { name, age, id: Math.floor(Math.random() * 1000) };
            List_P.push(person)
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
            await dispatch({type:"ADD_PERSON",payload:List_P})
            await dispatch(clearInput())
        }
    }
}
export const deletePerson=(id)=>{
    return async(dispatch,getState)=>{
        const Persons=[...getState().persons];
        const filterPersons=Persons.filter(e=>e.id!=id);
        await dispatch({type:"DELETE_PERSONS", payload:filterPersons})
    }
}
export const updatePerson=(id,name,age)=>{
    return async (dispatch,getState)=>{
        const Persons=[...getState().persons];
        const findIndex=Persons.findIndex(e=>e.id=id);
        const person= Persons[findIndex];
        if (name) {person.name=name}
        if (age) {person.age=age}
        Persons[findIndex]=person;
        await dispatch({type:"UPDATE_PERSON",payload:Persons})
    }
}
