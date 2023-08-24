import React from 'react'
import logo from "../assets/logoor.png"
import styles from "../Styles/styles.module.css"

export const ComingSoon = () => {
  return (
    <div style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
        <div className='d-flex justify-content-center align-items-center' style={{ minHeight: "100vh" }}>
            <div className="">
            <img src={logo} alt="" className='img-fluid d-block mx-auto'/>
            <p className='text-center fs-3 fw-semibold' style={{ color: "#9F4A90" }}>Coming Soon !</p>
            <p className='text-center fs-3 fw-semibold'>Open Recruitment 13 UKM Neo Telemetri</p>
            </div>
        </div>
        <div className='position-absolute' style={{ top: "10vh", left: "-10vh", zIndex: "-1" }}>
            <div className={`rounded-circle opacity-50 ${styles.circle1}`} style={{ width: "20vw", height: "20vw", backgroundColor: "#F8CBDF" }}></div>
        </div>
        <div className='position-absolute' style={{ bottom: "5vh", right: "-10vh", zIndex: "-1" }}>
            <div className={`rounded-circle opacity-50 ${styles.circle1}`} style={{ width: "18vw", height: "18vw", backgroundColor: "#F8CBDF" }}></div>
        </div>
        <div className='position-absolute' style={{ bottom: "-15vh", right: "40vh", zIndex: "-1" }}>
            <div className={`rounded-circle opacity-50 ${styles.circle1}`} style={{ width: "18vw", height: "18vw", backgroundColor: "#F8CBDF" }}></div>
        </div>
        <div className='position-absolute' style={{ top: "30vh", left: "40%", transform: "translateX(-50%)", zIndex: "-1" }}>
            <div className={`rounded-circle opacity-70 ${styles.circle1}`} style={{ width: "20vw", height: "20vw", backgroundColor: "#E5D6F6" }}></div>
        </div>
        <div className='position-absolute' style={{ bottom: "-20vh", right: "0vh", zIndex: "-1" }}>
            <div className={`rounded-circle opacity-70 ${styles.circle1}`} style={{ width: "20vw", height: "20vw", backgroundColor: "#E5D6F6" }}></div>
        </div>
    </div>



  )
}
