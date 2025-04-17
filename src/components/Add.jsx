import React, { useState } from 'react';
import axios from 'axios';

const Add = () => {
  const [joke, setJoke] = useState('');

  const handleChange = (e) => {
    setJoke(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://inventory-management-system-u79a.onrender.com/api/joke', {
        joke,
      });
      alert('Joke added successfully!');
      setJoke(''); 
    } catch (error) {
      console.error('Error adding joke:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="joke"
          value={joke}
          placeholder="Enter your joke"
          onChange={handleChange}
          required
        />
        <button type="submit">Add Joke</button>
      </form>
    </div>
  );
};

export default Add;
