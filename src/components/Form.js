import React, { useState } from "react";
import './Form.css';
import axios from "axios";

function Form() {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/create", formData);
      console.log("Data sent successfully!");
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  const alert = ()=> {
    window.alert("Data Store Successfuly")
  }

  return (
    <div className="form_div">
      <form method="POST" className="form" onSubmit={handleSubmit}>
        <legend className="lg">
          <label htmlFor="serial">SERIAL NUMBER </label>
          <input type="text" id="serial" name="serial" value={formData.serial} onChange={handleChange} />
        </legend>
        <br/>
        <legend className="lg">
          <label htmlFor="name">NAME </label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        </legend>
        <br />
        <legend className="lg">
          <label htmlFor="address">ADDRESS </label>
          <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} />
        </legend>
        <br />
        <legend className="lg">
          <label htmlFor="phone">PHONE </label>
          <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
        </legend>
        <br />
        <legend className="lg">
          <label htmlFor="devices">DEVICES </label>
          <input type="text" id="devices" name="devices" value={formData.devices} onChange={handleChange} />
        </legend>
        <br />
        <legend className="lg">
          <label htmlFor="type">TYPE </label>
          <input type="text" id="type" name="type" value={formData.type} onChange={handleChange} />
        </legend>
        <br/>
        <legend className="lg">
          <label htmlFor="status">STATUS </label>
          <input type="text" id="status" name="status" value={formData.status} onChange={handleChange} />
        </legend>
        <br/>
        <legend className="lg">
          <input type="submit" value="SUBMIT" className="btn" onClick={alert}/>
        </legend>
      </form>
    </div>
  );
}

export default Form;
