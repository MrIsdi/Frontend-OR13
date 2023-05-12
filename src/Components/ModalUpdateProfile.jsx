import React, {useState, useEffect} from 'react'
import styles from "../Styles/styles.module.css"
import useProfile from '../Stores/useProfile'
import { useNavigate } from 'react-router-dom'

function ModalUpdateProfile() {
    const [nama, setNama] = useState("")
    const [nim, setNim] = useState("")
    const [divisi, setDivisi] = useState("")
    const [subdivisi, setSubDivisi] = useState("")
    const [fakultas, setFakultas] = useState("")
    const [jurusan, setJurusan] = useState("")
    const [tempat, setTempat] = useState("")
    const [tanggal, setTanggal] = useState("")
    const [kelamin, setKelamin] = useState("")
    const [alamat, setAlamat] = useState("")
    const [asal, setAsal] = useState("")
    const [hp, setHp] = useState("")
    const [agama, setAgama] = useState("")
    const [hobi, setHobi] = useState("")
    const [cita, setCita] = useState("")
    const [penyakit, setPenyakit] = useState("")
    const [laptop, setLaptop] = useState("")
    const [processor, setProcessor] = useState("")
    const [ram, setRam] = useState("")
    const [vga, setVga] = useState("")

    const setProfile = useProfile(state => state.setProfile)
    const updateProfile = useProfile(state => state.updateProfile)
    const validation = useProfile(state => state.validation)
    const profile = useProfile(state => state.profile)

    const navigate = useNavigate()

    const startProfile = async (e) => {
        e.preventDefault()

        const dataForm = new FormData()
            dataForm.append("nama_lengkap", nama)
            dataForm.append("nim", nim)
            dataForm.append("divisi", divisi)
            dataForm.append("sub_divisi", subdivisi)
            dataForm.append("fakultas", fakultas)
            dataForm.append("jurusan", jurusan)
            dataForm.append("tempat_lahir", tempat)
            dataForm.append("tanggal_lahir", tanggal)
            dataForm.append("jenis_kelamin", kelamin)
            dataForm.append("alamat", alamat)
            dataForm.append("asal", asal)
            dataForm.append("no_hp", hp)
            dataForm.append("agama", agama)
            dataForm.append("hobi", hobi)
            dataForm.append("cita_cita", cita)
            dataForm.append("riwayat_penyakit", penyakit)
            dataForm.append("laptop", laptop)
            dataForm.append("processor", processor)
            dataForm.append("RAM", ram)
            dataForm.append("VGA", vga)
        setProfile(dataForm)
        updateProfile()
    }
    
    const optionSubDivisi = {
        "MMD": ["UI/UX", "VE", "3D"],
        "Programming": ["Web Programming", "Mobile Programming", "Machine Learning"],
        "SKJ": ["Sistem Komputer", "Jaringan"]
    }
    useEffect(()=>{
        if(validation != {}){
            if(validation.status === 200){
                navigate(0)
            }else if(validation.status === 401){
                console.log(validation)
            }
        }
    }, [validation])
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className={`modal-dialog ${styles.modalDialog}`}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Form Update Profil</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form method="post" onSubmit={startProfile}>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="nama" className="form-label fw-bold">Nama Lengkap</label>
                                        <input type="text" className="form-control" id='nama' value={nama} onChange={(e)=>setNama(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="nim" className="form-label fw-bold">No. Induk Mahasiswa</label>
                                        <input type="text" className="form-control" id='nim' value={nim} onChange={(e)=>setNim(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="divisi" className="form-label fw-bold">Divisi</label>
                                        <select id="divisi" className='form-select' value={divisi} onChange={(e)=>setDivisi(e.target.value)}>
                                            <option></option>
                                            <option value="MMD">MMD</option>
                                            <option value="Programming">Programming</option>
                                            <option value="SKJ">SKJ</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="subdivisi" className="form-label fw-bold">Sub Divisi</label>
                                        <select id="subdivisi" className='form-select' value={subdivisi} onChange={(e)=>setSubDivisi(e.target.value)}>
                                            <option></option>
                                            {   divisi == "" ? "" :
                                                optionSubDivisi[`${divisi}`].map((data, i)=>(
                                                    <option value={data} key={i}>{data}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="fakultas" className="form-label fw-bold">Fakultas</label>
                                        <input type="text" className="form-control" id='fakultas' value={fakultas} onChange={(e)=>setFakultas(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="jurusan" className="form-label fw-bold">Jurusan</label>
                                        <input type="text" className="form-control" id='jurusan' value={jurusan} onChange={(e)=>setJurusan(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="tempat" className="form-label fw-bold">Tempat Lahir</label>
                                        <input type="text" className="form-control" id='tempat' value={tempat} onChange={(e)=>setTempat(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="tanggal" className="form-label fw-bold">Tanggal Lahir</label>
                                        <input type="date" className="form-control" id='tanggal' value={tanggal} onChange={(e)=>setTanggal(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Jenis Kelamin</label>
                                        <div onChange={(e)=>setKelamin(e.target.value)}>
                                            <input type="radio" className="form-check-control me-2" name={kelamin} value="Laki-laki"/>
                                            <label className="form-check-label me-3">Laki-laki</label>
                                            <input type="radio" className="form-check-control me-2" name={kelamin} value="Perempuan"/>
                                            <label className="form-check-label">Perempuan</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="alamat" className="form-label fw-bold">Alamat Padang</label>
                                        <input type="text" className="form-control" id='alamat' value={alamat} onChange={(e)=>setAlamat(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="asal" className="form-label fw-bold">Asal Daerah</label>
                                        <input type="text" className="form-control" id='asal' value={asal} onChange={(e)=>setAsal(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="hp" className="form-label fw-bold">No. HP</label>
                                        <input type="text" className="form-control" id='hp' value={hp} onChange={(e)=>setHp(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="agama" className="form-label fw-bold">Agama</label>
                                        <input type="text" className="form-control" id='agama' value={agama} onChange={(e)=>setAgama(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="hobi" className="form-label fw-bold">Hobi</label>
                                        <input type="text" className="form-control" id='hobi' value={hobi} onChange={(e)=>setHobi(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="cita" className="form-label fw-bold">Cita-cita</label>
                                        <input type="text" className="form-control" id='cita' value={cita} onChange={(e)=>setCita(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="penyakit" className="form-label fw-bold">Riwayat Penyakit</label>
                                        <input type="text" className="form-control" id='penyakit' value={penyakit} onChange={(e)=>setPenyakit(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="laptop" className="form-label fw-bold">Merk Laptop</label>
                                        <input type="text" className="form-control" id='laptop' value={laptop} onChange={(e)=>setLaptop(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="processor" className="form-label fw-bold">Processor</label>
                                        <input type="text" className="form-control" id='processor' value={processor} onChange={(e)=>setProcessor(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="ram" className="form-label fw-bold">RAM</label>
                                        <input type="text" className="form-control" id='ram' value={ram} onChange={(e)=>setRam(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="vga" className="form-label fw-bold">VGA</label>
                                        <input type="text" className="form-control" id='vga' value={vga} onChange={(e)=>setVga(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary">Save changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ModalUpdateProfile
