import axios from "axios"
import {create} from "zustand"
import Cookies from 'js-cookie';

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
        })
        .catch((error)=>{
            get().setValidation(error.response)
        })
    },
    handleLogout: async () =>{
        axios.defaults.headers.common['Authorization'] = `Bearer ${Cookies.get("token")}`
        await axios.post('http://localhost:8000/api/logout')
        // await axios.post('https://or-api.neotelemetri.com/api/logout')
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
        axios.post(`http://localhost:8000/api/password`, data, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${Cookies.get("token")}`
            }
        })
        .then((response)=>{
            get().setIsPassword(response)
        })
        .catch((error) =>{
            get().setIsPassword(error)
        } )
    }
}))

export default useLogin