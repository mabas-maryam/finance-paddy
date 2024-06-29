import React from 'react'

const Navbar = () => {
  return (
    <div className='container mx-auto px-10 py-6 flex items-center justify-between font-primaryFont'>

            <div className='text-xl font-semibold'>
                  Finance <span className='text-primary'>Paddy</span>
             </div>


            <div className='flex gap-4 items-center'>
              <p className='font-semibold text-appGrey cursor-pointer'>Developers</p>
              <button className='border-[1.5px] border-primary py-2.5 px-6 rounded-lg text-primary font-semibold '>SignIn</button>
              <button className='py-2.5 px-6 rounded-lg text-white font-semibold bg-primary'>Signup</button>
            </div>

    </div>
  )
}

export default Navbar
