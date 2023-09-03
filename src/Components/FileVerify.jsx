import React, {useState, useEffect} from 'react'
import DragDrop from './DragDrop'
import useProfile from '../Stores/useProfile'
import {useNavigate} from "react-router-dom"
import styles from "../Styles/styles.module.css"

function FileVerify() {
    const [krs, setKrs] = useState(null)
    const [bukti, setBukti] = useState(null)
    const navigate = useNavigate()
    const setData = useProfile(state => state.setData)
    const show = useProfile(state => state.show)
    const storeFile = useProfile(state => state.storeFile)

    const startFile = async (e) => {
        e.preventDefault()
        const dataFile = new FormData()
        dataFile.append("krs", krs)
        dataFile.append("bukti_pembayaran", bukti)
        setData(dataFile)
        storeFile()
        show()
        setTimeout(() => {
            navigate("/peserta")
        }, 1000);
    }
    return (
        <div className="row mt-5">
            <p className="fs-4 fw-bold">Upload berkas yang diperlukan disini</p>
            <form onSubmit={startFile}>
                <div className="row mb-4">
                    <DragDrop file={krs} setFile={setKrs} name="KRS" clas="" />
                    <DragDrop file={bukti} setFile={setBukti} name="Bukti Pembayaran" clas="offset-md-1" />
                </div>
                <div className="row">
                    <div className="col-3">
                        <button type="submit" className={`w-100 text-white btn ${styles.profileBtn}`}>Selesai</button>
                    </div>
                </div>
            </form> 
        </div>
    )
}

export default FileVerify
