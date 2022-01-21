import React, { Fragment, useRef } from 'react'
import { useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import Header from './component/Header/header'
import PersonsMap from './component/Persons/PersonsMap'
import $ from 'jquery'
import { findDOMNode } from 'react-dom'

export default function App(prop) {
  const showPersons = useSelector(state => state.showPersons)
  const slide = useRef();
  const set_Toggle_Slide = (showOrHidden) => {
    console.log(showOrHidden)
    switch (showOrHidden) {
      case true:
        $(findDOMNode(slide.current)).slideDown("slow");
        break;
      case false:
        $(findDOMNode(slide.current)).slideUp("slow");
        break;
    }
  }
  return (
    <Fragment>
      <Header />
      {showPersons ? set_Toggle_Slide(true) : set_Toggle_Slide(false)}
      <div ref={slide}>
        <PersonsMap />
      </div>
      <ToastContainer />
    </Fragment>

  )
}