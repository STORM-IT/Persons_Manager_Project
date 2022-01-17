import { React, useContext, useRef, useEffect } from 'react'
import { Button, Alert, Badge } from 'react-bootstrap'

import SimpleContext from '../Context/SimpleContext'
const Header = () => {
    const context = useContext(SimpleContext);
    const focusInput = useRef(null);

    const { ListPersons } = context;
    var Color_Badge = "";
    if (ListPersons.length > 5) {
        Color_Badge = "success"
    }
    else if (ListPersons.length < 3) {
        Color_Badge = "danger"
    }
    else {
        Color_Badge = "warning"
    }
    useEffect(()=>{
        focusInput.current.focus();
    },[])
    return (<SimpleContext.Consumer>
        {context => (
            <form action='#' onSubmit={event => event.preventDefault()} className="box_obj">
                <Alert className='' id='Close'>
                    <p> Please write your information and click <kbd className="bg-success">Add Person</kbd></p>
                </Alert>
                <br />
                <Badge pill bg='light' className='p-2 display-3' >Youre lenght list persons is <Badge bg={Color_Badge}>{context.ListPersons.length}</Badge> 👀</Badge>
                <br />
                <div >
                    <div id='div_text_style'>

                    <input id='input_text_style' className="Clear" type="text" ref={focusInput} onChange={event => { context.set_name_age({ name: event.target.value }) }} placeholder="please type your name" />
                        <span class="span_text_style bottom"></span>
                        <span class="span_text_style right"></span>
                        <span class="span_text_style top"></span>
                        <span class="span_text_style left"></span>
                    </div>
                </div>
                <br />
                <div >
                    <div id='div_text_style'>

                    <input id='input_text_style' className="Clear" type="text" onChange={event => { context.set_name_age({ age: event.target.value }) }} placeholder="please type your age" />
                        <span class="span_text_style bottom"></span>
                        <span class="span_text_style right"></span>
                        <span class="span_text_style top"></span>
                        <span class="span_text_style left"></span>
                    </div>
                </div>
                <br />
                <Button type='submit' id='btn_submit' onClick={context.add_persons} className=" mb-5 mt-2">Add persons</Button>
                <br />
                <br />
                <Button onClick={context.show_or_hiden} className={context.showList ? "btn-warning" : "btn-info"}>
                    {context.showList ? "HIDEN" : "SHOW"}
                </Button>
                <hr />
            </form>
        )}
    </SimpleContext.Consumer>
    )
}
export default Header


