import React, { Fragment } from 'react'
import { ToastContainer } from 'react-toastify'
import Header from './component/Header/Header'

export default function App(prop)  {
  return (
    <Fragment>
        <Header/>
        <ToastContainer/>
    </Fragment>

  )
}