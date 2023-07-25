import React from "react";
const TableBasic=(props)=>{
    const borderstyle ={
        border: '2px solid black'
    }
    console.log(props);
    return(
        <>
        <table style={{border: '2px solid black', borderCollapse: 'collapse'}}>
            <thead>
                <tr style={borderstyle}>
                    <th style={borderstyle}>EmployeeID</th>
                    <th style={borderstyle}>EmployeeName</th>
                    <th style={borderstyle}>Email</th>
                    <th style={borderstyle}>Gender</th>
                    <th style={borderstyle}>Age</th>
                    <th style={borderstyle}>Password</th>
                </tr>
            </thead>
            <tbody>
                <tr style={borderstyle}>
                    <td style={borderstyle}>{props.formdata.EmployeeID}</td>
                    <td style={borderstyle}>{props.formdata.EmployeeName}</td>
                    <td style={borderstyle}>{props.formdata.Email}</td>
                    <td style={borderstyle}>{props.formdata.gender}</td>
                    <td style={borderstyle}>{props.formdata.age}</td>
                    <td style={borderstyle}>{props.formdata.Password}</td>
                </tr>
            </tbody>
        </table>
        </>
    )
}

export default TableBasic