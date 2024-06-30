import React from "react"
import {Routes, Route} from 'react-router-dom'

import LandingPage from "./LandingPage"
import Hero from "./components/landingPage/Hero"
import SignIn from "./components/sign/SignIn"
import SignUp from "./components/sign/SignUp"
import Developers from "./components/Developers"

function App() {
  return (
    <>
      <Routes>
       <Route path="/" element={<LandingPage />}/> 
       
        <Route path="/signin" element={<SignIn />}  />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/developers" element = {<Developers />} />
      </Routes>
      {/* <LandingPage /> */}
    </>
  )
}

export default App
