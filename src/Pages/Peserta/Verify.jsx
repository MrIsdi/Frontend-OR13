import React, { useState, useEffect } from 'react'
import styles from "../../Styles/styles.module.css"
import Sidebar from '../../Components/Sidebar'
import Cookies from 'js-cookie'
import useProfile from '../../Stores/useProfile'
import {useNavigate} from "react-router-dom"

function Verify() {
    const data = JSON.parse(Cookies.get("profile"))
    const [krs, setKrs] = useState("")
    const [bukti, setBukti] = useState("")
    const setValidation = useProfile(state => state.setValidation)
    const validation = useProfile(state => state.validation)
    const setData = useProfile(state => state.setData)
    const storeFile = useProfile(state => state.storeFile)
    const showFile = useProfile(state => state.showFile)
    const navigate = useNavigate()

    const startFile = async (e) => {
        e.preventDefault()
        const dataFile = new FormData()
        dataFile.append("krs", krs)
        dataFile.append("bukti_pembayaran", bukti)
        setData(dataFile)
        storeFile()
        navigate(0)
    }

    console.log(validation)

    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <Sidebar />
                <div className="col py-3 min-vh-100">
                    {
                        data["krs"] == null && data["bukti_pembayaran"] == null ? (
                            <form method="post" encType='multipart/form-data' onSubmit={startFile}>
                                <div className="mb-3">
                                    <label htmlFor="krs" className="form-label">Foto KRS</label>
                                    <input className="form-control" type="file" id="krs" onChange={(e) => {
                                        setKrs(e.target.files[0])
                                        console.log(krs)
                                        }} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="bukti" className="form-label">Foto Bukti Pembayaran</label>
                                    <input className="form-control" type="file" id="bukti" onChange={(e) => setBukti(e.target.files[0])} />
                                </div>
                                <div className="mb-3">
                                    <button type="submit" className="btn btn-primary">Save changes</button>
                                </div>
                            </form>
                        ) : (
                            <div className="row">
                                <div className="col-md-6">
                                    <h3>Foto Kartu Rencana Studi</h3>
                                    <button className="btn btn-success" onClick={()=>{showFile()}}>Lihat</button>
                                </div>
                                <div className="col-md-6"></div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Verify
