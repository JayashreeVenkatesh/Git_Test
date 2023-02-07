import React from 'react';
import LiveFeature from './live-feature';
import QuizFeature from './quiz-feature';
import ZoomFeature from './zoom-feature';
import PremiumFeature from './premium-feature';

const listOfFeatures = () => {
  return (
    <div className='container mx-auto flex px-0 xl:px-20 mb-10 w-full h-full pb-10'>
      <div className='grid grid-cols-1 md:grid-cols-3 px-4 md:px-10 gap-16'>
       <LiveFeature />
       <QuizFeature />
       <ZoomFeature />
       <PremiumFeature />
      </div>
    </div>
  )
}

export default listOfFeatures;