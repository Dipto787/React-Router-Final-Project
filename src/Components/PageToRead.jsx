import { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid,Tooltip,Legend } from 'recharts';
import { getStoredItems } from './ReadAdd';
const PageToRead = () => {
    let [chart, setChart] = useState([]);

    console.log(chart)
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
    useEffect(() => {
        let storedCharts = getStoredItems();
        setChart(storedCharts)

    }, [])
    return (
        <div className= ' max-w-7xl mx-auto px-8 p-5 mt-5'>

          <div className=' bg-base-200 p-8 rounded-xl'>
          <BarChart width={800}  height={500} data={chart}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="bookName" />
                <YAxis />
                <Tooltip /> 
                {chart.map((entry, index) => (
                    <Bar
                        key={entry.name}
                        dataKey="totalPages" 
                        fill={colors[index % colors.length]}  
                    />
                ))}
                <Cell></Cell>
            </BarChart>
          </div>



        </div>
    );
};

export default PageToRead;