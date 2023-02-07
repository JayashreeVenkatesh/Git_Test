import React from 'react';
import TableContent from './tableContent';
import teachmintlogo from '../icons/teachmint-logo.svg';
import classpluslogo from '../icons/classplus-logo.svg';
import grepvideoslogo from '../icons/table_grepvideos_logo.svg';

const Table1 = () => {
  return (
    <div className='grid grid-cols-4 items-end px-2 xl:px-10'>
      <div></div>
      <div className={`border rounded-t-2xl border-grey2 px-5 py-3 items-center justify-center flex h-14 md:h-20`}>
        <img src={teachmintlogo} alt="teachmintlogo" />
      </div>
      <div className={`border rounded-t-2xl border-grey2 flex justify-center items-center px-2 py-3 h-14 md:h-20`}>
      <img src={classpluslogo} alt="classpluslogo" />
      </div>
      <div className={`border-none rounded-t-2xl px-5 py-3 justify-center items-center bg-grey8 h-16 md:h-28`}>
      <img src={grepvideoslogo} alt="grepvideoslogo" className='mx-auto' />
      </div>
      <TableContent border="grey2" bg="white" text="Unlimited Videos"/>
      <TableContent border="grey2" bg="white" text=""/>
      <TableContent border="grey2" bg="white" text=""/>
      <div className={`px-4 py-3 bg-grey8 h-14 md:h-20 flex justify-start items-center border-none`}></div>
      <TableContent border="grey2" bg="white" text="Pricing"/>
      <TableContent border="grey2" bg="white" text=""/>
      <TableContent border="grey2" bg="white" text=""/>
      <TableContent border="grey7" bg="grey8" text=""/>
      <TableContent border="grey2" bg="white" text="Students Limit"/>
      <TableContent border="grey2" bg="white" text=""/>
      <TableContent border="grey2" bg="white" text=""/>
      <TableContent border="grey7" bg="grey8" text=""/>
      <TableContent border="grey2" bg="white" text="Test Series"/>
      <TableContent border="grey2" bg="white" text=""/>
      <TableContent border="grey2" bg="white" text=""/>
      <TableContent border="grey7" bg="grey8" text=""/>
      <TableContent border="grey2" bg="white" text="Encryption"/>
      <TableContent border="grey2" bg="white" text=""/>
      <TableContent border="grey2" bg="white" text=""/>
      <TableContent border="grey7" bg="grey8" text=""/>
      </div>
  )
}

export default Table1;
