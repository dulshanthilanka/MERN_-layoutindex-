import React, { useState } from "react";
import './Form.css';
import axios from "axios";

function Update() {
  const [formData, setFormData] = useState({
    serial: '',
    name: '',
    address: '',
    phone: '',
    devices: '',
    type: '',
    status: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/update/${formData.serial}`, formData);
      console.log("Data updated successfully!");
      window.alert("Data updated successfully!");
    } catch (error) {
      console.error("Error updating data:", error);
      window.alert("Error updating data:", error.message);
    }
  };

  return (
    <div className="form_div">
      <form method="POST" className="form" onSubmit={handleUpdate}>
        <legend className="lg">
          <label htmlFor="serial">SERIAL NUMBER </label>
          <input type="text" id="serial" name="serial" className="serial" onChange={handleChange} />
        </legend>
        <br/>
        <legend className="lg">
          <label htmlFor="name">NAME </label>
          <input type="text" id="name" name="name" className="name" onChange={handleChange} />
        </legend>
        <br/>
        <legend className="lg">
          <label htmlFor="address">ADDRESS </label>
          <input type="text" id="address" name="address" className="address" onChange={handleChange} />
        </legend>
        <br/>
        <legend className="lg">
          <label htmlFor="phone">PHONE </label>
          <input type="text" id="phone" name="phone" className="phone" onChange={handleChange} />
        </legend>
        <br/>
        <legend className="lg">
          <label htmlFor="devices">DEVICES </label>
          <input type="text" id="devices" name="devices" className="devices" onChange={handleChange} />
        </legend>
        <br/>
        <legend className="lg">
          <label htmlFor="type">TYPE </label>
          <input type="text" id="type" name="type" className="type" onChange={handleChange} />
        </legend>
        <br/>
        <legend className="lg">
          <label htmlFor="status">STATUS </label>
          <input type="text" id="status" name="status" className="status" onChange={handleChange} />
        </legend>
        <br/>
        <legend className="lg">
          <input type="submit" value="UPDATE" className="btn"/>
        </legend>
      </form>
    </div>
  );
}

export default Update;
