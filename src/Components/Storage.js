import React, {useState} from 'react'
import { db, storage } from "../Firebase";
const Storage = () => {

    const[image, setImage] = useState('')

    const handleFileUpload = (e) =>{

        setImage(e.target.files[0])

    }

    const buttonClick = () =>{

    }

    return (
        <div>
            Firebase Storage

            <input type="file" onChange={handleFileUpload} ></input>
            <button onClick={buttonClick} >Upload File</button>
            
        </div>
    )
}

export default Storage
