import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CompnentOne() {
    const navigate = useNavigate();
    const [data, setdata] = useState([])
    const [getdata, setgetdata] = useState({})
    const [table, settable] = useState(false)
    const [showAll, setshowAll] = useState(false)
    const [filteredData, setfilteredData] = useState()
    const url = "https://jsonplaceholder.typicode.com/posts"
    //get api
    useEffect(() => {
        axios.get(url)
            .then((res) => {
                console.log(res);
                setdata(res.data)
            })
            .catch((error) => console.log(error))
    },[])
    //filtering data based on userId
    const handlefilterbutton = (e) => {
        console.log(e);
        const filter = []
        for (let i = 0; i < data.length; i++) {
            console.log(e.target.value,"bbbb");
            if (parseInt(e.target.value) === data[i].userId) {
                filter.push(data[i])
                setfilteredData(filter)
                settable(true)
                if (showAll === true) {
                    setshowAll(false)
                }
            }
        }
    }
    //removing duplicate userId to loop through - button
    const uniqueData = Array.from(new Set(data.map(item => item.userId))).map(Id => {
        return data.find(item => item.userId === Id);
    });
    //on input change
    const handlechange = (e) => {
        console.log(e);
        data.find((obj) => {
            if(obj.id == e.target.value){
                setgetdata(obj)
            }
        })
        // for (let i = 0; i < data.length; i++) {
        //     console.log(e.target.value,"...",data[i].id);
        //     if (parseInt(e.target.value) === data[i].id) {
        //         setgetdata(data[i])
        //     }
        // }
    }
    //navigating with data
    const handlenav = () => {
        console.log(getdata);
        navigate('/other', { state: { getdata } })
    }
    //get total data in table
    const handleall = () => {
        settable(true)
        setshowAll(true)
    }
    //table styling
    const borderstyle = {
        border: '2px solid black'
    }
    return (
        <> 
            <input type='text' onChange={handlechange}></input>
            <button type='submit' onClick={handlenav}>click</button><br /><br /><br />
            <button onClick={handleall}>Total DATA</button><br /><br /><br />
            {uniqueData.map((item, i) =>
                (<button key={i + 1} onClick={handlefilterbutton} value={i + 1}>{item.userId}</button>)
            )}
            <br /> <br />
            {table && <table style={{ border: '2px solid black', borderCollapse: 'collapse' }}>
                <thead>
                    <tr style={borderstyle}>
                        <th style={borderstyle}>UserID</th>
                        <th style={borderstyle}>Id</th>
                        <th style={borderstyle}>Title</th>
                        <th style={borderstyle}>Body</th>
                    </tr>
                </thead>
                {showAll === true ?
                    <tbody>
                        {data.map((item, i) =>
                            <tr style={borderstyle} key={i}>
                                <td style={borderstyle}>{item.userId}</td>
                                <td style={borderstyle}>{item.id}</td>
                                <td style={borderstyle}>{item.title}</td>
                                <td style={borderstyle}>{item.body}</td>
                            </tr>)}
                    </tbody> :
                    <tbody>
                        {filteredData.map((item, i) =>
                            <tr style={borderstyle} key={i}>
                                <td style={borderstyle}>{item.userId}</td>
                                <td style={borderstyle}>{item.id}</td>
                                <td style={borderstyle}>{item.title}</td>
                                <td style={borderstyle}>{item.body}</td>
                            </tr>)}
                    </tbody>}
            </table>
            }
        </>
    )
}

export default CompnentOne;
