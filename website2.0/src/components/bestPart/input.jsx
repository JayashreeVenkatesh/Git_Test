import React from 'react'

const InputText = (props) => {
  return (
    <div className='flex flex-col text-sm md:text-xs'>
    <label className='font-thin text-grey8 mb-2'>{props.text}</label>
    <input type="text" className='focus:outline-none rounded-md p-2 text-grey5' placeholder='John'></input>
    </div>
  )
}

export default InputText;
