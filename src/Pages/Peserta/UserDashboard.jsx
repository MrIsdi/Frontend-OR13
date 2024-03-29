import Cookies from 'js-cookie'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Sidebar from '../../Components/Sidebar'
import styles from "../../Styles/styles.module.css"
import useProfile from '../../Stores/useProfile'
import { useNavigate } from 'react-router-dom'
import "../../Styles/class.css"
import Timeline from '../../Components/Timeline'

function Dashboard() {
    const dataProfile = JSON.parse(Cookies.get("profile"))
    const show = useProfile(state => state.show)
    const navigate = useNavigate()
    // useEffect(()=>{
    //     if(dataProfile === ""){
    //         show()
    //     }
    //     setDataProfile(JSON.parse(Cookies.get("profile")))
    // },[])
    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <Sidebar />
                <div className="col px-md-5 py-3 min-vh-100">
                    <div className="row my-md-3  align-items-center">
                        <div className="col-6">
                            <p className="fs-4 fw-bold mb-md-0 color-1">Hello,  
                            {
                                Object.values(dataProfile).length != 0? ` ${(dataProfile["nama_lengkap"]).split(" ")[0]}`:
                                " User"
                            }
                            !</p>
                        </div>
                        <div className="col-6 d-flex flex-row-reverse align-items-center">
                            {
                                Object.values(dataProfile).length != 0? <img src={dataProfile["foto"]} className="rounded-circle border  border-dark" alt="" style={{ width: "50px", aspectRatio: "1/1", objectFit: "cover", objectPosition: "top" }} />:
                                <i className="fw-bold bi bi-person-circle" style={{ fontSize: "40px" }}></i>
                            }
                            {
                                Object.values(dataProfile).length != 0?
                                <div className="zona me-3 d-flex align-items-center">
                                    <p className='color-1 mb-0 fw-bold me-1'>Zona :</p>
                                    <div style={{
                                        width: "80px",
                                        aspectRatio: "2/1"
                                    }}
                                    className={`rounded-3 
                                    ${dataProfile["zona"] == "Hitam"? "bg-dark" : 
                                    (dataProfile["zona"] == "Merah"? "bg-danger" : 
                                    (dataProfile["zona"] == "Kuning"? "bg-warning" : 
                                    (dataProfile["zona"] == "Hijau"? "bg-success" : "")))}`}
                                    ></div>
                                </div> : ""
                            }
                        </div>
                    </div>
                    {
                        Object.values(dataProfile).length == 0? (
                            <div className="row">
                                <div className="col mb-3 d-flex align-items-center" style={{
                                    borderRadius: "10px",
                                    background: "#FBE4EC",
                                    height: "50px"
                                }}>
                                    <p className='fs-6 fw-bold mb-0' style={{color: "#B966A3"}}>
                                        <i class="fs-5 bi bi-exclamation-triangle-fill mx-3"></i>
                                        Maaf, kamu belum terverifikasi silahkan lengkapi profile, bukti pembayaran & KRS
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div className="row">
                                <div className="col mb-3 d-flex align-items-center" style={{
                                    borderRadius: "10px",
                                    background: "#E5D6F6",
                                    height: "50px"
                                }}>
                                    <p className='fs-6 fw-bold mb-0' style={{color: "#301D54"}}>
                                        <i class="fs-5 bi bi-shield-fill-check mx-3"></i>
                                        Selamat kamu sudah terverifikasi!
                                    </p>
                                </div>
                            </div>
                        )
                    }
                    <div className="row">
                        <div className="col-md-4 mb-4 mb-md-0">
                            <div className={`d-flex flex-column mb-4 p-5 justify-content-center align-items-center rounded-5 ${styles.sidebarUser}`}>
                                {
                                    Object.values(dataProfile).length != 0? <img src={dataProfile["foto"]} className="rounded-circle border border-dark" alt="" style={{ width: "100px", aspectRatio: "1/1", objectFit: "cover", objectPosition: "top" }} />:
                                    <i className="fw-bold bi bi-person-circle" style={{ fontSize: "100px" }}></i>
                                }
                                <p className="fs-5 fw-bold color-1">
                                    {
                                        Object.values(dataProfile).length != 0? `${dataProfile["nama_lengkap"]}`:
                                        "User"
                                    }
                                </p>
                                <p className="fs-6 text-mute mb-0 color-1">
                                    {
                                        Object.values(dataProfile).length != 0? `${dataProfile["divisi"]}`:
                                        "Divisi?"
                                    }
                                </p>
                                <p className="fs-6 text-mute color-1">
                                    {
                                        Object.values(dataProfile).length != 0? `${dataProfile["sub_divisi"]}`:
                                        "Sub divisi?"
                                    }
                                </p>
                            </div>
                            <div>
                                <p className="fs-4 fw-bold color-1">Contact Person</p>
                                <div className={`d-flex justify-content-around align-items-center py-3 rounded-4 ${styles.dashboardContact}`}>
                                    <i class="fs-4 fw-bold bi bi-whatsapp"></i>
                                    <div className={`d-flex flex-column`}>
                                        <a href="https://wa.me/6285769658744" target="_blank" className='text-decoration-none'>
                                            <p className="color-1 fs-6 mb-0 fw-bold">Kak Aina</p>
                                            <p className="color-1 fs-6 mb-0">+62 857-6965-8744</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`col-md-7 offset-md-1 rounded-5 ${styles.sidebarUser}`}>
                            <p className="fs-4 mt-3 fw-bold color-1">Alur Kegiatan</p>
                            <Timeline />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
