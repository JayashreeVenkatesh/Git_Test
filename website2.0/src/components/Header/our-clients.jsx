import React from 'react';
import logo1 from '../icons/logo-1.svg';
import logo2 from '../icons/logoipsum-logo-2.svg';
import logo3 from '../icons/logoipsum-logo-3.svg';
import logo4 from '../icons/logoipsum-logo-4.svg';
import logo5 from '../icons/logoipsum-logo-5.svg';
import logo6 from '../icons/logoipsum-logo-6.svg';
import logo7 from '../icons/logoipsum-logo-7.svg';
import logo8 from '../icons/logoipsum-logo-8.svg';

const OurClients = () => {
  return (
    <div className='grid grid-cols-3 md:grid-cols-4 gap-4 mx-auto py-4 pb-10'>
       <img src={logo2} className='p-4' alt="logo" />
       <img src={logo1} className='p-4' alt="logo" />
       <img src={logo3} className='p-4' alt="logo" />
       <img src={logo4} className='p-4' alt="logo" />
       <img src={logo5} className='p-4' alt="logo" />
       <img src={logo6} className='p-4' alt="logo" />
       <img src={logo7} className='p-4' alt="logo" />
       <img src={logo8} className='p-4' alt="logo" />
       </div>
  )
}

export default OurClients;