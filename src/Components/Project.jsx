import styles from "../styles/styles.module.css"
function Project() {
    const arr = [1, 2, 3, 4, 5, 6]
    return (
        <main className={`container-fluid my-5 ${styles.project}`}>
            <div className={`container ${styles.projectContainer}`}>
                <div className="row">
                    <div className="col">
                        <p className={`fs-2 text-center ${styles.projectTitle}`}>Our Latest Project</p>
                    </div>
                </div>
                <div className="row">
                    {arr.map((ar, i)=>(
                        <div className="col" key={i}>
                            <div className={`${styles.projectBox}`}></div>
                            <p className="fs-5 fw-bold mb-0">Project {ar}</p>
                            <p className="fs-6 fs-light">Web Programming</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default Project
