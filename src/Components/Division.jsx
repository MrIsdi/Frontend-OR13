import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import styles from "../styles/styles.module.css"
import mmd from "../assets/mmd.png"
import skj from "../assets/skj.png"
import prog from "../assets/prog.png"
function Division() {
    return (
        <div className={`container-fluid ${styles.division} d-flex align-items-center my-5`} id="divisi">
            <div className="container my-5">
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={50}
                    totalSlides={3}
                    isPlaying
                >
                    <Slider>
                        <Slide index={0} className={`${styles.divisionSlide}`}>
                            <div className="row align-items-center my-5">
                                <div className="col-6">
                                    <p className={`fs-2 ${styles.divisionTitle}`}>Our Division</p>
                                    <p className={`fs-1 ${styles.divisionName}`}>Multimedia dan Desain</p>
                                </div>
                                <div className="col-6 d-flex justify-content-end">
                                    <div className={`${styles.divisionLogo}`}>
                                        <img src={mmd} alt="" className="img-thumbnail" style={{ background: "transparent", border: "none" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <p className="fs-2 text-white">Ui/Ux</p>
                                    <p className={`fs-6 text-white ${styles.subdivisionFill}`}>
                                        Subdivisi yang bergerak dalam merancang desain dalam sebuah aplikasi ataupun website yang memberikan pengalaman kepada pengguna.
                                    </p>
                                </div>
                                <div className="col-md-4">
                                    <p className="fs-2 text-white">VE</p>
                                    <p className={`fs-6 text-white ${styles.subdivisionFill}`}>
                                        Subdivisi yang berfokus dalam pembuatan video yang menarik serta informatif.
                                    </p>
                                </div>
                                <div className="col-md-4">
                                    <p className="fs-2 text-white">3D</p>
                                    <p className={`fs-6 text-white ${styles.subdivisionFill}`}>
                                        Subdivisi yang mempelajari visual tiga dimensi yang bisa digunakan untuk kebutuhan perancangan dan desain
                                    </p>
                                </div>
                            </div>
                        </Slide>
                        <Slide index={1}>
                            <div className="row align-items-center my-5">
                                <div className="col-6">
                                    <p className={`fs-2 ${styles.divisionTitle}`}>Our Division</p>
                                    <p className={`fs-1 ${styles.divisionName}`}>Programming</p>
                                </div>
                                <div className="col-6 d-flex justify-content-end ">
                                    <div className={`${styles.divisionLogo}`}>
                                        <img src={prog} alt="" className="img-thumbnail" style={{ background: "transparent", border: "none" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <p className="fs-2 text-white">Web Programming</p>
                                    <p className={`fs-6 text-white ${styles.subdivisionFill}`}>
                                        Subdivisi pembuatan dan pengembangan situs web dengan menggunakan bahasa pemrograman dan teknologi  demi menciptakan situs website yang interaktif dan responsif.
                                    </p>
                                </div>
                                <div className="col-md-4">
                                    <p className="fs-2 text-white">Mobile Programming</p>
                                    <p className={`fs-6 text-white ${styles.subdivisionFill}`}>
                                        Subdivisi yang bergerak dalam pengembangan perangkat lunak yang berbasis pada mobile device
                                    </p>
                                </div>
                                <div className="col-md-4">
                                    <p className="fs-2 text-white">Machine Learning</p>
                                    <p className={`fs-6 text-white ${styles.subdivisionFill}`}>
                                        Subdivisi yang membahas kecerdasan buatan dengan fokus pada pengembangan algoritma pemrograman agar komputer dapat belajar dari data tanpa perlu diprogram secara eksplisit
                                    </p>
                                </div>
                            </div>
                        </Slide>
                        <Slide index={2}>
                            <div className="row align-items-center my-5">
                                <div className="col-6">
                                    <p className={`fs-2 ${styles.divisionTitle}`}>Our Division</p>
                                    <p className={`fs-1 ${styles.divisionName}`}>Sistem Komputer dan Jaringan</p>
                                </div>
                                <div className="col-6 d-flex justify-content-end ">
                                    <div className={`${styles.divisionLogo}`}>
                                        <img src={skj} alt="" className='img-thumbnail' style={{ background: "transparent", border: "none" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-evenly">
                                <div className="col-md-4">
                                    <p className="fs-2 text-white">Sistem Komputer</p>
                                    <p className={`fs-6 text-white ${styles.subdivisionFill}`}>
                                        Subdivisi yang bergerak dibidang sistem komputer dimana akan mempelajari bagaimana memastikan kelancaran operasi sistem , pemilharaan server dan penanganan akibat keamanan sistem komputer
                                    </p>
                                </div>
                                <div className="col-md-4">
                                    <p className="fs-2 text-white">Jaringan</p>
                                    <p className={`fs-6 text-white ${styles.subdivisionFill}`}>
                                        Subdivisi yang mempelajari bagaimana suatu jaringan komputer bekerja, merancang dan mengimplementasikan jaringan tersebut
                                    </p>
                                </div>
                            </div>
                        </Slide>
                    </Slider>
                </CarouselProvider>
            </div>
        </div>
    )
}

export default Division
