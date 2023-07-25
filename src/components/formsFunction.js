// import { Card } from "@mui/material";
import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const FormFun = () => {
    const [EmpId, setEmpId] = useState('');
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [Mobile, setMobile] = useState('');
    const [Age, setAge] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [error, seterror] = useState(false);

// for( let i=0;i<= FirstName.length;i++){
    var totalData = [{
        "EmpId": EmpId,
        "FirstName": FirstName,
        "LastName": LastName,
        "Mobile": Mobile,
        "Age": Age,
        "Email":Email,
        "Password": Password
    }]

    
    // const data = totalData
// }
    const submitForm = (event) => {
        event.preventDefault();
        if (EmpId.length === 0 || FirstName.length === 0 || LastName.length === 0 || Mobile.length === 0 || Email.length === 0 || Password.length === 0) {
            seterror(true)
        }
        var data =[]
        // data.push(totalData)
    data = [...totalData,...data]
    console.log( totalData,data);
        // let data=[]
        // totalData.push(data)
        // console.log(data , totalData);
        localStorage.setItem("EmpId", JSON.stringify(totalData));
    }

    return (
        <div style={{ paddingTop: '50px' }} >
            {/* <Card > */}
            <form>
                {/* <input label="Name"></input> */}
                <div>
                    <TextField label="Employee ID" variant="outlined" value={EmpId} onChange={(e) => setEmpId(e.target.value)} />
                </div>
                {error && EmpId.length < 1 ?
                    <label style={{ color: 'red' }}>FirstName can not be empty</label> : ""}
                <br />
                <div>
                    <TextField label="FirstName" variant="outlined" value={FirstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                {error && FirstName.length < 1 ?
                    <label style={{ color: 'red' }}>FirstName can not be empty</label> : ""}
                <br />
                <div>
                    <TextField label="LastName" variant="outlined" value={LastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
                {error && LastName.length < 1 ?
                    <label style={{ color: 'red' }}>LastName can not be empty</label> : ""}<br />
                <div>
                    <TextField label="Mobile" variant="outlined" value={Mobile} onChange={(e) => setMobile(e.target.value)} />
                </div>
                {error && Mobile.length < 1 ?
                    <label style={{ color: 'red' }}>Mobile can not be empty</label> : ""}<br />
                <div>
                    <TextField label="Age" variant="outlined" value={Age} onChange={(e) => setAge(e.target.value)} />
                </div><br />
                <div>
                    <TextField label="Email" variant="outlined" value={Email} onChange={(e) => setEmail(e.target.value)} />
                </div>{error && Email.length < 1 ?
                    <label style={{ color: 'red' }}>Email can not be empty</label> : ""}
                <br />
                <div>
                    <TextField label="Password" variant="outlined" value={Password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                {error && Password.length < 1 ?
                    <label style={{ color: 'red' }}>Password can not be empty</label> : ""}<br />
                <div>
                    <Button variant="contained" type="submit" onClick={submitForm}>Submit</Button>
                </div>
            </form>
            {/* </Card> */}
        </div>
    )
}

export default FormFun