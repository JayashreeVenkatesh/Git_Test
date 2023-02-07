import React from 'react';

const TableContent = (props) => {
  return (
    <div className={`border border-${props.border} px-4 py-3 bg-${props.bg} h-14 md:h-20 flex justify-start items-center`}>
        <p className='text-grey8 text-xs font-thin md:text-base md:font-semibold'>{props.text}</p>
    </div>
  )
}

export default TableContent
