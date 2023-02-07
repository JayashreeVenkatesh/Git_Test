import React from 'react';
import book from '../icons/book.svg';
import smartphone from '../icons/smartphone.svg';
import live from '../icons/live.svg';
import quiz from '../icons/Quiizzes.svg';
import {Spacer , SpaceSizes} from '../spacer.tsx';

const UnlimitedClasses = () => {
  return (
    <div className='container mx-auto flex px-0 xl:px-20 justify-center w-full h-full pb-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-16 px-4 md:px-10 container mx-auto'>

        {/* Live classes */}
        <div className='border border-grey8 rounded-3xl shadow-xl md:pl-10 pl-5 md:pt-10 pt-5 flex flex-col '> 
          <img src={smartphone} alt="smartphone" className='w-16 h-14'/>
          <Spacer size={SpaceSizes.medium} />
          <p className='text-white font-bold text-sm md:text-lg'>Unlimited Live Classes</p>
          {/* <Text color="white" weight="bold" size="medium">Unlimited Live Classes</Text> */}
          <Spacer size={SpaceSizes.medium} />
          <p className='w-3/4 text-grey4 font-thin text-xs md:text-base'>You do not need to worry about billing while taking classes we provide unlimited live classes, with zero fees</p>
          <Spacer size={SpaceSizes.large} />
          <div className='flex justify-end'>
            <img src={live} alt="live"/>
          </div>
        </div>
        
        {/* Test Series */}
        <div className='border border-grey8 rounded-3xl shadow-xl md:pl-10 pl-5 md:pt-10 pt-5 flex flex-col'> 
          <img src={book} alt="book" className='w-16 h-14'/>
          <Spacer size={SpaceSizes.medium} />
          <p className='text-white font-bold text-sm md:text-lg'>Unlimited Test Series</p>
          {/* <Text color="white" weight="bold" size="medium">Unlimited Test Series</Text> */}
          <Spacer size={SpaceSizes.medium} />
          <p className='w-3/4 text-grey4 font-thin text-xs md:text-base'>Wanted to take physics tests everyday? Join us to take that without worrying about billing</p>
          <Spacer size={SpaceSizes.large} />
          <div className='flex justify-end'>
            <img src={quiz} alt="quiz"/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default UnlimitedClasses;
