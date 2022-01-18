import { React, useContext, useRef, useEffect } from 'react'
import { Button, Alert, Badge } from 'react-bootstrap'
import { useSelector,useDispatch } from 'react-redux'
import {showPersons} from '../../Redux/Action/showPersons.js';
import { addPersons } from '../../Redux/Action/persons.js'

const Header = () => {
    // const focusInput = useRef(null);
    const persons = useSelector(state => state.persons)
    const List_showPersons = useSelector(state => state.showPersons)
    const dispatch = useDispatch()
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
    // useEffect(()=>{
    //     focusInput.current.focus();
    // },[])
    var fullname='';
    return (
        <form action='#' onSubmit={event => event.preventDefault()} className="box_obj">
            <Alert className='' id='Close'>
                <p> Please write your information and click <kbd className="bg-success">Add Person</kbd></p>
            </Alert>
            <br />
            <Badge pill bg='light' className='p-2 display-3' >Youre lenght list persons is <Badge bg={Color_Badge}>{persons.length}</Badge> 👀</Badge>
            <br />
            <div >
                <div id='div_text_style'>
                    <input id='input_text_style' className="Clear" type="text"  onChange={event =>fullname= event.target.value } placeholder="please type your name" />
                    <span class="span_text_style bottom"></span>
                    <span class="span_text_style right"></span>
                    <span class="span_text_style top"></span>
                    <span class="span_text_style left"></span>
                </div>
            </div>
            <br />
            <div >
                <div id='div_text_style'>
                    {/* <input id='input_text_style' className="Clear" type="text" onChange={event => {Age= event.target.value} } placeholder="please type your age" /> */}
                    {/* <span class="span_text_style bottom"></span> */}
                    {/* <span class="span_text_style right"></span> */}
                    {/* <span class="span_text_style top"></span> */}
                    {/* <span class="span_text_style left"></span> */}
                </div>
            </div>
            <br />
            <Button type='submit' id='btn_submit' onClick={()=>dispatch(addPersons(fullname))} className=" mb-5 mt-2">Add persons</Button>
            <br />
            <br />
            <Button onClick={()=>dispatch(showPersons())} className={List_showPersons ? "btn-warning" : "btn-info"}>
            {List_showPersons ? "HIDDEN" : "SHOW"}
            </Button>
            
            <hr />
        </form>
    )
}


export default Header


