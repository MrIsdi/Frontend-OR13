import React, {useState, useEffect} from 'react'
import {useNavigate} from "react-router-dom"
import styles from "../Styles/styles.module.css"
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
    }, [validation])

    return (
        <div className="container">
            <div className="row justify-content-center align-items-center vh-100">
                <div className="col-md-5">
                    <h3 className='mb-4'>Daftar akun OR13 Neo Telemetri</h3>
                    <form method='post' onSubmit={storeRegister}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label fw-bold">Email</label>
                            <input type="email" className={`form-control ${val ? "is-invalid" : ""}`} id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Alamat Email"/>
                            <small className='form-text text-mute'>Gunakan alamat email aktif Anda</small>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label fw-bold">Password</label>
                            <input type="password" className={`form-control ${val ? "is-invalid" : ""}`} id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Masukan Password Baru"/>
                            <small className='form-text text-mute'>Gunakan minimal 8 karakter </small>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="confirmation password" className="form-label fw-bold">Confirmation Password</label>
                            <input type="password" className={`form-control ${val ? "is-invalid" : ""}`} id="confirmation password" value={password_confirmation} onChange={(e) => setCpassword(e.target.value)} placeholder="Masukan Konfirmasi Password"/>
                            <small className='form-text text-mute'>Konfirmasi password yang telah dibikin tadi</small>
                        </div>
                        <div className="mb-3">
                            <button className="btn btn-secondary w-100" type='submit'>Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
