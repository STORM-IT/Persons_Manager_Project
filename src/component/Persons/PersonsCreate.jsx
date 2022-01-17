import React, { Fragment,useContext} from 'react'
import {InputGroup,FormControl,Button} from 'react-bootstrap'
import SimpleContext from '../Context/SimpleContext';


export default function Pesron_Create({id,name,age,edit_person,delete_person }) {
    var Name = "";
    var Age = 0;
    return (
        <Fragment>
            <div className="box_person">
                                <p className='text-white'>your name is = {name}</p>
                                <p className='text-white'>your age is = {age}</p>
                                <InputGroup>
                                    <FormControl onChange={event => Name = event.target.value} className="Clear" placeholder={name} />
                                    <Button variant='primary' onClick={() => edit_person(Name, Age, id)} className="btn  w-25">Edite</Button>
                                </InputGroup>
                                <br />
                                <InputGroup>
                                    <FormControl onChange={event => Age = event.target.value} className="Clear" placeholder={age} />
                                    <Button variant='primary' onClick={() => edit_person(Name, Age, id)} className="w-25">Edite</Button>
                                </InputGroup>
                                <br />
                                <div className='d-grid gap-1'>
                                    <Button variant="danger btn-sm mt-3 w-100" onClick={() => delete_person(id)} size='sm'>X</Button>
                                </div>
                            </div>
        </Fragment>
    )
}
