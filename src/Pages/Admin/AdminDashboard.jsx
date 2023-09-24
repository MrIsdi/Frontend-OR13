import React, {useEffect, useState} from 'react'
import styles from "../../Styles/styles.module.css"
import Sidebar from '../../Components/Sidebar'
import useAdmin from '../../Stores/useAdmin'
import { Link } from 'react-router-dom'
import "bootstrap-icons/font/bootstrap-icons.css"

function AdminDashboard() {
    const data = useAdmin(state => state.data)
    const setData = useAdmin(state => state.setData)
    const currentPage = useAdmin(state => state.currentPage)
    const setCurrentPage = useAdmin(state => state.setCurrentPage)
    const loading = useAdmin(state => state.loading)    
    const setLoading = useAdmin(state => state.setLoading)    
    const fetchStatus = useAdmin(state => state.fetchStatus)
    const setFetchStatus = useAdmin(state => state.setFetchStatus)
    const showAllMember = useAdmin(state => state.showAllMember)   
    const handleValidationStatus = useAdmin(state => state.handleValidationStatus)
    const handleMemberStatus = useAdmin(state => state.handleMemberStatus)
    const handleKrsFile = useAdmin(state => state.handleKrsFile)
    const handleInvoiceFile = useAdmin(state => state.handleInvoiceFile)
    const handleMemberZona = useAdmin(state => state.handleMemberZona)
    const search = useAdmin(state => state.search)
    const message = useAdmin(state => state.message)
    const handleSearch = useAdmin(state => state.handleSearch)
    const handleSearchChange = useAdmin(state => state.handleSearchChange)
    const backgroundColorButton = useAdmin(state => state.backgroundColorButton)
    // const colorButton = useAdmin(state => state.colorButton)
    // const colorButtonFunction = useAdmin(state => state.colorButtonFunction)

    // const itemsPerPage = 3

    // const startIndex = (currentPage - 1) * itemsPerPage;
    // const endIndex = startIndex + itemsPerPage;
    // const paginatedData = data.slice(startIndex, endIndex);

    useEffect(() => {
        showAllMember()
        setFetchStatus(false)
        // colorButtonFunction(true)
    }, [fetchStatus, setFetchStatus, currentPage])

    const memberCount = data ? data.length : 0

    const activeMemberLength = () => {
        if (data !== null) {
            let activeMembers = data.filter(activeMember => activeMember.status_aktif == 1)
            return activeMembers.length
        }
    }

    const verifiedMemberLength = () => {
        if (data !== null) {
            let verifiedMembers = data.filter(verifiedMember => verifiedMember.validation_status == 1)
            
            return verifiedMembers.length
        }
    }

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const checkImageInvoice = (params) => {
        let invoiceURL =  params.substring(params.lastIndexOf('/') + 1)
        let check
        // console.log(invoiceURL)
        if (invoiceURL === 'pembayaran') {
            return 'Belum Ada'
        } else {
            return 'Lihat'
        }
    }

    const checkImageKRS = (params) => {
        let krsURL = params.substring(params.lastIndexOf('/') + 1)
        if (krsURL === 'krs') {
            return 'Belum Ada'
        } else {
            return 'Lihat'
        }
    }

    const [zona, setZona] = useState("")

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
                        <div className="card col mx-3 rounded-4 border border-0" style={{ backgroundColor: "#000000", color : "#ffffff" }}>
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
                        {/* <div className="card col mx-3 rounded-4 border border-0" style={{ backgroundColor: "#FBFBFB", color : "#301D54" }}>
                            <div className="card-body">
                                <div className="hstack gap-3">
                                    <i className="bi bi-person-check-fill nav-link-icon icon d-flex justify-content-center align-items-center my-3" style={{ fontSize: "40px" }}></i>
                                    <div>
                                        <div className='fw-bold fs-5'>{memberCount-activeMemberLength()}</div>
                                        <div className='colorKet'>Peserta tidak aktif</div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <form onSubmit={handleSearch}>
                    <div className="mb-3 w-50">
                        <input
                            type="input"
                            className="form-control "
                            id="exampleFormControlInput1"
                            placeholder="Search..."
                            value={search}
                            onChange={handleSearchChange}
                        />
                    </div>
                    </form>
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
                                <th className='text-center'>Zona</th>
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
                                                    <i className="bi bi-eye-fill" style={{ color: "#301D54", fontSize: "20px" }}></i>
                                                </Link>
                                            </td>
                                            <td className='text-center'>{index+1}</td>
                                            <td>{res.nama_lengkap}</td>
                                            <td>{res.nim}</td>
                                            <td>{res.divisi}</td>
                                            <td>{res.sub_divisi}</td>
                                            <td>
                                                <div className="form-check d-flex justify-content-center align-items-center">
                                                    <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="validationStatus"
                                                    checked={res.validation_status == 1 ? true : false}
                                                    value={res.id}
                                                    onChange={handleValidationStatus}
                                                    style={{ width: "20px", height: "20px" }}
                                                    />
                                                </div>

                                                {/* <button type="button" className='btn btn-primary' onClick={handleValidationStatus} value={res.id}>
                                                    {
                                                        res.validation_status == 1 ? "Aktif" : "Tidak Aktif"
                                                    }
                                                </button> */}
                                            </td>
                                            <td>
                                                <div className="form-check d-flex justify-content-center align-items-center">
                                                    <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="flexCheckDefaultUserStatus"
                                                    checked={res.status_aktif == 1 ? true : false}
                                                    value={res.id}
                                                    onChange={handleMemberStatus}
                                                    style={{ width: "20px", height: "20px" }}
                                                    />
                                                </div>
                                                {/* <button type='button' className="btn btn-primary" onClick={handleMemberStatus} value={res.id}>
                                                    {
                                                        res.status_aktif == 1 ? "Aktif" : "Tidak Aktif"
                                                    }
                                                </button> */}
                                            </td>
                                            <td>
                                                <div className="d-flex justify-content-center position-relative">
                                                    <button 
                                                        className={`btn border w-100 
                                                            ${res.zona == "Hitam"? "bg-dark" : 
                                                            (res.zona == "Merah"? "bg-danger" : 
                                                            (res.zona == "Kuning"? "bg-warning" : 
                                                            (res.zona == "Hijau"? "bg-success" : "")))}`} 
                                                        style={{ aspectRatio: "1/1", cursor: "pointer" }}
                                                        onClick={()=>{
                                                            const div = document.getElementById(`${res.id}`)
                                                            div.classList.remove("d-none")
                                                        }}></button>
                                                    <div 
                                                        className="position-absolute d-none" id={res.id}
                                                        onChange={handleMemberZona}
                                                        style={{
                                                            top: "100%",
                                                            width: "300px",
                                                            background: "#fff",
                                                            padding: "1rem",
                                                            display: "flex",
                                                            justifyContent: "space-evenly",
                                                            borderRadius: "1rem",
                                                            zIndex: 1,
                                                        }}>
                                                        <label htmlFor="">
                                                            <input type="radio" name="zona" onClick={()=>{
                                                                const div = document.getElementById(`${res.id}`)
                                                                div.classList.add("d-none")
                                                            }} id="" value={`${res.id},Hitam`} />
                                                            <span>Hitam</span>
                                                        </label>
                                                        <label htmlFor="">
                                                            <input type="radio" name="zona" onClick={()=>{
                                                                const div = document.getElementById(`${res.id}`)
                                                                div.classList.add("d-none")
                                                            }} id="" value={`${res.id},Merah`} />
                                                            <span>Merah</span>
                                                        </label>
                                                        <label htmlFor="">
                                                            <input type="radio" name="zona" onClick={()=>{
                                                                const div = document.getElementById(`${res.id}`)
                                                                div.classList.add("d-none")
                                                            }} id="" value={`${res.id},Kuning`} />
                                                            <span>Kuning</span>
                                                        </label>
                                                        <label htmlFor="">
                                                            <input type="radio" name="zona" onClick={()=>{
                                                                const div = document.getElementById(`${res.id}`)
                                                                div.classList.add("d-none")
                                                            }} id="" value={`${res.id},Hijau`} />
                                                            <span>Hijau</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex justify-content-center">
                                                    <button type="button"
                                                    className="btn btn-primary"
                                                    onClick={handleKrsFile}
                                                    value={res.id}
                                                    variant="outline-dark"
                                                    disabled={checkImageKRS(res.krs) === "Belum Ada" ? true : false}
                                                    style={{ 
                                                        width: "110px",
                                                        backgroundColor: checkImageKRS(res.krs) === "Belum Ada" ? "#E5D6F6" : "#301D54",
                                                        color: checkImageKRS(res.krs) === "Belum Ada" ? "#301D54" : "#ffffff"
                                                     }}>
                                                        {
                                                            checkImageKRS(res.krs)
                                                        }
                                                    </button>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex justify-content-center">
                                                    <button type='button'
                                                    className="btn btn-primary"
                                                    onClick={handleInvoiceFile}
                                                    value={res.id}
                                                    variant="outline-dark"
                                                    disabled={checkImageInvoice(res.bukti_pembayaran) === "Belum Ada" ? true : false}
                                                    style={{ 
                                                        width: "110px",
                                                        backgroundColor: checkImageInvoice(res.bukti_pembayaran) === "Belum Ada" ? "#E5D6F6" : "#301D54",
                                                        color: checkImageInvoice(res.bukti_pembayaran) === "Belum Ada" ? "#301D54" : "#ffffff"
                                                     }}>
                                                        {
                                                            checkImageInvoice(res.bukti_pembayaran)
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
                    {/* <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">«</span>
                            </a>
                            </li>
                            <li className="page-item">
                            <a className="page-link" href="#">
                                1
                            </a>
                            </li>
                            <li className="page-item">
                            <a className="page-link" href="#">
                                2
                            </a>
                            </li>
                            <li className="page-item">
                            <a className="page-link" href="#">
                                3
                            </a>
                            </li>
                            <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">»</span>
                            </a>
                            </li>
                        </ul>
                    </nav> */}
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard
