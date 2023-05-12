import React, {useState, useEffect} from 'react'
import styles from "../Styles/styles.module.css"
import useLogin from '../Stores/useLogin'
import {useNavigate} from "react-router-dom"
import Cookies from 'js-cookie'

function Sidebar() {
    const handleLogout = useLogin(state => state.handleLogout)
    const isLogout = useLogin(state => state.isLogout)
    const setIsLogout = useLogin(state => state.setIsLogout)
    const setValidation = useLogin(state => state.setValidation)
    const user = JSON.parse(Cookies.get("user"))
    const navigate = useNavigate()

    useEffect(()=>{
        if(isLogout != {}){
            if(isLogout.status === 200){
                setValidation({})
                setIsLogout({})
                navigate("/login")
            }
        }
    },[isLogout])

    return (
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark position-relative">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white">
                <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-5 d-none d-sm-inline">Menu</span>
                </a>
                {
                    (user.role === "peserta") ? (
                        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                            <li className="nav-item">
                                <a href="/peserta" className={`nav-link align-middle px-0 ${styles.navLink}`}>
                                    <i className="fs-4 bi bi-grid-fill"></i> 
                                    <span className="ms-2 d-none d-sm-inline">Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a href="/peserta/profile" className={`nav-link px-0 align-middle ${styles.navLink}`}>
                                    <i className="fs-4 bi bi-people"></i> 
                                    <span className="ms-2 d-none d-sm-inline">Profile</span>
                                </a>
                            </li>
                            <li>
                                <a href="/peserta/verify" className={`nav-link px-0 align-middle ${styles.navLink}`}>
                                    <i className="fs-4 bi bi-person-check-fill"></i> 
                                    <span className="ms-2 d-none d-sm-inline">Verify</span> 
                                </a>
                            </li>
                        </ul>
                    ) : (
                        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                            <li className="nav-item">
                                <a href="/admin" className={`nav-link align-middle px-0 ${styles.navLink}`}>
                                    <i className="fs-4 bi bi-grid-fill"></i> 
                                    <span className="ms-2 d-none d-sm-inline">Dashboard</span>
                                </a>
                            </li>
                        </ul>
                    )
                }
                <hr />
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
                </div>
            </div>
        </div>
    )
}

export default Sidebar
