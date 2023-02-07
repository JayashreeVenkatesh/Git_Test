import React from 'react';
import TableContent from './tableContent';

const Table2 = () => {
  return (
    <div className='grid grid-cols-4 px-2 xl:px-10'>
      <TableContent border="grey2" bg="white" text="Lorem Ipsum"/>
      <TableContent border="grey2" bg="white" text=""/>
      <TableContent border="grey2" bg="white" text=""/>
      <div className={`border rounded-b-2xl border-grey7 px-5 py-3 justify-center items-center bg-grey8 h-16 md:h-28`}>
      </div>
    </div>
  )
}

export default Table2
