import React, { useState } from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { TextField } from "@mui/material";
import TableBasic from "../table";
import '../forms/forms.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select'
const Formvalidate = () => {
    const [nav, setnav] = useState(false)
    const fromstyle = {
        marginTop: '50px',
    }
    const [formdata, setformdata] = useState({
        EmployeeID: '',
        EmployeeName: '',
        Email: '',
        gender: '',
        age:'',
        Password: '',
        confirmPassword: ''
    })
    const [errors, setErrors] = useState({});

    const handleInputchange = (event) => {
        // console.log(event);
        const { name, value } = event.target
        setformdata((prevFormData) => ({
            ...prevFormData, [name]: value
        }))
        setErrors({})
    }
    const handlesubmit = (e) => {
        e.preventDefault()
        const validateForm = (data) => {
            const errors = {};
            if (!data.EmployeeID) {
                errors.EmployeeID = "EmpID is required"
            }
            return errors;
        }
        const validationError = validateForm(formdata);
        console.log(Object.keys(validationError));
        if (Object.keys(validationError).length === 0) {
            // console.log(formdata);
            if (formdata.Password === formdata.confirmPassword) {
                setnav(true)
            }
        }
        else {
            setErrors(validationError)
        }
    }
    return (
        <>
            {nav === true ? 
            <TableBasic formdata={formdata} />
                 :
                <form onSubmit={handlesubmit} style={fromstyle}>
                    <div>
                        <TextField type="text" name="EmployeeID" onChange={handleInputchange} label="EMP ID" /><br />
                        {errors.EmployeeID && <span className='error'>{errors.EmployeeID}</span>}
                    </div><br />
                    <div>
                        <TextField type="text" name="EmployeeName" onChange={handleInputchange} label="EMP Name" /><br />
                    </div><br />
                    <div>
                        <TextField type="email" name="Email" onChange={handleInputchange} label="Email" /><br />
                    </div><br />
                    <div>
                        <FormControl>
                            <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group "
                            >
                                <FormControlLabel type="radio" value="female" name="gender" checked={formdata.gender === 'female'} control={<Radio />} label="Female" onChange={handleInputchange} />
                                <FormControlLabel type="radio" value="male" name="gender" checked={formdata.gender === 'male'} control={<Radio />} label="Male" onChange={handleInputchange} />
                                {/* <FormControlLabel
                                value="disabled"
                                disabled
                                control={<Radio />}
                                label="other"
                            /> */}
                            </RadioGroup>
                            </FormControl><br /><br />
                            <FormControl sx={{ minWidth: 230 }}>
                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={formdata.age}
                                label="Age"
                                onChange={handleInputchange}
                                name="age"
                            >
                                <MenuItem value="10" >Ten</MenuItem>
                                <MenuItem value="20" >Twenty</MenuItem>
                                <MenuItem value="30" >Thirty</MenuItem>
                            </Select>
                        </FormControl><br />
                    </div><br />
                    <div>
                        <TextField type="text" name="Password" onChange={handleInputchange} label="Password" /><br />
                    </div><br />
                    <div>
                        <TextField type="text" name="confirmPassword" onChange={handleInputchange} label="confirm password" /><br />
                    </div><br />
                    <button type="submit">Submit</button>
                </form>
             }
        </>
    )
}

export default Formvalidate