import React, { useContext } from 'react'
import {RegisterFormComp} from '../compoents/FormComp.js'
import { CommonForm } from '../Common-form/CommonForm.jsx'
import { ContextForm } from '../context/Context.jsx'

export const Registration = () => {  
  const {RegistersationFormDetails,setRegistersationFormDetails}=useContext(ContextForm);
  function handleOnChange(e){
    const {name,value}=e.target;
    setRegistersationFormDetails((previousData)=>({
        ...previousData,
        [name]:value
    }))
  }
  function handleSubmitButton(e){
    e.preventDefault();      
    
    console.log(RegistersationFormDetails)  
    setRegistersationFormDetails({
        name:'',
        email:'',
        password:''
    });
}
  return (
    <div className='flex  flex-col border-2 border-gray-300 m-2 p-15 rounded-lg shadow-xl bg-gray-200'>
      <h1 className='font-bold text-2xl '>Registestation form</h1>
        <CommonForm formCompType={RegisterFormComp}
        RegistersationFormDetails={RegistersationFormDetails}
        handleSubmitButton={handleSubmitButton}
        setRegistersationFormDetails={setRegistersationFormDetails}
        handleOnChange={handleOnChange} />
    </div>
  )
}


