import React from 'react'
import { Link } from "react-router-dom";

const UserInfo = () => {
  return (
    <div className="container mx-auto h-screen px-4 md:px-10 flex flex-col justify-center items-center">

  

        <div className='w-[40%] text-center'>
        <Link
            to="/"
            className="font-primaryFont text-4xl font-bold "
          >
            Finance <span className="text-primary">Paddy</span>
          </Link>
        

        <form action="" className='mt-6 font-tertiaryFont'>
            <div className='flex flex-col space-y-3'>
            <label className='font-semibold text-appGrey text-xl '>How should we call you? </label>
            <input className='border rounded-xl focus:outline-primary py-4 text-center ' type="text"
            placeholder='Enter your preferred name'
            />

            <div className='w-full pt-2'>
            <button className=' py-4 mt-2 w-full rounded-xl bg-primary text-white text-lg'>Proceed</button>
            </div>
            </div>
        </form>

        <div>progressBar</div>

  
    </div>
    </div>
  )
}

export default UserInfo
