import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='container mx-auto px-4 py-6 flex items-center justify-between font-primaryFont md:px-10'>

            <div className='text-xl font-semibold'>
                 <NavLink to={'/'}>Finance <span className='text-primary'>Paddy</span></NavLink>
             </div>


            <div className='hidden gap-4 items-center md:flex'>
              <NavLink to = {'/developers'} className='font-semibold text-appGrey cursor-pointer'>Developers</NavLink> 
              <NavLink to={'/signin'} className='border-[1.5px] border-primary py-2.5 px-6 rounded-lg text-primary font-semibold '>SignIn</NavLink>
              <NavLink to={'/signup'} className='py-2.5 px-6 rounded-lg text-white font-semibold bg-primary'>Signup</NavLink>
            </div>

            <div className='md:hidden'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

            </div>

    </div>
  )
}

export default Navbar
