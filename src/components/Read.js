import React, { useState, useEffect } from "react";
import axios from "axios";

function Read() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/read");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Error fetching data. Please try again later.");
    }
  };

  if (error) {
    return <div className="form_div">Error: {error}</div>;
  }

  return (
    <div className="form_div" style={{ width: "600px", height: "600px", overflow: "auto" }}>
      <h2>DATABASE</h2>
      <table>
        <thead>
          <tr>
            <th>SERIAL</th>
            <th>NAME</th>
            <th>ADDRESS</th>
            <th>PHONE</th>
            <th>DEVICES</th>
            <th>TYPE</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item._id}>
              <td>{item.serial}</td>
              <td>{item.name}</td>
              <td>{item.address}</td>
              <td>{item.phone}</td>
              <td>{item.devices}</td>
              <td>{item.type}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Read;
