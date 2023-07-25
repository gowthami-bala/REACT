import React, { useEffect, useState } from "react";
import axios from "axios";
import './table.css'
const TableData = () => {

    const [data, setdata] = useState([])
    const API = "https://jsonplaceholder.typicode.com/users"

    useEffect(() => {
        refreshProjectList()
    }, [])

    function refreshProjectList() {
        axios.get(`${API}`)
            .then((res) => {
                let temp = res.data
                setdata(temp)
                console.log(res)
            })
            .catch((err) => console.log(err))
    }
    return (
        <div style={{width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'}}>
                {/* <h1 className="heading">Hello</h1> */}
            <table style={{border: '2px solid forestgreen', borderCollapse: 'collapse'}} >
                <thead >
                    <tr style={{ border: '1px solid black'}}>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone number</th>
                        <th>Website</th>
                    </tr>
                </thead>
                <tbody >
                    {data.map((project, i) => (
                        <tr key={i} style={{ border: '1px solid black'}}>
                            <td style={{ border: '1px solid black'}}> {project.id} </td>
                            <td style={{ border: '1px solid black'}}> {project.name} </td>
                            <td style={{ border: '1px solid black'}}>{project.username}</td>
                            <td style={{ border: '1px solid black'}}>{project.email}</td>
                            <td style={{ border: '1px solid black'}}>{project.phone}</td>
                            <td style={{ border: '1px solid black'}}>{project.website}</td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TableData