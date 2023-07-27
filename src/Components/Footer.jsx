import styles from "../styles/styles.module.css"
function Footer() {
    return (
        <main className={`container-fluid vh-100 ${styles.footer} d-flex align-items-center`}>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className={`${styles.footerLogo} mb-5`}></div>
                        <div className={`${styles.footerAddress} mb-5`}>
                            <p className="fs-6 text-white">
                                Neo Telemetri, Lt. 2, Gedung Pusat Kegiatan Mahasiswa, Universitas Andalas, Kota Padang, Sumatera Barat, Indonesia.
                            </p>
                        </div>
                        <div className={`${styles.footerSosmeds}`}>
                            <div className={`${styles.footerSosmed}`}></div>
                            <div className={`${styles.footerSosmed}`}></div>
                            <div className={`${styles.footerSosmed}`}></div>
                            <div className={`${styles.footerSosmed}`}></div>
                        </div>
                    </div>
                    <div className="col-md-6 offset-md-3">
                        <div className={`${styles.footerContact}`}>
                            <p className="fs-6 text-white fw-bold">Kontak</p>
                            <p className="fs-6 text-white">+62 9203-2920-02</p>
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
