import React, { Fragment, useContext } from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap'

export default function Pesron_Create({ fullname, edit_person, delete_person }) {

    const name = "";
    var Age = 0;
    return (

        <div className="box_person">
            <p className='text-white'>your name is = {fullname}</p>
            {/* <p className='text-white'>your age is = {age}</p> */}
            <InputGroup>
                <FormControl onChange={event => { name= event.target.value }} className="Clear" placeholder={fullname} />
                <Button variant='primary' onClick={edit_person} className="btn  w-25">Edite</Button>
            </InputGroup>
            <br />
            <div className='d-grid gap-1'>
                <Button variant="danger btn-sm mt-3 w-100" onClick={delete_person} size='sm'>X</Button>
            </div>
        </div>

    )
}
