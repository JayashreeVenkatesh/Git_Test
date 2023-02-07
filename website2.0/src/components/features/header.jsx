import React from 'react';
import {Spacer , SpaceSizes} from '../spacer.tsx';

const Header = () => {
  return (
    <div>
      <div className='container mx-auto flex p-4 md:p-10'>
        <div className='flex flex-col justify-center text-center items-center p-5 w-full h-full pt-5'>
            <p className='font-bold text-grey8 text-xl md:text-2xl'>Build with Better Features</p>
            <Spacer size={SpaceSizes.medium} />
            <p className='font-thin text-grey8 text-xs md:text-base max-w-lg'>Designed to the last pixel and engineered with unforgiving precision, Linear combines UI elegance with world-class performance.</p>
            <Spacer size={SpaceSizes.medium} />
        </div>
    </div>
    </div>
  )
}

export default Header
