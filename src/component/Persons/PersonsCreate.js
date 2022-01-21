import React, { Fragment, useContext } from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { updatePerson } from '../../Redux/Action/persons';

export default function Pesron_Create({ id, fullname, age, delete_person }) {

    var Name;
    var Age;
    const dispatch = useDispatch();
    return (

        <div className="box_person">
            <p className='text-white'>your name is = {fullname}</p>
            <p className='text-white'>your age is = {age}</p>
            <InputGroup>
                <FormControl onChange={e => Name = e.target.value} className="Clear" placeholder={fullname} />
                <Button variant='primary' onClick={() => dispatch(updatePerson(Name, "", id))} className="btn  w-25">Edite</Button>
            </InputGroup>
            <br />
            <InputGroup>
                <FormControl onChange={e => Age = e.target.value} className="Clear" placeholder={age} />
                <Button variant='primary' onClick={() => dispatch(updatePerson("", Age, id))} className="btn  w-25">Edite</Button>
            </InputGroup>
            <br />
            <div className='d-grid gap-1'>
                <Button variant="danger btn-sm mt-3 w-100" onClick={delete_person} size='sm'>X</Button>
            </div>
        </div>

    )
}
