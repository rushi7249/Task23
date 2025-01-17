import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from '../Pages/Dashboard'
import Signup from '../Pages/Signup'
import Home from "../Pages/Home"
import Login from "../Pages/Login"

const Routing = () => {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/Dashboard" element={<Dashboard/>}/>
          <Route path="/Home" element={<Home/>}/>

          <Route path="/Login" element={<Login/>}/>
          <Route path="/Signup" element={<Signup/>}/>


      </Routes>
    </div>
  )
}

export default Routing
