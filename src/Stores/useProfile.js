import {create} from "zustand"
import axios from "axios"
import Cookies from "js-cookie"
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const useProfile = create((set, get)=>({
    profile: {},
    setProfile: (data) => set({profile: data}),
    validation: {},
    setValidation: (data) => set({validation: data}),
    data: {},
    setData: (data) => set({data: data}),
    show: async () => {
        await axios.get("https://or-api.neotelemetri.com/api/profile/show", {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${Cookies.get("token")}`
            }
        })
        .then((response)=>{
            get().setProfile(response.data.data)
            get().setValidation(response)
            Cookies.set("profile", JSON.stringify(get().profile), {expires: 1})
        })
        .catch((error)=>{
            get().setValidation(error.response)
            Cookies.set("profile", JSON.stringify({}), {expires: 1})
        })
    },
    storeProfile: () => {
        const data = get().profile
        axios.post("https://or-api.neotelemetri.com/api/profile/store_profile", data, {
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`
            }
        })
        .then((response)=>{
            get().setValidation(response)

            Cookies.set("profile", JSON.stringify(get().profile), {expires: 1})
            Swal.fire({
                title: "Success",
                text: "Anda berhasil tambah profile",
                icon: "success",
                timer: 1000,
                showConfirmButton: false
            })
        })
        .catch((error)=>{
            get().setValidation(error.response)
            Swal.fire({
                title: "Failed",
                text: "Anda gagal tambah profile",
                icon: "error",
                timer: 1000,
                showConfirmButton: false
            })
        })
    },
    updateProfile: () => {
        const data = get().profile
        axios.post("https://or-api.neotelemetri.com/api/profile/update_profile", data, {
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`
            }
        })
        .then((response)=>{
            get().setProfile(response.data.data)
            get().setValidation(response)

            Cookies.set("profile", JSON.stringify(get().profile), {expires: 1})
            Swal.fire({
                title: "Success",
                text: "Anda berhasil update profile",
                icon: "success",
                timer: 1000,
                showConfirmButton: false
            })
        })
        .catch((error)=>{
            get().setValidation(error.response)
            Swal.fire({
                title: "Failed",
                text: "Anda gagal update profile",
                icon: "error",
                timer: 1000,
                showConfirmButton: false
            })
        })
    },
    storeFile: () =>{
        const data = get().data
        axios.post("https://or-api.neotelemetri.com/api/profile/store_file", data, {
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`
            }
        })
        .then((response)=>{
            get().setValidation(response)
            get().show()
            Swal.fire({
                title: "Success",
                text: "Anda berhasil tambah file",
                icon: "success",
                timer: 1000,
                showConfirmButton: false
            })
        })
        .catch((error) => {
            get().setValidation(error.response)
            Swal.fire({
                title: "Failed",
                text: "Anda gagal tambah file",
                icon: "error",
                timer: 1000,
                showConfirmButton: false
            })
        })
    },
    showFile: () =>{
        const data = JSON.parse(Cookies.get("profile"))
        axios.get(`https://or-api.neotelemetri.com/api/profile/show_file/${data["krs"]}`,{
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`
            }
        })
        .then((response)=>{
            get().setValidation(response)
        })
        .catch((error)=>{
            get().setValidation(error.response)
        })
    }
}))

export default useProfile