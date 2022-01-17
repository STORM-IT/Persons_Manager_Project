import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import SimpleContext from '../Context/SimpleContext'
import Persons from '../PERSONS/person_map'
export default function GlobalState(props) {
    const [getListPersons, setListPersons] = useState([]);
    const [getName, setName] = useState("");
    const [getAge, setAge] = useState(0);
    const [getShowList, setShowList] = useState(true);


    const add_persons = () => {

        const name = getName;
        const age = getAge;

        const List_P = getListPersons.slice()
 
        const person = { name: name, age: age, id: Math.floor(Math.random() * 1000) };

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
        setListPersons(List_P);
        clear_input();
    }

    const delete_person = (id) => {
        const Person_Backup = getListPersons;
        const filter_person = Person_Backup.filter(person => person.id !== id);
        setListPersons(filter_person)

        toast.warn('removed with success 🤨', {
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
    const edite_person = (name_new, age, id) => {
        debugger
        const Person_Backup = [...getListPersons];
        const find_Index = Person_Backup.findIndex(person => person.id === id);
        const find_Person = Person_Backup[find_Index];
        if (name_new) {
            find_Person.name = name_new;
        }
        if (age) {
            find_Person.age = age;

        }
        setListPersons(Person_Backup);
        clear_input();
    }

    const set_name_age = (prop) => {
        if (prop.name) { setName(prop.name) }
        if (prop.age) { setAge(prop.age) }
    }
    const clear_input = () => {
        let input_text = document.querySelectorAll(".Clear");
        input_text.forEach(element => {
            element.value = ""
        });
    }
    const show_or_hiden = () => {
        setShowList(!getShowList);
    }

    var Check_show_person = null;
    if (getShowList) {
        Check_show_person = <Persons />;
    }
    return (
        <SimpleContext.Provider
            value={{
                ListPersons: getListPersons,
                name: getName,
                age: getAge,
                showList: getShowList,
                add_persons: add_persons,
                delete_person: delete_person,
                edite_person: edite_person,
                show_or_hiden: show_or_hiden,
                clear_input: clear_input,
                set_name_age: set_name_age,

            }} >
            {props.children}   
            {Check_show_person}
            <ToastContainer />
        </SimpleContext.Provider>
    )
}
