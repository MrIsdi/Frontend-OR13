import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import styles from "../styles/styles.module.css"
function Division() {
    return (
        <div className={`container-fluid vh-100 ${styles.division} d-flex align-items-center mb-5`}>
            <div className="container">
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={40}
                    totalSlides={3}
                    // isPlaying
                >
                    <Slider>
                        <Slide index={0} className={`${styles.divisionSlide}`}>
                            <div className="row align-items-center mb-5">
                                <div className="col-6">
                                    <p className={`fs-2 ${styles.divisionTitle}`}>Our Division</p>
                                    <p className={`fs-1 ${styles.divisionName}`}>Multimedia dan Desain</p>
                                </div>
                                <div className="col-6 d-flex justify-content-end ">
                                    <div className={`${styles.divisionLogo}`}></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <p className="fs-2 text-white">Ui/Ux</p>
                                    <p className={`fs-6 text-white ${styles.subdivisionFill}`}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu massa arcu. Aliquam a odio sodales, iaculis neque eget, commodo tellus. Fusce varius commodo lorem, vitae vulputate mi ullamcorper in. 
                                    </p>
                                </div>
                                <div className="col-md-4">
                                    <p className="fs-2 text-white">VE</p>
                                    <p className={`fs-6 text-white ${styles.subdivisionFill}`}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu massa arcu. Aliquam a odio sodales, iaculis neque eget, commodo tellus. Fusce varius commodo lorem, vitae vulputate mi ullamcorper in. 
                                    </p>
                                </div>
                                <div className="col-md-4">
                                    <p className="fs-2 text-white">3D</p>
                                    <p className={`fs-6 text-white ${styles.subdivisionFill}`}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu massa arcu. Aliquam a odio sodales, iaculis neque eget, commodo tellus. Fusce varius commodo lorem, vitae vulputate mi ullamcorper in. 
                                    </p>
                                </div>
                            </div>
                        </Slide>
                        <Slide index={1}>
                            <div className="row align-items-center mb-5">
                                <div className="col-6">
                                    <p className={`fs-2 ${styles.divisionTitle}`}>Our Division</p>
                                    <p className={`fs-1 ${styles.divisionName}`}>Programming</p>
                                </div>
                                <div className="col-6 d-flex justify-content-end ">
                                    <div className={`${styles.divisionLogo}`}></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <p className="fs-2 text-white">Web Programming</p>
                                    <p className={`fs-6 text-white ${styles.subdivisionFill}`}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu massa arcu. Aliquam a odio sodales, iaculis neque eget, commodo tellus. Fusce varius commodo lorem, vitae vulputate mi ullamcorper in. 
                                    </p>
                                </div>
                                <div className="col-md-4">
                                    <p className="fs-2 text-white">Mobile Programming</p>
                                    <p className={`fs-6 text-white ${styles.subdivisionFill}`}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu massa arcu. Aliquam a odio sodales, iaculis neque eget, commodo tellus. Fusce varius commodo lorem, vitae vulputate mi ullamcorper in. 
                                    </p>
                                </div>
                                <div className="col-md-4">
                                    <p className="fs-2 text-white">Machine Learning</p>
                                    <p className={`fs-6 text-white ${styles.subdivisionFill}`}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu massa arcu. Aliquam a odio sodales, iaculis neque eget, commodo tellus. Fusce varius commodo lorem, vitae vulputate mi ullamcorper in. 
                                    </p>
                                </div>
                            </div>
                        </Slide>
                        <Slide index={2}>
                            <div className="row align-items-center mb-5">
                                <div className="col-6">
                                    <p className={`fs-2 ${styles.divisionTitle}`}>Our Division</p>
                                    <p className={`fs-1 ${styles.divisionName}`}>Sistem Komputer dan Jaringan</p>
                                </div>
                                <div className="col-6 d-flex justify-content-end ">
                                    <div className={`${styles.divisionLogo}`}></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <p className="fs-2 text-white">Sistem Komputer</p>
                                    <p className={`fs-6 text-white ${styles.subdivisionFill}`}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu massa arcu. Aliquam a odio sodales, iaculis neque eget, commodo tellus. Fusce varius commodo lorem, vitae vulputate mi ullamcorper in. 
                                    </p>
                                </div>
                                <div className="col-md-6">
                                    <p className="fs-2 text-white">Jaringan</p>
                                    <p className={`fs-6 text-white ${styles.subdivisionFill}`}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu massa arcu. Aliquam a odio sodales, iaculis neque eget, commodo tellus. Fusce varius commodo lorem, vitae vulputate mi ullamcorper in. 
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
