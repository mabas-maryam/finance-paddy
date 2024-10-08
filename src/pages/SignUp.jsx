import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const SignUp = () => {
  const [passwordHidden, setPasswordHidden] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState(true);

  const navigate = useNavigate() 

  const handleSubmit = () => {
    navigate("/userinfo")
  }
  async function handleSignin(e) {
    e.preventDefault()

    if(name === '' || email === '' || password === '' || confirmedPassword === '' ){
      toast.error("please fill in all field")
            return
    }
    try {
      const userData = {
        name, email, password, confirmedPassword
      }
      console.log(userData)
      const response = await fetch('http://localhost:4000/api/v1/auth/signup',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
        }
      )
      const data = await response.json()
      console.log(data)

      if (!response.ok) {
        throw new Error(data.message)
        return
    }
    toast.success('Sign up successfully')



    } catch (error) {
      console.log(error)
            toast.error(error.message)
    }
    
  }

  return (
    <div className="container mx-auto px-4 md:px-10">
      <div className="flex flex-col md:flex-row px-4 md:px-10 md:shadow-md">
        <div className="w-full md:w-1/2 h-full flex items-center flex-col justify-center py-8 md:py-16 border-b md:border-b-0 md:border-r">
          <Link
            to="/"
            className="justify-center items-center font-primaryFont text-2xl font-semibold"
          >
            Finance <span className="text-primary">Paddy</span>
          </Link>
          <p className="text-primary font-tertiaryFont text-center mt-3">
            Your number one budgeting application. Create an <br /> account
            let's get started...
          </p>
          <img
            src="https://frugal-finesse.vercel.app/static/media/auth.13a090110a3ab1d71eaa.png"
            alt=""
            className="w-full max-w-xs md:max-w-none"
          />
        </div>

        <div className="w-full md:w-1/2 py-8 md:py-12 h-auto px-4 md:px-16">
          <div className="">
            <p className="text-secondary">Get Started</p>
            <p className="font-bold font-tertiaryFont text-2xl">
              Sign Up to Finance-Paddy
            </p>
          </div>

          <div className="flex items-center mt-6 w-full">
            <div className="bg-white rounded w-full">
              <form className="space-y-4 w-full">
                <div className="relative">
                  <label className="text-gray-700">Full Name <span className="text-red-400">*</span></label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:outline-secondary"
                    required
                  />
                  <span className="absolute right-4 top-8 text-purple-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                    >
                      <g
                        opacity="0.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path
                          strokeLinejoin="round"
                          d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"
                        ></path>
                        <circle cx="12" cy="7" r="3"></circle>
                      </g>
                    </svg>
                  </span>
                </div>
                <div className="relative">
                  <label className="text-gray-700">Email<span className="text-red-400">*</span></label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-appGrey"
                    required
                  />
                  <span className="absolute right-4 top-10 text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>
                  </span>
                </div>
                <div className="relative">
                  <label className="text-gray-700">Password<span className="text-red-400">*</span></label>
                  <input
                    type={passwordHidden ? "password" : "text"}
                    placeholder="Enter your password"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-appGrey"
                    required
                  />
                  <span
                    className="absolute text-gray-500 right-4 top-10"
                    onClick={() => setPasswordHidden(!passwordHidden)}
                  >
                    {passwordHidden ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                    )}
                  </span>
                </div>
                <div className="relative">
                  <label className="text-gray-700">Confirm Password<span className="text-red-400">*</span></label>
                  <input
                    type={confirmPassword ? "password" : "text"}
                    placeholder="Re-enter your password"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-appGrey"
                    required
                  />
                  <span
                    className="absolute text-gray-500 right-4 top-10"
                    onClick={() => setConfirmPassword(!confirmPassword)}
                  >
                    {confirmPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                    )}
                  </span>
                </div>
                <Link to={'/userinfo'}>
                <button
                  type="button"
                  className="w-full py-3 bg-primary text-white rounded-lg hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-400"
                  onClick={handleSignin}
                >
                  Sign Up
                </button>
                </Link>
                <button
                  type="button"
                  className="w-full py-3 mt-2 text-appGrey rounded-lg hover:bg-secondary hover:bg-opacity-35 border border-primary"
                >
                  Sign In with Google
                </button>
              </form>
              <p className="mt-4 text-center">
                Already have an account?{" "}
                <Link to={'/signin'}>
                <a href="/login" className="text-primary hover:underline">
                  Sign In
                </a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
