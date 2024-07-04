import React from 'react'

const Form1 = () => {
  return (
    <div>
      <div className='flex flex-col space-y-3'>
            <label className='font-semibold text-appGrey md:text-xl '>How should we call you? </label>
            <input className='border rounded-xl focus:outline-primary py-4 text-center ' type="text"
            placeholder='Enter your preferred name'
            />
            </div>
    </div>
  )
}

export default Form1
