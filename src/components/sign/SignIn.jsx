import React from 'react'


const SignIn = () => {
  return (
    <div className='w-full rounded-sm bg-white mx-auto max-w-7xl shadow-default'>
      <div className='flex items-center'>
        <div className='hidden w-full xl:block xl:w-1/2'>
          <div className="py-17.5 px-26 text-center">
            <h1 className='pt-16 font-tertiaryFont font-semibold text-4xl'>
            Finance <span className='text-primary'>Paddy</span>
            </h1>

            <p class="3xl:px-20  font-display text-xl text-gray-600 mt-4">Your number one 
              budgeting application. Login and let's get started...</p>
              {/* <span class="mt-4 inline-block">
                <img src= {img2} alt="auth" /></span> */}
          </div>

        </div>


        <div className='border border-left'>

        </div>

      </div>
      
    </div>
  )
}

export default SignIn
