import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF"];

function DragDrop({ file, setFile, name, clas }) {
    const handleChange = (file) => {
        setFile(file);
    };
    return (
        <>
            <div className={`col-md-5 ${clas == ""? "" : clas}`} >
                <p className="fs-6 fw-bold">{name}</p>
                <div className="d-flex justify-content-center align-items-center" style={{ borderRadius: "10px",background: "#FBFBFB", aspectRatio: "2/1" }}>
                    <FileUploader handleChange={handleChange} name="file" types={fileTypes}>
                        {
                            file != null? <img src={URL.createObjectURL(file)} style={{ width: "200px" }} alt="" /> : 
                            <>
                                <i className="text-center d-block fs-1 bi bi-folder-plus"></i>
                                <p className="fs-6 text-mute">Upload hasil scan {name} kamu disini</p>
                            </>
                        }
                    </FileUploader>
                </div>
            </div>
        </>
    );
}

export default DragDrop;