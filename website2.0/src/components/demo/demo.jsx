import React from 'react';
import {Spacer , SpaceSizes} from '../spacer.tsx';
import InputText from '../bestPart/input';
import billing from '../icons/billing.svg';

const Demo = () => {
  return (
    <div className='mx-auto container px-4 md:px-10 xl:px-28 mt-20'>
    <div className='bg-purple rounded-xl'>
      <div className='grid grid-cols-2 items-end'>
      {/* left container   */}
      <div className='flex flex-col col-span-2 md:col-span-1 p-4 md:p-10'>
      <p className='text-grey8 font-semibold text-xl md:text-2xl'>Join 4,000+ Schools growing with Grepvideos</p>
      <Spacer size={SpaceSizes.medium} />
      <p className='text-grey8 font-semibold text-lg md:text-xl'>Schedule Demo</p>
      <Spacer size={SpaceSizes.medium} />
      <p className='text-grey7 font-thin text-xs md:text-base'>Our friendly team would love to hear from you.</p>
      <Spacer size={SpaceSizes.large} />
      {/* Input fields  */}
      <div className="grid grid-cols-2 gap-8 mb-5">
      <InputText text="First Name"/>
      <InputText text="last Name"/>
      </div>
      <InputText text="Email"/>
      <div className='flex flex-col mt-5 mb-5 text-sm md:text-xs'>
      <label className='font-thin text-grey8 mb-2'>Phone Number</label>
      <div className='flex'>
      <p className='p-2 bg-grey4 rounded-l-md '>+91</p>  
      <input type="text" className='focus:outline-none rounded-r-md p-2 text-grey5 w-full' placeholder='9999999999'></input>
      </div>
      </div>
      <Spacer size={SpaceSizes.large} />
      <div>
      <button className='text-white font-semibold text-xs md:text-base rounded-md bg-primary px-2 py-3 w-full'>Schedule Call</button>
      </div>
      </div>

      {/* right container */}
      <div className='justify-end items-end hidden md:flex'>
       <img src={billing} alt="billing" className='h-1/3'/>
      </div>
      </div>
    </div>

    </div>
  )
}

export default Demo;
