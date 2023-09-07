import React from 'react'
import Sidebar from '../../Components/Sidebar'
import styles from "../../Styles/styles.module.css"
import prog from "../../assets/prog.png"
import mmd from "../../assets/mmd.png"
import skj from "../../assets/skj.png"
import logoor from "../../assets/logoor.png"

function Exam() {
    const data = [
        { name: "Divisi Programming", logo: prog, link: "#" },
        { name: "Divisi Multimedia & Desain", logo: mmd, link: "#" },
        { name: "Divisi Sistem Komputer & Jaringan", logo: skj, link: "#" },
        { name: "Organisasi", logo: logoor, link: "#" },
    ]
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
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Exam
