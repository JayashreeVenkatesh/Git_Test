import React from 'react';
import {Spacer , SpaceSizes} from '../spacer.tsx';

const Types = (props) => {
  return (
    <div className='flex p-4 items-center'>
      <div className='border-l-2 border-grey4 h-4 mr-4'></div>  
      <div>  
      <img src={props.icon} alt="chat" />
      <Spacer size={SpaceSizes.small} />
      <p className='text-white font-semibold text-xs md:text-base'>{props.heading}</p>
      <Spacer size={SpaceSizes['x-small']} />
      <p className='text-grey4 text-xs'>{props.text}</p>
      </div>
    </div>
  )
}

export default Types;
