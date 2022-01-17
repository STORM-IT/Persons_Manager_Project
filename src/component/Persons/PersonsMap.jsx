import React, { Fragment } from 'react'
import SimpleContext from '../Context/SimpleContext';
import ERadium from '../exampleRadium/exampleRadium';
import Person_C from './Pesron_Create'

const Persons = () => {

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
                                    edit_person={context.edite_person}
                                    delete_person={context.delete_person}
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
