import React, { useEffect, useState } from 'react';
import "bootstrap-icons/font/bootstrap-icons.css"
import useAdmin from '../../Stores/useAdmin'
import { useParams } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar';
import axios from 'axios';
import Cookies from 'js-cookie';

const showUserDashboard = () => {

    let userId = useParams()

    const showUser = useAdmin(state => state.showUser)
    const showUserImage = useAdmin(state => state.showUserImage)
    const userImageFile = useAdmin(state => state.userImageFile)
    const memberDetail = useAdmin(state => state.memberDetail)
    const fetchStatus = useAdmin(state => state.fetchStatus)
    const setFetchStatus = useAdmin(state => state.setFetchStatus)

    useEffect(() => {
        showUser(userId)
        // showUserImage(memberDetail.foto);
        
        setFetchStatus(true)
    }, [fetchStatus, setFetchStatus])

    return (
        <div className='container-fluid'>
            <div className="row flex-nowrap">
                <Sidebar />
                <div className="col-8 m-4 min-vh-100">
                    <div className="fw-bold fs-3">{memberDetail.nama_lengkap !== undefined ? memberDetail.nama_lengkap : "loading..."}</div>
                    <div className="hstack gap-5 my-5">
                        <img src={memberDetail.foto != undefined ? memberDetail.foto : "https://th.bing.com/th/id/OIP.Ghae4OEdb4UmC3hkqpFvLAHaGd?pid=ImgDet&rs=1"} width="200px" />
                    </div>
                    <div className='row flex'>
                        <form className='col'>
                            <fieldset disabled="">
                                <div className="mb-3 w-100">
                                    <label htmlFor="disabledTextInput" className="form-label fw-semibold">
                                        Nama Lengkap
                                    </label>
                                    <input
                                        type="text"
                                        id="disabledTextInput"
                                        className="form-control"
                                        placeholder="Disabled input"
                                        value={memberDetail.nama_lengkap !== undefined ? String(memberDetail.nama_lengkap) : "loading..."}
                                        disabled
                                    />
                                </div>
                                <div className="mb-3 w-100">
                                    <label htmlFor="disabledTextInput" className="form-label fw-semibold">
                                        NIM
                                    </label>
                                    <input
                                        type="text"
                                        id="disabledTextInput"
                                        className="form-control"
                                        placeholder="Disabled input"
                                        value={memberDetail.nim !== undefined? String(memberDetail.nim) : "loading..."}
                                        disabled
                                    />
                                </div>
                                <div className="mb-3 w-100">
                                    <label htmlFor="disabledTextInput" className="form-label fw-semibold">
                                        Jenis Kelamin
                                    </label>
                                    <input
                                        type="text"
                                        id="disabledTextInput"
                                        className="form-control"
                                        placeholder="Disabled input"
                                        value={memberDetail.jenis_kelamin !== undefined ? String(memberDetail.jenis_kelamin) : "loading..."}
                                        disabled
                                    />
                                </div>
                                <div className="mb-3 w-100">
                                    <label htmlFor="disabledTextInput" className="form-label fw-semibold">
                                        Agama
                                    </label>
                                    <input
                                        type="text"
                                        id="disabledTextInput"
                                        className="form-control"
                                        placeholder="Disabled input"
                                        value={memberDetail.agama !== undefined ? String(memberDetail.agama) : "loading..."}
                                        disabled
                                    />
                                </div>
                                <div className="mb-3 w-100">
                                    <label htmlFor="disabledTextInput" className="form-label fw-semibold">
                                        Tempat Lahir
                                    </label>
                                    <input
                                        type="text"
                                        id="disabledTextInput"
                                        className="form-control"
                                        placeholder="Disabled input"
                                        value={memberDetail.tempat_lahir !== undefined ? String(memberDetail.tempat_lahir) : "loading..."}
                                        disabled
                                    />
                                </div>
                                <div className="mb-3 w-100">
                                    <label htmlFor="disabledTextInput" className="form-label fw-semibold">
                                        Tanggal Lahir
                                    </label>
                                    <input
                                        type="text"
                                        id="disabledTextInput"
                                        className="form-control"
                                        placeholder="Disabled input"
                                        value={memberDetail.tanggal_lahir !== undefined ? String(memberDetail.tanggal_lahir) : "loading..."}
                                        disabled
                                    />
                                </div>
                                <div className="mb-3 w-100">
                                    <label htmlFor="disabledTextInput" className="form-label fw-semibold">
                                        Tempat Asal
                                    </label>
                                    <input
                                        type="text"
                                        id="disabledTextInput"
                                        className="form-control"
                                        placeholder="Disabled input"
                                        value={memberDetail.asal !== undefined ? String(memberDetail.asal) : "loading..."}
                                        disabled
                                    />
                                </div>
                            </fieldset>
                        </form>
                        <form className='col'>
                            <fieldset disabled="">  
                                <div className="mb-3 w-100">
                                    <label htmlFor="disabledTextInput" className="form-label fw-semibold">
                                        Alamat
                                    </label>
                                    <input
                                        type="text"
                                        id="disabledTextInput"
                                        className="form-control"
                                        placeholder="Disabled input"
                                        value={memberDetail.alamat !== undefined ? String(memberDetail.alamat) : "loading..."}
                                        disabled
                                    />
                                </div> 
                                <div className="mb-3 w-100">
                                    <label htmlFor="disabledTextInput" className="form-label fw-semibold">
                                        Nomor HP
                                    </label>
                                    <input
                                        type="text"
                                        id="disabledTextInput"
                                        className="form-control"
                                        placeholder="Disabled input"
                                        value={memberDetail.no_hp !== undefined ? String(memberDetail.no_hp) : "loading..."}
                                        disabled
                                    />
                                </div>
                                <div className="mb-3 w-100">
                                    <label htmlFor="disabledTextInput" className="form-label fw-semibold">
                                        Jurusan
                                    </label>
                                    <input
                                        type="text"
                                        id="disabledTextInput"
                                        className="form-control"
                                        placeholder="Disabled input"
                                        value={memberDetail.jurusan !== undefined ? String(memberDetail.jurusan) : "loading..."}
                                        disabled
                                    />
                                </div>
                                <div className="mb-3 w-100">
                                    <label htmlFor="disabledTextInput" className="form-label fw-semibold">
                                        Fakultas
                                    </label>
                                    <input
                                        type="text"
                                        id="disabledTextInput"
                                        className="form-control"
                                        placeholder="Disabled input"
                                        value={memberDetail.fakultas !== undefined ? String(memberDetail.fakultas) : "loading..."}
                                        disabled
                                    />
                                </div>
                                <div className="mb-3 w-100">
                                    <label htmlFor="disabledTextInput" className="form-label fw-semibold">
                                        Divisi
                                    </label>
                                    <input
                                        type="text"
                                        id="disabledTextInput"
                                        className="form-control"
                                        placeholder="Disabled input"
                                        value={memberDetail.divisi !== undefined ? String(memberDetail.divisi) : "loading..."}
                                        disabled
                                    />
                                </div>
                                <div className="mb-3 w-100">
                                    <label htmlFor="disabledTextInput" className="form-label fw-semibold">
                                        Sub Divisi
                                    </label>
                                    <input
                                        type="text"
                                        id="disabledTextInput"
                                        className="form-control"
                                        placeholder="Disabled input"
                                        value={memberDetail.sub_divisi !== undefined ? String(memberDetail.sub_divisi) : "loading..."}
                                        disabled
                                    />
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default showUserDashboard;