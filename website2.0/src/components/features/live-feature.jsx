import React from 'react';
import badge from '../icons/badge.svg';
import group from '../icons/Group.svg';
import FeatureText from './feature-text';

const LiveFeature = () => {
  return (
    <div className='bg-gradient-to-b from-purple to-white px-4 md:px-10 md:pt-10 pt-4 rounded-2xl col-span-2'>
      <div className='relative flex justify-center '>
      <img src={group} alt="group" />
      <img src={badge} alt="badge" className='absolute -bottom-10 right-0 hidden md:flex' />
      </div>
      <FeatureText header="Inbuilt Privacy" text="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to"/>
    </div>
  )
}

export default LiveFeature;
