
import React, { Fragment } from 'react'
// import ERadium from '../ExampleRadium/ExampleRadium';
import Person_C from './PersonsCreate'
import { deletePerson, updatePerson } from '../../Redux/Action/persons';
import { useDispatch, useSelector } from 'react-redux';
import { setPerson } from '../../Redux/Action/person';


export default function PersonsMap() {
    const persons = useSelector(state => state.persons)
    const getPerson = useSelector(state => state.person)
    
    const dispatch = useDispatch();
    return (
        <div>

            {persons.map(person => {
                return (
                    <div id="container_person" className='h-25 overflow-hidden'>
                        <Person_C
                            fullname={person.fullname}
                            id={person.id}
                            // age={person.age}
                            // edit_name_person={dispatch(updateNamePerson())}
                            // edit_name_person={dispatch(updateNamePerson(person.id,e.target.value,person.age))}
                            set_person={e=>dispatch(setPerson(e))}
                            edit_person={updatePerson}
                            delete_person={() => dispatch(deletePerson(person.id))}
                        />
                    </div>
                )
            })}
        </div>

        
    )
}

// export default ERadium(Persons, "container_person");
