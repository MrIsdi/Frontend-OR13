import { useEffect } from "react";
import styles from "../styles/styles.module.css"
import bakti from "../assets/bakti.png"
import lobi from "../assets/lobi.png"
import line from "../assets/line.png"
import peta from "../assets/peta.png"
import AOS from "aos";
import "aos/dist/aos.css";
function Project() {
    const arr = [
        { name: "Bakti 2023", team: "MMD & Programming", image: bakti },
        { name: "LOBI 2023", team: "MMD & Programming", image: lobi },
        { name: "LDR Robot Arduino", team: "SKJ", image: line },
        { name: "Peta Digital", team: "Programming" , image: peta}
    ]
    useEffect(()=>{
        AOS.init();
    },[])
    return (
        <main className={`container-fluid my-5 ${styles.project}`}>
            <div className={`container my-5 ${styles.projectContainer}`}>
                <div className="row">
                    <div className="col">
                        <p className={`fs-2 text-center ${styles.projectTitle} mb-5`}>Our Latest Project</p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {arr.map((ar, i)=>(
                        i%2 === 1 ? (
                        <div className="col-md-4 offset-md-2" key={i} data-aos="zoom-in-up">
                            <div className={`${styles.projectBox} d-flex justify-content-center align-items-center`}>
                                <img src={ar.image} alt="" className="img-thumbnail" />
                            </div>
                            <p className="fs-5 fw-bold mb-0">{ar.name}</p>
                            <p className="fs-6 fs-light">{ar.team}</p>
                        </div>
                        ) : (
                        <div className="col-md-4" key={i} data-aos="zoom-in-up">
                            <div className={`${styles.projectBox} d-flex justify-content-center align-items-center`}>
                                <img src={ar.image} alt="" className="img-thumbnail" />
                            </div>
                            <p className="fs-5 fw-bold mb-0">{ar.name}</p>
                            <p className="fs-6 fs-light">{ar.team}</p>
                        </div>
                        )
                    ))}
                </div>
            </div>
        </main>
    )
}

export default Project
