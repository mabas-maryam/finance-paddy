import React from "react"
import {Routes, Route} from 'react-router-dom'

import LandingPage from "./pages/LandingPage"
import Hero from "./components/landingPage/Hero"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Developers from "./components/Developers"
import UserInfo from "./pages/UserInfo"
import Dashboard from "./pages/dashboard/Dashboard"
import DashboardLayout from "./components/dashboard/DashboardLayout"
import Transactions from "./pages/dashboard/Transactions"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}/> 
        <Route path="/signin" element={<SignIn />}  />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/developers" element = {<Developers />} />
        <Route path="/userinfo" element = {<UserInfo/>}/>
        <Route path="/dashboard" element = {<Dashboard />}/>
        <Route path="/transaction" element = {<Transactions />}/>

        <Route path = "/dashboardLayout" element = {<DashboardLayout />} />
      </Routes>
      {/* <LandingPage /> */}
    </>
  )
}

export default App
