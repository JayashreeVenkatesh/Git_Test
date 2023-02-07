import React from 'react';
import logo from '../icons/logo.svg';

const OurLogo = () => {
  return (
    <div className='py-5 px-2 md:px-28 items-center h-20 md:flex-col'>
        <div className='flex justify-center mb-6'>
        <img src={logo} alt="logo" className='' />
        </div>
        <div className='flex flex-wrap md:flex-nowrap mt-4 justify-center md:px-28 mx-auto'>
        <p className='text-grey6 text-xs p-2'>Overview</p>  
        <p className='text-grey6 text-xs p-2'>Product</p>
        <p className='text-grey6 text-xs p-2'>Features</p> 
        <p className='text-grey6 text-xs p-2'>Competitors</p>
        <p className='text-grey6 text-xs p-2'>Developer</p>
        <p className='text-grey6 text-xs p-2'>Demo</p>
        </div>  
    </div>
  )
}

export default OurLogo;
