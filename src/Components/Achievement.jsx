import styles from "../styles/styles.module.css"
function Achievement() {
    const arr = [1, 2, 3, 4, 5, 6]
    return (
        <main className={`container-fluid ${styles.achieve} mb-5`}>
            <div className={`container ${styles.achieveContainer}`}>
                <div className="row">
                    <div className="col">
                        <p className={`fs-2 text-center ${styles.projectTitle} mt-5 mb-3`}>Our Achievement</p>
                        <p className="fs-4 text-center">Learn, Share and Family <i className="bi bi-heart-fill"></i> </p>
                    </div>
                </div>
                <div className="row mt-5" style={{gap: "3rem 2rem"}}>
                    {arr.map((ar, i)=>(
                        <div className="col" key={i}>
                            <div className={`${styles.achieveBox} align-items-center`}>
                                <div className={`${styles.achieveLogo}`}>
                                    <i className="bi bi-trophy-fill"></i>
                                </div>
                                <div>
                                    <p className={`mx-3 fs-5 ${styles.projectTitle} mb-0`}>Finalis Pimnas 2022</p>
                                    <p className={`mx-3 fs-6 text-dark`}>John Doe, Programming {ar} </p>
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
