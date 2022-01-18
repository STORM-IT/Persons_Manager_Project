import React, { Fragment } from 'react'
import { ToastContainer } from 'react-toastify'
import Header from './component/Header/Header'
import PersonsMap from './component/Persons/PersonsMap'

export default function App(prop)  {
  return (
    <Fragment>
        <Header/>
        <PersonsMap/>
        <ToastContainer/>
    </Fragment>

  )
}