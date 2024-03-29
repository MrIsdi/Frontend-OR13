import { create } from "zustand";
import axios from "axios";
import Cookies from "js-cookie";
import { redirect } from "react-router-dom";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const useAdmin = create((set, get)=>({

    loading: true,
    setLoading: (data) => set({loading: data}),

    fetchStatus: true,
    setFetchStatus: (data) => set({fetchStatus: data}),

    currentId: -1,
    setCurrentId: (data) => set({currentId: data}),

    validation: -1,
    setValidation: (data) => set({validation: data}),

    data: null,
    setData: (data) => set({data: data}),

    memberDetail: [],
    setMemberDetail: (data) => set({memberDetail: data}),

    verificationStatus: false,
    setVerificationStatus: (data) => set({verificationStatus: data}),

    memberStatus: {status_aktif : false},
    setMemberStatus: (data) => set({memberStatus: data}),

    validationStatus: {validation_status : false},
    setValidationStatus: (data) => set({validationStatus: data}),

    imageFile: null,
    setImageFile: (data) => set({imageFile: data}),

    userImageFile: null,
    setUserImageFile: (data) => set({userImageFile: data}),

    backgroundColorButton: "#ffffff",
    setBackgroundColorButton: (data) => set({backgroundColorButton: data}),

    colorButton: "#black",
    setColorButton: (data) => set({colorButton: data}),

    currentPage: 1,
    setCurrentPage: (data) => set({colorButton: data}),

    search: "",
    setSearch: (data) => set({search: data}),

    message: "",
    setMessage: (data) => set({message: data}),

    showAllMember: () => {
        if (get().fetchStatus) {
            // console.log(Cookies.get('token'))
            axios.get("https://or-api.neotelemetri.com/api/admin/show_all", {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json", 
                    Authorization: `Bearer ${Cookies.get('token')}`,
                    "role": "admin"
                }
            })
            .then((res) => {
                // console.log(res.data.data)
                get().setLoading(false)
                get().setData(res.data.data)
                // get().currentPage
            })
            .catch((err) => {
                console.log(err)
                get().setValidation(err.response)
            })
        }
    },

    handlePageChange: (page) => {
        get().setCurrentPage(page)
    },

    handleSearchChange : (event) => {
        get().setSearch(event.target.value)

        // console.log(search)
    },

    handleSearch : (event) => {
        event.preventDefault()

        // console.log(search)

        let fetchData = async () => {
            get().setLoading(true)

            let { data } = await axios.get("https://or-api.neotelemetri.com/api/admin/show_all",
            {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json", 
                    Authorization: `Bearer ${Cookies.get('token')}`,
                    "role": "admin"
                }
            })
            let dataList = data.data

            // console.log(dataList)

            let searchData = dataList.filter((res) => {
                return Object.values(res).join(" ").toLowerCase().includes(get().search.toLowerCase())
            })

            // console.log(searchData)

            get().setLoading(false)
            
            get().setData([...searchData])

            if (searchData.length === 0) {
                get().setMessage("No data")
            }

        }
        
        fetchData()
        get().setMessage("")
    },

    handleMemberDetail : (e) => {
        // console.log(e.target.value)
        
        let idData = parseInt(e.target.value)
        // console.log(idData)
        
        get().setCurrentId(idData)
        // get().navigate(`/admin/peserta/${idData}/detail`)
        redirect(`/admin/peserta/${idData}/detail`)
        // redirect("/test")
    },

    showUser : (id) => {
        // console.log(parseInt(id.Id))
        let userId = parseInt(id.Id)

        if (get().fetchStatus && userId !== undefined) {
            // console.log(Cookies.get('token'))
            axios.get(`https://or-api.neotelemetri.com/api/admin/show_auser/${userId}`, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json", 
                    Authorization: `Bearer ${Cookies.get('token')}`,
                    "role": "admin"
                }
            })
            .then((res) => {
                // console.log(res.data.data)
                get().setLoading(false)
                get().setMemberDetail(res.data.data)
            })
            .catch((err) => {
                console.log(err)
                get().setValidation(err.res)
            })
        }

        get().setMemberDetail([])
    },

    handleValidationStatus : (event) => {
        event.preventDefault()
        
        const updateUserValidationStatus = get().data.map((user, index) => {
            
            if (user.id === parseInt(event.target.value)) {
                Swal.fire({
                    title: 'Apa anda yakin?',
                    // text: 'You won\'t be able to revert this!',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#301D54',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Ya',
                    cancelButtonText: 'Tidak',
                })
                .then((result) => {
                    if (result.isConfirmed) {
                        let validation_statusInt = parseInt(user.validation_status)

                        let status = !validation_statusInt ? 1 : 0
                        
                        get().setValidationStatus(status)
    
                        let validation_status = get().validationStatus
    
                        axios.post(`https://or-api.neotelemetri.com/api/admin/validation_status/${user.id}`,
                        {
                            validation_status
                        },
                        {
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json", 
                                Authorization: `Bearer ${Cookies.get('token')}`,
                                "role": "admin"
                            }
                        })
                        .then((res) => {
                            get().setFetchStatus(true)
                            Swal.fire({
                                title: 'Berhasil',
                                text: 'Anda berhasil mengedit data!',
                                icon: 'success',
                                showCancelButton: false,
                                confirmButtonColor: '#301D54',
                            });
                        })
                        .catch((err) => {
                            console.log(err)
                            Swal.fire({
                                title: 'Gagal',
                                text: 'Anda gagal mengedit data!',
                                icon: 'error',
                                showCancelButton: false,
                                confirmButtonColor: '#301D54',
                            });
                        })
                    }
                })
            }
            return user
        })
    },

    handleMemberStatus : (event) => {
        event.preventDefault()
        
        const updateUserMemberStatus = get().data.map((user, index) => {
            
            if (user.id === parseInt(event.target.value)) {
                // const confirmAction = window.confirm('Apa anda yakin?')
                Swal.fire({
                    title: 'Apa anda yakin?',
                    // text: 'You won\'t be able to revert this!',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#301D54',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Ya',
                    cancelButtonText: 'Tidak',
                })
                .then((result) => {
                    if (result.isConfirmed) {
                        let status_aktifInt = parseInt(user.status_aktif)

                        let status = !status_aktifInt ? 1 : 0
                        
                        get().setMemberStatus(status)
    
                        let status_aktif = get().memberStatus
    
                        axios.post(`https://or-api.neotelemetri.com/api/admin/status_aktif/${user.id}`,
                        {
                            status_aktif
                        },
                        {
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json", 
                                Authorization: `Bearer ${Cookies.get('token')}`,
                                "role": "admin"
                            }
                        })
                        .then((res) => {
                            get().setFetchStatus(true)
                            Swal.fire({
                                title: 'Berhasil',
                                text: 'Anda berhasil mengedit data!',
                                icon: 'success',
                                showCancelButton: false,
                                confirmButtonColor: '#301D54',
                            });
                        })
                        .catch((err) => {
                            console.log(err)
                            Swal.fire({
                                title: 'Gagal',
                                text: 'Anda gagal mengedit data!',
                                icon: 'error',
                                showCancelButton: false,
                                confirmButtonColor: '#301D54',
                            });
                        })
                    }

                })
            }
            return user
        })
    },

    handleKrsFile: (event) => {
        const krsFile = get().data.map((user, index) => {
            if (user.id === parseInt(event.target.value)) {
                let krsURL = user.krs.substring(user.krs.lastIndexOf('/') + 1)

                axios.get(`https://or-api.neotelemetri.com/api/profile/show_file/${krsURL}`, {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json", 
                        Authorization: `Bearer ${Cookies.get('token')}`,
                        "role": "admin"
                    },
                    responseType: "blob",
                })
                .then((res) => {
                    const imgURL = URL.createObjectURL(new Blob([res.data], { type: "image/jpeg" }));
                    // console.log(res)
                    get().setImageFile(imgURL);
                    window.open(get().imageFile);
                })
                .catch((err) => {
                    console.log(err)
                    get().setValidation(err.response)
                })
            }
            return user
        })
        get().setImageFile("")
    },

    handleInvoiceFile: (event) => {
        const invoiceFile = get().data.map((user, index) => {
            if (user.id === parseInt(event.target.value)) {
                let invoiceURL = user.bukti_pembayaran.substring(user.bukti_pembayaran.lastIndexOf('/') + 1)

                axios.get(`https://or-api.neotelemetri.com/api/profile/show_file/${invoiceURL}`, {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json", 
                        Authorization: `Bearer ${Cookies.get('token')}`,
                        "role": "admin"
                    },
                    responseType: "blob",
                })
                .then((res) => {
                    const blob = new Blob([res.data], { type: 'image/jpeg' }); 
                    const imgURL = URL.createObjectURL(blob);
                    // console.log(res)
                    get().setImageFile(imgURL);
                    window.open(get().imageFile);
                })
                .catch((err) => {
                    console.log(err)
                    get().setValidation(err.response)
                })
            }
            return user
        })
        get().setImageFile("")
    },

    handleMemberZona: (event) =>{
        const memberZona = get().data.map((user, index) => {
            if(user.id === parseInt((event.target.value).split(",")[0])){
                Swal.fire({
                    title: 'Apa anda yakin?',
                    // text: 'You won\'t be able to revert this!',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#301D54',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Ya',
                    cancelButtonText: 'Tidak',
                })
                .then((result) => {
                    if(result.isConfirmed){
                        const zona = (event.target.value).split(",")[1]
                        axios.post(`https://or-api.neotelemetri.com/api/admin/status_zona/${user.id}`, {
                            zona
                        },
                        {
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json", 
                                Authorization: `Bearer ${Cookies.get('token')}`,
                                "role": "admin"
                            }
                        })
                        .then((res) => {
                            get().setFetchStatus(true)
                            Swal.fire({
                                title: 'Berhasil',
                                text: 'Anda berhasil mengedit data!',
                                icon: 'success',
                                showCancelButton: false,
                                confirmButtonColor: '#301D54',
                            });
                        })
                        .catch((err) => {
                            console.log(err)
                            Swal.fire({
                                title: 'Gagal',
                                text: 'Anda gagal mengedit data!',
                                icon: 'error',
                                showCancelButton: false,
                                confirmButtonColor: '#301D54',
                            });
                        })
                    }
                })
            }
            return user
        })
    }
}))

export default useAdmin