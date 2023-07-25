import { Alert, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Paper, Snackbar, Table, TableBody, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import axios from "axios";
import Button from '@mui/material/Button';
import React, { useEffect, useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import CircularProgress from '@mui/material/CircularProgress';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const Crud = () => {
  const [Employees, setEmployees] = useState([]);
  const [loadError, setloadError] = useState('');
  const [Mode, setMode] = useState('');
  const [open, setopen] = useState(false);
  const [formValues, setFormValues] = useState({
    id: "",
    name: "",
    username: "",
    email: "",
    phone: "",
  });
  const [SelectedEmployeesID, setSelectedEmployeesID] = useState(null);
  const [openSnackbar, setopenSnackbar] = useState(false);
  const [severityMessage, setseverityMessage] = useState('');
  const [severitySnackbar, setseveritySnackbar] = useState('');

  const url = "json-server --watch db.json --port 3030"
  useEffect(() => {
    axios.get(url)
      .then((res) => setEmployees(res.data))
      .catch((error) => {
        console.log(error);
        setloadError(error)
      })
  }, [])

  const handleClose = () => {
    setopen(false)
  }
  const handleOpen = () => {
    setopen(true)
    setMode('AddEmployee')
    setFormValues({ id: "", username: "", name: "", email: "", phone: "" });
  }
  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (Mode === "AddEmployee") {
      axios.post(url, formValues)
        .then((res) => {
          setEmployees((prevEmployees) => [...prevEmployees, res.data]);
          handleClose();
          setopenSnackbar(true)
          setseverityMessage('Form has been submitted successfully')
          setseveritySnackbar('success')
        })
        .catch((error) => {
          console.log(error);
          setopenSnackbar(true)
          setseverityMessage('Error in adding details')
          setseveritySnackbar('error')
        })
    } else if (Mode === "Edit Details") {
      axios.put(`${url}/${SelectedEmployeesID}`, formValues)
        .then(() => {
          setEmployees((prevEmployees) => prevEmployees.map((e) =>
            e.id === SelectedEmployeesID ? { ...formValues, id: e.id } : e
          ))
          handleClose();
          setopenSnackbar(true)
          setseverityMessage('updated successfully')
          setseveritySnackbar('success')
        })
        .catch((error) => {
          console.log(error);
          setopenSnackbar(true)
          setseverityMessage('Error in updating details')
          setseveritySnackbar('error')
        })
    }
  }

  const handleDelete = (id) => {
    axios.delete(`${url}/${id}`)
      .then(() => {
        setEmployees((prevEmployees) =>
          prevEmployees.filter((e) => e.id !== id))
        setopenSnackbar(true)
        setseverityMessage('Deleted successfully')
        setseveritySnackbar('success')
      })
      .catch((error) => {
        console.log(error);
        setopenSnackbar(true)
        setseverityMessage('Failed to Delete')
        setseveritySnackbar('error')
      })

  }

  const handleEdit = (id) => {
    setMode("Edit Details")
    setSelectedEmployeesID(id)
    const editEmployee = Employees.find((e) => e.id === id)
    setFormValues({
      id: editEmployee.id,
      name: editEmployee.name,
      username: editEmployee.username,
      email: editEmployee.email,
      phone: editEmployee.phone,
    });
    setopen(true)
  }
  return (
    <div>
      {loadError ?
        <div><CircularProgress /><br />
          <span>No data to load</span>
        </div> :
      <><TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">EmpID</StyledTableCell>
                <StyledTableCell align="left">Name</StyledTableCell>
                <StyledTableCell align="left">UserName</StyledTableCell>
                <StyledTableCell align="left">Email</StyledTableCell>
                <StyledTableCell align="left">Phone</StyledTableCell>
                <StyledTableCell align="left">Edit</StyledTableCell>
                <StyledTableCell align="left">Delete</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Employees.map((emp) => <StyledTableRow key={emp.id}>
                <StyledTableCell component="th" scope="row">{emp.id}</StyledTableCell>
                <StyledTableCell align="left">{emp.name}</StyledTableCell>
                <StyledTableCell align="left">{emp.username}</StyledTableCell>
                <StyledTableCell align="left">{emp.email}</StyledTableCell>
                <StyledTableCell align="left">{emp.phone}</StyledTableCell>
                <StyledTableCell align="left">
                  <IconButton style={{ color: 'rgb(42 188 196)' }} onClick={() => handleEdit(emp.id)}>
                    <EditIcon />
                  </IconButton>
                </StyledTableCell>
                <StyledTableCell align="left">
                  <IconButton onClick={() => handleDelete(emp.id)} style={{ color: '#d71717' }}>
                    <DeleteIcon />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>)}
            </TableBody>
          </Table>
        </TableContainer>
        <Button variant="contained" color="success" onClick={handleOpen} style={{ marginTop: '15px', color: "black", backgroundColor: 'rgb(42 188 196)', fontWeight: 'bold' }}><AddIcon />ADD</Button></>}
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>{Mode}</DialogTitle>
        <form onSubmit={handleFormSubmit}>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="EmpID"
              name="id"
              value={formValues.id}
              onChange={handleInputChange}
              fullWidth />
            <TextField
              autoFocus
              margin="dense"
              label="Name"
              name="name"
              value={formValues.name}
              onChange={handleInputChange}
              fullWidth />
            <TextField
              autoFocus
              margin="dense"
              label="UserName"
              name="username"
              value={formValues.username}
              onChange={handleInputChange}
              fullWidth />
            <TextField
              autoFocus
              margin="dense"
              label="Email"
              name="email"
              value={formValues.email}
              onChange={handleInputChange}
              fullWidth />
            <TextField
              autoFocus
              margin="dense"
              label="Phone"
              name="phone"
              value={formValues.phone}
              onChange={handleInputChange}
              fullWidth />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">Cancel</Button>
            <Button type="submit" color="primary">Submit</Button>
          </DialogActions>
        </form>
      </Dialog>
      <Snackbar open={openSnackbar}
        autoHideDuration={2000}
        onClose={() => setopenSnackbar(false)}>
        <Alert severity={severitySnackbar}>{severityMessage}</Alert>
      </Snackbar>
    </div>
  )
}

export default Crud