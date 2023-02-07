import React from 'react';
import { Text } from '../text.tsx';
import {Spacer , SpaceSizes} from '../spacer.tsx';

const CopyRight = () => {
  return (
    <div className='md:flex justify-between pb-10 mt-5'>
      <div className='text-center'>
      <p className='text-grey6 text-xs'>© 2022 Grepvideo. All rights reserved.</p>
      </div>
      <div className='md:hidden'>
      <Spacer size={SpaceSizes.medium}/>
      </div>
      <div className='flex justify-center'>
      <Text color="grey6" weight="thin" size="x-small">Terms</Text>
      <Spacer size={SpaceSizes.medium} horizontal/>
      <Text color="grey6" weight="thin" size="x-small">Privacy</Text>
      <Spacer size={SpaceSizes.medium} horizontal/>
      <Text color="grey6" weight="thin" size="x-small">Cookies</Text>
      </div>
    </div>
  )
}

export default CopyRight;
