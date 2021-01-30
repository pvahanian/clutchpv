import React from 'react'
import axios from "axios";
import upload from '../images/upload.svg'
import '../App.css';


function UploadImage() {
    let file = {}

    const  uploadSelectedHandler = event =>{
        file =(event.target.files[0])
        fileUploadHelper()
    }

    const fileUploadHelper = () => {
        const fd = new FormData()
        fd.append("image",file, file.name)
        console.log(file)
        axios.post("https://us-central1-clutch-f0902.cloudfunctions.net/api/user/image",fd)
        .then(res =>{
            console.log(res)
        })
    }

    return(
    
    <div className="image-upload">
        <label htmlFor="file-input">
        <img id="upload" src={upload} alt="upload logo"/>
        </label>
        <input id="file-input" type="file" onChange={uploadSelectedHandler} />
    </div>

    )
}

export default UploadImage
