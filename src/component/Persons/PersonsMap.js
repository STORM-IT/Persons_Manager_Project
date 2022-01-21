
import React from 'react'
import Person_C from './PersonsCreate'
import { deletePerson } from '../../Redux/Action/persons';
import { useDispatch, useSelector } from 'react-redux';
import { setFullnamePerson } from '../../Redux/Action/person_fullname';
import { setAgePerson } from '../../Redux/Action/person_age';



export default function PersonsMap() {
    const persons = useSelector(state => state.persons)

    const dispatch = useDispatch();
    return (
        <div>

            {persons.map(person => {
                return (
                    <div key={Math.floor(Math.random() * 1000)} id="container_person" className='h-25 overflow-hidden'>
                        <Person_C
                            id={person.id}
                            fullname={person.fullname}
                            age={person.age}
                            set_fullname_person={e => dispatch(setFullnamePerson(e))}
                            set_age_person={e => dispatch(setAgePerson(e))}
                            delete_person={() => dispatch(deletePerson(person.id))}
                        />
                    </div>
                )
            })}
        </div>


    )
}

// export default ERadium(Persons, "container_person");
