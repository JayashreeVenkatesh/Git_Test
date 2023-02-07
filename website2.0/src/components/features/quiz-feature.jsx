import React from 'react';
import {Spacer , SpaceSizes} from '../spacer.tsx';
import QuizOptionText from './quiz-option-text';
import FeatureText from './feature-text';

const QuizFeature = () => {
  return (
    <div className='bg-gradient-to-b from-purple to-white p-10 rounded-2xl col-span-2 md:col-span-1'>
      <QuizOptionText text={`A) James Madison`} margin="mr-6"/>
      <Spacer size={SpaceSizes.small} />
      <QuizOptionText text={`B) Andrew Jacks`} margin="ml-6"/>
      <Spacer size={SpaceSizes.small} />
      <QuizOptionText text={`C) Thomas Jefferson`} margin="mr-6"/>
      <Spacer size={SpaceSizes.small} />
      <QuizOptionText text={`D) Grover Cleveland`} margin="ml-6"/>
      <Spacer size={SpaceSizes.small} />
      <FeatureText header="Live Quiz" width="w-full" text="In publishing and graphic design, Lorem ipsum is a placeholder text commonly"/>
    </div>
  )
}

export default QuizFeature;