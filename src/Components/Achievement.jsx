import { useEffect } from "react";
import styles from "../styles/styles.module.css"
import AOS from "aos";
import "aos/dist/aos.css";
function Achievement() {
    const arr = [
        {title: "Pekan Ilmiah Mahasiswa Nasional", result: "Finalis PIMNAS 2022 (PKM-KC)"},
        {title: "Pekan Andalas", result: "Juara III UIUX Competition"},
        {title: "Gemastik XV", result: "Medali Perak & Finalis, Divisi Piranti Cerdas & UX"},
        {title: "Hackaton Cybertech PNP", result: "Juara 1 Hackaton PNP"},
    ]
    useEffect(()=>{
        AOS.init();
    },[])
    return (
        <main className={`container-fluid ${styles.achieve} mb-5`}>
            <div className={`container ${styles.achieveContainer}`}>
                <div className="row">
                    <div className="col">
                        <p className={`fs-2 text-center ${styles.projectTitle} mt-5 mb-3`}>Our Achievement</p>
                        <p className="fs-4 text-center">Learn, Share and Family <i className="bi bi-heart-fill"></i> </p>
                    </div>
                </div>
                <div className="row mt-5 justify-content-center" style={{gap: "3rem 2rem"}}>
                    {arr.map((ar, i)=>(
                        <div className="col-md-5" key={i} data-aos="zoom-in-down">
                            <div className={`${styles.achieveBox} align-items-center`}>
                                <div className={`${styles.achieveLogo}`}>
                                    <i className="bi bi-trophy-fill"></i>
                                </div>
                                <div>
                                    <p className={`text-wrap mx-3 fs-5 ${styles.projectTitle} mb-0`}>{ar.title}</p>
                                    <p className={`text-wrap mx-3 fs-6 text-dark`}>{ar.result}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default Achievement
