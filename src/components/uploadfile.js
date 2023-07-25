import { Input } from "@mui/material";
import React, { useState } from "react";

const Upload=()=>{
    const [file,setfile]=useState()

    const handlechange =(e)=>{
        setfile(e.target.files[0])
        console.log(e.target.files[0]);
    }
    return(
        <div>
        <h3 align="left">File Upload</h3>
        <Input  type="file" name="file" onChange={handlechange}> </Input>
        </div>
    )
}

export default Upload