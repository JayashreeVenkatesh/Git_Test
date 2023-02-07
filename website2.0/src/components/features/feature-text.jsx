import React from 'react';
import {Spacer , SpaceSizes} from '../spacer.tsx';

const FeatureText = (props) => {
  return (
    <div className='text-center mt-5'>
      <p className='font-bold text-grey8 text-sm md:text-lg'>{props.header}</p>
      <Spacer size={SpaceSizes.small} />
      <p className={`text-grey max-w-lg text-xs md:text-base mx-auto text-center`}>{props.text}</p>
    </div>
  )
}

export default FeatureText;
 