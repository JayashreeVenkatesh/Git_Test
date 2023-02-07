import React from 'react';

const FeatureList = (props) => {
  return (
    <div className='flex items-center'>
       <img src={props.img} alt='check_circle' className='mr-2 w-4 h-6' />
       <p className='text-xs text-secondary'>{props.text}</p>
      </div>
  )
}

export default FeatureList
