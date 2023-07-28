import React from 'react'
import "./Spinner.css"

const Spinner = () => {
  return (
    <div className='  flex justify-center  flex-col items-center h-screen'>
      <div className='spinner '></div>
      <h1 className='mt-3 font-bold'>Loading</h1>
    </div>
  )
}

export default Spinner;
