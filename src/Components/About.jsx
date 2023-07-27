import styles from "../styles/styles.module.css"
function About() {
    return (
        <main className={`container-fluid ${styles.about}`}>
            <div className="container">
                <div className="row vh-100 align-items-center">
                    <div className="col-md-6">
                        <div className={`mx-auto ${styles.aboutImg}`}>

                        </div>
                    </div>
                    <div className="col-md-6">
                        <p className="fs-2 fw-bold">Apa itu OR Neotelemetri?</p>
                        <p className="fs-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu massa arcu. Aliquam a odio sodales, iaculis neque eget, commodo tellus. Fusce varius commodo lorem, vitae vulputate mi ullamcorper in. Donec viverra neque tempor turpis molestie malesuada. Nam dapibus sapien ac ligula consectetur ultrices. Vestibulum ut ante elementum dolor molestie vestibulum. 
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default About
