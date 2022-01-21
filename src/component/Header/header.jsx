import { React, useEffect } from 'react'
import { Button, Alert, Badge } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { showPersons } from '../../Redux/Action/showPersons.js';
import { addPersons } from '../../Redux/Action/persons.js'
import { setFullnamePerson } from '../../Redux/Action/person_fullname.js';
import { setAgePerson } from '../../Redux/Action/person_age.js';
import { useRef } from 'react';


export default function Header() {
    const persons = useSelector(state => state.persons)
    const person_fullname = useSelector(state => state.person_fullname)
    const person_age = useSelector(state => state.person_age)
    const List_showPersons = useSelector(state => state.showPersons)
    const dispatch = useDispatch()
    const setFocus = useRef();
    useEffect(() => {
        setFocus.current.focus();
    }, []);
    var Color_Badge = "";
    if (persons.length > 5) {
        Color_Badge = "success"
    }
    else if (persons.length < 3) {
        Color_Badge = "danger"
    }
    else {
        Color_Badge = "warning"
    }

    var fullname = '';
    return (
        <div>

            <form action='#' onSubmit={event => event.preventDefault()} className="box_obj">
                <Alert className='' id='Close'>
                    <p> Please write your information and click <kbd className="bg-success">Add Person</kbd></p>
                </Alert>
                <br />
                <Badge pill bg='light' className='p-2 display-3 text-dark' >Youre lenght list persons is <Badge bg={Color_Badge}>{persons.length}</Badge> 👀</Badge>
                <br />
                <div >
                    <div id='div_text_style'>
                        <input id='input_text_style' ref={setFocus} value={person_fullname} className="Clear" type="text" onChange={event => dispatch(setFullnamePerson(event))} placeholder="please type your name" />
                        <span className="span_text_style bottom"></span>
                        <span className="span_text_style right"></span>
                        <span className="span_text_style top"></span>
                        <span className="span_text_style left"></span>
                    </div>
                </div>

                <div >
                    <div id='div_text_style'>
                        <input id='input_text_style' value={person_age} className="Clear" type="text" onChange={event => dispatch(setAgePerson(event))} placeholder="please type your name" />
                        <span className="span_text_style bottom"></span>
                        <span className="span_text_style right"></span>
                        <span className="span_text_style top"></span>
                        <span className="span_text_style left"></span>
                    </div>
                </div>
                <br />
                <Button type='submit' id='btn_submit' onClick={() => dispatch(addPersons(person_fullname, person_age))} className=" mb-5 mt-2">Add persons</Button>
                <br />
                <br />
                <Button onClick={() => dispatch(showPersons())} className={List_showPersons ? "btn-warning" : "btn-info"}>
                    {List_showPersons ? "HIDDEN" : "SHOW"}
                </Button>

                <hr />
            </form>
        </div>

    )
}
