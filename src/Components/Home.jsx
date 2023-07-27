import styles from "../styles/styles.module.css"
function Home() {
    return (
        <main className={`container-fluid vh-100 ${styles.homeBg}`}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 vh-100 d-flex flex-column justify-content-center">
                        <p className="fs-1">
                            Open Recruitmen 13 <br/> UKM Neo Telemetri
                        </p>
                        <p className="fs-5 fw-light">
                            Ayo! menjadi bagian dari Unit Kegiatan Mahasiswa <br /> berbasis IT terbesar di Universitas Andalas.
                        </p>
                        <div className={`d-flex ${styles.homeBtn}`}>
                            <button className={`btn ${styles.homeBtn1}`}>
                                <a href="/register" className="text-white fw-bold fs-5 text-decoration-none">Daftar</a>
                            </button>
                            <button className={`btn ${styles.homeBtn2}`}>
                                <a href="/login" className={`fs-5 fw-bold text-decoration-none ${styles.homeBtnText}`}>Masuk</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home
