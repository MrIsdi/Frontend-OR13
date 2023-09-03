import axios from "axios"
import {create} from "zustand"
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const useLogin = create((set, get)=>({
    user: {},
    setUser: (data) => set({user: data}),
    token: "",
    setToken: (data) => set({token: data}),
    validation: {},
    isLogout: {},
    setIsLogout: (data) => set({isLogout: data}),
    setValidation: (data) => set({validation: data}),
    handleLogin: () => {
        const data = get().user
        // axios.post("http://localhost:8000/api/login", data)
        axios.post("https://or-api.neotelemetri.com/api/login", data)
        .then((response)=>{
            get().setUser(response.data.user)
            get().setToken(response.data.token)
            get().setValidation(response)

            Cookies.set('token', get().token, {expires : 1})
            Cookies.set('user', JSON.stringify(get().user), {expires : 1})
            Swal.fire({
                title: "Success",
                text: "Anda berhasil Log In",
                icon: "success",
                timer: 3000,
                showConfirmButton: false
            })
        })
        .catch((error)=>{
            get().setValidation(error.response)
            Swal.fire({
                title: "Error",
                text: "Email dan password yang digunakan salah",
                icon: "error",
                timer: 3000,
                showConfirmButton: false
            })
        })
    },
    handleLogout: async () =>{
        axios.defaults.headers.common['Authorization'] = `Bearer ${Cookies.get("token")}`
        // await axios.post('http://localhost:8000/api/logout')
        await axios.post('https://or-api.neotelemetri.com/api/logout')
        .then((response) => {
            get().setIsLogout(response)
        });
    },
    password: {},
    setPassword: (data) => set({ password: data }),
    isPassword: "",
    setIsPassword: (data) => set({ isPassword: data }),
    handlePassword: () =>{
        const data = get().password
        axios.post(`https://or-api.neotelemetri.com/api/password`, data, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${Cookies.get("token")}`
            }
        })
        .then((response)=>{
            get().setIsPassword(response)
            Swal.fire({
                title: "Success",
                text: "Anda berhasil ganti password",
                icon: "success",
                timer: 3000,
                showConfirmButton: false
            })
        })
        .catch((error) =>{
            get().setIsPassword(error)
            Swal.fire({
                title: "Gagal",
                text: "Anda tidak berhasil ganti password",
                icon: "warning",
                timer: 3000,
                showConfirmButton: false
            })
        } )
    }
}))

export default useLogin