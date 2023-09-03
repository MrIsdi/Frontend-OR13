import { useEffect } from "react";
import styles from "../styles/styles.module.css"
import AOS from "aos";
import "aos/dist/aos.css";
function Persuade() {
    useEffect(()=>{
        AOS.init();
    },[])
    return (
        <main className={`container-fluid ${styles.persuade} py-5`}>
            <div className="row py-5 pb-3" data-aos="flip-up">
                <p className={`fs-2 ${styles.persuadeTitle}`}>Tertarik untuk menjadi bagian dari Neo Telemetri?</p>
            </div>
            <div className="row justify-content-center py-5 pt-3" data-aos="flip-up">
                <a href="/register" className={`btn ${styles.persuadeBtn} text-white d-flex justify-content-center align-items-center`}>Ayo Daftar!</a>
            </div>
        </main>
    )
}

export default Persuade
