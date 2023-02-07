import React from 'react';
import {Spacer , SpaceSizes} from '../spacer.tsx';

const Heading = () => {
  return (
    <div className='flex flex-col text-center items-center mb-2 md:mb-10'>
      <p className='font-bold text-grey8 text-xl md:text-2xl'>Why We are Better</p>
            <Spacer size={SpaceSizes.medium} />
            <p className='font-thin text-grey8 text-xs md:text-base max-w-lg'>Designed to the last pixel and engineered with unforgiving precision, Linear combines UI elegance with world-class performance.</p>
            <Spacer size={SpaceSizes.medium} />
    </div>
  )
}

export default Heading;
