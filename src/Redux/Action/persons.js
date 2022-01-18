import { toast } from "react-toastify";
import { clearInput } from "./person";
export const addPersons=(fullname)=>{
    return async (dispatch,getState)=>{
        
            
        //     const List_P = [...getState().persons]
        //     const person = { fullname, id: Math.floor(Math.random() * 1000) };
        //     List_P.push(person)
        //     // toast.success('success to add 🤞', {
        //     //     position: "top-right",
        //     //     autoClose: 5000,
        //     //     hideProgressBar: false,
        //     //     closeOnClick: true,
        //     //     pauseOnHover: true,
        //     //     draggable: true,
        //     //     progress: undefined,
        //     //     theme: 'dark'
        //     // });
        //     if (fullname) {
          
        //     await dispatch({type:"ADD_PERSON",payload:List_P})
        //     await dispatch(clearInput())
        // }
        // else{
        //     console.log("null")
        // }
        const List_Person = [...getState().persons];
        const person = {
            fullname,
            id: Math.floor(Math.random() * 1000)
        }
        if (fullname != '' && fullname != " ") {
            List_Person.push(person);
            await dispatch({ type: "ADD_PERSON", payload: List_Person })
            await dispatch(clearInput());
        }
    }
}
export const deletePerson=(id)=>{
    return async(dispatch,getState)=>{
     
        // const Persons=[...getState().persons];
        // const filterPersons=Persons.filter(e=>e.id!=id);
        // await dispatch({type:"DELETE_PERSONS", payload:filterPersons})
        const List_Person=[...getState().persons]
        console.log(id)
        const filter_persons=List_Person.filter(person =>person.id!=id)
        console.log(filter_persons)
        await dispatch({type:"DELETE_PERSONS", payload:filter_persons})
    }
}
export const updatePerson=(event,id)=>{
    return async (dispatch,getState)=>{
        // debugger
        // const Persons=[...getState().persons];
        // const findIndex=Persons.findIndex(e=>e.id=id);
        // const person= Persons[findIndex];
        // // if (name) {person.name=name}
        // if (fullname) {person.fullname=fullname}
        // Persons[findIndex]=person;
        // await dispatch({type:"UPDATE_PERSON",payload:Persons})
        const List_Person = [...getState().persons];
        const find_index = List_Person.findIndex(person => person.id == id);
        const person = List_Person[find_index];
        person.fullname=event.target.value
        List_Person[find_index]=person;
        await dispatch({type:"UPDATE_PERSON",payload:List_Person})
    }
}
