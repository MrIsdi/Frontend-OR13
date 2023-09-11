import React from 'react'
import Sidebar from '../../Components/Sidebar'
import styles from "../../Styles/styles.module.css"
import prog from "../../assets/prog.png"
import mmd from "../../assets/mmd.png"
import skj from "../../assets/skj.png"
import logoor from "../../assets/logoor.png"
import Cookies from 'js-cookie'
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import {useNavigate} from "react-router-dom"

function Exam() {
    const dataProfile = JSON.parse(Cookies.get("profile"))
    const navigate = useNavigate()

    const data = [
        { name: "Divisi Programming", logo: prog, link: `http://localhost:8000/ujian/aturan/1/${dataProfile["user_id"]}`, value: "Programming" },
        { name: "Divisi Multimedia & Desain", logo: mmd, link: `http://localhost:8000/ujian/aturan/2/${dataProfile["user_id"]}`, value: "MMD" },
        { name: "Divisi Sistem Komputer & Jaringan", logo: skj, link: `http://localhost:8000/ujian/aturan/3/${dataProfile["user_id"]}`, value: "SKJ" },
        { name: "Organisasi", logo: logoor, link: `http://localhost:8000/ujian/aturan/4/${dataProfile["user_id"]}`, value: "Organisasi" },
    ]

    if(Object.values(dataProfile).length == 0){
        Swal.fire({
            title: 'Kamu belum mengisi profil',
            text: 'Silahkan isi terlebih dahulu profile kamu',
            icon: 'warning',
            showConfirmButton: false,
            timer: 3000
        });
        setTimeout(()=>{
            navigate("/peserta/profile")
        }, 3000)
    }

    return (
        <div className="container-fluid">
            <div className={`row flex-nowrap `}>
                <Sidebar />
                <div className={`col px-md-5 py-3 min-vh-100 ${styles.content}`}>
                    <div className="row my-md-3  align-items-center">
                        <div className="col-6">
                            <p className="fs-4 fw-bold mb-md-0">Ujian Online</p>
                        </div>
                    </div>                  
                    <div className="row mt-5">
                        <div className="col-12 mb-5">
                            <p>Silahkan pilih ujian online yang diikuti!</p>
                        </div>
                        {
                            data.map((a, i)=>(
                                a["value"] == dataProfile["divisi"] ? 
                                    <a href={a.link} 
                                        className="a-ujian col-md-3 me-md-3 mb-md-0 mb-3 d-flex flex-column justify-content-center align-items-center" 
                                        key={i} 
                                        style={{
                                            width: "250px",
                                            aspectRatio: "1/1"
                                        }}>
                                        <img src={a.logo} alt="" className='fluid' />
                                        <p className="fs-6 text-center">{a.name}</p>
                                    </a>
                                :
                                (
                                    a["value"] == "Organisasi"? 
                                        <a href={a.link} 
                                            className="a-ujian col-md-3 me-md-3 mb-md-0 mb-3 d-flex flex-column justify-content-center align-items-center" 
                                            key={i} 
                                            style={{
                                                width: "250px",
                                                aspectRatio: "1/1"
                                            }}>
                                            <img src={a.logo} alt="" className='fluid' />
                                            <p className="fs-6 text-center">{a.name}</p>
                                        </a>
                                    :
                                    ""
                                )
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Exam
