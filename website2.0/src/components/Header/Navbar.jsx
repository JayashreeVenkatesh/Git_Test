import React from 'react';
import logo from '../icons/logo.svg';
import {Spacer , SpaceSizes} from '../spacer.tsx';


const Navbar = () => {
  return (
    <div className='justify-between py-5 px-20 items-center h-20 md:flex'>
      <div className='flex justify-center'>
      <img src={logo} alt="logo" className='' />
      </div>
      <div className='md:hidden'>
      <Spacer size={SpaceSizes.large}/>
      </div>
      <div className='flex justify-center'>
      <p className='text-primary font-bold text-xs md:text-base'>Home</p>
      <Spacer size={SpaceSizes.medium} horizontal/>
      <p className='text-grey7 font-bold text-xs md:text-base'>For developers</p>  
      </div>
      <div className='hidden text-xs md:text-base md:flex'>
      <button className='text-primary font-bold border rounded-md border-grey2 px-2 py-3'>Schedule Call</button> 
      </div>
    </div>
  )
}

export default Navbar
