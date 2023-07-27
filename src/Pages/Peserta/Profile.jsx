import React, {useState, useEffect} from 'react'
import Sidebar from '../../Components/Sidebar'
import styles from "../../Styles/styles.module.css"
import useProfile from '../../Stores/useProfile'
import Cookies from 'js-cookie'
import ModalProfile from '../../Components/ModalProfile'
import ModalUpdateProfile from '../../Components/ModalUpdateProfile'
import useLogin from '../../Stores/useLogin'
import { useNavigate, useHref } from 'react-router-dom'

function Profile() {
    const dataProfile = JSON.parse(Cookies.get("profile"))
    const [password, setPassword] = useState("")
    const [password_confirmation, setCpassword] = useState("")
    const handlePassword = useLogin(state => state.handlePassword)
    const setPw = useLogin(state => state.setPassword)
    const navigate = useNavigate()

    const handleGantiPassword = async (e) =>{
        e.preventDefault()
        const formData = new FormData
        formData.append("new_password", password)
        formData.append("confirm_password", password_confirmation)
        setPw(formData)
        handlePassword()
        navigate(0)
    }

    const DataProfile = () => {
        if(Object.values(dataProfile).length != 0){
            return (
                <>
                    <ModalUpdateProfile />
                </>
            )
        }
        return (
            <>
                <ModalProfile />
            </>
        )
    }

    return (
        <div className="container-fluid">
            <div className={`row flex-nowrap `}>
                <Sidebar />
                <div className={`col px-md-5 py-3 min-vh-100 ${styles.content}`}>
                    <div className="row my-md-3  align-items-center">
                        <div className="col-6">
                            <p className="fs-4 fw-bold mb-md-0">Profile</p>
                        </div>
                        <div className="col-6 d-flex flex-row-reverse">
                            {
                                Object.values(dataProfile).length != 0? <img src={dataProfile["foto"]} className="rounded-circle border  border-dark" alt="" style={{ width: "50px", aspectRatio: "1/1", objectFit: "cover", objectPosition: "top" }} />:
                                <i className="fw-bold bi bi-person-circle" style={{ fontSize: "40px" }}></i>
                            }
                        </div>
                    </div>
                    < DataProfile />
                    <div className="row mt-4">
                        <p className="fs-4 fw-bold mb-4">Ganti Password</p>
                        <div className="col-md-3">
                            <form method='POST' onSubmit={handleGantiPassword}>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label fw-bold">Password baru</label>
                                    <input type="password" className="form-control" id='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="password2" className="form-label fw-bold">Konfirmasi password baru</label>
                                    <input type="password" className="form-control" id='password2' value={password_confirmation} onChange={(e)=>setCpassword(e.target.value)}/>
                                </div>
                                <button type="submit" className={`w-100 text-white btn ${styles.profileBtn}`}>Selesai</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
