import styles from "../styles/styles.module.css"
function Persuade() {
    return (
        <main className={`container-fluid ${styles.persuade} py-5`}>
            <div className="row py-5 pb-3">
                <p className={`fs-2 ${styles.persuadeTitle}`}>Tertarik untuk menjadi bagian dari Neo Telemetri?</p>
            </div>
            <div className="row justify-content-center py-5 pt-3">
                <button className={`btn ${styles.persuadeBtn} text-white`}>Ayo Daftar!</button>
            </div>
        </main>
    )
}

export default Persuade
