import React, { useState } from "react";
import './Form.css';
import axios from "axios";

function Delete() {
  const [formData, setFormData] = useState({
    serial: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(`http://localhost:5000/delete/${formData.serial}`);
      console.log("Data deleted successfully!");
      window.alert("Data deleted successfully!");
    } catch (error) {
      console.error("Error deleting data:", error);
      window.alert("Error deleting data:", error);
    }
  }

  return (
    <div className="form_div">
      <form method="POST" onSubmit={handleDelete}>
        <legend className="lg">
          <label htmlFor="serial">SERIAL NUMBER </label>
          <input 
            type="text" 
            id="serial" 
            className="serial"
            onChange={handleChange} 
          />
        </legend>
        <br/>
        <legend className="lg">
          <input type="submit" value="DELETE" className="btn" />
        </legend>
      </form>
    </div>
  );
}

export default Delete;
