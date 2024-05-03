import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'

const AllRoutes = () => {
  return (
    <div>

        <Routes>

<Route path='/' element={<Login />} />
<Route path='browse' element={<Browse />} />

        </Routes>
    </div>
  )
}

export default AllRoutes