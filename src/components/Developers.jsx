import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [passwordHidden, setPasswordHidden] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState(true);

  return (
    <div className="container mx-auto px-4 md:px-10">
      <div className="flex flex-col md:flex-row px-4 md:px-10 shadow-md">
        <div className="w-full md:w-1/2 h-full flex items-center flex-col justify-center py-8 md:py-16 border-b md:border-b-0 md:border-r">
          <Link
            to="/"
            className="justify-center items-center font-primaryFont text-2xl font-semibold"
          >
            Finance <span className="text-primary">Paddy</span>
          </Link>
          <p className="text-primary font-tertiaryFont text-center my-6">
          Feedback, Reccommendation, Queries... <span className="md:flex justify-center ">We'd love to hear from you!</span>
          </p>
          <img
            src="https://frugal-finesse.vercel.app/static/media/contact-us.fa1c38674e1f9116a3bd.png"
            alt=""
            className="w-full max-w-xs md:max-w-none"
          />
        </div>

        <div className="w-full md:w-1/2 py-8 md:py-12 h-auto px-4 md:px-14">
          <div className="">
            <p className="text-secondary">Send us a message</p>
            <p className="font-bold font-tertiaryFont text-2xl">
              Contact Us
            </p>
          </div>

          <div className="flex items-center mt-6 w-full">
            <div className="bg-white rounded w-full">
              <form className="space-y-4 w-full">
                <div className="md:flex gap-3">
                <div className="relative">
                  <label className="text-gray-700">First Name <span className="text-red-400">*</span></label>
                  <input
                    type="text"
                    placeholder="Enter your first Name"
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
                  <label className="text-gray-700">Last Name <span className="text-red-400">*</span></label>
                  <input
                    type="text"
                    placeholder="Enter your last Name"
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

                </div>
                <div className="relative">
                  <label className="text-gray-700">Email <span className="text-red-400">*</span></label>
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
                  <label className="text-gray-700">Subject <span className="text-red-400">*</span></label>
                  <input
                    type="text"
                    placeholder="Message Subject"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:outline-secondary"
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
                  <label className="text-gray-700">Message <span className="text-red-400">*</span></label>
                  <textarea
                    type="textarea"
                    placeholder="Type your Message"
                    className="w-full px-4 pt-2 pb-24 border rounded-lg focus:outline-none focus:outline-secondary"
                    required
                  />
                  
                </div>

                
                <button
                  type="submit"
                  className="w-full py-3 bg-primary text-white rounded-lg hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  Send Message
                </button>
                
              </form>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
