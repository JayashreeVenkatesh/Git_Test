import React from 'react';
import {Spacer , SpaceSizes} from '../spacer.tsx';

const Header = () => {
  return (
    <div className='container mx-auto flex p-4 md:p-10'>
        <div className='flex flex-col justify-center text-center p-5 w-full h-full pt-10 '>
            <p className='font-bold text-white text-xl md:text-2xl'>Better than Anything You’ve Ever Used</p>
            <Spacer size={SpaceSizes.medium} />
            <p className='font-thin text-grey4 text-xs md:text-base'>You can build your online academy in less than two hours with intutive application</p>
            <Spacer size={SpaceSizes.medium} />
        </div>
    </div>
  )
}

export default Header
