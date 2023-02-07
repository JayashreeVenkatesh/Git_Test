import React from 'react';
import {Spacer , SpaceSizes} from '../spacer.tsx';
import check_circle from '../icons/check_circle.svg';
import FeatureList from './featureList';

const List = () => {
  return (
    <div className='flex flex-col col-span-2 md:col-span-1'>
      <p className='text-white font-bold text-xl md:text-2xl'>For Developer</p>
      <Spacer size={SpaceSizes.medium} />
      <p className='text-grey4 text-xs md:text-base'>Rapidly build production-ready integrations with modern tools, from React components to real-time webhooks. Using Stripe’s developer platform means less maintenance for legacy systems and more focus on customer and product experiences. </p>
      <Spacer size={SpaceSizes.large} /> 
      <FeatureList img={check_circle} text="Secure video streaming" />
      <Spacer size={SpaceSizes['x-small']} /> 
      <FeatureList img={check_circle} text="Inbuilt download and play option" />
      <Spacer size={SpaceSizes['x-small']} /> 
      <FeatureList img={check_circle} text="API to manage" />
      <Spacer size={SpaceSizes['x-small']} /> 
      <FeatureList img={check_circle} text="Test Enviroment" />
      <Spacer size={SpaceSizes['x-small']} /> 
      <FeatureList img={check_circle} text="Backend Support" />
      <Spacer size={SpaceSizes['x-small']} /> 
      <FeatureList img={check_circle} text="Easy to Manage" />
      <Spacer size={SpaceSizes.large} />
      <div>
      <button className='text-white font-semibold text-xs md:text-base rounded-md bg-primary px-2 py-3'>Schedule Call</button>
      </div>
    </div>
  )
}

export default List;
