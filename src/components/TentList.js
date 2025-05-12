import React, { useState, useEffect } from 'react';
import tentService from '../services/tentService';

const TentList = () => {
  const [tents, setTents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    tentService.getAllTents().then(response => {
      setTents(response.data);
      setLoading(false);
    }).catch((error) => {
      console.error("Error fetching tents:", error);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Available Tents</h2>
      <ul>
        {tents.map(tent => (
          <li key={tent.id}>{tent.name} - ₹{tent.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default TentList;