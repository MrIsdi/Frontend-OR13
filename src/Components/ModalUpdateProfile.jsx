import React, {useState, useEffect} from 'react'
import styles from "../Styles/styles.module.css"
import useProfile from '../Stores/useProfile'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

function ModalUpdateProfile() {
    const data = JSON.parse(Cookies.get("profile"))
    const [nama, setNama] = useState(data["nama_lengkap"])
    const [nim, setNim] = useState(data["nim"])
    const [divisi, setDivisi] = useState(data["divisi"])
    const [subdivisi, setSubDivisi] = useState(data["sub_divisi"])
    const [fakultas, setFakultas] = useState(data["fakultas"])
    const [jurusan, setJurusan] = useState(data["jurusan"])
    const [tempat, setTempat] = useState(data["tempat_lahir"])
    const [tanggal, setTanggal] = useState(data["tanggal_lahir"])
    const [kelamin, setKelamin] = useState(data["jenis_kelamin"])
    const [alamat, setAlamat] = useState(data["alamat"])
    const [asal, setAsal] = useState(data["asal"])
    const [hp, setHp] = useState(data["no_hp"])
    const [agama, setAgama] = useState(data["agama"])
    const [foto, setFoto] = useState("")

    const setProfile = useProfile(state => state.setProfile)
    const updateProfile = useProfile(state => state.updateProfile)
    const validation = useProfile(state => state.validation)
    const profile = useProfile(state => state.profile)
    const show = useProfile(state => state.show)

    const navigate = useNavigate()

    let idFoto 
    useEffect(()=>{
        optionSubDivisi
        idFoto = document.getElementById("Foto")
        if(validation != {}){
            if(validation.status === 200){
                show()
                setTimeout(()=>{
                    navigate("/peserta")
                },1000)
            }else if(validation.status === 401){
                console.log(validation)
            }
        }
    }, [validation, idFoto])

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
            dataForm.append("foto", foto)
        setProfile(dataForm)
        updateProfile()
    }
    
    const optionSubDivisi = {
        "MMD": ["UI/UX", "VE", "3D"],
        "Programming": ["Web Programming", "Mobile Programming", "Machine Learning"],
        "SKJ": ["Sistem Komputer", "Jaringan"]
    }
    const optionJurusan = {
        "Pertanian": ["Agribisnis", "Agroteknologi", "Proteksi Tanaman", "Penyuluhan Pertanian", "Ilmu Tanah"],
        "Kedokteran": ["Kedokteran", "Kebidanan", "Psikologi", "Ilmu Biomedis"],
        "Hukum": ["Hukum"],
        "MIPA": ["Matematika dan Sains Data", "Biologi", "Kimia", "Fisika"],
        "Ekonomi dan Bisnis": ["Pemasaran", "Keuangan", "Akutansi", "Kesekretariatan", "Ekonomi", "Manajemen", "Akutansi", "Ekonomi Islam"],
        "Peternakan": ["Peternakan"],
        "Ilmu Budaya": ["Sastra Indonesia", "Sastra Inggris", "Sastra Jepang", "Sastra Minangkabau", "Sejarah"],
        "ISIP": ["Sosiologi", "Antropologi", "Ilmu Politik", "Hubungan Internasional", "Ilmu Komunikasi", "Administrasi Publik"],
        "Teknik": ["Teknik Mesin", "Teknik Elektro", "Teknik Industri", "Teknik Sipil", "Teknik Lingkungan", "Arsitektur"],
        "Farmasi": ["Farmasi"],
        "Teknologi Pertanian": ["Teknik Pertanian dan Biosistem", "Teknologi Hasil Pertanian", "Teknologi Industri Pertanian"],
        "Keperawatan": ["Keperawatan"],
        "Kesehatan Masyarakat": ["Kesehatan Masyarakat", "Gizi"],
        "Teknologi Informasi": ["Teknik Komputer", "Sistem Informasi", "Informatika"],
        "Kedokteran Gigi": ["Kedokteran Gigi"]
    }
    

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
                        <select id="fakultas" className='form-select' value={fakultas} onChange={(e)=>setFakultas(e.target.value)}>
                            <option></option>
                            <option value="Pertanian">Pertanian</option>
                            <option value="Kedokteran">Kedokteran</option>
                            <option value="Hukum">Hukum</option>
                            <option value="MIPA">MIPA</option>
                            <option value="Ekonomi dan Bisnis">Ekonomi dan Bisnis</option>
                            <option value="Peternakan">Peternakan</option>
                            <option value="Ilmu Budaya">Ilmu Budaya</option>
                            <option value="ISIP">ISIP</option>
                            <option value="Teknik">Teknik</option>
                            <option value="Farmasi">Farmasi</option>
                            <option value="Teknologi Pertanian">Teknologi Pertanian</option>
                            <option value="Keperawatan">Keperawatan</option>
                            <option value="Kesehatan Masyarakat">Kesehatan Masyarakat</option>
                            <option value="Teknologi Informasi">Teknologi Informasi</option>
                            <option value="Kedokteran Gigi">Kedokteran Gigi</option>
                        </select>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="mb-3">
                        <label htmlFor="jurusan" className="form-label fw-bold">Jurusan</label>
                        <select id="jurusan" className='form-select' value={jurusan} onChange={(e)=>setJurusan(e.target.value)}>
                            <option></option>
                            {   fakultas == "" ? "" :
                                optionJurusan[`${fakultas}`].map((data, i)=>(
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
            <div className="row d-none">
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

export default ModalUpdateProfile
