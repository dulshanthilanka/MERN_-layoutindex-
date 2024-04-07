import React from "react";
import './Form.css'
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="form_div">
      <table>
        <tr><Link to="/create"><input type="button" value="CREATE" className="btn"/></Link></tr>
        <br/>
        <tr><Link to="/read"><input type="button" value="READ" className="btn"/></Link></tr>
        <br/>
        <tr><Link to="/delete"><input type="button" value="DELETE" className="btn"/></Link></tr>
        <br/>
        <tr><Link to="/Update"><input type="button" value="UPDATE" className="btn"/></Link></tr>
      </table>
    </div>
  );
}

export default Home;
