import React, { Fragment } from 'react'
import SimpleContext from '../Context/SimpleContext';
import ERadium from '../ExampleRadium/ExampleRadium';
import Person_C from './PersonsCreate'
import {deletePerson, updatePerson } from '../../Redux/Action/persons';
const Persons = () => {
    const dispatch = useDispatch();
    return (
        <SimpleContext.Consumer>
            {context => (
                <div id="container_person" className='h-25 overflow-hidden'>
                    {context.ListPersons.map((item) => {
                        return (
                            <Fragment>
                                <Person_C
                                    id={item.id}
                                    name={item.name}
                                    age={item.age}
                                    edit_person={updatePerson}
                                    delete_person={deletePerson}
                                />
                            </Fragment>
                        )
                    })}
                </div>
            )
            }
        </SimpleContext.Consumer>
    )
}
export default ERadium(Persons, "container_person");
