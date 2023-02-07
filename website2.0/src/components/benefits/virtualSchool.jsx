import React from 'react';
import {Spacer , SpaceSizes} from '../spacer.tsx';
import chat from '../icons/chat.svg';
import media from '../icons/media.svg';
import readingbook from '../icons/readingbook.svg';
import archive from '../icons/archive.svg';
import Types from './types-of-benefits';


const VirtualSchool = () => {
  return (
    <div className='container mx-auto flex px-2 xl:p-20 justify-center w-full h-full pb-10'>
    <div className='flex flex-col px-4 md:px-10 container mx-auto'>
    <div className='bg-gradient-to-r from-grey8 via-white to-grey8 h-0.5 mb-20'></div>
    <p className='text-white font-bold text-xl'>Move Faster with Virtual School</p>
    {/* <Text color="white" weight="bold" size="large"></Text> */}
    <Spacer size={SpaceSizes.large} />
    <div className='grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 pb-10 '>
    <Types icon={chat} heading="Live Chat" text="Interact with students while streaming."/>
    <Types icon={media} heading="Digital Video Books" text="Create video books with us to streamline course"/>
    <Types icon={archive} heading="Simplify Quiz" text="Create quiz with on platform to help students"/>
    <Types icon={readingbook} heading="Manage Students" text="Interact with students while streaming."/>
    </div>
    </div>
    </div>
  )
}

export default VirtualSchool;
