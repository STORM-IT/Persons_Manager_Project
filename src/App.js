import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import Header from './component/Header/Header'
import PersonsMap from './component/Persons/PersonsMap'

export default function App(prop)  {
  const showPersons = useSelector(state => state.showPersons)
  
  return (
    <Fragment>
        <Header/>
        {showPersons?<PersonsMap/>:null}
        
        <ToastContainer/>
    </Fragment>

  )
}