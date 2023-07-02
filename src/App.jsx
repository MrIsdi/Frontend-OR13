import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"

import PageNotFound from './Pages/PageNotFound'
import Landingpage from "./Pages/Landingpage"
import Login from "./Pages/Login"
import Register from './Pages/Register'
import AdminDashboard from "./Pages/Admin/AdminDashboard"
import ShowUserDashboard from "./Pages/Admin/ShowUserDashboard"
import UserDashboard from "./Pages/Peserta/UserDashboard"
import Profile from "./Pages/Peserta/Profile"
import Verify from "./Pages/Peserta/Verify"

import useLogin from './Stores/useLogin'
import Test from './Pages/Admin/Test'



function App() {
  const user = useLogin(state=>state.user)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={ <PageNotFound /> } />
        <Route path="/" element={ <Landingpage /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/admin" element={ <AdminDashboard /> } />
        <Route path="/admin/peserta/:Id/detail" element={ <ShowUserDashboard /> } />
        <Route path={`/peserta`} element={ <UserDashboard /> } />
        <Route path="/peserta/profile" element={ <Profile /> } />
        <Route path="/peserta/verify" element={ <Verify /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
