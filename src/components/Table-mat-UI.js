import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(EmpId, FirstName, LastName, Mobile, Age, Email, Password) {
  
  return {EmpId, FirstName, LastName, Mobile, Age, Email, Password };
}

const data = localStorage.getItem("EmpId")
var finaldata  = []
// let total= JSON.parse(data)
// total.map((data)=>{
// finaldata=data
//   return finaldata
// });

const rows = [
  createData(finaldata.EmpId,finaldata.FirstName, finaldata.LastName,finaldata.Mobile,finaldata.Age,finaldata.Email,finaldata.Password),
  createData(5169, 'Gowthami', 'bala', 1234565, 24, 'gbala@gmail.com', 'T@run999'),
  createData(5167, 'Gowthami', 'bala', 1234565, 24, 'gbala@gmail.com', 'T@run999'),
  // createData(5166, 'Gowthami', 'bala', 1234565, 24, 'gbala@gmail.com', 'T@run999'),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table >
        <TableHead>
          <TableRow>
            <TableCell>Employee ID</TableCell>
            <TableCell >FirstName</TableCell>
            <TableCell>LastName</TableCell>
            <TableCell>Mobile</TableCell>
            <TableCell >Age</TableCell>
            <TableCell >Email</TableCell>
            <TableCell >Password</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.EmpId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell >{row.EmpId}</TableCell>
              <TableCell > {row.FirstName} </TableCell>
              <TableCell >{row.LastName}</TableCell>
              <TableCell >{row.Mobile}</TableCell>
              <TableCell >{row.Age}</TableCell>
              <TableCell >{row.Email}</TableCell>
              <TableCell >{row.Password}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}