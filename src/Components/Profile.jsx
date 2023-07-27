import styles from "../styles/styles.module.css"
function Profile() {
    return (
        <main className={`${styles.userDashboard}`}>
            <div className={`container-fluid ${styles.userDashboardDashboard}`}>
                <div className="row mt-5 align-items-center mb-3">
                    <div className="col-6">
                        <p className="fs-4 fw-bold">Profile</p>
                    </div>
                    <div className="col-6 d-flex flex-row-reverse">
                        <img src="" alt="" className={`${styles.userDashboardNav}`} />
                    </div>
                </div>
                <div className="row">
                    <p className="fs-4 fw-bold">Edit Profile</p>
                    <div>
                        <img src="" alt="" className={`${styles.profileImg}`} />
                    </div>
                </div>
                <div className="row mt-3">
                    <form action="">
                        <div className="row">
                            <div className="col-md-3">
                                <label htmlFor="nama" className="form-label fw-bold">Nama</label>
                                <input type="text" className="form-control" name="" id="nama" />
                            </div>
                            <div className="col-md-3">
                                <label htmlFor="namaLengkap" className="form-label fw-bold">Nama Lengkap</label>
                                <input type="text" className="form-control"  name="" id="namaLengkap" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Profile
