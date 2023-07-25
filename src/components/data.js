
import React from "react";
import Auto from "./Autocomplete";
import DropFile from "./drag&drop";

const Data=()=>{

    // const data="hello"
    const options =  [
        { label: 'The Godfather', id: 1 },
        { label: 'Pulp Fiction', id: 2 },
      ]
return(
    <div>
        
    <Auto  options={options}></Auto>
    <DropFile></DropFile>
    </div>
)
    
}

export default Data 
