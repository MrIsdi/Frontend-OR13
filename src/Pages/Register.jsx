import React, {useState, useEffect} from 'react'
import {useNavigate} from "react-router-dom"
import styles from "../Styles/styles.module.css"
import bg from "../assets/bg.png"
import useRegister from '../Stores/useRegister'

function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password_confirmation, setCpassword] = useState("")
    const [val, setVal] = useState(false)
    const navigate = useNavigate()
    const handleRegister = useRegister(state=>state.handleRegister)
    const setRegister = useRegister(state=>state.setRegister)
    const validation = useRegister(state =>state.validation)

    const storeRegister = async (e) =>{
        e.preventDefault()
        setRegister({
            email,
            password,
            password_confirmation
        })
        handleRegister()
    }

    useEffect(()=>{
        if(validation != {}){
            if(validation.status === 201){
                navigate("/login")
            }else if(validation.status === 422){
                setVal(true)
            }
        }
    }, [])

    return (
        <div className="container-fluid">
            <div className="row justify-content-center align-items-center vh-100">
                <div className="col-md-4 offset-md-1">
                    <h2 className='mb-4 fw-bold'>Daftar</h2>
                    <form method='post' onSubmit={storeRegister} className={`${styles.text}`}>
                        <div className="mb-4">
                            <label htmlFor="email" className={`form-label fw-bold`}>Email</label>
                            <input type="email" className={`${styles.registerInput} form-control ${val ? "is-invalid" : ""}`} id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="form-label fw-bold">Password</label>
                            <input type="password" className={`${styles.registerInput} form-control ${val ? "is-invalid" : ""}`} id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className="mb-5">
                            <label htmlFor="confirmation password" className="form-label fw-bold">Confirmation Password</label>
                            <input type="password" className={`${styles.registerInput} form-control ${val ? "is-invalid" : ""}`} id="confirmation password" value={password_confirmation} onChange={(e) => setCpassword(e.target.value)}/>
                        </div>
                        <div className="mb-4">
                            <button className={`text-white btn ${styles.registerInputBtn}`} type='submit'>Daftar</button>
                        </div>
                    </form>
                    <p className={`d-block fs-6 text-mute text-center ${styles.registerInput}`}>
                        Sudah memiliki akun?
                        <a href="/login" className="text-dark fw-bold text-decoration-none"> Masuk</a>
                    </p>
                </div>
                <div className="col-md-6 offset-md-1">
                    <img className={styles.imageReg} src={bg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Register
