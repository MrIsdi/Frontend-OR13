import {create} from "zustand"
import axios from "axios"
import Cookies from "js-cookie"

const useProfile = create((set, get)=>({
    profile: {},
    setProfile: (data) => set({profile: data}),
    validation: {},
    setValidation: (data) => set({validation: data}),
    data: {},
    setData: (data) => set({data: data}),
    show: () => {
        axios.get("http://localhost:8000/api/profile/show", {
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
        })
    },
    storeProfile: () => {
        const data = get().profile
        axios.post("http://localhost:8000/api/profile/store_profile", data, {
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`
            }
        })
        .then((response)=>{
            get().setValidation(response)

            Cookies.set("profile", JSON.stringify(get().profile), {expires: 1})
        })
        .catch((error)=>{
            get().setValidation(error.response)
        })
    },
    updateProfile: () => {
        const data = get().profile
        axios.post("http://localhost:8000/api/profile/update_profile", data, {
            headers: {
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
        })
    },
    storeFile: () =>{
        const data = get().data
        axios.post("http://localhost:8000/api/profile/store_file", data, {
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`
            }
        })
        .then((response)=>{
            get().setValidation(response)
            get().show()
        })
        .catch((error) => {
            get().setValidation(error.response)
        })
    },
    showFile: () =>{
        const data = JSON.parse(Cookies.get("profile"))
        axios.get(`http://localhost:8000/api/profile/show_file/${data["krs"]}`,{
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