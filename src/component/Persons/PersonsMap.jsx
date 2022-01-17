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
                            edit_person={dispatch(updatePerson(item.id,item.name,item.age))}
                            delete_person={dispatch(deletePerson(item.id))}
                        />
                    </Fragment>
                )
            })}
        </div>
    )


}
export default ERadium(Persons, "container_person");
