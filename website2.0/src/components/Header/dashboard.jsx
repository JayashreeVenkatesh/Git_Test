import React from 'react';
import {Spacer , SpaceSizes} from '../spacer.tsx';
import Course from '../icons/Course.png';
import OurClients from './our-clients';


const Dashboard = () => {
  return (
    <div className='container mx-auto flex p-10'>
        <div className='flex flex-col justify-center text-center w-full h-full'>
       <p className='font-bold text-grey8 text-lg md:text-3xl'>Build Your Online <span>Academy</span> in Hours</p>
       <Spacer size={SpaceSizes.medium} />
       <p className='font-thin text-grey8 text-xs md:text-sm'>At the most affordable pricing. Schedule call with us for the consultation.</p>
       <Spacer size={SpaceSizes.medium} />
       <div>
       <button className='text-white font-semibold text-sm md:text-base border rounded-md bg-primary px-2 py-2 md:py-3'>Schedule Call</button>
       </div>
       <Spacer size={SpaceSizes.medium} />
       <div className='pb-0 md:pb-20 mx-auto'>
        <img src={Course} alt="course"/>
       </div>
       <Spacer size={SpaceSizes.large} />
       <OurClients />
      
        </div> 
    </div>
  )
}

export default Dashboard
