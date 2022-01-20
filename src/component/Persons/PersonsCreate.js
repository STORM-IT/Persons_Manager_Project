import React, { Fragment, useContext } from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';

export default function Pesron_Create({ id, fullname,age, edit_person, delete_person, set_fullname_person,set_age_person }) {

    const person_fullname=useSelector(state=>state.person_fullname)
    const person_age=useSelector(state=>state.person_age)
    var Name = "";
    var Age = 0;
    const dispatch=useDispatch();
    
    const person = useSelector(state => state.person)
    return (

        <div className="box_person">
            <p className='text-white'>your name is = {fullname}</p>
            <p className='text-white'>your age is = {age}</p>
            <InputGroup>
                <FormControl value={person_fullname} onChange={set_fullname_person} className="Clear" placeholder={fullname} />
                <Button variant='primary' onClick={edit_person} className="btn  w-25">Edite</Button>
            </InputGroup>
            <br />
            <InputGroup>
                <FormControl value={person_age} onChange={set_age_person} className="Clear" placeholder={age} />
                <Button variant='primary' onClick={edit_person} className="btn  w-25">Edite</Button>
            </InputGroup>
            <br />
            <div className='d-grid gap-1'>
                <Button variant="danger btn-sm mt-3 w-100" onClick={delete_person} size='sm'>X</Button>
            </div>
        </div>

    )
}
