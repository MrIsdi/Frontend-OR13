import Cookies from 'js-cookie'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Sidebar from '../../Components/Sidebar'
import styles from "../../Styles/styles.module.css"
import useProfile from '../../Stores/useProfile'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
    const [dataProfile, setDataProfile] = useState("")
    
    useEffect(()=>{
        setDataProfile(JSON.parse(Cookies.get("profile")))
    },[])
    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <Sidebar />
                <div className="col px-md-5 py-3 min-vh-100">
                    <div className="row my-md-3  align-items-center">
                        <div className="col-6">
                            <p className="fs-4 fw-bold mb-md-0">Hello,  
                            {
                                Object.values(dataProfile).length != 0? ` ${(dataProfile["nama_lengkap"]).split(" ")[0]}`:
                                " User"
                            }
                            !</p>
                        </div>
                        <div className="col-6 d-flex flex-row-reverse">
                            {
                                Object.values(dataProfile).length != 0? <img src={dataProfile["foto"]} className="rounded-circle border  border-dark" alt="" style={{ width: "50px", aspectRatio: "1/1", objectFit: "cover", objectPosition: "top" }} />:
                                <i className="fw-bold bi bi-person-circle" style={{ fontSize: "40px" }}></i>
                            }
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 mb-4 mb-md-0">
                            <div className={`d-flex flex-column mb-4 p-5 justify-content-center align-items-center rounded-5 ${styles.sidebarUser}`}>
                                {
                                    Object.values(dataProfile).length != 0? <img src={dataProfile["foto"]} className="rounded-circle border border-dark" alt="" style={{ width: "100px", aspectRatio: "1/1", objectFit: "cover", objectPosition: "top" }} />:
                                    <i className="fw-bold bi bi-person-circle" style={{ fontSize: "100px" }}></i>
                                }
                                <p className="fs-5 fw-bold">
                                    {
                                        Object.values(dataProfile).length != 0? `${dataProfile["nama_lengkap"]}`:
                                        "User"
                                    }
                                </p>
                                <p className="fs-6 text-mute mb-0">
                                    {
                                        Object.values(dataProfile).length != 0? `${dataProfile["divisi"]}`:
                                        "Divisi?"
                                    }
                                </p>
                                <p className="fs-6 text-mute">
                                    {
                                        Object.values(dataProfile).length != 0? `${dataProfile["sub_divisi"]}`:
                                        "Sub divisi?"
                                    }
                                </p>
                            </div>
                            <div>
                                <p className="fs-4 fw-bold">Contact Person</p>
                                <div className={`d-flex justify-content-around align-items-center py-3 rounded-4 ${styles.dashboardContact}`}>
                                    <i class="fs-4 fw-bold bi bi-whatsapp"></i>
                                    <div className={`d-flex flex-column`}>
                                        <p className="fs-6 mb-0 fw-bold">Nadya</p>
                                        <p className="fs-6 mb-0">+62 8902-9204-28</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`col-md-7 offset-md-1 rounded-5 ${styles.sidebarUser}`}>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
