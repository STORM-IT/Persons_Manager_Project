
import React, { Fragment } from 'react'
// import ERadium from '../ExampleRadium/ExampleRadium';
import Person_C from './PersonsCreate'
import { deletePerson, updatePerson } from '../../Redux/Action/persons';
import { useDispatch, useSelector } from 'react-redux';
import { setFullnamePerson } from '../../Redux/Action/person_fullname';
import { setAgePerson } from '../../Redux/Action/person_age';



export default function PersonsMap() {
    const persons = useSelector(state => state.persons)
    const person_fullname = useSelector(state => state.person_fullname)
    const person_age = useSelector(state => state.person_age)
    
    const dispatch = useDispatch();
    return (
        <div>

            {persons.map(person => {
                return (
                    <div id="container_person" className='h-25 overflow-hidden'>
                        <Person_C
                            id={person.id}
                            fullname={person.fullname}
                            age={person.age}
                            set_fullname_person={e=>dispatch(setFullnamePerson(e))}
                            set_age_person={e=>dispatch(setAgePerson(e))}
                            edit_person={()=>dispatch(updatePerson(person_fullname,person_age,person.id))}
                            delete_person={() => dispatch(deletePerson(person.id))}
                        />
                    </div>
                )
            })}
        </div>

        
    )
}

// export default ERadium(Persons, "container_person");
