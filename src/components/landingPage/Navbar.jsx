import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = (prop) => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const handleNavOpen = () => {
    setIsNavOpen(!isNavOpen)
  }


  return (

    <nav className='container mx-auto px-6 py-6'>
      <div className=' flex items-center justify-between font-primaryFont md:px-10'>

        <div className='text-xl font-semibold'>
          <NavLink to={'/'}> <Link
            to="/"
            className="justify-center items-center font-primaryFont text-xl font-semibold"
          >
            Finance <span className="text-primary">Paddy</span>
          </Link></NavLink>
        </div>


        <div className='hidden gap-4 items-center md:flex'>
          <NavLink to={'/developers'} className='font-semibold text-appGrey cursor-pointer'>Developers</NavLink>
          <NavLink to={'/signin'} className='border-[1.5px] border-primary py-2.5 px-6 rounded-lg text-primary font-semibold '>SignIn</NavLink>
          <NavLink to={'/signup'} className='py-2.5 px-6 rounded-lg text-white font-semibold bg-primary'>Signup</NavLink>
        </div>

        {/* hamburger */}
        <div className='md:hidden cursor-pointer' onClick={handleNavOpen}>
          {!isNavOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>

          )}


        </div>

      </div>

      {/* mobile nav-menu */}

      {isNavOpen && (
        <div className='md:hidden py-8'>
          <div className='flex flex-col items-center space-y-5 px-2'>
            <NavLink to={'/developers'} className='font-semibold text-appGrey cursor-pointer '>Developers</NavLink>
            <NavLink to={'/signin'} className='border-[1.5px] border-primary py-3 px-6 rounded-lg w-full text-center text-primary font-semibold '>SignIn</NavLink>
            <NavLink to={'/signup'} className='py-3 px-6 rounded-lg text-white font-semibold w-full text-center bg-primary'>Signup</NavLink>
          </div>
        </div>
      )}

    </nav>

  )
}

export default Navbar
