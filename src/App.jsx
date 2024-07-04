import React from "react"
import {Routes, Route} from 'react-router-dom'

import LandingPage from "./LandingPage"
import Hero from "./components/landingPage/Hero"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import Developers from "./components/Developers"
import UserInfo from "./UserInfo"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}/> 
        <Route path="/signin" element={<SignIn />}  />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/developers" element = {<Developers />} />
        <Route path="/userinfo" element = {<UserInfo/>}/>
      </Routes>
      {/* <LandingPage /> */}
    </>
  )
}

export default App
