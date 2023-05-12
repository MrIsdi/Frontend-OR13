import React, {useState, useEffect} from 'react'
import Sidebar from '../../Components/Sidebar'
import styles from "../../Styles/styles.module.css"
import useProfile from '../../Stores/useProfile'
import Cookies from 'js-cookie'
import ModalProfile from '../../Components/ModalProfile'
import ModalUpdateProfile from '../../Components/ModalUpdateProfile'

function Profile() {
    const profile = useProfile(state => state.profile)
    const setProfile = useProfile(state => state.setProfile)
    const show = useProfile(state => state.show)
    const data = Cookies.get("profile")
    
    useEffect(()=>{
        if(data != "" ){
            try{
                setProfile(JSON.parse(data))
            }catch(error){
                console.log("Data belum ada")
            }
        }else{
            show()
        }
    },[data])



    const DataProfile = () => {
        if(data != ""){
            return (
            <>
                <table className='table'>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td>Nama Lengkap</td>
                            <td>{profile["nama_lengkap"]}</td>
                        </tr>
                        <tr>
                            <td>No. Induk Mahasiswa</td>
                            <td>{profile["nim"]}</td>
                        </tr>
                        <tr>
                            <td>Divisi</td>
                            <td>{profile["divisi"]}</td>
                        </tr>
                        <tr>
                            <td>Sub Divisi</td>
                            <td>{profile["sub_divisi"]}</td>
                        </tr>
                        <tr>
                            <td>Fakultas</td>
                            <td>{profile["fakultas"]}</td>
                        </tr>
                        <tr>
                            <td>Jurusan</td>
                            <td>{profile["jurusan"]}</td>
                        </tr>
                        <tr>
                            <td>Tempat Lahir</td>
                            <td>{profile["tempat_lahir"]}</td>
                        </tr>
                        <tr>
                            <td>Tanggal Lahir</td>
                            <td>{profile["tanggal_lahir"]}</td>
                        </tr>
                        <tr>
                            <td>Alamat Padang</td>
                            <td>{profile["alamat"]}</td>
                        </tr>
                        <tr>
                            <td>Asal Daerah</td>
                            <td>{profile["asal"]}</td>
                        </tr>
                        <tr>
                            <td>No. HP</td>
                            <td>{profile["no_hp"]}</td>
                        </tr>
                        <tr>
                            <td>Agama</td>
                            <td>{profile["agama"]}</td>
                        </tr>
                        <tr>
                            <td>Hobi</td>
                            <td>{profile["hobi"]}</td>
                        </tr>
                        <tr>
                            <td>Cita-cita</td>
                            <td>{profile["cita_cita"]}</td>
                        </tr>
                        <tr>
                            <td>Riwayat Penyakit</td>
                            <td>{profile["riwayat_penyakit"]}</td>
                        </tr>
                        <tr>
                            <td>Merk Laptop</td>
                            <td>{profile["laptop"]}</td>
                        </tr>
                        <tr>
                            <td>Processor</td>
                            <td>{profile["processor"]}</td>
                        </tr>
                        <tr>
                            <td>RAM</td>
                            <td>{profile["RAM"]}</td>
                        </tr>
                        <tr>
                            <td>VGA</td>
                            <td>{profile["VGA"]}</td>
                        </tr>
                    </tbody>
                </table>
                <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Update data profile
                </button>
                <ModalUpdateProfile />
            </>)
        }
        return (
            <>
                <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Tambah data profile
                </button>
                <ModalProfile />
            </>
        )
    }

    return (
        <div className="container-fluid">
            <div className={`row flex-nowrap `}>
                <Sidebar />
                <div className={`col py-3 min-vh-100 ${styles.content}`}>
                    < DataProfile />
                </div>
            </div>
        </div>
    )
}

export default Profile
