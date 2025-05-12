import React, { useState, useEffect } from 'react';
import tentService from '../services/tentService';

const TentManagement = () => {
  const [tents, setTents] = useState([]);

  useEffect(() => {
    tentService.getAllTents().then(response => setTents(response.data));
  }, []);

  return (
    <div>
      <h2>Manage Tents</h2>
      <ul>
        {tents.map(tent => (
          <li key={tent.id}>{tent.name} - ₹{tent.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default TentManagement;