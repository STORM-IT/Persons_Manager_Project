import { toast } from "react-toastify";
import { clearInput } from "./person";
export const addPersons=(fullname)=>{
    return async (dispatch,getState)=>{
        
            
            const List_P = [...getState().persons]
            const person = { fullname, id: Math.floor(Math.random() * 1000) };
            List_P.push(person)
            // toast.success('success to add 🤞', {
            //     position: "top-right",
            //     autoClose: 5000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            //     theme: 'dark'
            // });
            if (fullname) {
          
            await dispatch({type:"ADD_PERSON",payload:List_P})
            await dispatch(clearInput())
        }
        else{
            console.log("null")
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
export const updatePerson=(id,fullname)=>{
    return async (dispatch,getState)=>{
        debugger
        const Persons=[...getState().persons];
        const findIndex=Persons.findIndex(e=>e.id=id);
        const person= Persons[findIndex];
        // if (name) {person.name=name}
        if (fullname) {person.fullname=fullname}
        Persons[findIndex]=person;
        await dispatch({type:"UPDATE_PERSON",payload:Persons})
    }
}
