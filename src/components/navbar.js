import React from "react";
import { Link } from "react-router-dom";

const navbar= ()=>{
    return(
        <div>
            <li>
                <Link to ="/FormsFun">Form</Link>
            </li>
            <li>
                <Link to= "/TableData">Table</Link>
            </li>
        </div>
    )
}

export default navbar