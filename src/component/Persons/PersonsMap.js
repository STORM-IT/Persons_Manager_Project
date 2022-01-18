
import React, { Fragment } from 'react'
// import ERadium from '../ExampleRadium/ExampleRadium';
import Person_C from './PersonsCreate'
import { deletePerson, updatePerson } from '../../Redux/Action/persons';
import { useDispatch, useSelector } from 'react-redux';


export default function PersonsMap() {
    const persons = useSelector(state => state.persons)
    const dispatch = useDispatch();
    return (
        <div>

            {persons.map(person => {
                return (
                    <div id="container_person" className='h-25 overflow-hidden'>
                        <Person_C
                            key={person.id}
                            fullname={person.fullname}
                            // age={person.age}
                            // edit_name_person={dispatch(updateNamePerson())}
                            // edit_name_person={dispatch(updateNamePerson(person.id,e.target.value,person.age))}
                            edit_person={e => dispatch(updatePerson(e,person.id))}
                            delete_person={() => dispatch(deletePerson(person.id))}
                        />
                    </div>
                )
            })}
        </div>

        
    )
}

// export default ERadium(Persons, "container_person");
