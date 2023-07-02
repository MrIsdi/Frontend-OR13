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
        showUserImage(memberDetail.foto);
        
        setFetchStatus(true)
    }, [fetchStatus, setFetchStatus])

    return (
        <div className='container-fluid'>
            <div className="row flex-nowrap">
                <Sidebar />
                <div className="col-8 m-4 min-vh-100">
                    <div className="fw-bold fs-3">{memberDetail.nama_lengkap}</div>
                    <div className="hstack gap-5 my-5">
                        <img src={userImageFile} width="200px" />
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
                                        value={isNaN(memberDetail.nama_lengkap) ? String(memberDetail.nama_lengkap) : memberDetail.nama_lengkap}
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
                                        value={isNaN(memberDetail.nim) ? String(memberDetail.nim) : memberDetail.nim}
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
                                        value={isNaN(memberDetail.jenis_kelamin) ? String(memberDetail.jenis_kelamin) : memberDetail.jenis_kelamin}
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
                                        value={isNaN(memberDetail.agama) ? String(memberDetail.agama) : memberDetail.agama}
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
                                        value={isNaN(memberDetail.tempat_lahir) ? String(memberDetail.tempat_lahir) : memberDetail.tempat_lahir}
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
                                        value={isNaN(memberDetail.tanggal_lahir) ? String(memberDetail.tanggal_lahir) : memberDetail.tanggal_lahir}
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
                                        value={isNaN(memberDetail.asal) ? String(memberDetail.asal) : memberDetail.asal}
                                        disabled
                                    />
                                </div>
                                <div className="mb-3 w-100">
                                    <label htmlFor="disabledTextInput" className="form-label fw-semibold">
                                        Alamat
                                    </label>
                                    <input
                                        type="text"
                                        id="disabledTextInput"
                                        className="form-control"
                                        placeholder="Disabled input"
                                        value={isNaN(memberDetail.alamat) ? String(memberDetail.alamat) : memberDetail.alamat}
                                        disabled
                                    />
                                </div>
                                <div className="mb-3 w-100">
                                    <label htmlFor="disabledTextInput" className="form-label fw-semibold">
                                        Hobi
                                    </label>
                                    <input
                                        type="text"
                                        id="disabledTextInput"
                                        className="form-control"
                                        placeholder="Disabled input"
                                        value={isNaN(memberDetail.hobi) ? String(memberDetail.hobi) : memberDetail.hobi}
                                        disabled
                                    />
                                </div>
                                <div className="mb-3 w-100">
                                    <label htmlFor="disabledTextInput" className="form-label fw-semibold">
                                        Cita-cita
                                    </label>
                                    <input
                                        type="text"
                                        id="disabledTextInput"
                                        className="form-control"
                                        placeholder="Disabled input"
                                        value={isNaN(memberDetail.cita_cita) ? String(memberDetail.cita_cita) : memberDetail.cita_cita}
                                        disabled
                                    />
                                </div>
                            </fieldset>
                        </form>
                        <form className='col'>
                            <fieldset disabled="">   
                                <div className="mb-3 w-100">
                                    <label htmlFor="disabledTextInput" className="form-label fw-semibold">
                                        Nomor HP
                                    </label>
                                    <input
                                        type="text"
                                        id="disabledTextInput"
                                        className="form-control"
                                        placeholder="Disabled input"
                                        value={isNaN(memberDetail.no_hp) ? String(memberDetail.no_hp) : memberDetail.no_hp}
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
                                        value={isNaN(memberDetail.jurusan) ? String(memberDetail.jurusan) : memberDetail.jurusan}
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
                                        value={isNaN(memberDetail.fakultas) ? String(memberDetail.fakultas) : memberDetail.fakultas}
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
                                        value={isNaN(memberDetail.divisi) ? String(memberDetail.divisi) : memberDetail.divisi}
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
                                        value={isNaN(memberDetail.sub_divisi) ? String(memberDetail.sub_divisi) : memberDetail.sub_divisi}
                                        disabled
                                    />
                                </div>
                                <div className="mb-3 w-100">
                                    <label htmlFor="disabledTextInput" className="form-label fw-semibold">
                                        Riwayat Penyakit
                                    </label>
                                    <input
                                        type="text"
                                        id="disabledTextInput"
                                        className="form-control"
                                        placeholder="Disabled input"
                                        value={isNaN(memberDetail.riwayat_penyakit) ? String(memberDetail.riwayat_penyakit) : memberDetail.riwayat_penyakit}
                                        disabled
                                    />
                                </div>
                                <div className="mb-3 w-100">
                                    <label htmlFor="disabledTextInput" className="form-label fw-semibold">
                                        Laptop
                                    </label>
                                    <input
                                        type="text"
                                        id="disabledTextInput"
                                        className="form-control"
                                        placeholder="Disabled input"
                                        value={isNaN(memberDetail.laptop) ? String(memberDetail.laptop) : memberDetail.laptop}
                                        disabled
                                    />
                                </div>
                                <div className="mb-3 w-100">
                                    <label htmlFor="disabledTextInput" className="form-label fw-semibold">
                                        RAM
                                    </label>
                                    <input
                                        type="text"
                                        id="disabledTextInput"
                                        className="form-control"
                                        placeholder="Disabled input"
                                        value={isNaN(memberDetail.RAM) ? String(memberDetail.RAM) : memberDetail.RAM}
                                        disabled
                                    />
                                </div>
                                <div className="mb-3 w-100">
                                    <label htmlFor="disabledTextInput" className="form-label fw-semibold">
                                        Processor
                                    </label>
                                    <input
                                        type="text"
                                        id="disabledTextInput"
                                        className="form-control"
                                        placeholder="Disabled input"
                                        value={isNaN(memberDetail.processor) ? String(memberDetail.processor) : memberDetail.processor}
                                        disabled
                                    />
                                </div>
                                <div className="mb-3 w-100">
                                    <label htmlFor="disabledTextInput" className="form-label fw-semibold">
                                        VGA
                                    </label>
                                    <input
                                        type="text"
                                        id="disabledTextInput"
                                        className="form-control"
                                        placeholder="Disabled input"
                                        value={isNaN(memberDetail.VGA) ? String(memberDetail.VGA) : memberDetail.VGA}
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