import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'
import { Registration } from './Registration/Registration'
import { Login } from './LoginForm/Login'

function App() {


  return (
    < >
      <div className='flex flex-row items-center  justify-around '>
      <Registration/>
      <Login/>
      </div>
    </>
  )
}

export default App
