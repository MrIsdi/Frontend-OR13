import { create } from "zustand";
import axios from "axios";

const useRegister = create((set, get)=>({
    register: {},
    validation: {},
    setValidation: (data) => set({validation: data}),
    setRegister: (data)=> set({register: data}),
    handleRegister: () =>{
        const data = get().register
        axios.post("http://localhost:8000/api/register", data)
        .then((response)=>{
            get().setValidation(response)
        })
        .catch((error)=>{
            get().setValidation(error.response)
        })
    }
}))

export default useRegister