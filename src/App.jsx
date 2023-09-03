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
import EditVerify from './Pages/Peserta/EditVerify'

import useLogin from './Stores/useLogin'
import Test from './Pages/Admin/Test'

import styles from "./Styles/styles.module.css"
import { ComingSoon } from './Components/ComingSoon'



function App() {
  const user = useLogin(state=>state.user)
  document.body.classList.add(`${styles.font}`)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={ <PageNotFound /> } />
        <Route path="/" element={ <Landingpage /> } />
        <Route path="/comingsoon" element={ <ComingSoon /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/admin" element={ <AdminDashboard /> } />
        <Route path="/admin/peserta/:Id/detail" element={ <ShowUserDashboard /> } />
        <Route path={`/peserta`} element={ <UserDashboard /> } />
        <Route path="/peserta/profile" element={ <Profile /> } />
        <Route path="/peserta/verify" element={ <Verify /> } />
        <Route path="/peserta/editverify" element={ <EditVerify /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
