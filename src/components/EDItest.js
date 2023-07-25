import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";

const EdiTest = (props) => {
    const [supplier, setsupplier] = useState('');
    const [type, settype] = useState('');
    const handleChange = (event) => {
        setsupplier(event.target.value)
    }
    const handleChangeType = (event) => {
        settype(event.target.value)
    }
    return (
        <>
            <div style={{ display: "flex", justifyContent: "left" }}>
                <FormControl sx={{ m: 2, minWidth: 200 }} >
                    <InputLabel id="demo-simple-select-autowidth-label">Supplier</InputLabel>
                    <Select labelId="demo-simple-select-autowidth-label" id="demo-simple-select-autowidth"
                        value={supplier}
                        onChange={handleChange}
                        autoWidth
                        label="Supplier">
                        {props.supplier.map((option, index) => (
                            <MenuItem key={index} value={option}>
                                {option}
                            </MenuItem>))}
                        { /* <MenuItem value="00001212-jfbsjdbfjf">00001212-jfbsjdbfjf</MenuItem>
                         <MenuItem value="00001212-jfbsjdbfjf">00001212-jfbsjdbfjf</MenuItem> */}
                    </Select>
                </FormControl>
            </div>
            <div style={{ display: "flex", justifyContent: "left" }}>
                <FormControl sx={{ m: 2, minWidth: 200 }}>
                    <InputLabel id="demo-simple-select-autowidth-label">Transaction Type</InputLabel>
                    <Select labelId="demo-simple-select-autowidth-label" id="demo-simple-select-autowidth"
                        value={type}
                        onChange={handleChangeType}
                        autoWidth
                        label="Transaction Type">
                        <MenuItem value="856">856 - advanced shipment</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </>
    )
}

export default EdiTest