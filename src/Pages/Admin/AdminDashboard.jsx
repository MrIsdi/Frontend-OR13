import React from 'react'
import styles from "../../Styles/styles.module.css"
import Sidebar from '../../Components/Sidebar'

function AdminDashboard() {
    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <Sidebar />
                <div className="col py-3 min-vh-100">
                    Content area...
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard
