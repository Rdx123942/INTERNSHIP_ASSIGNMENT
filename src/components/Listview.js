import React, { useState, useEffect } from 'react';
import './Listview.css'; 
const ListView = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://reqres.in/api/users?page=2');
        const jsonData = await response.json();
        setData(jsonData.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
    <h1>WEBAPP DEVELOPMENT</h1>
    <ul className="list-container">
      {data.map(user => (
        <li key={user.id} className="list-item">
          <img src={user.avatar} alt={user.email} className="avatar" />
          <div className="user-details">
            <h2 className="name">{user.first_name} {user.last_name}</h2>
            <p className="email">Email: {user.email}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
    
  );
  
};

export default ListView;
