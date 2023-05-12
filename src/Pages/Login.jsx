import React, {useState, useEffect} from 'react'
import styles from "../Styles/styles.module.css"
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
                    show()
                    Cookies.set("profile", "", {expires: 1})
                    navigate("/peserta")
                }else{
                    navigate("/admin")
                }
            }else if(validation.status === 401){
                console.log(validation)
            }
        }
    }, [validation])
    
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center vh-100">
                <div className="col-md-5">
                    <h3 className='mb-4'>Login</h3>
                    <form method='post' onSubmit={startLogin}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label fw-bold">Email</label>
                            <input type="email" className={`form-control`} id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label fw-bold">Password</label>
                            <input type="password" className={`form-control`} id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <button className="btn btn-dark w-100" type='submit'>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
