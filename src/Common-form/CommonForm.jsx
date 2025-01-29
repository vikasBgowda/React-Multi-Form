import React, { useContext } from 'react'
import { CommonInput } from '../Common-input/CommonInput'
import { ContextForm } from '../context/Context'

const InputType={
    INPUT:'input',
    TEXTAREA:'textarea'
}



export const CommonForm = ({formCompType=[] , RegistersationFormDetails ,handleSubmitButton ,handleOnChange}) => {
    


    function BuildInput(singleComp){
        let element=null;
        switch (singleComp.componentType) {
            case InputType.INPUT:{
                element=<CommonInput 
                type={singleComp.type}
                placeholder={singleComp.placeholder}
                name={singleComp.name}
                value={RegistersationFormDetails[singleComp.name]}
                onChange={(e)=>handleOnChange(e)}
                key={singleComp.name}
                />             
            }
            break;
        
            default:
                {
                    element=<CommonInput 
                    type={singleComp.type}
                    placeholder={singleComp.placeholder}
                    name={singleComp.name}
                    value={RegistersationFormDetails[singleComp.name]}
                    onChange={(e)=>handleOnChange(e)}
                    />             
                }
            break;
        }
        return element;
    }
    // console.log(formCompType)
  return (
    <div>
        <form 
        className='flex flex-col  '
        onSubmit={(e)=>handleSubmitButton(e)}>
            {
                formCompType && formCompType.map((singleComp)=>BuildInput(singleComp))
            }
            <button 
            className='px-2 py-2 bg-black rounded-full text-white font-bold'
            type='submit'>submit</button>
        </form>
        
    </div>
  )
}
