import { useState, useEffect } from "react"
import logo from "../assets/logo.png"
import styles from "../styles/styles.module.css"
function Navbar() {
    const [scroll, setScroll] = useState("")
    const [scroll1, setScroll1] = useState("")
    useEffect(()=>{
        const handleScroll = () => {
            if(document.body.scrollTop > 657*0.75 || document.documentElement.scrollTop > 657*0.75){
                setScroll(styles.navbarScroll)
                setScroll1(styles.navbarScrollA)
            }else{
                setScroll("")
                setScroll1("")
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scroll])
    return (
        <nav className={`navbar navbar-expand-lg position-fixed w-100 ${scroll} ${styles.nav}`}>
            <div className={`container-fluid ${styles.navbar}`}>
                    <a className="navbar-brand" href="#">
                        <img className={styles.navbarLogo} src={logo} alt="Neo Telemetri" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className={`navbar-nav ms-auto mb-2 mb-lg-0 ${styles.navbarUl}`}>
                            <li className="nav-item">
                                <a className={`${styles.navbarA} nav-link fw-bold ${scroll1}`} href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className={`${styles.navbarA} nav-link fw-bold ${scroll1}`} href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className={`${styles.navbarA} nav-link fw-bold ${scroll1}`} href="#">Division</a>
                            </li>
                            <li className="nav-item">
                                <a className={`${styles.navbarA} nav-link fw-bold ${scroll1}`} href="#">Achievement</a>
                            </li>
                        </ul>
                    </div>
                </div>
        </nav>
    )
}

export default Navbar
