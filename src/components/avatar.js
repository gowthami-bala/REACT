// import React from "react";
// import Avatar from '@mui/material/Avatar';
// import Stack from '@mui/material/Stack';
// const SampleAavatar =()=>{
   
// const ShowData=()=>{
//   console.log("hii");
// }
//     const stringAvatar=(name)=> {
//         return {
//           children: `${name.split(' ')[0][0]}`,
//         };
//       }
// return(
// <>
// <Stack direction="row" spacing={2} >
//           <Avatar sx={{ width: 24, height: 24 }} {...stringAvatar('Gowthami')} />
//         </Stack>
//         <button onClick={ShowData}>click</button>
// </>
     
// )
// }



import React, { useEffect, useState } from 'react';
import axios from "axios";

function SampleAavatar() {
    const [data, setData] = useState([]);
    const [addformdata, setformdata] = useState({
        first_name: '',
        last_name: '',
        email: ''
    })

    const handleaddformchange = (event) => {
        event.preventDefault();
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        const newformdata = { ...addformdata };
        newformdata[fieldName] = fieldValue
        setformdata(newformdata)
    }
    const addSubmit = (event) => {
        event.preventDefault();
        const newdata = {
            first_name: addformdata.first_name,
            last_name: addformdata.last_name,
            email: addformdata.email
        };
        const newdata1 = [...data, newdata]
        setData(newdata1);
    }

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
        console.log(res.data);
            setData(res.data);
        });
    }, []);

    return (
        <div>
            <h1>Get API Call</h1>
            <table border="2px" >
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.forEach(x => <tr>
                            <td>{x.first_name}</td>
                            <td>{x.last_name}</td>
                            <td>{x.email}</td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
            <form onSubmit={addSubmit}>
                <h1>Posting the data</h1>
                <label>First Name</label>
                <input type="text" name='first_name' onChange={handleaddformchange} /><br></br>
                <label>Last Name</label>
                <input type="text" name='last_name' onChange={handleaddformchange} /><br></br>
                <label>Email ID</label>
                <input type="text" name='email' onChange={handleaddformchange} /><br></br>
                <button type="submit"> Add</button>
            </form>
        </div>
    );
}

export default SampleAavatar