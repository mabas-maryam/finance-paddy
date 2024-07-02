import React from 'react'

const SignUp = () => {
  return (

    <div className='container mx-auto px-10'>
 <div className='flex px-10 shadow-md'>
      <div className='w-1/2 h-full flex items-center flex-col justify-center  py-16 border-r'>
      
          <div className='justify-center items-center font-primaryFont text-2xl font-semibold'>Finance-Paddy</div>
          <p className='text-primary font-tertiaryFont text-center mt-3'>Your number one budgeting application. Create an <br /> account let's get started...</p>
          <img src="https://frugal-finesse.vercel.app/static/media/auth.13a090110a3ab1d71eaa.png" alt="" />
      </div>

      <div className='w-1/2 py-12 h-screen px-16'>
      <div className=''>
        <p>Get Started</p>
        <p className='font-bold font-tertiaryFont text-xl'>Sign In to Finance-Paddy</p>
        </div>
      
    <div className=" flex items-center mt-6 w-full ">
      <div className="bg-white rounded w-full">
        
        <form className="space-y-4 w-full">
          <div className='relative'>
            <label className=" text-gray-700">Full Name </label>
            <input 
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-appGrey"
            />
            <span className="absolute right-4 top-8 text-purple-6"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><g opacity="0.5" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linejoin="round" d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></path><circle cx="12" cy="7" r="3"></circle></g></svg></span>
          </div>
          <div>
            <label className=" text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-appGrey"
            />
          </div>
          <div>
            <label className=" text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-appGrey"
            />
          </div>
          <div>
            <label className=" text-gray-700">Confirm Password</label>
            <input
              type="password"
              placeholder="Re-enter your password"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-appGrey"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-primary text-white rounded-lg hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Sign Up
          </button>
          <button
            type="button"
            className="w-full py-3 mt-2  text-appGrey rounded-lg hover:bg-secondary"
          >
            Sign In with Google
          </button>
        </form>
        <p className="mt-4 text-center">
          Already have an account?{' '}
          <a href="/login" className="text-blue-500 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
    </div>
    </div>
    </div>
   
  )
}

export default SignUp
