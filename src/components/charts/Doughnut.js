
import React from "react";
import 'chart.js/auto';
import { Doughnut } from "react-chartjs-2";


const Doughnutchart = () => {

    const data = {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
            {
                label: 'Sample Doughnut Chart',
                data: [50, 100, 500],
                backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
                borderWidth: 1,
            }
        ]
    }
    return (
        <div>
            <h1>Doughnut Chart</h1>
            <Doughnut style={{width:"50%" ,maxHeight:'80%'}} data={data}></Doughnut>
        </div>
    )
}

export default Doughnutchart