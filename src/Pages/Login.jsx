import React, {useState, useEffect} from 'react'
import styles from "../Styles/styles.module.css"
import bg from "../assets/bg.png"
import { useNavigate } from 'react-router-dom'
import useLogin from "../Stores/useLogin"
import useProfile from '../Stores/useProfile'
import Cookies from 'js-cookie'

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const setUser = useLogin(state=>state.setUser)
    const handleLogin = useLogin(state=>state.handleLogin)
    const validation = useLogin(state=>state.validation)
    const show = useProfile(state => state.show)

    const startLogin = async (e) => {
        e.preventDefault()
        setUser({
            email,
            password
        })
        handleLogin()
    }

    useEffect(()=>{
        if(validation != {}){
            if(validation.status === 200){
                if(validation.data.user.role === "peserta"){
                    navigate("/peserta")
                    Cookies.set("profile", JSON.stringify({}), {expires: 1})
                }else{
                    navigate("/admin")
                }
            }else if(validation.status === 401){
                console.log(validation)
            }
        }
    }, [validation])
    
    return (
        <div className="container-fluid">
            <div className="row justify-content-center align-items-center vh-100">
                <div className="col-md-4 offset-md-1">
                    <h2 className='mb-4 fw-bold'>Login</h2>
                    <form method='post' onSubmit={startLogin} className={`${styles.text}`}>
                        <div className="mb-4">
                            <label htmlFor="email" className="form-label fw-bold">Email</label>
                            <input type="email" className={`${styles.registerInput} form-control`} id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="form-label fw-bold">Password</label>
                            <input type="password" className={`${styles.registerInput} form-control`} id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className="mb-4">
                            <button className={`text-white btn ${styles.registerInputBtn}`} type='submit'>Login</button>
                        </div>
                    </form>
                    <p className={`d-block fs-6 text-mute text-center ${styles.registerInput}`}>
                        Belum memiliki akun?
                        <a href="/register" className="text-dark fw-bold text-decoration-none"> Daftar</a>
                    </p>
                </div>
                <div className="col-md-6 offset-md-1">
                    <img className={styles.imageReg} src={bg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Login
