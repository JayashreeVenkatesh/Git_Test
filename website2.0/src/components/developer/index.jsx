import React from 'react';
import List from './list';
import Code from './code';

const Developer = () => {
  return (
    <div className='bg-grey9'>
    <div className='container mx-auto flex px-2 md:p-10 justify-center w-full h-full pb-1 md:pb-10'>
        <div className='grid grid-cols-2 gap-8 md:gap-20 p-4 py-10 xl:p-20 container mx-auto'>
        <List />
        <Code />
        </div>   
    </div>
    </div>
  )
}

export default Developer;
