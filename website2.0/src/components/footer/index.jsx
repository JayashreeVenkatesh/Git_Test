import React from 'react';
import OurLogo from './our-logo';
import CopyRight from './copy-rights';

const Footer = () => {
  return (
    <div className='bg-purple1 mt-20 '>
      <div className='container mx-auto justify-center px-2 md:px-28'>
        <OurLogo />
        <div className='border-t-2 border-grey4 h-4 mr-4 mt-20 md:mt-10'></div> 
        <CopyRight/>
      </div>
    </div>
  )
}

export default Footer;
