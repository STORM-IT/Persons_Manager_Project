import React, { Fragment } from 'react'
import SimpleContext from '../Context/SimpleContext';
import ERadium from '../ExampleRadium/ExampleRadium';
import Person_C from './PersonsCreate'
import { deletePerson, updatePerson } from '../../Redux/Action/persons';
const Persons = () => {
    const persons = useSelector(state => state.persons)
    const dispatch = useDispatch();
    return (

        <div id="container_person" className='h-25 overflow-hidden'>
            {persons.map((item) => {
                return (
                    <Fragment>
                        <Person_C
                            name={item.name}
                            age={item.age}
                            edit_name_person={dispatch(updateNamePerson())}
                            // edit_name_person={dispatch(updateNamePerson(item.id,e.target.value,item.age))}
                            edit_age_person={dispatch(updateAgePerson())}
                            delete_person={dispatch(deletePerson())}
                        />
                    </Fragment>
                )
            })}
        </div>
    )


}
export default ERadium(Persons, "container_person");
