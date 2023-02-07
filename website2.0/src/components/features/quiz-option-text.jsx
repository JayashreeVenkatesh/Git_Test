import React from 'react'

const QuizOptionText = (props) => {
  return (
    <div className={`bg-purple border-purple2 p-4 border-2 border-b-4 ${props.margin} border-r-4 rounded-md`}>
        <p className='text-center font-semibold text-grey8 text-md'>{props.text}</p>
      </div>
  )
}

export default QuizOptionText; 
