import React, {useState, useEffect} from 'react'
import axios from 'axios';

const Home = () => {

  
  const [data, setData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://inventory-management-system-u79a.onrender.com/api/joke');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  },[]);

  return (
    <div>
      <h1>API CAll</h1>
      {data && data.map((item, index) => (
        <div key={item.id}>
          <h2>{item.joke}</h2>
        </div>
      ))}
    </div>
  )
}

export default Home
