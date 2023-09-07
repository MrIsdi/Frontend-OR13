import { useEffect } from "react";
import styles from "../styles/styles.module.css"
import logo from "../assets/logo.png"
import AOS from "aos";
import "aos/dist/aos.css";
function About() {
    useEffect(()=>{
        AOS.init();
    },[])
    return (
        <main className={`container-fluid ${styles.about}`} id="about">
            <div className="container">
                <div className="row vh-100 align-items-center">
                    <div className="col-md-6" data-aos="fade-down-right">
                        <img src={logo} alt="" className="fluid" style={{ width: "inherit" }}/>
                    </div>
                    <div className="col-md-6" data-aos="fade-down-left">
                        <p className="fs-2 fw-bold">Apa itu OR Neotelemetri?</p>
                        <p className="fs-6" style={{ textAlign: "justify" }}>
                            Open Recruitment atau OR Adalah Proses Penerimaan calon anggota baru UKM Neo Telemetri. OR dilakukan setiap satu kali kepengurusan UKM dengan tujuan Mendapatkan anggota baru yang sesuai dengan standar kompetensi dan kebutuhan UKM Neo Telemetri, serta sebagai bentuk regenerasi keanggotaan UKM Neo Telemetri.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default About
