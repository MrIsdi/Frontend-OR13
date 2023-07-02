import React, {useEffect, useState} from 'react'
import styles from "../../Styles/styles.module.css"
import Sidebar from '../../Components/Sidebar'
import useAdmin from '../../Stores/useAdmin'
import { Link } from 'react-router-dom'
import "bootstrap-icons/font/bootstrap-icons.css"

function AdminDashboard() {
    const data = useAdmin(state => state.data)
    const loading = useAdmin(state => state.loading)    
    const fetchStatus = useAdmin(state => state.fetchStatus)
    const setFetchStatus = useAdmin(state => state.setFetchStatus)
    const showAllMember = useAdmin(state => state.showAllMember)   
    const handleValidationStatus = useAdmin(state => state.handleValidationStatus)
    const handleMemberStatus = useAdmin(state => state.handleMemberStatus)
    const handleKrsFile = useAdmin(state => state.handleKrsFile)
    const handleInvoiceFile = useAdmin(state => state.handleInvoiceFile)
    const backgroundColorButton = useAdmin(state => state.backgroundColorButton)
    // const colorButton = useAdmin(state => state.colorButton)
    // const colorButtonFunction = useAdmin(state => state.colorButtonFunction)

    useEffect(() => {
        showAllMember()
        setFetchStatus(false)
        // colorButtonFunction(true)
    }, [fetchStatus, setFetchStatus])

    const memberCount = data ? data.length : 0

    const activeMemberLength = () => {
        if (data !== null) {
            let activeMembers = data.filter(activeMember => activeMember.status_aktif === 1)
            return activeMembers.length
        }
    }

    const verifiedMemberLength = () => {
        if (data !== null) {
            let verifiedMembers = data.filter(verifiedMember => verifiedMember.validation_status === 1)
            return verifiedMembers.length
        }
    }

    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <Sidebar />
                <div className="col m-4 min-vh-100">
                    <p className='fw-semibold fs-3'>Data Peserta</p>
                    <div className="row flex my-5">
                        <div className="card col mx-3 rounded-4 text-white border border-0" style={{ backgroundColor: "#301D54"}}>
                            <div className="card-body">
                                <div className="hstack gap-3">
                                    <i className="bi bi-person-fill nav-link-icon icon d-flex justify-content-center align-items-center my-3" style={{ fontSize: "40px", backgroundColor: "#301D54"}}></i>
                                    <div>
                                        <div className='fw-bold fs-5'>{memberCount}</div>
                                        <div className='colorKet'>Total peserta</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card col mx-3 rounded-4 border border-0" style={{ backgroundColor: "#E5D6F6", color: "#301D54"
}}>
                            <div className="card-body">
                                <div className="hstack gap-3">
                                    <i className="bi bi-check-circle-fill icon d-flex justify-content-center align-items-center my-3" style={{ fontSize: "40px"}}></i>
                                    <div>
                                        <div className='fw-bold fs-5'>{verifiedMemberLength()}</div>
                                        <div className='colorKet'>Sudah diverifikasi</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card col mx-3 rounded-4 border border-0" style={{ backgroundColor: "#FBE4EC", color:"#B966A3" }}>
                            <div className="card-body">
                                <div className="hstack gap-3">
                                    <i className="bi bi-x-circle-fill icon d-flex justify-content-center align-items-center my-3" style={{ fontSize: "40px" }}></i>
                                    <div>
                                        <div className='fw-bold fs-5'>
                                            {isNaN(memberCount - verifiedMemberLength()) ? String(memberCount - verifiedMemberLength()) : memberCount - verifiedMemberLength()}
                                        </div>
                                        <div className='colorKet'>Belum diverifikasi</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card col mx-3 rounded-4 border border-0" style={{ backgroundColor: "#FBFBFB", color : "#301D54" }}>
                            <div className="card-body">
                                <div className="hstack gap-3">
                                    <i className="bi bi-person-check-fill nav-link-icon icon d-flex justify-content-center align-items-center my-3" style={{ fontSize: "40px" }}></i>
                                    <div>
                                        <div className='fw-bold fs-5'>{activeMemberLength()}</div>
                                        <div className='colorKet'>Peserta aktif</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <table className='table table-striped table-bordered table-hover table-responsive'>
                        <thead style={{ color: "#301D54" }}>
                            <tr>
                                <th className='text-center'>View</th>
                                <th className='text-center'>No</th>
                                <th>Nama</th>
                                <th>NIM</th>
                                <th>Divisi</th>
                                <th>Subdivisi</th>
                                <th className='text-center'>Verifikasi</th>
                                <th className='text-center'>Status Peserta</th>
                                <th className='text-center'>Bukti KRS</th>
                                <th className='text-center'>Bukti Pembayaran</th>
                            </tr>
                        </thead>
                        <tbody>
                            { loading && <tr><td>Loading...</td></tr> }
                            {
                                data !== null && data.length !== 0 && data.map((res, index) => {
                                    return (
                                        <tr key={res.id}>
                                            <td className='text-center'>
                                                <Link to={`/admin/peserta/${res.id}/detail`}>
                                                    {/* <button type="button">
                                                        Show
                                                    </button> */}
                                                    <i className="bi bi-eye-fill" style={{ color: "#301D54", fontSize: "20px" }}></i>
                                                </Link>
                                            </td>
                                            <td className='text-center'>{index+1}</td>
                                            <td>{res.nama_lengkap}</td>
                                            <td>{res.nim}</td>
                                            <td>{res.divisi}</td>
                                            <td>{res.sub_divisi}</td>
                                            <td>
                                                <button type="button" className='btn btn-primary' onClick={handleValidationStatus} value={res.id}>
                                                    {
                                                        // res.validation_status ? <i className="bi bi-check-circle-fill" style={{ color: "#301D54", fontSize: "20px" }}></i> : <i className="bi bi-x-circle-fill" style={{ color: "#301D54", fontSize: "20px" }}></i>
                                                        res.validation_status ? "Aktif" : "Tidak Aktif"
                                                    }
                                                </button>
                                            </td>
                                            <td>
                                                <button type='button' className="btn btn-primary" onClick={handleMemberStatus} value={res.id}>
                                                    {
                                                        res.status_aktif ? "Aktif" : "Tidak Aktif"
                                                    }
                                                </button>
                                            </td>
                                            <td>
                                                <div className="d-flex justify-content-center">
                                                    <button type="button" className="btn btn-primary" onClick={handleKrsFile} value={res.id} variant="outline-dark">
                                                        {
                                                            res.krs ? "Lihat" : "Belum Ada"
                                                        }
                                                    </button>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex justify-content-center">
                                                    <button type='button' className="btn btn-primary" onClick={handleInvoiceFile} value={res.id} variant="outline-dark">
                                                        {
                                                            res.bukti_pembayaran ? "Lihat" : "Belum Ada"
                                                        }
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard
