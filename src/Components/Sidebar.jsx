import React, {useState, useEffect} from 'react'
import styles from "../Styles/styles.module.css"
import useLogin from '../Stores/useLogin'
import {useNavigate} from "react-router-dom"
import Cookies from 'js-cookie'
import logo from "../assets/logoD.png"
import logoD from "../assets/logoDD.png"
import useProfile from '../Stores/useProfile'

function Sidebar() {
    const handleLogout = useLogin(state => state.handleLogout)
    const isLogout = useLogin(state => state.isLogout)
    const setIsLogout = useLogin(state => state.setIsLogout)
    const setValidation = useLogin(state => state.setValidation)
    const user = JSON.parse(Cookies.get("user"))
    const navigate = useNavigate()
    const setProfile = useProfile(state => state.setProfile)

    useEffect(()=>{
        if(isLogout != {}){
            if(isLogout.status === 200){
                Cookies.remove("token")
                Cookies.remove("user")
                Cookies.remove("profile")
                setValidation({})
                setIsLogout({})
                setProfile({})
                navigate("/login")
            }
        }

        const url = window.location.href
        const navItem = document.querySelectorAll(".a")
        navItem.forEach(a => {
            if(a.href === url){
                a.parentElement.classList.add(`${styles.sidebarLiActive}`)
            }
        })
    },[isLogout])

    return (
        <div className={`col-auto col-md-3 col-xl-2 px-0 ${styles.bgDashboard} position-relative`}>
            <div className="d-flex flex-column align-items-center align-items-sm-start pt-2 text-white min-vh-100">
                <a href="/" className="d-flex justify-content-center pb-3 mb-5 mt-md-3 w-100 text-white text-decoration-none">
                    <img src={logoD} alt="" className='img-fluid d-inline d-sm-none' style={{ width: "calc(1.275rem + .3vw)" }}/>
                    <img src={logo} alt="" className="img-fluid d-none d-sm-inline" />
                </a>
                {
                    (user.role === "peserta") ? (
                        <ul className="nav nav-pills w-100 flex-column mb-auto align-items-center align-items-sm-start" id="menu">
                            <li className={`nav-item w-100 ps-md-4 px-2 px-md-0 ${styles.sidebarLi}`}>
                                <a href="/peserta/profile" className={`a text-white nav-link px-0 align-middle ${styles.navLink}`}>
                                    <i className="fs-4 bi bi-person-fill"></i> 
                                    <span className="ms-md-4 d-none d-sm-inline">Profile</span>
                                </a>
                            </li>
                            <li className={`nav-item w-100 ps-md-4 px-2 px-md-0 ${styles.sidebarLi}`}>
                                <a href="/peserta" className={`a text-white nav-link align-middle px-0 ${styles.navLink}`}>
                                    <i className="fs-4 bi bi-house-fill"></i> 
                                    <span className="ms-md-4 d-none d-sm-inline">Dashboard</span>
                                </a>
                            </li>
                            <li className={`nav-item w-100 ps-md-4 px-2 px-md-0 ${styles.sidebarLi}`}>
                                <a href="/peserta/verify" className={`a text-white nav-link px-0 align-middle ${styles.navLink}`}>
                                    <i className="fs-4 bi bi-shield-fill-check"></i> 
                                    <span className="ms-md-4 d-none d-sm-inline">Verify</span> 
                                </a>
                            </li>
                            <li className={`nav-item w-100 ps-md-4 px-2 px-md-0 ${styles.sidebarLi}`}>
                                <a href="/peserta/ujian" className={`a text-white nav-link px-0 align-middle ${styles.navLink}`}>
                                    <i class="fs-4 bi bi-file-earmark-fill"></i>
                                    <span className="ms-md-4 d-none d-sm-inline">Ujian Online</span> 
                                </a>
                            </li>
                        </ul>
                    ) : (
                        <ul className="nav nav-pills w-100 flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                            <li className={`nav-item w-100 ps-md-4 px-2 px-md-0 ${styles.sidebarLi}`}>
                                <a href="/admin" className={`text-white nav-link align-middle px-0 ${styles.navLink}`}>
                                    <i className="fs-4 bi bi-grid-fill"></i> 
                                    <span className="ms-md-4 d-none d-sm-inline">Dashboard</span>
                                </a>
                            </li>
                        </ul>
                    )
                }
                <ul className='nav nav-pills w-100 mb-md-3'>
                    <li className={`nav-item w-100 ps-md-4 px-2 px-md-0 ${styles.sidebarLi}`}>
                        <button onClick={handleLogout} className="text-white nav-link align-middle d-flex align-items-center px-0">
                            <i className="fs-4 bi bi-arrow-left-circle-fill"></i>
                            <span className="ms-md-4 d-none d-sm-inline">Keluar</span>
                        </button>
                    </li>
                </ul>
                {/* <hr />
                <div className="dropdown pb-4 position-absolute bottom-0">
                    <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" className="rounded-circle" />
                        <span className="d-none d-sm-inline mx-1">User</span>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li><a className="dropdown-item" href="#">Dashboard</a></li>
                        <li><a className="dropdown-item" href="#">Profile</a></li>
                        <li><a className="dropdown-item" href="#">Verify</a></li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li>
                            <button className="dropdown-item" type='submit' onClick={handleLogout}>Sign out</button>
                        </li>
                    </ul>
                </div> */}
            </div>
        </div>
    )
}

export default Sidebar
