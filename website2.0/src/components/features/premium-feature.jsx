import React from 'react';
import ChromeShareAPI from '../icons/ChromeShareAPI.svg';
import FeatureText from './feature-text';

const PremiumFeature = () => {
  return (
    <div className='bg-gradient-to-b col-span-2 from-purple to-white py-4 md:py-10 px-4 md:px-12 justify-center items-center rounded-2xl'>
      <div className='bg-white rounded-xl'>
      <img src={ChromeShareAPI} alt="ChromeShareAPI"/>
      </div>
      <FeatureText header="Premium Link Sharing" width="w-1/2" text="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to"/>
    </div>
  )
}

export default PremiumFeature;
