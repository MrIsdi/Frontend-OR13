import React, { useState, useEffect } from 'react'
import styles from "../../Styles/styles.module.css"
import Sidebar from '../../Components/Sidebar'
import Cookies from 'js-cookie'
import useProfile from '../../Stores/useProfile'
import {useNavigate} from "react-router-dom"
import DragDrop from '../../Components/DragDrop'
import FileVerify from '../../Components/FileVerify'

function Verify() {
    const dataProfile = JSON.parse(Cookies.get("profile"))

    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <Sidebar />
                <div className={`col px-md-5 py-3 min-vh-100 ${styles.content}`}>
                    <div className="row my-md-3  align-items-center">
                        <div className="col-6">
                            <p className="fs-4 fw-bold mb-md-0">Verifikasi</p>
                        </div>
                        <div className="col-6 d-flex flex-row-reverse">
                            {
                                Object.values(dataProfile).length != 0? <img src={dataProfile["foto"]} className="rounded-circle border  border-dark" alt="" style={{ width: "50px", aspectRatio: "1/1", objectFit: "cover", objectPosition: "top" }} />:
                                <i className="fw-bold bi bi-person-circle" style={{ fontSize: "40px" }}></i>
                            }
                        </div>
                    </div>
                    {
                        (dataProfile["krs"] === "https://or-api.neotelemetri.com/storage/krs" && dataProfile["bukti_pembayaran"] === "https://or-api.neotelemetri.com/storage/pembayaran")?
                        <FileVerify />:
                        <div className="row mt-5">
                            <p className="fs-4 fw-bold">Berkas anda</p>
                            <div className="col-md-5">
                                <img src={dataProfile["krs"]} className="img-thumbnail mx-auto d-block" alt="" />
                                <a href={dataProfile["krs"]} className={`w-50 mx-auto text-white btn d-flex align-items-center justify-content-center ${styles.profileBtn}`} target="_blank" download> Download</a>
                            </div>
                            <div className="col-md-5">
                                <img src={dataProfile["bukti_pembayaran"]} className="img-thumbnail mx-auto d-block" alt="" />
                                <a href={dataProfile["bukti_pembayaran"]} className={`w-50 mx-auto text-white btn d-flex align-items-center justify-content-center ${styles.profileBtn}`} target="_blank" download> Download</a>
                            </div>
                            <div className="row mt-5">
                                <div className="col-3">
                                    <a href='/peserta/editverify' className={`d-flex align-items-center justify-content-center w-100 text-white btn ${styles.profileBtn}`}>Edit File</a>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Verify
