import { create } from "zustand";
import axios from "axios";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const useRegister = create((set, get)=>({
    register: {},
    validation: {},
    setValidation: (data) => set({validation: data}),
    setRegister: (data)=> set({register: data}),
    handleRegister: () =>{
        const data = get().register
        axios.post("https://or-api.neotelemetri.com/api/register", data)
        .then((response)=>{
            get().setValidation(response)
            Swal.fire({
                title: "Success",
                icon: "success",
                text: "Silahkan cek emailnya untuk diverifikasi",
                showCancelButton: true,
            })
        })
        .catch((error)=>{
            get().setValidation(error.response)
        })
    }
}))

export default useRegister