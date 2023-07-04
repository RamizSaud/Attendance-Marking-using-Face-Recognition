import "./Attendance.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
function Attendance() {
  const location = useLocation();
  const { name } = location.state;

  const [df, setDf] = useState([]);

  useEffect(() => {
    const data = {
      fileName: name,
    };
    axios.post("/attendance", data).then((response) => {
      setDf(response.data);
    });
  }, [name]);

  return (
    <>
      <div className="attendance-container">
        <h1 className="heading">{name}</h1>
        <div className="table">
          <div className="row first">
            <span className="cell">Name</span>
            <span className="cell">Attendance</span>
          </div>
          {df.map((row) => (
            <div className="row">
              <span className="cell">{row.Name}</span>
              <span className="cell">{row.Attendance}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Attendance;
