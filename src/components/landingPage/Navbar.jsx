import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='container mx-auto px-10 py-6 flex items-center justify-between font-primaryFont'>

            <div className='text-xl font-semibold'>
                 <NavLink to={'/'}>Finance <span className='text-primary'>Paddy</span></NavLink>
             </div>


            <div className='flex gap-4 items-center'>
              <NavLink to = {'/developers'} className='font-semibold text-appGrey cursor-pointer'>Developers</NavLink> 
              <NavLink to={'/signin'} className='border-[1.5px] border-primary py-2.5 px-6 rounded-lg text-primary font-semibold '>SignIn</NavLink>
              <NavLink to={'/signup'} className='py-2.5 px-6 rounded-lg text-white font-semibold bg-primary'>Signup</NavLink>
            </div>

    </div>
  )
}

export default Navbar
