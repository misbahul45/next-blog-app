import React from 'react'

interface Props {
 labels:LabelPost[]   
}

const Labels = ({ labels }:Props) => {
  return (
    <div className='flex gap-2 flex-wrap mt-2'>
      {labels.map((label) => (
        <span key={label.id}
        className='text-slate-100 bg-blue-600 px-4 py-1.5 rounded text-center font-semibold shadow-md shadow-slate-600'
        >{label.name}</span>
      ))}
    </div>
  )
}

export default Labels
