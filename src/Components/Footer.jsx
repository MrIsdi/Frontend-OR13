import { useEffect } from "react";
import styles from "../styles/styles.module.css"
import neo from "../assets/neo.png"
import AOS from "aos";
import "aos/dist/aos.css";
function Footer() {
    useEffect(()=>{
        AOS.init();
    },[])
    return (
        <main className={`container-fluid vh-100 ${styles.footer} d-flex align-items-center`}>
            <div className="container">
                <div className="row">
                    <div className="col-md-3" data-aos="fade-up-right">
                        <div className={`${styles.footerLogo} mb-5`}>
                            <img src={neo} alt="" className="fluid" />
                        </div>
                        <div className={`${styles.footerAddress} mb-5`}>
                            <p className="fs-6 text-white">
                                Neo Telemetri, Lt. 2, Gedung Pusat Kegiatan Mahasiswa, Universitas Andalas, Kota Padang, Sumatera Barat, Indonesia.
                            </p>
                        </div>
                        <div className={`${styles.footerSosmeds}`}>
                            <div className={`${styles.footerSosmed}`}>
                                <a href="https://www.instagram.com/neotelemetri/" target="_blank">
                                    <i className="bi bi-instagram"></i>
                                </a>
                            </div>
                            <div className={`${styles.footerSosmed}`}>
                                <a href="https://www.facebook.com/neotelemetri/?locale=id_ID" target="_blank">
                                    <i className="bi bi-facebook"></i>
                                </a>
                            </div>
                            <div className={`${styles.footerSosmed}`}>
                                <a href="https://twitter.com/neotelemetri" target="_blank">
                                    <i className="bi bi-twitter"></i>
                                </a>
                            </div>
                            <div className={`${styles.footerSosmed}`}>
                                <a href="https://www.youtube.com/user/neotelemetri" target="_blank">
                                    <i className="bi bi-youtube"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 offset-md-3" data-aos="fade-up-left">
                        <div className={`${styles.footerContact}`}>
                            <p className="fs-6 text-white fw-bold">Kontak</p>
                            <p className="fs-6 text-white">Kak Aina (+62 857-6965-8744)</p>
                        </div>
                        <div className={`${styles.footerRelate}`}>
                            <p className="fs-6 text-white fw-bold">Relate</p>
                            <p className="fs-6 text-white">Marketing Neo Telemetri</p>
                            <p className="fs-6 text-white">Portofolio Neo Telemetri</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Footer
