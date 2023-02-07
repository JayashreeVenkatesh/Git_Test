import React from 'react';
import zoom from '../icons/zoom.svg';
import {Spacer , SpaceSizes} from '../spacer.tsx';

const ZoomFeature = () => {
  return (
    <div className='relative bg-gradient-to-b from-purple to-white justify-center items-center rounded-2xl col-span-2 md:col-span-1'>
      <img src={zoom} alt="zoom"/>
      <div className='text-center mt-5 absolute bottom-10 right-8'>
      <p className='font-bold text-grey8 text-sm md:text-lg'>Zoom Integration</p>
      <Spacer size={SpaceSizes.small} />
      <p className='text-grey ttext-xs md:text-base mx-auto text-center'>Upload course and share link with your sru</p>
    </div>
    </div>
  )
}

export default ZoomFeature;
