import {useState, useEffect} from "react"
import styles from "../styles/styles.module.css"
// import bg from "../assets/Vector 3.png"
import "../Styles/class.css"
import male from "../assets/male.png"
import female from "../assets/female.png"
import AOS from "aos";
import "aos/dist/aos.css";
function Home() {
    const [image, setImage] = useState("")
    useEffect(()=>{
        AOS.init();
        window.onload = () =>{
            const num = Math.round(Math.random())
            if(num === 1){
                setImage(male)
            }else{
                setImage(female)
            }
        }
    }, [image])
    return (
        <main className={`container-fluid vh-100 ${styles.homeBg}`} id="home">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 vh-100 d-flex flex-column justify-content-center" data-aos="fade-up-right" >
                        <div className="border-nam bottom-left bottom-right">
                            <p className="fs-1 fw-bold border-name top-left top-right bottom-left bottom-right" style={{
                                border: "1px solid #FFA1C2"
                            }}>
                                <span style={{
                                    color: "#9F4A90"
                                }}>Open Recruitment 13</span> <br/> UKM Neo Telemetri
                            </p>
                        </div>
                        <p className="fs-5 fw-light">
                            Ayo! menjadi bagian dari Unit Kegiatan Mahasiswa <br /> berbasis IT terbesar di Universitas Andalas.
                        </p>
                        <div className={`d-flex ${styles.homeBtn}`}>
                            <a href="/register" className={`d-flex justify-content-center align-items-center btn ${styles.homeBtn1} text-white fw-bold fs-5 text-decoration-none`}>Daftar</a>
                            <a href="/login" className={`d-flex justify-content-center align-items-center btn ${styles.homeBtn2} fs-5 fw-bold text-decoration-none ${styles.homeBtnText}`}>Masuk</a>
                        </div>
                    </div>
                    <div className="col-md-6 d-none d-md-block" data-aos="fade-up-left">
                        <div className="avatar">
                            {/* <img src={bg} /> */}
                            <img src={image} alt="" className="user" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home
