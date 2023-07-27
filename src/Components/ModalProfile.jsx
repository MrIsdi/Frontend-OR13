import React, {useState, useEffect} from 'react'
import styles from "../Styles/styles.module.css"
import useProfile from '../Stores/useProfile'
import { useNavigate, useHref } from 'react-router-dom'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css';

function ModalProfile() {
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
    const [foto, setFoto] = useState("")

    const setProfile = useProfile(state => state.setProfile)
    const storeProfile = useProfile(state => state.storeProfile)
    const validation = useProfile(state => state.validation)
    const profile = useProfile(state => state.profile)
    const show = useProfile(state => state.show)

    const navigate = useNavigate()

    useEffect(()=>{
        if(validation != {}){
            if(validation.status === 200){
                show()
                navigate(0)
            }else if(validation.status === 401){
                console.log(validation)
            }
        }
    }, [validation, foto])

    const startProfile = async (e) => {
        e.preventDefault()
        const dataFile = new FormData()
        dataFile.append("nama_lengkap", nama)
        dataFile.append("nim", nim)
        dataFile.append("divisi", divisi)
        dataFile.append("sub_divisi", subdivisi)
        dataFile.append("fakultas", fakultas)
        dataFile.append("jurusan", jurusan)
        dataFile.append("tempat_lahir", tempat)
        dataFile.append("tanggal_lahir", tanggal)
        dataFile.append("jenis_kelamin", kelamin)
        dataFile.append("alamat", alamat)
        dataFile.append("asal", asal)
        dataFile.append("no_hp", hp)
        dataFile.append("agama", agama)
        dataFile.append("foto", foto)

        setProfile(dataFile)
        storeProfile()
    }
    
    const optionSubDivisi = {
        "MMD": ["UI/UX", "VE", "3D"],
        "Programming": ["Web Programming", "Mobile Programming", "Machine Learning"],
        "SKJ": ["Sistem Komputer", "Jaringan"]
    }

    const idFoto = document.getElementById("Foto")
    
    return (
        <form method="post" onSubmit={startProfile} encType='multipart/form-data'>
            <div className="mb-3">
                {
                    foto === ""? <i className="fw-bold bi bi-person-circle foto" style={{ fontSize: "100px" }} onClick={()=>{
                        idFoto.click()
                    }}></i> : 
                    <img src={URL.createObjectURL(foto)} alt="" style={{ width: "100px", aspectRatio: "1/1", objectFit: "cover", objectPosition: "top" }} />
                }
                <input className="form-control d-none" type="file" id="Foto" onChange={(e) => {
                    setFoto(e.target.files[0])
                    }} />
            </div>
            <div className="row">
                <div className="col-md-3">
                    <div className="mb-3">
                        <label htmlFor="nama" className="form-label fw-bold">Nama Lengkap</label>
                        <input type="text" className="form-control" id='nama' value={nama} onChange={(e)=>setNama(e.target.value)}/>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="mb-3">
                        <label htmlFor="nim" className="form-label fw-bold">No. Induk Mahasiswa</label>
                        <input type="text" className="form-control" id='nim' value={nim} onChange={(e)=>setNim(e.target.value)}/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
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
                <div className="col-md-3">
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
                <div className="col-md-3">
                    <div className="mb-3">
                        <label htmlFor="fakultas" className="form-label fw-bold">Fakultas</label>
                        <input type="text" className="form-control" id='fakultas' value={fakultas} onChange={(e)=>setFakultas(e.target.value)}/>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="mb-3">
                        <label htmlFor="jurusan" className="form-label fw-bold">Jurusan</label>
                        <input type="text" className="form-control" id='jurusan' value={jurusan} onChange={(e)=>setJurusan(e.target.value)}/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <div className="mb-3">
                        <label htmlFor="tempat" className="form-label fw-bold">Tempat Lahir</label>
                        <input type="text" className="form-control" id='tempat' value={tempat} onChange={(e)=>setTempat(e.target.value)}/>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="mb-3">
                        <label htmlFor="tanggal" className="form-label fw-bold">Tanggal Lahir</label>
                        <input type="date" className="form-control" id='tanggal' value={tanggal} onChange={(e)=>setTanggal(e.target.value)}/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
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
                <div className="col-md-3">
                    <div className="mb-3">
                        <label htmlFor="alamat" className="form-label fw-bold">Alamat Padang</label>
                        <input type="text" className="form-control" id='alamat' value={alamat} onChange={(e)=>setAlamat(e.target.value)}/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <div className="mb-3">
                        <label htmlFor="asal" className="form-label fw-bold">Asal Daerah</label>
                        <input type="text" className="form-control" id='asal' value={asal} onChange={(e)=>setAsal(e.target.value)}/>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="mb-3">
                        <label htmlFor="hp" className="form-label fw-bold">No. HP</label>
                        <input type="text" className="form-control" id='hp' value={hp} onChange={(e)=>setHp(e.target.value)}/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <div className="mb-5">
                        <label htmlFor="agama" className="form-label fw-bold">Agama</label>
                        <input type="text" className="form-control" id='agama' value={agama} onChange={(e)=>setAgama(e.target.value)}/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <button type="submit" className={`w-100 text-white btn ${styles.profileBtn}`}>Selesai</button>
                </div>
            </div>
        </form>
    )
}

export default ModalProfile
