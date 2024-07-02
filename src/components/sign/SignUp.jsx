import React from 'react'

const SignUp = () => {
  return (
    <div className='flex container mx-auto py-6 px-10 items-center'>
      <div className='w-1/2'>
          <div className='justify-center items-center font-primaryFont text-2xl font-semibold'>Finance-Paddy</div>
          <p className='text-primary font-tertiaryFont '>Your number one budgeting application. Create an <br /> account let's get started...</p>
          <img src="https://frugal-finesse.vercel.app/static/media/auth.13a090110a3ab1d71eaa.png" alt="" />
      </div>

      <div className='w-1/2'>
      <div className=''>
        <p>Get Started</p>
        <p className='font-semibold font-tertiaryFont text-xl'>Sign In to Finance-Paddy</p>
        </div>
      
    <div className=" flex items-center justify-center mt-6">
      <div className="bg-white p-8 rounded shadow-md ">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form className="space-y-4 ">
          <div>
            <label className=" text-gray-700">Full Name </label>
            <input 
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-appGrey"
            />
            {/* <span className="absolute right-4 top-4 text-purple-6"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><g opacity="0.5" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linejoin="round" d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></path><circle cx="12" cy="7" r="3"></circle></g></svg></span> */}
          </div>
          <div>
            <label className=" text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-appGrey"
            />
          </div>
          <div>
            <label className=" text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-appGrey"
            />
          </div>
          <div>
            <label className=" text-gray-700">Confirm Password</label>
            <input
              type="password"
              placeholder="Re-enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-appGrey"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-primary text-white rounded-lg hover:bg-hoverColor focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Sign Up
          </button>
          <button
            type="button"
            className="w-full py-2 mt-2  text-appGrey rounded-lg hover:bg-hoverColor"
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
  )
}

export default SignUp
