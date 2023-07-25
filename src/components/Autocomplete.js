import React from "react";
import { Autocomplete, TextField } from "@mui/material";
// const options = [
//     { label: 'The Godfather', id: 1 },
//     { label: 'Pulp Fiction', id: 2 },
//   ];


const Auto =(props)=>{
const {options}=props;

    return(
        <div>

        <Autocomplete 
        disablePortal
        id="combo-box-demo"
        options={options}
        sx={{ width: 300,m:5 }} renderInput={(params)=>
        <TextField {...params} label="select"></TextField>}>
        </Autocomplete>
        <Autocomplete 
        disablePortal
        id="combo-box-demo"
        options={options}
        sx={{ width: 300,m:5 }} renderInput={(params)=>
        <TextField {...params} label="select"></TextField>}>
        </Autocomplete>
        </div>
    )
}

export default Auto