import React from 'react';
import Heading from './heading';
import Table1 from './Table1';
import Table2 from './Table2';

const Bestpart = () => {
  return (
    <div className='container mx-auto flex md:p-10 justify-center w-full'>
        <div className='p-2 xl:p-10 container mx-auto'>
            <Heading/>
            <Table1 />
            <Table2 />
        </div>   
    </div>
  )
}

export default Bestpart;
