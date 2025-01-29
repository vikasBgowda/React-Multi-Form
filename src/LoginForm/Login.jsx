import React, { useState } from 'react'
import { CommonForm } from '../Common-form/CommonForm'
import { loginFormComp } from '../compoents/FormComp'

export const Login = () => {
      const [loginFormData,setLoginFormData]=useState({
        email:'',
        password:''
      });

      function handleLoginOnChange(e){
        const {name,value}=e.target;
        setLoginFormData((prevData)=>({
          ...prevData,
          [name]:value
        }))
      }

      function handleLoginOnSubmit(e){
        e.preventDefault();
        console.log(loginFormData)
        setLoginFormData({
          email:'',
          password:''
        })
      }

  return (
    <div className='flex  flex-col border-2 border-gray-300 m-2 p-15 rounded-lg shadow-xl bg-gray-200'>
        <div>
        <h1 className='font-bold text-2xl '>Login Form</h1>
        </div>
        <CommonForm formCompType={loginFormComp}
        RegistersationFormDetails={loginFormData}
        handleSubmitButton={handleLoginOnSubmit}
        handleOnChange={handleLoginOnChange}
        />
    </div>
  )
}
